<template>
    <div>
        <div
            class="bg-white dark:bg-gray-800 p-4 rounded-2xl border border-gray-100 dark:border-gray-700 flex flex-wrap justify-between items-center gap-4 shadow-sm mb-6">

            <div class="flex items-center gap-4 grow">
                <div class="relative grow max-w-md">
                    <input type="text" id="locationSearch" placeholder="Search area, cause, or type..."
                        class="w-full bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-2.5 pl-10 pr-4 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <span class="material-icons text-gray-400 text-sm">search</span>
                    </div>
                </div>

                <div class="relative">
                    <button id="feederFilterBtn"
                        class="px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-sm text-gray-700 dark:text-gray-300 font-medium flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-600 transition">
                        <span class="material-icons text-sm">filter_alt</span> Filter Feeder
                    </button>
                    <div id="feederPopup"
                        class="absolute left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-600 z-50 hidden p-3">
                        <div id="feederButtonContainer" class="grid grid-cols-3 gap-2"><button
                                class="feeder-toggle px-3 py-2 text-xs font-bold rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-gray-600 hover:text-blue-600 transition border border-gray-200 dark:border-gray-600">F-1</button><button
                                class="feeder-toggle px-3 py-2 text-xs font-bold rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-gray-600 hover:text-blue-600 transition border border-gray-200 dark:border-gray-600">F-2</button><button
                                class="feeder-toggle px-3 py-2 text-xs font-bold rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-gray-600 hover:text-blue-600 transition border border-gray-200 dark:border-gray-600">F-3</button><button
                                class="feeder-toggle px-3 py-2 text-xs font-bold rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-gray-600 hover:text-blue-600 transition border border-gray-200 dark:border-gray-600">F-4</button><button
                                class="feeder-toggle px-3 py-2 text-xs font-bold rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-gray-600 hover:text-blue-600 transition border border-gray-200 dark:border-gray-600">F-5</button><button
                                class="feeder-toggle px-3 py-2 text-xs font-bold rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-gray-600 hover:text-blue-600 transition border border-gray-200 dark:border-gray-600">F-6</button><button
                                class="feeder-toggle px-3 py-2 text-xs font-bold rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-gray-600 hover:text-blue-600 transition border border-gray-200 dark:border-gray-600">F-7</button><button
                                class="feeder-toggle px-3 py-2 text-xs font-bold rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-gray-600 hover:text-blue-600 transition border border-gray-200 dark:border-gray-600">F-8</button><button
                                class="feeder-toggle px-3 py-2 text-xs font-bold rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-gray-600 hover:text-blue-600 transition border border-gray-200 dark:border-gray-600">F-9</button><button
                                class="feeder-toggle px-3 py-2 text-xs font-bold rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-gray-600 hover:text-blue-600 transition border border-gray-200 dark:border-gray-600">F-10</button><button
                                class="feeder-toggle px-3 py-2 text-xs font-bold rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-gray-600 hover:text-blue-600 transition border border-gray-200 dark:border-gray-600">F-11</button><button
                                class="feeder-toggle px-3 py-2 text-xs font-bold rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-gray-600 hover:text-blue-600 transition border border-gray-200 dark:border-gray-600">F-12</button><button
                                class="feeder-toggle px-3 py-2 text-xs font-bold rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-gray-600 hover:text-blue-600 transition border border-gray-200 dark:border-gray-600">F-13</button><button
                                class="feeder-toggle px-3 py-2 text-xs font-bold rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-gray-600 hover:text-blue-600 transition border border-gray-200 dark:border-gray-600">F-14</button>
                        </div>
                        <div class="flex justify-between items-center mt-2 px-1">
                            <span id="feederClearAll"
                                class="text-red-500 text-xs cursor-pointer hover:underline font-bold">Clear</span>
                            <span id="feederSelectAll"
                                class="text-blue-600 text-xs cursor-pointer hover:underline font-bold">Select All</span>
                        </div>
                    </div>
                </div>
            </div>

            <select id="statusFilter"
                class="appearance-none bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-2.5 pl-4 pr-10 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 transition cursor-pointer">
                <option value="all">All Statuses</option>
                <option value="Reported">Reported</option>
                <option value="Ongoing">Ongoing</option>
                <option value="Completed">Completed</option>
            </select>

        </div>
        <div id="layoutWrapper" class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-0">
            <div id="outagesContainer" class="lg:col-span-8 space-y-6">
                <div id="report-58"
                    class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow cursor-pointer outage-card-trigger"
                    data-id="58">

                    <div class="p-5 pb-2 flex justify-between items-start">
                        <div class="flex items-start gap-3">
                            <div
                                class="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 mt-1">
                                <span class="material-icons text-xl">check_circle</span>
                            </div>
                            <div>
                                <h3 class="leading-tight">
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Outage Restored</span>
                                    <span class="text-gray-400 font-normal mx-1 text-sm">at</span>
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Pacdal</span>
                                </h3>
                                <div class="flex items-center gap-2 mt-1">
                                    <span
                                        class="text-xs font-bold uppercase tracking-wide text-green-600">Completed</span>
                                    <span class="text-gray-300">•</span>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">
                                        Tue, Jan 13, 11:47 AM
                                        <span class="text-xs italic text-gray-400 ml-1">(edited)</span>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div class="text-right pl-4">
                            <span
                                class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">FEEDER</span>
                            <span class="text-3xl font-black text-gray-300 dark:text-gray-600 leading-none">011</span>
                        </div>
                    </div>

                    <div class="px-5 pb-2">
                        <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-2">BENECO POWER SERVICE
                            ADVISORY
                            Outage Restored

                            STATUS: Isolated for further patrol

                            Please consider all lines energized at all times. Power may be restored anytime. Thank you
                            for your patience and usual cooperation. </p>

                        <div
                            class="w-full mt-4 bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 relative group-image cursor-pointer view-image-trigger">
                            <img src="https://ziuteulziywsangbnkgn.supabase.co/storage/v1/object/public/announcements_images/public/1764096615166-UnscheduledBanner.jpg"
                                class="w-full h-auto max-h-125 object-contain bg-gray-50 dark:bg-gray-800">

                        </div>

                    </div>

                    <div class="px-5 py-3 bg-gray-50 dark:bg-gray-900/30 border-t dark:border-gray-700 flex gap-3 mt-2">
                        <button
                            class="flex-1 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-sm font-bold hover:bg-gray-50 transition outage-card-trigger"
                            data-id="58">
                            View Details
                        </button>
                        <button
                            class="flex-1 py-2 rounded-lg bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition update-btn"
                            data-id="58">
                            Manage
                        </button>
                    </div>
                </div>

                <div id="report-45"
                    class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow cursor-pointer outage-card-trigger"
                    data-id="45">

                    <div class="p-5 pb-2 flex justify-between items-start">
                        <div class="flex items-start gap-3">
                            <div
                                class="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 mt-1">
                                <span class="material-icons text-xl">check_circle</span>
                            </div>
                            <div>
                                <h3 class="leading-tight">
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Unknown Cause </span>
                                    <span class="text-gray-400 font-normal mx-1 text-sm">at</span>
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Bakakeng North</span>
                                </h3>
                                <div class="flex items-center gap-2 mt-1">
                                    <span
                                        class="text-xs font-bold uppercase tracking-wide text-green-600">Completed</span>
                                    <span class="text-gray-300">•</span>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">
                                        Tue, Jan 13, 11:47 AM
                                        <span class="text-xs italic text-gray-400 ml-1">(edited)</span>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div class="text-right pl-4">
                            <span
                                class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">FEEDER</span>
                            <span class="text-3xl font-black text-gray-300 dark:text-gray-600 leading-none">012</span>
                        </div>
                    </div>

                    <div class="px-5 pb-2">
                        <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-2">Outage Restored</p>

                        <div
                            class="w-full mt-4 bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 relative group-image cursor-pointer view-image-trigger">
                            <img src="https://ziuteulziywsangbnkgn.supabase.co/storage/v1/object/public/announcements_images/1763052545080-574570604_892776756430086_2054707673346808449_n.jpg"
                                class="w-full h-auto max-h-125 object-contain bg-gray-50 dark:bg-gray-800">

                        </div>

                    </div>

                    <div class="px-5 py-3 bg-gray-50 dark:bg-gray-900/30 border-t dark:border-gray-700 flex gap-3 mt-2">
                        <button
                            class="flex-1 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-sm font-bold hover:bg-gray-50 transition outage-card-trigger"
                            data-id="45">
                            View Details
                        </button>
                        <button
                            class="flex-1 py-2 rounded-lg bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition update-btn"
                            data-id="45">
                            Manage
                        </button>
                    </div>
                </div>

                <div id="report-47"
                    class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow cursor-pointer outage-card-trigger"
                    data-id="47">

                    <div class="p-5 pb-2 flex justify-between items-start">
                        <div class="flex items-start gap-3">
                            <div
                                class="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 mt-1">
                                <span class="material-icons text-xl">check_circle</span>
                            </div>
                            <div>
                                <h3 class="leading-tight">
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Unknown Cause </span>
                                    <span class="text-gray-400 font-normal mx-1 text-sm">at</span>
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Camp 7</span>
                                </h3>
                                <div class="flex items-center gap-2 mt-1">
                                    <span
                                        class="text-xs font-bold uppercase tracking-wide text-green-600">Completed</span>
                                    <span class="text-gray-300">•</span>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">
                                        Tue, Jan 13, 11:46 AM
                                        <span class="text-xs italic text-gray-400 ml-1">(edited)</span>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div class="text-right pl-4">
                            <span
                                class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">FEEDER</span>
                            <span class="text-3xl font-black text-gray-300 dark:text-gray-600 leading-none">012</span>
                        </div>
                    </div>

                    <div class="px-5 pb-2">
                        <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-2">Ongoing Inspection</p>

                        <div
                            class="w-full mt-4 bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 relative group-image cursor-pointer view-image-trigger">
                            <img src="https://ziuteulziywsangbnkgn.supabase.co/storage/v1/object/public/announcements_images/1763053041937-574570604_892776756430086_2054707673346808449_n.jpg"
                                class="w-full h-auto max-h-125 object-contain bg-gray-50 dark:bg-gray-800">

                        </div>

                    </div>

                    <div class="px-5 py-3 bg-gray-50 dark:bg-gray-900/30 border-t dark:border-gray-700 flex gap-3 mt-2">
                        <button
                            class="flex-1 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-sm font-bold hover:bg-gray-50 transition outage-card-trigger"
                            data-id="47">
                            View Details
                        </button>
                        <button
                            class="flex-1 py-2 rounded-lg bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition update-btn"
                            data-id="47">
                            Manage
                        </button>
                    </div>
                </div>

                <div id="report-44"
                    class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow cursor-pointer outage-card-trigger"
                    data-id="44">

                    <div class="p-5 pb-2 flex justify-between items-start">
                        <div class="flex items-start gap-3">
                            <div
                                class="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 mt-1">
                                <span class="material-icons text-xl">check_circle</span>
                            </div>
                            <div>
                                <h3 class="leading-tight">
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Vehicular Incident
                                        Damaged Post</span>
                                    <span class="text-gray-400 font-normal mx-1 text-sm">at</span>
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Camp 8</span>
                                </h3>
                                <div class="flex items-center gap-2 mt-1">
                                    <span
                                        class="text-xs font-bold uppercase tracking-wide text-green-600">Completed</span>
                                    <span class="text-gray-300">•</span>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">
                                        Tue, Jan 13, 11:45 AM
                                        <span class="text-xs italic text-gray-400 ml-1">(edited)</span>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div class="text-right pl-4">
                            <span
                                class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">FEEDER</span>
                            <span class="text-3xl font-black text-gray-300 dark:text-gray-600 leading-none">012</span>
                        </div>
                    </div>

                    <div class="px-5 pb-2">
                        <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-2">BENECO POWER SERVICE
                            ADVISORY
                            Unscheduled Power Interruption

                            STATUS: Ongoing repair.

                            Please consider all lines energized at all times. Power may be restored anytime. Thank you
                            for your patience and usual cooperation.</p>

                        <div
                            class="w-full mt-4 bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 relative group-image cursor-pointer view-image-trigger">
                            <img src="https://ziuteulziywsangbnkgn.supabase.co/storage/v1/object/public/announcements_images/public/1762942332418-574570604_892776756430086_2054707673346808449_n.jpg"
                                class="w-full h-auto max-h-125 object-contain bg-gray-50 dark:bg-gray-800">
                            <div
                                class="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-lg font-bold backdrop-blur-sm pointer-events-none">
                                +1 photos
                            </div>
                        </div>

                    </div>

                    <div class="px-5 py-3 bg-gray-50 dark:bg-gray-900/30 border-t dark:border-gray-700 flex gap-3 mt-2">
                        <button
                            class="flex-1 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-sm font-bold hover:bg-gray-50 transition outage-card-trigger"
                            data-id="44">
                            View Details
                        </button>
                        <button
                            class="flex-1 py-2 rounded-lg bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition update-btn"
                            data-id="44">
                            Manage
                        </button>
                    </div>
                </div>

                <div id="report-46"
                    class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow cursor-pointer outage-card-trigger"
                    data-id="46">

                    <div class="p-5 pb-2 flex justify-between items-start">
                        <div class="flex items-start gap-3">
                            <div
                                class="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 mt-1">
                                <span class="material-icons text-xl">check_circle</span>
                            </div>
                            <div>
                                <h3 class="leading-tight">
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Feeder Repair</span>
                                    <span class="text-gray-400 font-normal mx-1 text-sm">at</span>
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Camp 7</span>
                                </h3>
                                <div class="flex items-center gap-2 mt-1">
                                    <span
                                        class="text-xs font-bold uppercase tracking-wide text-green-600">Completed</span>
                                    <span class="text-gray-300">•</span>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">
                                        Tue, Jan 13, 11:43 AM
                                        <span class="text-xs italic text-gray-400 ml-1">(edited)</span>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div class="text-right pl-4">
                            <span
                                class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">FEEDER</span>
                            <span class="text-3xl font-black text-gray-300 dark:text-gray-600 leading-none">012</span>
                        </div>
                    </div>

                    <div class="px-5 pb-2">
                        <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-2">Repair</p>

                        <div
                            class="w-full mt-4 bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 relative group-image cursor-pointer view-image-trigger">
                            <img src="https://ziuteulziywsangbnkgn.supabase.co/storage/v1/object/public/announcements_images/1763052778417-574570604_892776756430086_2054707673346808449_n.jpg"
                                class="w-full h-auto max-h-125 object-contain bg-gray-50 dark:bg-gray-800">
                            <div
                                class="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-lg font-bold backdrop-blur-sm pointer-events-none">
                                +1 photos
                            </div>
                        </div>

                    </div>

                    <div class="px-5 py-3 bg-gray-50 dark:bg-gray-900/30 border-t dark:border-gray-700 flex gap-3 mt-2">
                        <button
                            class="flex-1 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-sm font-bold hover:bg-gray-50 transition outage-card-trigger"
                            data-id="46">
                            View Details
                        </button>
                        <button
                            class="flex-1 py-2 rounded-lg bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition update-btn"
                            data-id="46">
                            Manage
                        </button>
                    </div>
                </div>

                <div id="report-50"
                    class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow cursor-pointer outage-card-trigger"
                    data-id="50">

                    <div class="p-5 pb-2 flex justify-between items-start">
                        <div class="flex items-start gap-3">
                            <div
                                class="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 mt-1">
                                <span class="material-icons text-xl">check_circle</span>
                            </div>
                            <div>
                                <h3 class="leading-tight">
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Damaged Line </span>
                                    <span class="text-gray-400 font-normal mx-1 text-sm">at</span>
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Camp 7</span>
                                </h3>
                                <div class="flex items-center gap-2 mt-1">
                                    <span
                                        class="text-xs font-bold uppercase tracking-wide text-green-600">Completed</span>
                                    <span class="text-gray-300">•</span>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">
                                        Tue, Jan 13, 11:43 AM
                                        <span class="text-xs italic text-gray-400 ml-1">(edited)</span>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div class="text-right pl-4">
                            <span
                                class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">FEEDER</span>
                            <span class="text-3xl font-black text-gray-300 dark:text-gray-600 leading-none">012</span>
                        </div>
                    </div>

                    <div class="px-5 pb-2">
                        <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-2">Ongoing!</p>

                        <div
                            class="w-full mt-4 bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 relative group-image cursor-pointer view-image-trigger">
                            <img src="https://ziuteulziywsangbnkgn.supabase.co/storage/v1/object/public/announcements_images/public/1763115277997-574570604_892776756430086_2054707673346808449_n.jpg"
                                class="w-full h-auto max-h-125 object-contain bg-gray-50 dark:bg-gray-800">

                        </div>

                    </div>

                    <div class="px-5 py-3 bg-gray-50 dark:bg-gray-900/30 border-t dark:border-gray-700 flex gap-3 mt-2">
                        <button
                            class="flex-1 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-sm font-bold hover:bg-gray-50 transition outage-card-trigger"
                            data-id="50">
                            View Details
                        </button>
                        <button
                            class="flex-1 py-2 rounded-lg bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition update-btn"
                            data-id="50">
                            Manage
                        </button>
                    </div>
                </div>

                <div id="report-48"
                    class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow cursor-pointer outage-card-trigger"
                    data-id="48">

                    <div class="p-5 pb-2 flex justify-between items-start">
                        <div class="flex items-start gap-3">
                            <div
                                class="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 mt-1">
                                <span class="material-icons text-xl">check_circle</span>
                            </div>
                            <div>
                                <h3 class="leading-tight">
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Unknown Cause </span>
                                    <span class="text-gray-400 font-normal mx-1 text-sm">at</span>
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Bakakeng North</span>
                                </h3>
                                <div class="flex items-center gap-2 mt-1">
                                    <span
                                        class="text-xs font-bold uppercase tracking-wide text-green-600">Completed</span>
                                    <span class="text-gray-300">•</span>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">
                                        Tue, Jan 13, 11:43 AM
                                        <span class="text-xs italic text-gray-400 ml-1">(edited)</span>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div class="text-right pl-4">
                            <span
                                class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">FEEDER</span>
                            <span class="text-3xl font-black text-gray-300 dark:text-gray-600 leading-none">012</span>
                        </div>
                    </div>

                    <div class="px-5 pb-2">
                        <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-2">Ongoing</p>

                        <div
                            class="w-full mt-4 bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 relative group-image cursor-pointer view-image-trigger">
                            <img src="https://ziuteulziywsangbnkgn.supabase.co/storage/v1/object/public/announcements_images/public/1763053831562-574570604_892776756430086_2054707673346808449_n.jpg"
                                class="w-full h-auto max-h-125 object-contain bg-gray-50 dark:bg-gray-800">

                        </div>

                    </div>

                    <div class="px-5 py-3 bg-gray-50 dark:bg-gray-900/30 border-t dark:border-gray-700 flex gap-3 mt-2">
                        <button
                            class="flex-1 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-sm font-bold hover:bg-gray-50 transition outage-card-trigger"
                            data-id="48">
                            View Details
                        </button>
                        <button
                            class="flex-1 py-2 rounded-lg bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition update-btn"
                            data-id="48">
                            Manage
                        </button>
                    </div>
                </div>

                <div id="report-70"
                    class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow cursor-pointer outage-card-trigger"
                    data-id="70">

                    <div class="p-5 pb-2 flex justify-between items-start">
                        <div class="flex items-start gap-3">
                            <div
                                class="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 mt-1">
                                <span class="material-icons text-xl">check_circle</span>
                            </div>
                            <div>
                                <h3 class="leading-tight">
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">no power</span>
                                    <span class="text-gray-400 font-normal mx-1 text-sm">at</span>
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Unknown Area</span>
                                </h3>
                                <div class="flex items-center gap-2 mt-1">
                                    <span
                                        class="text-xs font-bold uppercase tracking-wide text-green-600">Completed</span>
                                    <span class="text-gray-300">•</span>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">
                                        Tue, Jan 13, 11:42 AM
                                        <span class="text-xs italic text-gray-400 ml-1">(edited)</span>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div class="text-right pl-4">
                            <span
                                class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">FEEDER</span>
                            <span class="text-3xl font-black text-gray-300 dark:text-gray-600 leading-none">012</span>
                        </div>
                    </div>

                    <div class="px-5 pb-2">


                    </div>

                    <div class="px-5 py-3 bg-gray-50 dark:bg-gray-900/30 border-t dark:border-gray-700 flex gap-3 mt-2">
                        <button
                            class="flex-1 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-sm font-bold hover:bg-gray-50 transition outage-card-trigger"
                            data-id="70">
                            View Details
                        </button>
                        <button
                            class="flex-1 py-2 rounded-lg bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition update-btn"
                            data-id="70">
                            Manage
                        </button>
                    </div>
                </div>

                <div id="report-51"
                    class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow cursor-pointer outage-card-trigger"
                    data-id="51">

                    <div class="p-5 pb-2 flex justify-between items-start">
                        <div class="flex items-start gap-3">
                            <div
                                class="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 mt-1">
                                <span class="material-icons text-xl">check_circle</span>
                            </div>
                            <div>
                                <h3 class="leading-tight">
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Outage</span>
                                    <span class="text-gray-400 font-normal mx-1 text-sm">at</span>
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Unknown Area</span>
                                </h3>
                                <div class="flex items-center gap-2 mt-1">
                                    <span
                                        class="text-xs font-bold uppercase tracking-wide text-green-600">Completed</span>
                                    <span class="text-gray-300">•</span>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">
                                        Tue, Jan 13, 11:42 AM
                                        <span class="text-xs italic text-gray-400 ml-1">(edited)</span>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div class="text-right pl-4">
                            <span
                                class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">FEEDER</span>
                            <span class="text-3xl font-black text-gray-300 dark:text-gray-600 leading-none">011</span>
                        </div>
                    </div>

                    <div class="px-5 pb-2">
                        <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-2">OngoinG restoration</p>

                        <div
                            class="w-full mt-4 bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 relative group-image cursor-pointer view-image-trigger">
                            <img src="https://ziuteulziywsangbnkgn.supabase.co/storage/v1/object/public/announcement_images/public/1763901388675-574570604_892776756430086_2054707673346808449_n.jpg"
                                class="w-full h-auto max-h-125 object-contain bg-gray-50 dark:bg-gray-800">

                        </div>

                    </div>

                    <div class="px-5 py-3 bg-gray-50 dark:bg-gray-900/30 border-t dark:border-gray-700 flex gap-3 mt-2">
                        <button
                            class="flex-1 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-sm font-bold hover:bg-gray-50 transition outage-card-trigger"
                            data-id="51">
                            View Details
                        </button>
                        <button
                            class="flex-1 py-2 rounded-lg bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition update-btn"
                            data-id="51">
                            Manage
                        </button>
                    </div>
                </div>

                <div id="report-52"
                    class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow cursor-pointer outage-card-trigger"
                    data-id="52">

                    <div class="p-5 pb-2 flex justify-between items-start">
                        <div class="flex items-start gap-3">
                            <div
                                class="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 mt-1">
                                <span class="material-icons text-xl">check_circle</span>
                            </div>
                            <div>
                                <h3 class="leading-tight">
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Ongoing
                                        restoration</span>
                                    <span class="text-gray-400 font-normal mx-1 text-sm">at</span>
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Camp 7</span>
                                </h3>
                                <div class="flex items-center gap-2 mt-1">
                                    <span
                                        class="text-xs font-bold uppercase tracking-wide text-green-600">Completed</span>
                                    <span class="text-gray-300">•</span>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">
                                        Tue, Jan 13, 11:42 AM
                                        <span class="text-xs italic text-gray-400 ml-1">(edited)</span>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div class="text-right pl-4">
                            <span
                                class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">FEEDER</span>
                            <span class="text-3xl font-black text-gray-300 dark:text-gray-600 leading-none">011</span>
                        </div>
                    </div>

                    <div class="px-5 pb-2">
                        <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-2">TEST TEST</p>

                        <div
                            class="w-full mt-4 bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 relative group-image cursor-pointer view-image-trigger">
                            <img src="https://ziuteulziywsangbnkgn.supabase.co/storage/v1/object/public/announcement_images/public/1763901294230-574570604_892776756430086_2054707673346808449_n.jpg"
                                class="w-full h-auto max-h-125 object-contain bg-gray-50 dark:bg-gray-800">

                        </div>

                    </div>

                    <div class="px-5 py-3 bg-gray-50 dark:bg-gray-900/30 border-t dark:border-gray-700 flex gap-3 mt-2">
                        <button
                            class="flex-1 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-sm font-bold hover:bg-gray-50 transition outage-card-trigger"
                            data-id="52">
                            View Details
                        </button>
                        <button
                            class="flex-1 py-2 rounded-lg bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition update-btn"
                            data-id="52">
                            Manage
                        </button>
                    </div>
                </div>

                <div id="report-57"
                    class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow cursor-pointer outage-card-trigger"
                    data-id="57">

                    <div class="p-5 pb-2 flex justify-between items-start">
                        <div class="flex items-start gap-3">
                            <div
                                class="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 mt-1">
                                <span class="material-icons text-xl">check_circle</span>
                            </div>
                            <div>
                                <h3 class="leading-tight">
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Felled Tree
                                        Clearing</span>
                                    <span class="text-gray-400 font-normal mx-1 text-sm">at</span>
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Camp 7</span>
                                </h3>
                                <div class="flex items-center gap-2 mt-1">
                                    <span
                                        class="text-xs font-bold uppercase tracking-wide text-green-600">Completed</span>
                                    <span class="text-gray-300">•</span>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">
                                        Tue, Jan 13, 11:42 AM
                                        <span class="text-xs italic text-gray-400 ml-1">(edited)</span>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div class="text-right pl-4">
                            <span
                                class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">FEEDER</span>
                            <span class="text-3xl font-black text-gray-300 dark:text-gray-600 leading-none">012</span>
                        </div>
                    </div>

                    <div class="px-5 pb-2">
                        <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-2">BENECO POWER SERVICE
                            ADVISORY
                            Unscheduled Power Interruption

                            STATUS: Isolated for further patrol

                            Please consider all lines energized at all times. Power may be restored anytime. Thank you
                            for your patience and usual cooperation. </p>

                        <div
                            class="w-full mt-4 bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 relative group-image cursor-pointer view-image-trigger">
                            <img src="https://ziuteulziywsangbnkgn.supabase.co/storage/v1/object/public/announcement_images/public/1764096281209_27k1faf-UnscheduledBanner.jpg"
                                class="w-full h-auto max-h-125 object-contain bg-gray-50 dark:bg-gray-800">
                            <div
                                class="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-lg font-bold backdrop-blur-sm pointer-events-none">
                                +1 photos
                            </div>
                        </div>

                    </div>

                    <div class="px-5 py-3 bg-gray-50 dark:bg-gray-900/30 border-t dark:border-gray-700 flex gap-3 mt-2">
                        <button
                            class="flex-1 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-sm font-bold hover:bg-gray-50 transition outage-card-trigger"
                            data-id="57">
                            View Details
                        </button>
                        <button
                            class="flex-1 py-2 rounded-lg bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition update-btn"
                            data-id="57">
                            Manage
                        </button>
                    </div>
                </div>

                <div id="report-59"
                    class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow cursor-pointer outage-card-trigger"
                    data-id="59">

                    <div class="p-5 pb-2 flex justify-between items-start">
                        <div class="flex items-start gap-3">
                            <div
                                class="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 mt-1">
                                <span class="material-icons text-xl">check_circle</span>
                            </div>
                            <div>
                                <h3 class="leading-tight">
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Vehicle
                                        Collision</span>
                                    <span class="text-gray-400 font-normal mx-1 text-sm">at</span>
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Pacdal</span>
                                </h3>
                                <div class="flex items-center gap-2 mt-1">
                                    <span
                                        class="text-xs font-bold uppercase tracking-wide text-green-600">Completed</span>
                                    <span class="text-gray-300">•</span>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">
                                        Tue, Jan 13, 11:41 AM
                                        <span class="text-xs italic text-gray-400 ml-1">(edited)</span>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div class="text-right pl-4">
                            <span
                                class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">FEEDER</span>
                            <span class="text-3xl font-black text-gray-300 dark:text-gray-600 leading-none">011</span>
                        </div>
                    </div>

                    <div class="px-5 pb-2">
                        <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-2">BENECO POWER SERVICE
                            ADVISORY
                            Unscheduled Power Interruption

                            STATUS: Vehicle Collision caused Felled Post.

                            Please consider all lines energized at all times. Power may be restored anytime. Thank you
                            for your patience and usual cooperation.</p>

                        <div
                            class="w-full mt-4 bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 relative group-image cursor-pointer view-image-trigger">
                            <img src="https://ziuteulziywsangbnkgn.supabase.co/storage/v1/object/public/announcement_images/public/1764150919933-UnscheduledOutagesBanner.jpg"
                                class="w-full h-auto max-h-125 object-contain bg-gray-50 dark:bg-gray-800">

                        </div>

                    </div>

                    <div class="px-5 py-3 bg-gray-50 dark:bg-gray-900/30 border-t dark:border-gray-700 flex gap-3 mt-2">
                        <button
                            class="flex-1 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-sm font-bold hover:bg-gray-50 transition outage-card-trigger"
                            data-id="59">
                            View Details
                        </button>
                        <button
                            class="flex-1 py-2 rounded-lg bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition update-btn"
                            data-id="59">
                            Manage
                        </button>
                    </div>
                </div>

                <div id="report-60"
                    class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow cursor-pointer outage-card-trigger"
                    data-id="60">

                    <div class="p-5 pb-2 flex justify-between items-start">
                        <div class="flex items-start gap-3">
                            <div
                                class="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 mt-1">
                                <span class="material-icons text-xl">check_circle</span>
                            </div>
                            <div>
                                <h3 class="leading-tight">
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Unknown Cause</span>
                                    <span class="text-gray-400 font-normal mx-1 text-sm">at</span>
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Camp 7</span>
                                </h3>
                                <div class="flex items-center gap-2 mt-1">
                                    <span
                                        class="text-xs font-bold uppercase tracking-wide text-green-600">Completed</span>
                                    <span class="text-gray-300">•</span>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">
                                        Tue, Jan 13, 11:41 AM
                                        <span class="text-xs italic text-gray-400 ml-1">(edited)</span>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div class="text-right pl-4">
                            <span
                                class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">FEEDER</span>
                            <span class="text-3xl font-black text-gray-300 dark:text-gray-600 leading-none">012</span>
                        </div>
                    </div>

                    <div class="px-5 pb-2">
                        <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-2">BENECO POWER SERVICE
                            ADVISORY
                            Unscheduled Power Interruption

                            STATUS: For inspection and repair.

                            Please consider all lines energized at all times. Power may be restored anytime. Thank you
                            for your patience and usual cooperation.



                        </p>

                        <div
                            class="w-full mt-4 bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 relative group-image cursor-pointer view-image-trigger">
                            <img src="https://ziuteulziywsangbnkgn.supabase.co/storage/v1/object/public/announcement_images/public/1764316561297-UnscheduledOutagesBanner.jpg"
                                class="w-full h-auto max-h-125 object-contain bg-gray-50 dark:bg-gray-800">

                        </div>

                    </div>

                    <div class="px-5 py-3 bg-gray-50 dark:bg-gray-900/30 border-t dark:border-gray-700 flex gap-3 mt-2">
                        <button
                            class="flex-1 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-sm font-bold hover:bg-gray-50 transition outage-card-trigger"
                            data-id="60">
                            View Details
                        </button>
                        <button
                            class="flex-1 py-2 rounded-lg bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition update-btn"
                            data-id="60">
                            Manage
                        </button>
                    </div>
                </div>

                <div id="report-63"
                    class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow cursor-pointer outage-card-trigger"
                    data-id="63">

                    <div class="p-5 pb-2 flex justify-between items-start">
                        <div class="flex items-start gap-3">
                            <div
                                class="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 mt-1">
                                <span class="material-icons text-xl">check_circle</span>
                            </div>
                            <div>
                                <h3 class="leading-tight">
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Scheduled
                                        Maintenance</span>
                                    <span class="text-gray-400 font-normal mx-1 text-sm">at</span>
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Military
                                        Cut-off</span>
                                </h3>
                                <div class="flex items-center gap-2 mt-1">
                                    <span
                                        class="text-xs font-bold uppercase tracking-wide text-green-600">Completed</span>
                                    <span class="text-gray-300">•</span>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">
                                        Tue, Jan 13, 11:41 AM
                                        <span class="text-xs italic text-gray-400 ml-1">(edited)</span>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div class="text-right pl-4">
                            <span
                                class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">FEEDER</span>
                            <span class="text-3xl font-black text-gray-300 dark:text-gray-600 leading-none">012</span>
                        </div>
                    </div>

                    <div class="px-5 pb-2">
                        <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-2">Scheduled Power Outage
                            to be implemented by NGSP.</p>

                        <div
                            class="w-full mt-4 bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 relative group-image cursor-pointer view-image-trigger">
                            <img src="https://ziuteulziywsangbnkgn.supabase.co/storage/v1/object/public/announcement_images/public/1764366278097-ScheduledBanner.jpg"
                                class="w-full h-auto max-h-125 object-contain bg-gray-50 dark:bg-gray-800">

                        </div>

                    </div>

                    <div class="px-5 py-3 bg-gray-50 dark:bg-gray-900/30 border-t dark:border-gray-700 flex gap-3 mt-2">
                        <button
                            class="flex-1 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-sm font-bold hover:bg-gray-50 transition outage-card-trigger"
                            data-id="63">
                            View Details
                        </button>
                        <button
                            class="flex-1 py-2 rounded-lg bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition update-btn"
                            data-id="63">
                            Manage
                        </button>
                    </div>
                </div>

                <div id="report-68"
                    class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow cursor-pointer outage-card-trigger"
                    data-id="68">

                    <div class="p-5 pb-2 flex justify-between items-start">
                        <div class="flex items-start gap-3">
                            <div
                                class="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 mt-1">
                                <span class="material-icons text-xl">check_circle</span>
                            </div>
                            <div>
                                <h3 class="leading-tight">
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">fallen-tree</span>
                                    <span class="text-gray-400 font-normal mx-1 text-sm">at</span>
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Unknown Area</span>
                                </h3>
                                <div class="flex items-center gap-2 mt-1">
                                    <span
                                        class="text-xs font-bold uppercase tracking-wide text-green-600">Completed</span>
                                    <span class="text-gray-300">•</span>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">
                                        Tue, Jan 13, 11:41 AM
                                        <span class="text-xs italic text-gray-400 ml-1">(edited)</span>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div class="text-right pl-4">
                            <span
                                class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">FEEDER</span>
                            <span class="text-3xl font-black text-gray-300 dark:text-gray-600 leading-none">011</span>
                        </div>
                    </div>

                    <div class="px-5 pb-2">
                        <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-2">fallen tree</p>

                    </div>

                    <div class="px-5 py-3 bg-gray-50 dark:bg-gray-900/30 border-t dark:border-gray-700 flex gap-3 mt-2">
                        <button
                            class="flex-1 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-sm font-bold hover:bg-gray-50 transition outage-card-trigger"
                            data-id="68">
                            View Details
                        </button>
                        <button
                            class="flex-1 py-2 rounded-lg bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition update-btn"
                            data-id="68">
                            Manage
                        </button>
                    </div>
                </div>

                <div id="report-69"
                    class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow cursor-pointer outage-card-trigger"
                    data-id="69">

                    <div class="p-5 pb-2 flex justify-between items-start">
                        <div class="flex items-start gap-3">
                            <div
                                class="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 mt-1">
                                <span class="material-icons text-xl">check_circle</span>
                            </div>
                            <div>
                                <h3 class="leading-tight">
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">fallen tree</span>
                                    <span class="text-gray-400 font-normal mx-1 text-sm">at</span>
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Unknown Area</span>
                                </h3>
                                <div class="flex items-center gap-2 mt-1">
                                    <span
                                        class="text-xs font-bold uppercase tracking-wide text-green-600">Completed</span>
                                    <span class="text-gray-300">•</span>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">
                                        Tue, Jan 13, 11:41 AM
                                        <span class="text-xs italic text-gray-400 ml-1">(edited)</span>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div class="text-right pl-4">
                            <span
                                class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">FEEDER</span>
                            <span class="text-3xl font-black text-gray-300 dark:text-gray-600 leading-none">012</span>
                        </div>
                    </div>

                    <div class="px-5 pb-2">


                    </div>

                    <div class="px-5 py-3 bg-gray-50 dark:bg-gray-900/30 border-t dark:border-gray-700 flex gap-3 mt-2">
                        <button
                            class="flex-1 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-sm font-bold hover:bg-gray-50 transition outage-card-trigger"
                            data-id="69">
                            View Details
                        </button>
                        <button
                            class="flex-1 py-2 rounded-lg bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition update-btn"
                            data-id="69">
                            Manage
                        </button>
                    </div>
                </div>

                <div id="report-71"
                    class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow cursor-pointer outage-card-trigger"
                    data-id="71">

                    <div class="p-5 pb-2 flex justify-between items-start">
                        <div class="flex items-start gap-3">
                            <div
                                class="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 mt-1">
                                <span class="material-icons text-xl">check_circle</span>
                            </div>
                            <div>
                                <h3 class="leading-tight">
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Demo Test
                                        Scheduled</span>
                                    <span class="text-gray-400 font-normal mx-1 text-sm">at</span>
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Demo Test
                                        Scheduled</span>
                                </h3>
                                <div class="flex items-center gap-2 mt-1">
                                    <span
                                        class="text-xs font-bold uppercase tracking-wide text-green-600">Completed</span>
                                    <span class="text-gray-300">•</span>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">
                                        Tue, Jan 13, 11:41 AM
                                        <span class="text-xs italic text-gray-400 ml-1">(edited)</span>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div class="text-right pl-4">
                            <span
                                class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">FEEDER</span>
                            <span class="text-3xl font-black text-gray-300 dark:text-gray-600 leading-none">012</span>
                        </div>
                    </div>

                    <div class="px-5 pb-2">
                        <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-2">Demo Test Scheduled</p>

                        <div
                            class="w-full mt-4 bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 relative group-image cursor-pointer view-image-trigger">
                            <img src="https://ziuteulziywsangbnkgn.supabase.co/storage/v1/object/public/announcement_images/public/1767856903107-ScheduledOutagesBanner.jpg"
                                class="w-full h-auto max-h-125 object-contain bg-gray-50 dark:bg-gray-800">

                        </div>

                    </div>

                    <div class="px-5 py-3 bg-gray-50 dark:bg-gray-900/30 border-t dark:border-gray-700 flex gap-3 mt-2">
                        <button
                            class="flex-1 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-sm font-bold hover:bg-gray-50 transition outage-card-trigger"
                            data-id="71">
                            View Details
                        </button>
                        <button
                            class="flex-1 py-2 rounded-lg bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition update-btn"
                            data-id="71">
                            Manage
                        </button>
                    </div>
                </div>

                <div id="report-72"
                    class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow cursor-pointer outage-card-trigger"
                    data-id="72">

                    <div class="p-5 pb-2 flex justify-between items-start">
                        <div class="flex items-start gap-3">
                            <div
                                class="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 mt-1">
                                <span class="material-icons text-xl">check_circle</span>
                            </div>
                            <div>
                                <h3 class="leading-tight">
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">scheduled demo</span>
                                    <span class="text-gray-400 font-normal mx-1 text-sm">at</span>
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">scheduled demo</span>
                                </h3>
                                <div class="flex items-center gap-2 mt-1">
                                    <span
                                        class="text-xs font-bold uppercase tracking-wide text-green-600">Completed</span>
                                    <span class="text-gray-300">•</span>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">
                                        Tue, Jan 13, 11:41 AM
                                        <span class="text-xs italic text-gray-400 ml-1">(edited)</span>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div class="text-right pl-4">
                            <span
                                class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">FEEDER</span>
                            <span class="text-3xl font-black text-gray-300 dark:text-gray-600 leading-none">011</span>
                        </div>
                    </div>

                    <div class="px-5 pb-2">


                    </div>

                    <div class="px-5 py-3 bg-gray-50 dark:bg-gray-900/30 border-t dark:border-gray-700 flex gap-3 mt-2">
                        <button
                            class="flex-1 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-sm font-bold hover:bg-gray-50 transition outage-card-trigger"
                            data-id="72">
                            View Details
                        </button>
                        <button
                            class="flex-1 py-2 rounded-lg bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition update-btn"
                            data-id="72">
                            Manage
                        </button>
                    </div>
                </div>

                <div id="report-73"
                    class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow cursor-pointer outage-card-trigger"
                    data-id="73">

                    <div class="p-5 pb-2 flex justify-between items-start">
                        <div class="flex items-start gap-3">
                            <div
                                class="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 mt-1">
                                <span class="material-icons text-xl">check_circle</span>
                            </div>
                            <div>
                                <h3 class="leading-tight">
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">demo scheduled</span>
                                    <span class="text-gray-400 font-normal mx-1 text-sm">at</span>
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">demo scheduled</span>
                                </h3>
                                <div class="flex items-center gap-2 mt-1">
                                    <span
                                        class="text-xs font-bold uppercase tracking-wide text-green-600">Completed</span>
                                    <span class="text-gray-300">•</span>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">
                                        Tue, Jan 13, 11:40 AM
                                        <span class="text-xs italic text-gray-400 ml-1">(edited)</span>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div class="text-right pl-4">
                            <span
                                class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">FEEDER</span>
                            <span class="text-3xl font-black text-gray-300 dark:text-gray-600 leading-none">011</span>
                        </div>
                    </div>

                    <div class="px-5 pb-2">


                    </div>

                    <div class="px-5 py-3 bg-gray-50 dark:bg-gray-900/30 border-t dark:border-gray-700 flex gap-3 mt-2">
                        <button
                            class="flex-1 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-sm font-bold hover:bg-gray-50 transition outage-card-trigger"
                            data-id="73">
                            View Details
                        </button>
                        <button
                            class="flex-1 py-2 rounded-lg bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition update-btn"
                            data-id="73">
                            Manage
                        </button>
                    </div>
                </div>

                <div id="report-74"
                    class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow cursor-pointer outage-card-trigger"
                    data-id="74">

                    <div class="p-5 pb-2 flex justify-between items-start">
                        <div class="flex items-start gap-3">
                            <div
                                class="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 mt-1">
                                <span class="material-icons text-xl">check_circle</span>
                            </div>
                            <div>
                                <h3 class="leading-tight">
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Blown
                                        transformer</span>
                                    <span class="text-gray-400 font-normal mx-1 text-sm">at</span>
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Unknown Area</span>
                                </h3>
                                <div class="flex items-center gap-2 mt-1">
                                    <span
                                        class="text-xs font-bold uppercase tracking-wide text-green-600">Completed</span>
                                    <span class="text-gray-300">•</span>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">
                                        Tue, Jan 13, 11:40 AM
                                        <span class="text-xs italic text-gray-400 ml-1">(edited)</span>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div class="text-right pl-4">
                            <span
                                class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">FEEDER</span>
                            <span class="text-3xl font-black text-gray-300 dark:text-gray-600 leading-none">012</span>
                        </div>
                    </div>

                    <div class="px-5 pb-2">
                        <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-2">Lights flickered for a
                            moment then went our entirely</p>

                    </div>

                    <div class="px-5 py-3 bg-gray-50 dark:bg-gray-900/30 border-t dark:border-gray-700 flex gap-3 mt-2">
                        <button
                            class="flex-1 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-sm font-bold hover:bg-gray-50 transition outage-card-trigger"
                            data-id="74">
                            View Details
                        </button>
                        <button
                            class="flex-1 py-2 rounded-lg bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition update-btn"
                            data-id="74">
                            Manage
                        </button>
                    </div>
                </div>

                <div id="report-75"
                    class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow cursor-pointer outage-card-trigger"
                    data-id="75">

                    <div class="p-5 pb-2 flex justify-between items-start">
                        <div class="flex items-start gap-3">
                            <div
                                class="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 mt-1">
                                <span class="material-icons text-xl">check_circle</span>
                            </div>
                            <div>
                                <h3 class="leading-tight">
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Maintenance</span>
                                    <span class="text-gray-400 font-normal mx-1 text-sm">at</span>
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Unknown Area</span>
                                </h3>
                                <div class="flex items-center gap-2 mt-1">
                                    <span
                                        class="text-xs font-bold uppercase tracking-wide text-green-600">Completed</span>
                                    <span class="text-gray-300">•</span>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">
                                        Tue, Jan 13, 11:40 AM
                                        <span class="text-xs italic text-gray-400 ml-1">(edited)</span>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div class="text-right pl-4">
                            <span
                                class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">FEEDER</span>
                            <span class="text-3xl font-black text-gray-300 dark:text-gray-600 leading-none">012</span>
                        </div>
                    </div>

                    <div class="px-5 pb-2">


                    </div>

                    <div class="px-5 py-3 bg-gray-50 dark:bg-gray-900/30 border-t dark:border-gray-700 flex gap-3 mt-2">
                        <button
                            class="flex-1 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-sm font-bold hover:bg-gray-50 transition outage-card-trigger"
                            data-id="75">
                            View Details
                        </button>
                        <button
                            class="flex-1 py-2 rounded-lg bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition update-btn"
                            data-id="75">
                            Manage
                        </button>
                    </div>
                </div>

                <div id="report-76"
                    class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow cursor-pointer outage-card-trigger"
                    data-id="76">

                    <div class="p-5 pb-2 flex justify-between items-start">
                        <div class="flex items-start gap-3">
                            <div
                                class="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 mt-1">
                                <span class="material-icons text-xl">check_circle</span>
                            </div>
                            <div>
                                <h3 class="leading-tight">
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">no-power</span>
                                    <span class="text-gray-400 font-normal mx-1 text-sm">at</span>
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Unknown Area</span>
                                </h3>
                                <div class="flex items-center gap-2 mt-1">
                                    <span
                                        class="text-xs font-bold uppercase tracking-wide text-green-600">Completed</span>
                                    <span class="text-gray-300">•</span>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">
                                        Tue, Jan 13, 11:40 AM
                                        <span class="text-xs italic text-gray-400 ml-1">(edited)</span>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div class="text-right pl-4">
                            <span
                                class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">FEEDER</span>
                            <span class="text-3xl font-black text-gray-300 dark:text-gray-600 leading-none">012</span>
                        </div>
                    </div>

                    <div class="px-5 pb-2">
                        <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-2">lights flickered for a
                            moment then completely went out</p>

                    </div>

                    <div class="px-5 py-3 bg-gray-50 dark:bg-gray-900/30 border-t dark:border-gray-700 flex gap-3 mt-2">
                        <button
                            class="flex-1 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-sm font-bold hover:bg-gray-50 transition outage-card-trigger"
                            data-id="76">
                            View Details
                        </button>
                        <button
                            class="flex-1 py-2 rounded-lg bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition update-btn"
                            data-id="76">
                            Manage
                        </button>
                    </div>
                </div>

                <div id="report-77"
                    class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow cursor-pointer outage-card-trigger"
                    data-id="77">

                    <div class="p-5 pb-2 flex justify-between items-start">
                        <div class="flex items-start gap-3">
                            <div
                                class="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 mt-1">
                                <span class="material-icons text-xl">check_circle</span>
                            </div>
                            <div>
                                <h3 class="leading-tight">
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Outage</span>
                                    <span class="text-gray-400 font-normal mx-1 text-sm">at</span>
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Unknown Area</span>
                                </h3>
                                <div class="flex items-center gap-2 mt-1">
                                    <span
                                        class="text-xs font-bold uppercase tracking-wide text-green-600">Completed</span>
                                    <span class="text-gray-300">•</span>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">
                                        Tue, Jan 13, 11:40 AM
                                        <span class="text-xs italic text-gray-400 ml-1">(edited)</span>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div class="text-right pl-4">
                            <span
                                class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">FEEDER</span>
                            <span class="text-3xl font-black text-gray-300 dark:text-gray-600 leading-none">012</span>
                        </div>
                    </div>

                    <div class="px-5 pb-2">


                    </div>

                    <div class="px-5 py-3 bg-gray-50 dark:bg-gray-900/30 border-t dark:border-gray-700 flex gap-3 mt-2">
                        <button
                            class="flex-1 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-sm font-bold hover:bg-gray-50 transition outage-card-trigger"
                            data-id="77">
                            View Details
                        </button>
                        <button
                            class="flex-1 py-2 rounded-lg bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition update-btn"
                            data-id="77">
                            Manage
                        </button>
                    </div>
                </div>

                <div id="report-67"
                    class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow cursor-pointer outage-card-trigger"
                    data-id="67">

                    <div class="p-5 pb-2 flex justify-between items-start">
                        <div class="flex items-start gap-3">
                            <div
                                class="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 mt-1">
                                <span class="material-icons text-xl">check_circle</span>
                            </div>
                            <div>
                                <h3 class="leading-tight">
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Testing Status
                                        Triggers</span>
                                    <span class="text-gray-400 font-normal mx-1 text-sm">at</span>
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Camp 7</span>
                                </h3>
                                <div class="flex items-center gap-2 mt-1">
                                    <span
                                        class="text-xs font-bold uppercase tracking-wide text-green-600">Completed</span>
                                    <span class="text-gray-300">•</span>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">
                                        Sun, Dec 7, 2:23 PM
                                        <span class="text-xs italic text-gray-400 ml-1">(edited)</span>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div class="text-right pl-4">
                            <span
                                class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">FEEDER</span>
                            <span class="text-3xl font-black text-gray-300 dark:text-gray-600 leading-none">012</span>
                        </div>
                    </div>

                    <div class="px-5 pb-2">
                        <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-2">Checking if the status
                            on consumer reports udpate status.
                            Test 1: pending change to reported worked
                            Test 2: reported change to ongoing worked</p>

                        <div
                            class="w-full mt-4 bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 relative group-image cursor-pointer view-image-trigger">
                            <img src="https://ziuteulziywsangbnkgn.supabase.co/storage/v1/object/public/announcement_images/public/1765117308358-UnscheduledOutagesBanner.jpg"
                                class="w-full h-auto max-h-125 object-contain bg-gray-50 dark:bg-gray-800">

                        </div>

                    </div>

                    <div class="px-5 py-3 bg-gray-50 dark:bg-gray-900/30 border-t dark:border-gray-700 flex gap-3 mt-2">
                        <button
                            class="flex-1 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-sm font-bold hover:bg-gray-50 transition outage-card-trigger"
                            data-id="67">
                            View Details
                        </button>
                        <button
                            class="flex-1 py-2 rounded-lg bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition update-btn"
                            data-id="67">
                            Manage
                        </button>
                    </div>
                </div>

                <div id="report-66"
                    class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow cursor-pointer outage-card-trigger"
                    data-id="66">

                    <div class="p-5 pb-2 flex justify-between items-start">
                        <div class="flex items-start gap-3">
                            <div
                                class="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 mt-1">
                                <span class="material-icons text-xl">check_circle</span>
                            </div>
                            <div>
                                <h3 class="leading-tight">
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Consumer App
                                        Issue</span>
                                    <span class="text-gray-400 font-normal mx-1 text-sm">at</span>
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Camp 7</span>
                                </h3>
                                <div class="flex items-center gap-2 mt-1">
                                    <span
                                        class="text-xs font-bold uppercase tracking-wide text-green-600">Completed</span>
                                    <span class="text-gray-300">•</span>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">
                                        Sun, Dec 7, 2:14 PM
                                        <span class="text-xs italic text-gray-400 ml-1">(edited)</span>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div class="text-right pl-4">
                            <span
                                class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">FEEDER</span>
                            <span class="text-3xl font-black text-gray-300 dark:text-gray-600 leading-none">012</span>
                        </div>
                    </div>

                    <div class="px-5 pb-2">
                        <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-2">Testing of coonection
                            between ADMIN and CONSUMER. Need to ensure both is communicatinga nd connected to back end.
                        </p>

                        <div
                            class="w-full mt-4 bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 relative group-image cursor-pointer view-image-trigger">
                            <img src="https://ziuteulziywsangbnkgn.supabase.co/storage/v1/object/public/announcement_images/public/1765106521177-UnscheduledOutagesBanner.jpg"
                                class="w-full h-auto max-h-125 object-contain bg-gray-50 dark:bg-gray-800">

                        </div>

                    </div>

                    <div class="px-5 py-3 bg-gray-50 dark:bg-gray-900/30 border-t dark:border-gray-700 flex gap-3 mt-2">
                        <button
                            class="flex-1 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-sm font-bold hover:bg-gray-50 transition outage-card-trigger"
                            data-id="66">
                            View Details
                        </button>
                        <button
                            class="flex-1 py-2 rounded-lg bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition update-btn"
                            data-id="66">
                            Manage
                        </button>
                    </div>
                </div>

                <div id="report-65"
                    class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow cursor-pointer outage-card-trigger"
                    data-id="65">

                    <div class="p-5 pb-2 flex justify-between items-start">
                        <div class="flex items-start gap-3">
                            <div
                                class="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 mt-1">
                                <span class="material-icons text-xl">check_circle</span>
                            </div>
                            <div>
                                <h3 class="leading-tight">
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Completed Scheduled
                                        Maintenance</span>
                                    <span class="text-gray-400 font-normal mx-1 text-sm">at</span>
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">DPS Compound</span>
                                </h3>
                                <div class="flex items-center gap-2 mt-1">
                                    <span
                                        class="text-xs font-bold uppercase tracking-wide text-green-600">Completed</span>
                                    <span class="text-gray-300">•</span>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">
                                        Thu, Dec 4, 12:28 PM
                                        <span class="text-xs italic text-gray-400 ml-1">(edited)</span>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div class="text-right pl-4">
                            <span
                                class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">FEEDER</span>
                            <span class="text-3xl font-black text-gray-300 dark:text-gray-600 leading-none">012</span>
                        </div>
                    </div>

                    <div class="px-5 pb-2">
                        <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-2">Management of scheduled
                            outage completed. All areas restored. </p>

                        <div
                            class="w-full mt-4 bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 relative group-image cursor-pointer view-image-trigger">
                            <img src="https://ziuteulziywsangbnkgn.supabase.co/storage/v1/object/public/announcement_images/public/1764843931989-ScheduledOutagesBanner.jpg"
                                class="w-full h-auto max-h-125 object-contain bg-gray-50 dark:bg-gray-800">

                        </div>

                    </div>

                    <div class="px-5 py-3 bg-gray-50 dark:bg-gray-900/30 border-t dark:border-gray-700 flex gap-3 mt-2">
                        <button
                            class="flex-1 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-sm font-bold hover:bg-gray-50 transition outage-card-trigger"
                            data-id="65">
                            View Details
                        </button>
                        <button
                            class="flex-1 py-2 rounded-lg bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition update-btn"
                            data-id="65">
                            Manage
                        </button>
                    </div>
                </div>

                <div id="report-64"
                    class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow cursor-pointer outage-card-trigger"
                    data-id="64">

                    <div class="p-5 pb-2 flex justify-between items-start">
                        <div class="flex items-start gap-3">
                            <div
                                class="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 mt-1">
                                <span class="material-icons text-xl">check_circle</span>
                            </div>
                            <div>
                                <h3 class="leading-tight">
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Testing of Push
                                        Notifications</span>
                                    <span class="text-gray-400 font-normal mx-1 text-sm">at</span>
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Gibraltar</span>
                                </h3>
                                <div class="flex items-center gap-2 mt-1">
                                    <span
                                        class="text-xs font-bold uppercase tracking-wide text-green-600">Completed</span>
                                    <span class="text-gray-300">•</span>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">
                                        Thu, Dec 4, 10:24 AM
                                        <span class="text-xs italic text-gray-400 ml-1">(edited)</span>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div class="text-right pl-4">
                            <span
                                class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">FEEDER</span>
                            <span class="text-3xl font-black text-gray-300 dark:text-gray-600 leading-none">011</span>
                        </div>
                    </div>

                    <div class="px-5 pb-2">
                        <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-2">COnfirmed that users
                            that are not incldued in areas_affected do not get notified if they are not included. </p>

                        <div
                            class="w-full mt-4 bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 relative group-image cursor-pointer view-image-trigger">
                            <img src="https://ziuteulziywsangbnkgn.supabase.co/storage/v1/object/public/announcement_images/public/1764843747702-UnscheduledOutagesBanner.jpg"
                                class="w-full h-auto max-h-125 object-contain bg-gray-50 dark:bg-gray-800">

                        </div>

                    </div>

                    <div class="px-5 py-3 bg-gray-50 dark:bg-gray-900/30 border-t dark:border-gray-700 flex gap-3 mt-2">
                        <button
                            class="flex-1 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-sm font-bold hover:bg-gray-50 transition outage-card-trigger"
                            data-id="64">
                            View Details
                        </button>
                        <button
                            class="flex-1 py-2 rounded-lg bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition update-btn"
                            data-id="64">
                            Manage
                        </button>
                    </div>
                </div>

                <div id="report-62"
                    class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow cursor-pointer outage-card-trigger"
                    data-id="62">

                    <div class="p-5 pb-2 flex justify-between items-start">
                        <div class="flex items-start gap-3">
                            <div
                                class="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 mt-1">
                                <span class="material-icons text-xl">check_circle</span>
                            </div>
                            <div>
                                <h3 class="leading-tight">
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Fallen Tree
                                        Successfully Removed</span>
                                    <span class="text-gray-400 font-normal mx-1 text-sm">at</span>
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Camp 7</span>
                                </h3>
                                <div class="flex items-center gap-2 mt-1">
                                    <span
                                        class="text-xs font-bold uppercase tracking-wide text-green-600">Completed</span>
                                    <span class="text-gray-300">•</span>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">
                                        Fri, Nov 28, 8:26 AM
                                        <span class="text-xs italic text-gray-400 ml-1">(edited)</span>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div class="text-right pl-4">
                            <span
                                class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">FEEDER</span>
                            <span class="text-3xl font-black text-gray-300 dark:text-gray-600 leading-none">012</span>
                        </div>
                    </div>

                    <div class="px-5 pb-2">
                        <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-2">BENECO POWER SERVICE
                            ADVISORY
                            Unscheduled Power Interruption

                            STATUS: Felled tree clearing at Camp 7 successful.

                            Please consider all lines energized at all times. Power may be restored anytime. Thank you
                            for your patience and usual cooperation.</p>

                        <div
                            class="w-full mt-4 bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 relative group-image cursor-pointer view-image-trigger">
                            <img src="https://ziuteulziywsangbnkgn.supabase.co/storage/v1/object/public/announcement_images/public/1764318278616-UnscheduledOutagesBanner.jpg"
                                class="w-full h-auto max-h-125 object-contain bg-gray-50 dark:bg-gray-800">

                        </div>

                    </div>

                    <div class="px-5 py-3 bg-gray-50 dark:bg-gray-900/30 border-t dark:border-gray-700 flex gap-3 mt-2">
                        <button
                            class="flex-1 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-sm font-bold hover:bg-gray-50 transition outage-card-trigger"
                            data-id="62">
                            View Details
                        </button>
                        <button
                            class="flex-1 py-2 rounded-lg bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition update-btn"
                            data-id="62">
                            Manage
                        </button>
                    </div>
                </div>

                <div id="report-61"
                    class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow cursor-pointer outage-card-trigger"
                    data-id="61">

                    <div class="p-5 pb-2 flex justify-between items-start">
                        <div class="flex items-start gap-3">
                            <div
                                class="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 mt-1">
                                <span class="material-icons text-xl">check_circle</span>
                            </div>
                            <div>
                                <h3 class="leading-tight">
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Fallen Tree
                                        Cleared</span>
                                    <span class="text-gray-400 font-normal mx-1 text-sm">at</span>
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Camp 7</span>
                                </h3>
                                <div class="flex items-center gap-2 mt-1">
                                    <span
                                        class="text-xs font-bold uppercase tracking-wide text-green-600">Completed</span>
                                    <span class="text-gray-300">•</span>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">
                                        Fri, Nov 28, 8:11 AM
                                        <span class="text-xs italic text-gray-400 ml-1">(edited)</span>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div class="text-right pl-4">
                            <span
                                class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">FEEDER</span>
                            <span class="text-3xl font-black text-gray-300 dark:text-gray-600 leading-none">012</span>
                        </div>
                    </div>

                    <div class="px-5 pb-2">
                        <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-2">BENECO POWER SERVICE
                            ADVISORY
                            Unscheduled Power Interruption

                            STATUS: For clearing of fallen tree.

                            Please consider all lines energized at all times. Power may be restored anytime. Thank you
                            for your patience and usual cooperation.



                        </p>

                        <div
                            class="w-full mt-4 bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 relative group-image cursor-pointer view-image-trigger">
                            <img src="https://ziuteulziywsangbnkgn.supabase.co/storage/v1/object/public/announcement_images/public/1764317357832-UnscheduledOutagesBanner.jpg"
                                class="w-full h-auto max-h-125 object-contain bg-gray-50 dark:bg-gray-800">

                        </div>

                    </div>

                    <div class="px-5 py-3 bg-gray-50 dark:bg-gray-900/30 border-t dark:border-gray-700 flex gap-3 mt-2">
                        <button
                            class="flex-1 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-sm font-bold hover:bg-gray-50 transition outage-card-trigger"
                            data-id="61">
                            View Details
                        </button>
                        <button
                            class="flex-1 py-2 rounded-lg bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition update-btn"
                            data-id="61">
                            Manage
                        </button>
                    </div>
                </div>

                <div id="report-55"
                    class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow cursor-pointer outage-card-trigger"
                    data-id="55">

                    <div class="p-5 pb-2 flex justify-between items-start">
                        <div class="flex items-start gap-3">
                            <div
                                class="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 mt-1">
                                <span class="material-icons text-xl">check_circle</span>
                            </div>
                            <div>
                                <h3 class="leading-tight">
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Felled Tree
                                        Clearing</span>
                                    <span class="text-gray-400 font-normal mx-1 text-sm">at</span>
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Gibraltar</span>
                                </h3>
                                <div class="flex items-center gap-2 mt-1">
                                    <span
                                        class="text-xs font-bold uppercase tracking-wide text-green-600">Completed</span>
                                    <span class="text-gray-300">•</span>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">
                                        Wed, Nov 26, 2:34 PM
                                        <span class="text-xs italic text-gray-400 ml-1">(edited)</span>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div class="text-right pl-4">
                            <span
                                class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">FEEDER</span>
                            <span class="text-3xl font-black text-gray-300 dark:text-gray-600 leading-none">011</span>
                        </div>
                    </div>

                    <div class="px-5 pb-2">
                        <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-2">BENECO POWER SERVICE
                            ADVISORY
                            Unscheduled Power Interruption

                            STATUS: Felled Tree Clearing Successful

                            Please consider all lines energized at all times. Power may be restored anytime. Thank you
                            for your patience and usual cooperation. </p>

                        <div
                            class="w-full mt-4 bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 relative group-image cursor-pointer view-image-trigger">
                            <img src="https://ziuteulziywsangbnkgn.supabase.co/storage/v1/object/public/news/public/1764095255589-UnscheduledBanner.jpg"
                                class="w-full h-auto max-h-125 object-contain bg-gray-50 dark:bg-gray-800">
                            <div
                                class="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-lg font-bold backdrop-blur-sm pointer-events-none">
                                +1 photos
                            </div>
                        </div>

                    </div>

                    <div class="px-5 py-3 bg-gray-50 dark:bg-gray-900/30 border-t dark:border-gray-700 flex gap-3 mt-2">
                        <button
                            class="flex-1 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-sm font-bold hover:bg-gray-50 transition outage-card-trigger"
                            data-id="55">
                            View Details
                        </button>
                        <button
                            class="flex-1 py-2 rounded-lg bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition update-btn"
                            data-id="55">
                            Manage
                        </button>
                    </div>
                </div>

                <div id="report-56"
                    class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow cursor-pointer outage-card-trigger"
                    data-id="56">

                    <div class="p-5 pb-2 flex justify-between items-start">
                        <div class="flex items-start gap-3">
                            <div
                                class="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 mt-1">
                                <span class="material-icons text-xl">check_circle</span>
                            </div>
                            <div>
                                <h3 class="leading-tight">
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Damaged Line</span>
                                    <span class="text-gray-400 font-normal mx-1 text-sm">at</span>
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Gibraltar</span>
                                </h3>
                                <div class="flex items-center gap-2 mt-1">
                                    <span
                                        class="text-xs font-bold uppercase tracking-wide text-green-600">Completed</span>
                                    <span class="text-gray-300">•</span>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">
                                        Tue, Nov 25, 6:36 PM
                                        <span class="text-xs italic text-gray-400 ml-1">(edited)</span>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div class="text-right pl-4">
                            <span
                                class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">FEEDER</span>
                            <span class="text-3xl font-black text-gray-300 dark:text-gray-600 leading-none">011</span>
                        </div>
                    </div>

                    <div class="px-5 pb-2">
                        <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-2">Restored</p>

                        <div
                            class="w-full mt-4 bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 relative group-image cursor-pointer view-image-trigger">
                            <img src="https://ziuteulziywsangbnkgn.supabase.co/storage/v1/object/public/news/public/1764095220445-UnscheduledBanner.jpg"
                                class="w-full h-auto max-h-125 object-contain bg-gray-50 dark:bg-gray-800">

                        </div>

                    </div>

                    <div class="px-5 py-3 bg-gray-50 dark:bg-gray-900/30 border-t dark:border-gray-700 flex gap-3 mt-2">
                        <button
                            class="flex-1 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-sm font-bold hover:bg-gray-50 transition outage-card-trigger"
                            data-id="56">
                            View Details
                        </button>
                        <button
                            class="flex-1 py-2 rounded-lg bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition update-btn"
                            data-id="56">
                            Manage
                        </button>
                    </div>
                </div>

                <div id="report-42"
                    class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow cursor-pointer outage-card-trigger"
                    data-id="42">

                    <div class="p-5 pb-2 flex justify-between items-start">
                        <div class="flex items-start gap-3">
                            <div
                                class="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 mt-1">
                                <span class="material-icons text-xl">check_circle</span>
                            </div>
                            <div>
                                <h3 class="leading-tight">
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Damaged Line
                                        Confirmed</span>
                                    <span class="text-gray-400 font-normal mx-1 text-sm">at</span>
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Camp 7</span>
                                </h3>
                                <div class="flex items-center gap-2 mt-1">
                                    <span
                                        class="text-xs font-bold uppercase tracking-wide text-green-600">Completed</span>
                                    <span class="text-gray-300">•</span>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">
                                        Tue, Nov 25, 4:00 PM
                                        <span class="text-xs italic text-gray-400 ml-1">(edited)</span>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div class="text-right pl-4">
                            <span
                                class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">FEEDER</span>
                            <span class="text-3xl font-black text-gray-300 dark:text-gray-600 leading-none">012</span>
                        </div>
                    </div>

                    <div class="px-5 pb-2">
                        <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-2">Restored</p>

                        <div
                            class="w-full mt-4 bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 relative group-image cursor-pointer view-image-trigger">
                            <img src="https://ziuteulziywsangbnkgn.supabase.co/storage/v1/object/public/announcements_images/public/1762340550888-574570604_892776756430086_2054707673346808449_n.jpg"
                                class="w-full h-auto max-h-125 object-contain bg-gray-50 dark:bg-gray-800">

                        </div>

                    </div>

                    <div class="px-5 py-3 bg-gray-50 dark:bg-gray-900/30 border-t dark:border-gray-700 flex gap-3 mt-2">
                        <button
                            class="flex-1 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-sm font-bold hover:bg-gray-50 transition outage-card-trigger"
                            data-id="42">
                            View Details
                        </button>
                        <button
                            class="flex-1 py-2 rounded-lg bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition update-btn"
                            data-id="42">
                            Manage
                        </button>
                    </div>
                </div>

                <div id="report-40"
                    class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow cursor-pointer outage-card-trigger"
                    data-id="40">

                    <div class="p-5 pb-2 flex justify-between items-start">
                        <div class="flex items-start gap-3">
                            <div
                                class="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 mt-1">
                                <span class="material-icons text-xl">check_circle</span>
                            </div>
                            <div>
                                <h3 class="leading-tight">
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">CurrentTest</span>
                                    <span class="text-gray-400 font-normal mx-1 text-sm">at</span>
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Gibraltar</span>
                                </h3>
                                <div class="flex items-center gap-2 mt-1">
                                    <span
                                        class="text-xs font-bold uppercase tracking-wide text-green-600">Completed</span>
                                    <span class="text-gray-300">•</span>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">
                                        Tue, Nov 25, 3:46 PM
                                        <span class="text-xs italic text-gray-400 ml-1">(edited)</span>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div class="text-right pl-4">
                            <span
                                class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">FEEDER</span>
                            <span class="text-3xl font-black text-gray-300 dark:text-gray-600 leading-none">011</span>
                        </div>
                    </div>

                    <div class="px-5 pb-2">
                        <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-2">Restored</p>

                    </div>

                    <div class="px-5 py-3 bg-gray-50 dark:bg-gray-900/30 border-t dark:border-gray-700 flex gap-3 mt-2">
                        <button
                            class="flex-1 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-sm font-bold hover:bg-gray-50 transition outage-card-trigger"
                            data-id="40">
                            View Details
                        </button>
                        <button
                            class="flex-1 py-2 rounded-lg bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition update-btn"
                            data-id="40">
                            Manage
                        </button>
                    </div>
                </div>

                <div id="report-43"
                    class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow cursor-pointer outage-card-trigger"
                    data-id="43">

                    <div class="p-5 pb-2 flex justify-between items-start">
                        <div class="flex items-start gap-3">
                            <div
                                class="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 mt-1">
                                <span class="material-icons text-xl">check_circle</span>
                            </div>
                            <div>
                                <h3 class="leading-tight">
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Ongoing
                                        Inspection</span>
                                    <span class="text-gray-400 font-normal mx-1 text-sm">at</span>
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Gibraltar</span>
                                </h3>
                                <div class="flex items-center gap-2 mt-1">
                                    <span
                                        class="text-xs font-bold uppercase tracking-wide text-green-600">Completed</span>
                                    <span class="text-gray-300">•</span>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">
                                        Tue, Nov 25, 3:45 PM
                                        <span class="text-xs italic text-gray-400 ml-1">(edited)</span>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div class="text-right pl-4">
                            <span
                                class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">FEEDER</span>
                            <span class="text-3xl font-black text-gray-300 dark:text-gray-600 leading-none">011</span>
                        </div>
                    </div>

                    <div class="px-5 pb-2">
                        <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-2">BENECO POWER SERVICE
                            ADVISORY
                            Unscheduled Power Interruption
                            Please consider all lines energized at all times. Power may be restored anytime. Thank you
                            for your patience and usual cooperation.</p>

                        <div
                            class="w-full mt-4 bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 relative group-image cursor-pointer view-image-trigger">
                            <img src="https://ziuteulziywsangbnkgn.supabase.co/storage/v1/object/public/announcements_images/public/1762368656051-images%20(1).jpg"
                                class="w-full h-auto max-h-125 object-contain bg-gray-50 dark:bg-gray-800">

                        </div>

                    </div>

                    <div class="px-5 py-3 bg-gray-50 dark:bg-gray-900/30 border-t dark:border-gray-700 flex gap-3 mt-2">
                        <button
                            class="flex-1 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-sm font-bold hover:bg-gray-50 transition outage-card-trigger"
                            data-id="43">
                            View Details
                        </button>
                        <button
                            class="flex-1 py-2 rounded-lg bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition update-btn"
                            data-id="43">
                            Manage
                        </button>
                    </div>
                </div>

                <div id="report-53"
                    class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow cursor-pointer outage-card-trigger"
                    data-id="53">

                    <div class="p-5 pb-2 flex justify-between items-start">
                        <div class="flex items-start gap-3">
                            <div
                                class="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 mt-1">
                                <span class="material-icons text-xl">check_circle</span>
                            </div>
                            <div>
                                <h3 class="leading-tight">
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Damaged Line</span>
                                    <span class="text-gray-400 font-normal mx-1 text-sm">at</span>
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Camp 7</span>
                                </h3>
                                <div class="flex items-center gap-2 mt-1">
                                    <span
                                        class="text-xs font-bold uppercase tracking-wide text-green-600">Completed</span>
                                    <span class="text-gray-300">•</span>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">
                                        Tue, Nov 25, 3:44 PM
                                        <span class="text-xs italic text-gray-400 ml-1">(edited)</span>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div class="text-right pl-4">
                            <span
                                class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">FEEDER</span>
                            <span class="text-3xl font-black text-gray-300 dark:text-gray-600 leading-none">012</span>
                        </div>
                    </div>

                    <div class="px-5 pb-2">
                        <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-2">Restored.</p>

                        <div
                            class="w-full mt-4 bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 relative group-image cursor-pointer view-image-trigger">
                            <img src="https://ziuteulziywsangbnkgn.supabase.co/storage/v1/object/public/announcement_images/public/1763984673834-OIP.webp"
                                class="w-full h-auto max-h-125 object-contain bg-gray-50 dark:bg-gray-800">

                        </div>

                    </div>

                    <div class="px-5 py-3 bg-gray-50 dark:bg-gray-900/30 border-t dark:border-gray-700 flex gap-3 mt-2">
                        <button
                            class="flex-1 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-sm font-bold hover:bg-gray-50 transition outage-card-trigger"
                            data-id="53">
                            View Details
                        </button>
                        <button
                            class="flex-1 py-2 rounded-lg bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition update-btn"
                            data-id="53">
                            Manage
                        </button>
                    </div>
                </div>

                <div id="report-3"
                    class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow cursor-pointer outage-card-trigger"
                    data-id="3">

                    <div class="p-5 pb-2 flex justify-between items-start">
                        <div class="flex items-start gap-3">
                            <div
                                class="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 mt-1">
                                <span class="material-icons text-xl">check_circle</span>
                            </div>
                            <div>
                                <h3 class="leading-tight">
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Felled Tree</span>
                                    <span class="text-gray-400 font-normal mx-1 text-sm">at</span>
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Bakakeng North</span>
                                </h3>
                                <div class="flex items-center gap-2 mt-1">
                                    <span
                                        class="text-xs font-bold uppercase tracking-wide text-green-600">Completed</span>
                                    <span class="text-gray-300">•</span>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">
                                        Tue, Nov 25, 3:43 PM
                                        <span class="text-xs italic text-gray-400 ml-1">(edited)</span>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div class="text-right pl-4">
                            <span
                                class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">FEEDER</span>
                            <span class="text-3xl font-black text-gray-300 dark:text-gray-600 leading-none">012</span>
                        </div>
                    </div>

                    <div class="px-5 pb-2">
                        <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-2">Feleld Tree</p>

                    </div>

                    <div class="px-5 py-3 bg-gray-50 dark:bg-gray-900/30 border-t dark:border-gray-700 flex gap-3 mt-2">
                        <button
                            class="flex-1 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-sm font-bold hover:bg-gray-50 transition outage-card-trigger"
                            data-id="3">
                            View Details
                        </button>
                        <button
                            class="flex-1 py-2 rounded-lg bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition update-btn"
                            data-id="3">
                            Manage
                        </button>
                    </div>
                </div>

                <div id="report-54"
                    class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow cursor-pointer outage-card-trigger"
                    data-id="54">

                    <div class="p-5 pb-2 flex justify-between items-start">
                        <div class="flex items-start gap-3">
                            <div
                                class="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 mt-1">
                                <span class="material-icons text-xl">check_circle</span>
                            </div>
                            <div>
                                <h3 class="leading-tight">
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Clearing of Fallen
                                        Tree</span>
                                    <span class="text-gray-400 font-normal mx-1 text-sm">at</span>
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Camp 7 Highway</span>
                                </h3>
                                <div class="flex items-center gap-2 mt-1">
                                    <span
                                        class="text-xs font-bold uppercase tracking-wide text-green-600">Completed</span>
                                    <span class="text-gray-300">•</span>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">
                                        Tue, Nov 25, 3:43 PM
                                        <span class="text-xs italic text-gray-400 ml-1">(edited)</span>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div class="text-right pl-4">
                            <span
                                class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">FEEDER</span>
                            <span class="text-3xl font-black text-gray-300 dark:text-gray-600 leading-none">012</span>
                        </div>
                    </div>

                    <div class="px-5 pb-2">
                        <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-2">BENECO POWER SERVICE
                            ADVISORY
                            Unscheduled Power Interruption

                            STATUS: Isolated for further patrol

                            Please consider all lines energized at all times. Power may be restored anytime. Thank you
                            for your patience and usual cooperation. </p>

                        <div
                            class="w-full mt-4 bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 relative group-image cursor-pointer view-image-trigger">
                            <img src="https://ziuteulziywsangbnkgn.supabase.co/storage/v1/object/public/announcement_images/public/1764084843396-Unscheduled%20Banner.jpg"
                                class="w-full h-auto max-h-125 object-contain bg-gray-50 dark:bg-gray-800">
                            <div
                                class="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-lg font-bold backdrop-blur-sm pointer-events-none">
                                +1 photos
                            </div>
                        </div>

                    </div>

                    <div class="px-5 py-3 bg-gray-50 dark:bg-gray-900/30 border-t dark:border-gray-700 flex gap-3 mt-2">
                        <button
                            class="flex-1 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-sm font-bold hover:bg-gray-50 transition outage-card-trigger"
                            data-id="54">
                            View Details
                        </button>
                        <button
                            class="flex-1 py-2 rounded-lg bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition update-btn"
                            data-id="54">
                            Manage
                        </button>
                    </div>
                </div>

                <div id="report-2"
                    class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow cursor-pointer outage-card-trigger"
                    data-id="2">

                    <div class="p-5 pb-2 flex justify-between items-start">
                        <div class="flex items-start gap-3">
                            <div
                                class="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 mt-1">
                                <span class="material-icons text-xl">check_circle</span>
                            </div>
                            <div>
                                <h3 class="leading-tight">
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Felled Tree</span>
                                    <span class="text-gray-400 font-normal mx-1 text-sm">at</span>
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Camp 7</span>
                                </h3>
                                <div class="flex items-center gap-2 mt-1">
                                    <span
                                        class="text-xs font-bold uppercase tracking-wide text-green-600">Completed</span>
                                    <span class="text-gray-300">•</span>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">
                                        Tue, Nov 25, 3:43 PM
                                        <span class="text-xs italic text-gray-400 ml-1">(edited)</span>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div class="text-right pl-4">
                            <span
                                class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">FEEDER</span>
                            <span class="text-3xl font-black text-gray-300 dark:text-gray-600 leading-none">012</span>
                        </div>
                    </div>

                    <div class="px-5 pb-2">
                        <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-2">Ongoing restoration and
                            removal of felled tree at Burnham park. </p>

                    </div>

                    <div class="px-5 py-3 bg-gray-50 dark:bg-gray-900/30 border-t dark:border-gray-700 flex gap-3 mt-2">
                        <button
                            class="flex-1 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-sm font-bold hover:bg-gray-50 transition outage-card-trigger"
                            data-id="2">
                            View Details
                        </button>
                        <button
                            class="flex-1 py-2 rounded-lg bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition update-btn"
                            data-id="2">
                            Manage
                        </button>
                    </div>
                </div>

                <div id="report-49"
                    class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow cursor-pointer outage-card-trigger"
                    data-id="49">

                    <div class="p-5 pb-2 flex justify-between items-start">
                        <div class="flex items-start gap-3">
                            <div
                                class="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 mt-1">
                                <span class="material-icons text-xl">check_circle</span>
                            </div>
                            <div>
                                <h3 class="leading-tight">
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Felled Tree</span>
                                    <span class="text-gray-400 font-normal mx-1 text-sm">at</span>
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Gibraltar</span>
                                </h3>
                                <div class="flex items-center gap-2 mt-1">
                                    <span
                                        class="text-xs font-bold uppercase tracking-wide text-green-600">Completed</span>
                                    <span class="text-gray-300">•</span>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">
                                        Thu, Nov 13, 5:14 PM
                                        <span class="text-xs italic text-gray-400 ml-1">(edited)</span>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div class="text-right pl-4">
                            <span
                                class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">FEEDER</span>
                            <span class="text-3xl font-black text-gray-300 dark:text-gray-600 leading-none">011</span>
                        </div>
                    </div>

                    <div class="px-5 pb-2">
                        <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-2">Restored!</p>

                        <div
                            class="w-full mt-4 bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 relative group-image cursor-pointer view-image-trigger">
                            <img src="https://ziuteulziywsangbnkgn.supabase.co/storage/v1/object/public/announcements_images/public/1763053965618-574570604_892776756430086_2054707673346808449_n.jpg"
                                class="w-full h-auto max-h-125 object-contain bg-gray-50 dark:bg-gray-800">

                        </div>

                    </div>

                    <div class="px-5 py-3 bg-gray-50 dark:bg-gray-900/30 border-t dark:border-gray-700 flex gap-3 mt-2">
                        <button
                            class="flex-1 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-sm font-bold hover:bg-gray-50 transition outage-card-trigger"
                            data-id="49">
                            View Details
                        </button>
                        <button
                            class="flex-1 py-2 rounded-lg bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition update-btn"
                            data-id="49">
                            Manage
                        </button>
                    </div>
                </div>

                <div id="report-41"
                    class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow cursor-pointer outage-card-trigger"
                    data-id="41">

                    <div class="p-5 pb-2 flex justify-between items-start">
                        <div class="flex items-start gap-3">
                            <div
                                class="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 mt-1">
                                <span class="material-icons text-xl">check_circle</span>
                            </div>
                            <div>
                                <h3 class="leading-tight">
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Damaged Line </span>
                                    <span class="text-gray-400 font-normal mx-1 text-sm">at</span>
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Bakakeng North</span>
                                </h3>
                                <div class="flex items-center gap-2 mt-1">
                                    <span
                                        class="text-xs font-bold uppercase tracking-wide text-green-600">Completed</span>
                                    <span class="text-gray-300">•</span>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">
                                        Tue, Nov 4, 9:07 PM
                                        <span class="text-xs italic text-gray-400 ml-1">(edited)</span>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div class="text-right pl-4">
                            <span
                                class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">FEEDER</span>
                            <span class="text-3xl font-black text-gray-300 dark:text-gray-600 leading-none">012</span>
                        </div>
                    </div>

                    <div class="px-5 pb-2">
                        <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-2">Ongoing restoration</p>

                    </div>

                    <div class="px-5 py-3 bg-gray-50 dark:bg-gray-900/30 border-t dark:border-gray-700 flex gap-3 mt-2">
                        <button
                            class="flex-1 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-sm font-bold hover:bg-gray-50 transition outage-card-trigger"
                            data-id="41">
                            View Details
                        </button>
                        <button
                            class="flex-1 py-2 rounded-lg bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition update-btn"
                            data-id="41">
                            Manage
                        </button>
                    </div>
                </div>

                <div id="report-39"
                    class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow cursor-pointer outage-card-trigger"
                    data-id="39">

                    <div class="p-5 pb-2 flex justify-between items-start">
                        <div class="flex items-start gap-3">
                            <div
                                class="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 mt-1">
                                <span class="material-icons text-xl">check_circle</span>
                            </div>
                            <div>
                                <h3 class="leading-tight">
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Felled Tree</span>
                                    <span class="text-gray-400 font-normal mx-1 text-sm">at</span>
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Gibraltar</span>
                                </h3>
                                <div class="flex items-center gap-2 mt-1">
                                    <span
                                        class="text-xs font-bold uppercase tracking-wide text-green-600">Completed</span>
                                    <span class="text-gray-300">•</span>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">
                                        Tue, Nov 4, 8:48 PM
                                        <span class="text-xs italic text-gray-400 ml-1">(edited)</span>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div class="text-right pl-4">
                            <span
                                class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">FEEDER</span>
                            <span class="text-3xl font-black text-gray-300 dark:text-gray-600 leading-none">012</span>
                        </div>
                    </div>

                    <div class="px-5 pb-2">
                        <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-2">Felled Tree</p>

                    </div>

                    <div class="px-5 py-3 bg-gray-50 dark:bg-gray-900/30 border-t dark:border-gray-700 flex gap-3 mt-2">
                        <button
                            class="flex-1 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-sm font-bold hover:bg-gray-50 transition outage-card-trigger"
                            data-id="39">
                            View Details
                        </button>
                        <button
                            class="flex-1 py-2 rounded-lg bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition update-btn"
                            data-id="39">
                            Manage
                        </button>
                    </div>
                </div>

                <div id="report-37"
                    class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow cursor-pointer outage-card-trigger"
                    data-id="37">

                    <div class="p-5 pb-2 flex justify-between items-start">
                        <div class="flex items-start gap-3">
                            <div
                                class="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 mt-1">
                                <span class="material-icons text-xl">check_circle</span>
                            </div>
                            <div>
                                <h3 class="leading-tight">
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Ongoing
                                        Inspection</span>
                                    <span class="text-gray-400 font-normal mx-1 text-sm">at</span>
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Gibraltar</span>
                                </h3>
                                <div class="flex items-center gap-2 mt-1">
                                    <span
                                        class="text-xs font-bold uppercase tracking-wide text-green-600">Completed</span>
                                    <span class="text-gray-300">•</span>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">
                                        Tue, Nov 4, 8:25 PM
                                        <span class="text-xs italic text-gray-400 ml-1">(edited)</span>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div class="text-right pl-4">
                            <span
                                class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">FEEDER</span>
                            <span class="text-3xl font-black text-gray-300 dark:text-gray-600 leading-none">011</span>
                        </div>
                    </div>

                    <div class="px-5 pb-2">
                        <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-2">Restored</p>

                    </div>

                    <div class="px-5 py-3 bg-gray-50 dark:bg-gray-900/30 border-t dark:border-gray-700 flex gap-3 mt-2">
                        <button
                            class="flex-1 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-sm font-bold hover:bg-gray-50 transition outage-card-trigger"
                            data-id="37">
                            View Details
                        </button>
                        <button
                            class="flex-1 py-2 rounded-lg bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition update-btn"
                            data-id="37">
                            Manage
                        </button>
                    </div>
                </div>

                <div id="report-38"
                    class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow cursor-pointer outage-card-trigger"
                    data-id="38">

                    <div class="p-5 pb-2 flex justify-between items-start">
                        <div class="flex items-start gap-3">
                            <div
                                class="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 mt-1">
                                <span class="material-icons text-xl">check_circle</span>
                            </div>
                            <div>
                                <h3 class="leading-tight">
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Ongoing
                                        Inspection</span>
                                    <span class="text-gray-400 font-normal mx-1 text-sm">at</span>
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Camp 7</span>
                                </h3>
                                <div class="flex items-center gap-2 mt-1">
                                    <span
                                        class="text-xs font-bold uppercase tracking-wide text-green-600">Completed</span>
                                    <span class="text-gray-300">•</span>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">
                                        Tue, Nov 4, 8:11 PM
                                        <span class="text-xs italic text-gray-400 ml-1">(edited)</span>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div class="text-right pl-4">
                            <span
                                class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">FEEDER</span>
                            <span class="text-3xl font-black text-gray-300 dark:text-gray-600 leading-none">012</span>
                        </div>
                    </div>

                    <div class="px-5 pb-2">
                        <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-2">Restored!</p>

                    </div>

                    <div class="px-5 py-3 bg-gray-50 dark:bg-gray-900/30 border-t dark:border-gray-700 flex gap-3 mt-2">
                        <button
                            class="flex-1 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-sm font-bold hover:bg-gray-50 transition outage-card-trigger"
                            data-id="38">
                            View Details
                        </button>
                        <button
                            class="flex-1 py-2 rounded-lg bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition update-btn"
                            data-id="38">
                            Manage
                        </button>
                    </div>
                </div>

                <div id="report-36"
                    class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow cursor-pointer outage-card-trigger"
                    data-id="36">

                    <div class="p-5 pb-2 flex justify-between items-start">
                        <div class="flex items-start gap-3">
                            <div
                                class="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 mt-1">
                                <span class="material-icons text-xl">check_circle</span>
                            </div>
                            <div>
                                <h3 class="leading-tight">
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">damaged-line</span>
                                    <span class="text-gray-400 font-normal mx-1 text-sm">at</span>
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Bakakeng
                                        Central</span>
                                </h3>
                                <div class="flex items-center gap-2 mt-1">
                                    <span
                                        class="text-xs font-bold uppercase tracking-wide text-green-600">Completed</span>
                                    <span class="text-gray-300">•</span>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">
                                        Tue, Nov 4, 7:30 PM
                                        <span class="text-xs italic text-gray-400 ml-1">(edited)</span>
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div class="px-5 pb-2">
                        <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-2">TEST 123</p>

                    </div>

                    <div class="px-5 py-3 bg-gray-50 dark:bg-gray-900/30 border-t dark:border-gray-700 flex gap-3 mt-2">
                        <button
                            class="flex-1 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-sm font-bold hover:bg-gray-50 transition outage-card-trigger"
                            data-id="36">
                            View Details
                        </button>
                        <button
                            class="flex-1 py-2 rounded-lg bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition update-btn"
                            data-id="36">
                            Manage
                        </button>
                    </div>
                </div>

                <div id="report-35"
                    class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow cursor-pointer outage-card-trigger"
                    data-id="35">

                    <div class="p-5 pb-2 flex justify-between items-start">
                        <div class="flex items-start gap-3">
                            <div
                                class="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 mt-1">
                                <span class="material-icons text-xl">check_circle</span>
                            </div>
                            <div>
                                <h3 class="leading-tight">
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Outage</span>
                                    <span class="text-gray-400 font-normal mx-1 text-sm">at</span>
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Unknown Area</span>
                                </h3>
                                <div class="flex items-center gap-2 mt-1">
                                    <span
                                        class="text-xs font-bold uppercase tracking-wide text-green-600">Completed</span>
                                    <span class="text-gray-300">•</span>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">
                                        Tue, Nov 4, 7:12 PM
                                        <span class="text-xs italic text-gray-400 ml-1">(edited)</span>
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div class="px-5 pb-2">


                    </div>

                    <div class="px-5 py-3 bg-gray-50 dark:bg-gray-900/30 border-t dark:border-gray-700 flex gap-3 mt-2">
                        <button
                            class="flex-1 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-sm font-bold hover:bg-gray-50 transition outage-card-trigger"
                            data-id="35">
                            View Details
                        </button>
                        <button
                            class="flex-1 py-2 rounded-lg bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition update-btn"
                            data-id="35">
                            Manage
                        </button>
                    </div>
                </div>

                <div id="report-5"
                    class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow cursor-pointer outage-card-trigger"
                    data-id="5">

                    <div class="p-5 pb-2 flex justify-between items-start">
                        <div class="flex items-start gap-3">
                            <div
                                class="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 mt-1">
                                <span class="material-icons text-xl">check_circle</span>
                            </div>
                            <div>
                                <h3 class="leading-tight">
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Felled Tree</span>
                                    <span class="text-gray-400 font-normal mx-1 text-sm">at</span>
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Bakakeng North</span>
                                </h3>
                                <div class="flex items-center gap-2 mt-1">
                                    <span
                                        class="text-xs font-bold uppercase tracking-wide text-green-600">Completed</span>
                                    <span class="text-gray-300">•</span>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">
                                        Tue, Nov 4, 11:33 AM
                                        <span class="text-xs italic text-gray-400 ml-1">(edited)</span>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div class="text-right pl-4">
                            <span
                                class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">FEEDER</span>
                            <span class="text-3xl font-black text-gray-300 dark:text-gray-600 leading-none">012</span>
                        </div>
                    </div>

                    <div class="px-5 pb-2">
                        <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-2">Test123</p>

                    </div>

                    <div class="px-5 py-3 bg-gray-50 dark:bg-gray-900/30 border-t dark:border-gray-700 flex gap-3 mt-2">
                        <button
                            class="flex-1 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-sm font-bold hover:bg-gray-50 transition outage-card-trigger"
                            data-id="5">
                            View Details
                        </button>
                        <button
                            class="flex-1 py-2 rounded-lg bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition update-btn"
                            data-id="5">
                            Manage
                        </button>
                    </div>
                </div>

                <div id="report-4"
                    class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow cursor-pointer outage-card-trigger"
                    data-id="4">

                    <div class="p-5 pb-2 flex justify-between items-start">
                        <div class="flex items-start gap-3">
                            <div
                                class="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 mt-1">
                                <span class="material-icons text-xl">check_circle</span>
                            </div>
                            <div>
                                <h3 class="leading-tight">
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Felled Tree</span>
                                    <span class="text-gray-400 font-normal mx-1 text-sm">at</span>
                                    <span class="font-bold text-gray-900 dark:text-white text-lg">Camp 7</span>
                                </h3>
                                <div class="flex items-center gap-2 mt-1">
                                    <span
                                        class="text-xs font-bold uppercase tracking-wide text-green-600">Completed</span>
                                    <span class="text-gray-300">•</span>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">
                                        Tue, Nov 4, 10:13 AM
                                        <span class="text-xs italic text-gray-400 ml-1">(edited)</span>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div class="text-right pl-4">
                            <span
                                class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">FEEDER</span>
                            <span class="text-3xl font-black text-gray-300 dark:text-gray-600 leading-none">012</span>
                        </div>
                    </div>

                    <div class="px-5 pb-2">
                        <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-2">Outage restored. </p>

                    </div>

                    <div class="px-5 py-3 bg-gray-50 dark:bg-gray-900/30 border-t dark:border-gray-700 flex gap-3 mt-2">
                        <button
                            class="flex-1 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-sm font-bold hover:bg-gray-50 transition outage-card-trigger"
                            data-id="4">
                            View Details
                        </button>
                        <button
                            class="flex-1 py-2 rounded-lg bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition update-btn"
                            data-id="4">
                            Manage
                        </button>
                    </div>
                </div>
            </div>
            <div id="analyticsSidebar" class="lg:col-span-4 space-y-6 sticky top-4 z-10">
                <div
                    class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                    <div class="flex justify-between items-start">
                        <div>
                            <h4 class="text-xs font-bold uppercase tracking-wider text-gray-500">System Status</h4>
                            <p class="text-4xl font-black text-gray-800 dark:text-white mt-2">0</p>
                            <p class="text-sm text-gray-500">Active Incidents</p>
                        </div>
                        <div class="text-right">
                            <span class="h-3 w-3 rounded-full bg-green-500 inline-block"></span>
                            <p class="text-xl font-bold text-gray-800 dark:text-white mt-3">F-12</p>
                            <p class="text-xs text-gray-500">Top Feeder</p>
                        </div>
                    </div>
                </div>



                <div
                    class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                    <h4 class="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Hotspot Area</h4>
                    <div class="flex items-center gap-3">
                        <span class="material-icons text-orange-500">place</span>
                        <div>
                            <p class="font-bold text-gray-800 dark:text-white text-lg">Camp 7</p>
                            <p class="text-xs text-gray-400">Most active reports</p>
                        </div>
                    </div>
                </div>

                <div
                    class="bg-blue-50 dark:bg-blue-900/10 rounded-2xl p-6 border border-blue-100 dark:border-blue-800/30">
                    <h4 class="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
                        Suggestion</h4>
                    <p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        Grid status is nominal.
                    </p>
                </div>
            </div>
        </div>
        <div id="emptyState"
            class="hidden items-center justify-center py-16 text-center bg-white dark:bg-gray-800 rounded-2xl border border-dashed border-gray-300 dark:border-gray-700">
            <div class="w-20 h-20 bg-gray-50 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
                <span class="material-icons text-4xl text-gray-300">bolt</span>
            </div>
            <h3 class="text-lg font-bold text-gray-900 dark:text-white">No Outages Found</h3>
            <p class="text-gray-500 dark:text-gray-400 text-sm max-w-xs mt-1">There are no active outages matching your
                current filters.</p>
        </div>
    </div>
</template>