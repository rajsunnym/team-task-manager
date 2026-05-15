import React from 'react';

export default function CalendarWidget() {

    return (

        <div className="bg-white dark:bg-[#081225] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-xl">

            <div className="flex items-center justify-between mb-6">

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">

                    Calendar

                </h2>

                <span className="text-2xl">

                    📅

                </span>

            </div>

            <div className="grid grid-cols-7 gap-2 text-center text-sm">

                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (

                    <div
                        key={day}
                        className="text-slate-500 dark:text-slate-400 font-semibold"
                    >

                        {day}

                    </div>

                ))}

                {Array.from({ length: 31 }).map((_, index) => (

                    <div
                        key={index}
                        className={`py-2 rounded-xl cursor-pointer transition-all duration-300 ${index + 1 === 15
                                ? 'bg-blue-600 text-white'
                                : 'hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                            }`}
                    >

                        {index + 1}

                    </div>

                ))}

            </div>

        </div>

    );
}