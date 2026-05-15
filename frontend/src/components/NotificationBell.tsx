import React, {
    useEffect,
    useRef,
    useState
} from 'react';

import {
    Bell,
    CheckCircle2,
    AlertTriangle,
    FolderKanban,
    X
} from 'lucide-react';

interface Notification {

    id: number;

    title: string;

    message: string;

    time: string;

    type: 'success' | 'warning' | 'project';

    unread: boolean;
}

export default function NotificationBell() {

    const [open, setOpen] =
        useState(false);

    const dropdownRef =
        useRef<HTMLDivElement>(null);

    const [notifications, setNotifications] =
        useState<Notification[]>([

            {
                id: 1,
                title: 'Project Created',
                message: 'New WorkNova project added',
                time: '2 min ago',
                type: 'project',
                unread: true
            },

            {
                id: 2,
                title: 'Task Completed',
                message: 'Dashboard UI finished',
                time: '10 min ago',
                type: 'success',
                unread: true
            },

            {
                id: 3,
                title: 'Deadline Warning',
                message: 'Testing task due tomorrow',
                time: '1 hour ago',
                type: 'warning',
                unread: false
            }

        ]);

    const unreadCount =
        notifications.filter(
            (n) => n.unread
        ).length;

    useEffect(() => {

        const handleClickOutside = (
            event: MouseEvent
        ) => {

            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(
                    event.target as Node
                )
            ) {

                setOpen(false);

            }
        };

        document.addEventListener(
            'mousedown',
            handleClickOutside
        );

        return () => {

            document.removeEventListener(
                'mousedown',
                handleClickOutside
            );

        };

    }, []);

    const markAllRead = () => {

        setNotifications((prev) =>
            prev.map((n) => ({
                ...n,
                unread: false
            }))
        );
    };

    const removeNotification = (
        id: number
    ) => {

        setNotifications((prev) =>
            prev.filter((n) => n.id !== id)
        );
    };

    const getIcon = (
        type: string
    ) => {

        switch (type) {

            case 'success':

                return (
                    <CheckCircle2
                        className="text-green-500"
                        size={18}
                    />
                );

            case 'warning':

                return (
                    <AlertTriangle
                        className="text-yellow-500"
                        size={18}
                    />
                );

            default:

                return (
                    <FolderKanban
                        className="text-blue-500"
                        size={18}
                    />
                );
        }
    };

    return (

        <div
            className="relative"
            ref={dropdownRef}
        >

            {/* Bell Button */}
            <button
                onClick={() =>
                    setOpen(!open)
                }
                className="relative w-11 h-11 rounded-2xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-all duration-300 flex items-center justify-center"
            >

                <Bell
                    className="text-slate-700 dark:text-white"
                    size={20}
                />

                {/* Badge */}
                {unreadCount > 0 && (

                    <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center font-bold animate-pulse">

                        {unreadCount}

                    </span>

                )}

            </button>

            {/* Dropdown */}
            {open && (

                <div className="absolute right-0 mt-4 w-[360px] max-w-[95vw] bg-white dark:bg-[#081225] border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl z-50 overflow-hidden">

                    {/* Header */}
                    <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200 dark:border-slate-800">

                        <div>

                            <h2 className="font-bold text-lg text-slate-900 dark:text-white">

                                Notifications

                            </h2>

                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">

                                Real-time activity updates

                            </p>

                        </div>

                        <button
                            onClick={markAllRead}
                            className="text-sm text-blue-500 font-semibold hover:text-blue-600"
                        >

                            Mark all read

                        </button>

                    </div>

                    {/* Notifications */}
                    <div className="max-h-[420px] overflow-y-auto">

                        {notifications.map((n) => (

                            <div
                                key={n.id}
                                className={`group px-5 py-4 border-b border-slate-100 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all duration-300 ${n.unread
                                    ? 'bg-blue-50/50 dark:bg-blue-500/5'
                                    : ''
                                    }`}
                            >

                                <div className="flex items-start gap-3">

                                    {/* Icon */}
                                    <div className="mt-1">

                                        {getIcon(n.type)}

                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">

                                        <div className="flex items-center gap-2">

                                            <h3 className="font-semibold text-sm text-slate-900 dark:text-white truncate">

                                                {n.title}

                                            </h3>

                                            {n.unread && (

                                                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>

                                            )}

                                        </div>

                                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 leading-6">

                                            {n.message}

                                        </p>

                                        <p className="text-xs text-slate-400 mt-2">

                                            {n.time}

                                        </p>

                                    </div>

                                    {/* Remove */}
                                    <button
                                        onClick={() =>
                                            removeNotification(n.id)
                                        }
                                        className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-slate-400 hover:text-red-500"
                                    >

                                        <X size={16} />

                                    </button>

                                </div>

                            </div>

                        ))}

                    </div>

                    {/* Footer */}
                    <div className="p-4 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">

                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-2xl font-semibold transition-all duration-300">

                            View All Notifications

                        </button>

                    </div>

                </div>

            )}

        </div>

    );
}