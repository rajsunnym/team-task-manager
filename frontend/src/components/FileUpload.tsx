import React, { useState } from 'react';

export default function FileUpload() {

    const [fileName, setFileName] =
        useState('');

    return (

        <div className="bg-white dark:bg-[#081225] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-xl">

            <div className="flex items-center justify-between mb-5">

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">

                    File Upload

                </h2>

                <span className="text-2xl">

                    📁

                </span>

            </div>

            <label className="flex flex-col items-center justify-center border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-2xl h-44 cursor-pointer hover:border-blue-500 transition-all duration-300">

                <input
                    type="file"
                    className="hidden"
                    onChange={(e) => {

                        const file =
                            e.target.files?.[0];

                        if (file) {

                            setFileName(file.name);

                        }

                    }}
                />

                <span className="text-4xl mb-3">

                    ⬆️

                </span>

                <p className="text-slate-600 dark:text-slate-300 font-medium">

                    Upload Files

                </p>

                {fileName && (

                    <p className="text-sm text-blue-500 mt-2">

                        {fileName}

                    </p>

                )}

            </label>

        </div>

    );
}