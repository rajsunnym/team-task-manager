import React, { useState } from 'react';

import {
    DragDropContext,
    Droppable,
    Draggable
} from '@hello-pangea/dnd';

interface Task {

    id: string;

    title: string;

    priority: string;

    members: string[];
}

interface ColumnType {

    name: string;

    items: Task[];
}

export default function Board() {

    const [columns, setColumns] =
        useState<Record<string, ColumnType>>({

            todo: {

                name: 'To Do',

                items: [

                    {
                        id: '1',
                        title: 'Design Login UI',
                        priority: 'High',
                        members: ['S', 'A']
                    },

                    {
                        id: '2',
                        title: 'Setup Backend API',
                        priority: 'Medium',
                        members: ['R']
                    }

                ]
            },

            progress: {

                name: 'In Progress',

                items: [

                    {
                        id: '3',
                        title: 'Dashboard Charts',
                        priority: 'High',
                        members: ['K', 'P']
                    }

                ]
            },

            done: {

                name: 'Completed',

                items: [

                    {
                        id: '4',
                        title: 'Authentication System',
                        priority: 'Completed',
                        members: ['S']
                    }

                ]
            }

        });

    const onDragEnd = (result: any) => {

        if (!result.destination) return;

        const {

            source,
            destination

        } = result;

        if (
            source.droppableId !==
            destination.droppableId
        ) {

            const sourceColumn =
                columns[source.droppableId];

            const destColumn =
                columns[destination.droppableId];

            const sourceItems = [
                ...sourceColumn.items
            ];

            const destItems = [
                ...destColumn.items
            ];

            const [removed] =
                sourceItems.splice(
                    source.index,
                    1
                );

            destItems.splice(
                destination.index,
                0,
                removed
            );

            setColumns({

                ...columns,

                [source.droppableId]: {

                    ...sourceColumn,

                    items: sourceItems
                },

                [destination.droppableId]: {

                    ...destColumn,

                    items: destItems
                }

            });

        } else {

            const column =
                columns[source.droppableId];

            const copiedItems = [
                ...column.items
            ];

            const [removed] =
                copiedItems.splice(
                    source.index,
                    1
                );

            copiedItems.splice(
                destination.index,
                0,
                removed
            );

            setColumns({

                ...columns,

                [source.droppableId]: {

                    ...column,

                    items: copiedItems
                }

            });

        }
    };

    return (

        <div className="min-h-screen bg-[#020617] p-6 text-white">

            {/* Header */}
            <div className="mb-8">

                <h1 className="text-4xl font-extrabold">

                    Team Board 🚀

                </h1>

                <p className="text-slate-400 mt-2">

                    Drag and drop tasks between columns.

                </p>

            </div>

            <DragDropContext
                onDragEnd={onDragEnd}
            >

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {Object.entries(columns).map(
                        ([columnId, column]) => {

                            return (

                                <div
                                    key={columnId}
                                    className="bg-[#081225] rounded-3xl border border-slate-800 shadow-xl p-5"
                                >

                                    {/* Column Header */}
                                    <div className="flex items-center justify-between mb-5">

                                        <h2 className="text-xl font-bold">

                                            {column.name}

                                        </h2>

                                        <span className="bg-slate-800 text-sm px-3 py-1 rounded-xl text-slate-300">

                                            {column.items.length}

                                        </span>

                                    </div>

                                    <Droppable
                                        droppableId={columnId}
                                    >

                                        {(provided) => (

                                            <div
                                                {...provided.droppableProps}
                                                ref={provided.innerRef}
                                                className="space-y-4 min-h-[500px]"
                                            >

                                                {column.items.map(
                                                    (
                                                        item,
                                                        index
                                                    ) => (

                                                        <Draggable
                                                            key={item.id}
                                                            draggableId={item.id}
                                                            index={index}
                                                        >

                                                            {(provided) => (

                                                                <div
                                                                    ref={
                                                                        provided.innerRef
                                                                    }
                                                                    {...provided.draggableProps}
                                                                    {...provided.dragHandleProps}
                                                                    className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-blue-500 transition-all duration-300 cursor-grab active:cursor-grabbing"
                                                                >

                                                                    {/* Priority */}
                                                                    <div className="flex items-center justify-between mb-4">

                                                                        <span className={`text-xs px-3 py-1 rounded-full font-semibold ${item.priority === 'High'
                                                                            ? 'bg-red-500/20 text-red-400'
                                                                            : item.priority === 'Medium'
                                                                                ? 'bg-yellow-500/20 text-yellow-400'
                                                                                : 'bg-green-500/20 text-green-400'
                                                                            }`}>

                                                                            {item.priority}

                                                                        </span>

                                                                    </div>

                                                                    {/* Task */}
                                                                    <h3 className="font-semibold text-lg">

                                                                        {item.title}

                                                                    </h3>

                                                                    {/* Team Avatars */}
                                                                    <div className="flex items-center mt-5">

                                                                        {item.members.map(
                                                                            (
                                                                                member,
                                                                                i
                                                                            ) => (

                                                                                <div
                                                                                    key={i}
                                                                                    className="w-9 h-9 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-sm font-bold border-2 border-[#081225] -ml-2 first:ml-0"
                                                                                >

                                                                                    {member}

                                                                                </div>

                                                                            )
                                                                        )}

                                                                    </div>

                                                                </div>

                                                            )}

                                                        </Draggable>

                                                    )
                                                )}

                                                {provided.placeholder}

                                            </div>

                                        )}

                                    </Droppable>

                                </div>

                            );

                        }
                    )}

                </div>

            </DragDropContext>

        </div>

    );
}