<template>
    <!-- KPI Tiles -->
    <div id="dashboardTiles" class="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-2">
        <!-- Total Reports -->
        <div
            class="group relative overflow-hidden rounded-4xl border border-white/50 dark:border-gray-700 bg-gradient-to-br from-white to-red-50 dark:from-gray-800 dark:to-red-900/10 p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div
                class="absolute -right-6 -bottom-6 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-500">
                <span class="material-icons text-[10rem] text-red-600">assignment_late</span>
            </div>
            <div class="relative z-10 flex justify-between items-start">
                <div>
                    <div
                        class="w-12 h-12 rounded-2xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center mb-4 text-red-600 dark:text-red-400">
                        <span class="material-icons text-2xl">assignment_late</span>
                    </div>
                    <h3 class="text-gray-500 dark:text-gray-400 font-medium text-sm uppercase tracking-wide">
                        Total Reports
                    </h3>
                    <p id="value-total" class="text-5xl font-black text-gray-800 dark:text-white mt-2 tracking-tight">2
                    </p>
                </div>
            </div>
            <div class="relative z-10 flex items-center mt-4 gap-2">
                <div id="trend-total"
                    class="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/60 dark:bg-gray-700/50 border border-red-100 dark:border-red-900/30 backdrop-blur-sm">
                    <span id="icon-total" class="material-icons text-sm text-red-600">arrow_upward</span>
                    <span id="trendPercent-total" class="text-xs font-bold text-red-600">100.0%</span>
                </div>
                <span class="text-xs text-gray-400 font-medium">vs previous period</span>
            </div>
        </div>

        <!-- Active Outages -->
        <div
            class="group relative overflow-hidden rounded-4xl border border-white/50 dark:border-gray-700 bg-gradient-to-br from-white to-orange-50 dark:from-gray-800 dark:to-orange-900/10 p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div
                class="absolute -right-6 -bottom-6 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-500">
                <span class="material-icons text-[10rem] text-orange-500">bolt</span>
            </div>
            <div class="relative z-10 flex justify-between items-start">
                <div>
                    <div
                        class="w-12 h-12 rounded-2xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mb-4 text-orange-600 dark:text-orange-400">
                        <span class="material-icons text-2xl">bolt</span>
                    </div>
                    <h3 class="text-gray-500 dark:text-gray-400 font-medium text-sm uppercase tracking-wide">
                        Active Outages
                    </h3>
                    <p id="value-active" class="text-5xl font-black text-gray-800 dark:text-white mt-2 tracking-tight">0
                    </p>
                </div>
            </div>
            <div class="relative z-10 flex items-center mt-4 gap-2">
                <div id="trend-active"
                    class="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/60 dark:bg-gray-700/50 border border-orange-100 dark:border-orange-900/30 backdrop-blur-sm">
                    <span id="icon-active" class="material-icons text-sm text-gray-500">horizontal_rule</span>
                    <span id="trendPercent-active" class="text-xs font-bold text-gray-500">0.0%</span>
                </div>
                <span class="text-xs text-gray-400 font-medium">vs previous period</span>
            </div>
        </div>

        <!-- Restored -->
        <div
            class="group relative overflow-hidden rounded-4xl border border-white/50 dark:border-gray-700 bg-gradient-to-br from-white to-emerald-50 dark:from-gray-800 dark:to-emerald-900/10 p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div
                class="absolute -right-6 -bottom-6 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-500">
                <span class="material-icons text-[10rem] text-emerald-500">check_circle</span>
            </div>
            <div class="relative z-10 flex justify-between items-start">
                <div>
                    <div
                        class="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-4 text-emerald-600 dark:text-emerald-400">
                        <span class="material-icons text-2xl">check_circle</span>
                    </div>
                    <h3 class="text-gray-500 dark:text-gray-400 font-medium text-sm uppercase tracking-wide">
                        Restored
                    </h3>
                    <p id="value-completed"
                        class="text-5xl font-black text-gray-800 dark:text-white mt-2 tracking-tight">23</p>
                </div>
            </div>
            <div class="relative z-10 flex items-center mt-4 gap-2">
                <div id="trend-completed"
                    class="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/60 dark:bg-gray-700/50 border border-emerald-100 dark:border-emerald-900/30 backdrop-blur-sm">
                    <span id="icon-completed" class="material-icons text-sm text-green-600">arrow_upward</span>
                    <span id="trendPercent-completed" class="text-xs font-bold text-green-600">53.3%</span>
                </div>
                <span class="text-xs text-gray-400 font-medium">vs previous period</span>
            </div>
        </div>
    </div>

    <!-- Recent Reports -->
    <div
        class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 mt-8 mb-6">
        <div class="flex justify-between items-center mb-4">
            <h4 class="font-bold text-lg text-gray-700 dark:text-gray-300">Recent Outage Reports</h4>
            <a href="reports.html" class="text-sm text-blue-500 hover:text-blue-600 font-medium">View All</a>
        </div>
        <div class="overflow-x-auto">
            <table id="reportsTable" class="w-full text-left">
                <thead>
                    <tr
                        class="text-xs text-gray-500 dark:text-gray-400 border-b dark:border-gray-700 uppercase tracking-wider">
                        <th class="py-3 px-4 font-medium">Report ID</th>
                        <th class="py-3 px-4 font-medium">Common Cause</th>
                        <th class="py-3 px-4 font-medium">Feeder</th>
                        <th class="py-3 px-4 font-medium">Reported</th>
                        <th class="py-3 px-4 font-medium">Status</th>
                        <th class="py-3 px-4 font-medium">Actions</th>
                    </tr>
                </thead>
                <tbody id="reportsBody" class="text-sm text-gray-600 dark:text-gray-300">
                    <tr class="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                        <td class="py-3 px-4 dark:text-gray-200">77</td>
                        <td class="py-3 px-4 dark:text-gray-300">Outage</td>
                        <td class="py-3 px-4 dark:text-gray-300">12</td>
                        <td class="py-3 px-4 dark:text-gray-300">1/9/2026 03:12 AM</td>
                        <td class="py-3 px-4">
                            <span
                                class="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                Completed
                            </span>
                        </td>
                        <td class="py-3 px-4">
                            <a href="outages.html?id=77" class="text-blue-600 hover:underline text-xs font-medium">
                                View
                            </a>
                        </td>
                    </tr>
                    <tr class="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                        <td class="py-3 px-4 dark:text-gray-200">76</td>
                        <td class="py-3 px-4 dark:text-gray-300">no-power</td>
                        <td class="py-3 px-4 dark:text-gray-300">12</td>
                        <td class="py-3 px-4 dark:text-gray-300">1/9/2026 03:11 AM</td>
                        <td class="py-3 px-4">
                            <span
                                class="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                Completed
                            </span>
                        </td>
                        <td class="py-3 px-4">
                            <a href="outages.html?id=76" class="text-blue-600 hover:underline text-xs font-medium">
                                View
                            </a>
                        </td>
                    </tr>
                    <tr class="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                        <td class="py-3 px-4 dark:text-gray-200">75</td>
                        <td class="py-3 px-4 dark:text-gray-300">Maintenance</td>
                        <td class="py-3 px-4 dark:text-gray-300">12</td>
                        <td class="py-3 px-4 dark:text-gray-300">1/8/2026 03:50 PM</td>
                        <td class="py-3 px-4">
                            <span
                                class="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                Completed
                            </span>
                        </td>
                        <td class="py-3 px-4">
                            <a href="outages.html?id=75" class="text-blue-600 hover:underline text-xs font-medium">
                                View
                            </a>
                        </td>
                    </tr>
                    <tr class="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                        <td class="py-3 px-4 dark:text-gray-200">74</td>
                        <td class="py-3 px-4 dark:text-gray-300">Blown transformer</td>
                        <td class="py-3 px-4 dark:text-gray-300">12</td>
                        <td class="py-3 px-4 dark:text-gray-300">1/8/2026 03:46 PM</td>
                        <td class="py-3 px-4">
                            <span
                                class="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                Completed
                            </span>
                        </td>
                        <td class="py-3 px-4">
                            <a href="outages.html?id=74" class="text-blue-600 hover:underline text-xs font-medium">
                                View
                            </a>
                        </td>
                    </tr>
                    <tr class="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                        <td class="py-3 px-4 dark:text-gray-200">73</td>
                        <td class="py-3 px-4 dark:text-gray-300">demo scheduled</td>
                        <td class="py-3 px-4 dark:text-gray-300">11</td>
                        <td class="py-3 px-4 dark:text-gray-300">1/8/2026 07:24 AM</td>
                        <td class="py-3 px-4">
                            <span
                                class="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                Completed
                            </span>
                        </td>
                        <td class="py-3 px-4">
                            <a href="outages.html?id=73" class="text-blue-600 hover:underline text-xs font-medium">
                                View
                            </a>
                        </td>
                    </tr>
                    <tr class="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                        <td class="py-3 px-4 dark:text-gray-200">72</td>
                        <td class="py-3 px-4 dark:text-gray-300">scheduled demo</td>
                        <td class="py-3 px-4 dark:text-gray-300">11</td>
                        <td class="py-3 px-4 dark:text-gray-300">1/8/2026 07:22 AM</td>
                        <td class="py-3 px-4">
                            <span
                                class="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                Completed
                            </span>
                        </td>
                        <td class="py-3 px-4">
                            <a href="outages.html?id=72" class="text-blue-600 hover:underline text-xs font-medium">
                                View
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="flex justify-center items-center mt-6 space-x-4">
            <button id="prevPage"
                class="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-200 text-sm px-4 py-2 rounded-lg disabled:opacity-50 hover:bg-gray-200 transition">
                Previous
            </button>
            <span id="pageIndicator"
                class="text-gray-700 dark:text-gray-300 text-xs font-semibold uppercase tracking-wide">
                Page 1 of 1
            </span>
            <button id="nextPage"
                class="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-200 text-sm px-4 py-2 rounded-lg disabled:opacity-50 hover:bg-gray-200 transition">
                Next
            </button>
        </div>
    </div>

    <!-- Analytics & Forecasting -->
    <div class="flex flex-col sm:flex-row justify-between items-center mb-4 mt-8 gap-4">
        <h3 class="text-xl font-bold text-gray-800 dark:text-white">Analytics Overview</h3>

        <div class="flex items-center gap-2">
            <!-- New Date Range Picker -->
            <div class="relative z-100">
                <button id="dateRangeBtn"
                    class="bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-200 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-lg flex items-center gap-2 text-sm shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                    <span class="material-icons text-base text-gray-400">date_range</span>
                    <span id="dateRangeLabel">2025-12-16 - 2026-01-15</span>
                    <span class="material-icons text-base text-gray-400">expand_more</span>
                </button>

                <div id="dateRangeDropdown"
                    class="hidden absolute right-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 p-4 z-50">
                    <div class="space-y-3">
                        <div>
                            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Start
                                Date</label>
                            <input type="date" id="rangeStart"
                                class="w-full p-2 text-sm border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none">
                        </div>
                        <div>
                            <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">End
                                Date</label>
                            <input type="date" id="rangeEnd"
                                class="w-full p-2 text-sm border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none">
                        </div>
                        <button id="applyDateRangeBtn"
                            class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-medium transition shadow-md shadow-blue-500/20">
                            Apply Range
                        </button>
                    </div>
                </div>
            </div>

            <button id="downloadReportBtn"
                class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition shadow-sm shadow-blue-500/30">
                <span class="material-icons text-sm">picture_as_pdf</span>
                <span class="text-sm font-medium">Download Report</span>
            </button>
        </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-8">
        <!-- Outages per Feeder -->
        <div
            class="lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col">
            <div class="flex justify-between items-center mb-4">
                <h4 class="font-bold text-gray-700 dark:text-gray-300 text-sm uppercase tracking-wide">
                    Outages per Feeder
                </h4>
                <div class="relative">
                    <button id="feederFilterBtn"
                        class="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-xs font-medium flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                        <span class="material-icons text-xs">filter_list</span>
                        Filter
                    </button>
                    <div id="feederFilterPopup"
                        class="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl z-50 hidden">
                        <div class="p-4 border-b border-gray-200 dark:border-gray-700">
                            <h5 class="font-semibold text-gray-800 dark:text-gray-200">Filter by Feeder</h5>
                            <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                Select feeders to display
                            </p>
                        </div>
                        <div
                            class="flex justify-between items-center p-3 border-b border-gray-200 dark:border-gray-700">
                            <button id="feederSelectAll"
                                class="text-blue-600 dark:text-blue-400 text-sm font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                                Select All
                            </button>
                            <button id="feederClear"
                                class="text-red-600 dark:text-red-400 text-sm font-medium hover:text-red-700 dark:hover:text-red-300 transition-colors">
                                Clear All
                            </button>
                        </div>
                        <div class="max-h-60 overflow-y-auto p-2">
                            <div id="feederList" class="space-y-1"><label
                                    class="flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                                    <input type="checkbox" value="1" checked=""
                                        class="form-checkbox text-blue-600 feeder-checkbox">
                                    <span class="text-sm text-gray-700 dark:text-gray-200">Feeder 1</span>
                                </label><label
                                    class="flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                                    <input type="checkbox" value="10" checked=""
                                        class="form-checkbox text-blue-600 feeder-checkbox">
                                    <span class="text-sm text-gray-700 dark:text-gray-200">Feeder 10</span>
                                </label><label
                                    class="flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                                    <input type="checkbox" value="11" checked=""
                                        class="form-checkbox text-blue-600 feeder-checkbox">
                                    <span class="text-sm text-gray-700 dark:text-gray-200">Feeder 11</span>
                                </label><label
                                    class="flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                                    <input type="checkbox" value="12" checked=""
                                        class="form-checkbox text-blue-600 feeder-checkbox">
                                    <span class="text-sm text-gray-700 dark:text-gray-200">Feeder 12</span>
                                </label><label
                                    class="flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                                    <input type="checkbox" value="13" checked=""
                                        class="form-checkbox text-blue-600 feeder-checkbox">
                                    <span class="text-sm text-gray-700 dark:text-gray-200">Feeder 13</span>
                                </label><label
                                    class="flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                                    <input type="checkbox" value="2" checked=""
                                        class="form-checkbox text-blue-600 feeder-checkbox">
                                    <span class="text-sm text-gray-700 dark:text-gray-200">Feeder 2</span>
                                </label><label
                                    class="flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                                    <input type="checkbox" value="3" checked=""
                                        class="form-checkbox text-blue-600 feeder-checkbox">
                                    <span class="text-sm text-gray-700 dark:text-gray-200">Feeder 3</span>
                                </label><label
                                    class="flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                                    <input type="checkbox" value="4" checked=""
                                        class="form-checkbox text-blue-600 feeder-checkbox">
                                    <span class="text-sm text-gray-700 dark:text-gray-200">Feeder 4</span>
                                </label><label
                                    class="flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                                    <input type="checkbox" value="5" checked=""
                                        class="form-checkbox text-blue-600 feeder-checkbox">
                                    <span class="text-sm text-gray-700 dark:text-gray-200">Feeder 5</span>
                                </label><label
                                    class="flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                                    <input type="checkbox" value="6" checked=""
                                        class="form-checkbox text-blue-600 feeder-checkbox">
                                    <span class="text-sm text-gray-700 dark:text-gray-200">Feeder 6</span>
                                </label><label
                                    class="flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                                    <input type="checkbox" value="7" checked=""
                                        class="form-checkbox text-blue-600 feeder-checkbox">
                                    <span class="text-sm text-gray-700 dark:text-gray-200">Feeder 7</span>
                                </label><label
                                    class="flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                                    <input type="checkbox" value="8" checked=""
                                        class="form-checkbox text-blue-600 feeder-checkbox">
                                    <span class="text-sm text-gray-700 dark:text-gray-200">Feeder 8</span>
                                </label><label
                                    class="flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                                    <input type="checkbox" value="9" checked=""
                                        class="form-checkbox text-blue-600 feeder-checkbox">
                                    <span class="text-sm text-gray-700 dark:text-gray-200">Feeder 9</span>
                                </label></div>
                        </div>
                        <div
                            class="p-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 rounded-b-lg">
                            <button id="feederApply"
                                class="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded text-sm font-medium transition-colors">
                                Apply Filters
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="chart-wrapper h-72 w-full relative">
                <canvas id="feederChartCanvas" class="w-full h-full" width="1206" height="576"
                    style="display: block; box-sizing: border-box; height: 288px; width: 603px;"></canvas>
            </div>
            <p id="feederChartLabel" class="mt-auto text-xs text-gray-400 text-center">
                All feeders selected
            </p>
        </div>

        <!-- Restoration Time -->
        <div
            class="lg:col-span-3 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col">
            <div class="flex justify-between items-center mb-4">
                <h4 class="font-bold text-gray-700 dark:text-gray-300 text-sm uppercase tracking-wide">
                    Avg. Restoration Time (Hours)
                </h4>
                <div class="relative">
                    <button id="restorationFilterBtn"
                        class="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-xs font-medium flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                        <span class="material-icons text-xs">filter_list</span>
                        Filter
                    </button>
                    <div id="restorationFilterPopup"
                        class="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl z-50 hidden">
                        <div class="p-4 border-b border-gray-200 dark:border-gray-700">
                            <h5 class="font-semibold text-gray-800 dark:text-gray-200">Filter by Feeder</h5>
                        </div>
                        <div
                            class="flex justify-between items-center p-3 border-b border-gray-200 dark:border-gray-700">
                            <button id="restorationSelectAll" class="text-blue-600 text-sm font-medium">
                                Select All
                            </button>
                            <button id="restorationClear" class="text-red-600 text-sm font-medium">
                                Clear All
                            </button>
                        </div>
                        <div class="max-h-60 overflow-y-auto p-2">
                            <div id="restorationFeederList" class="space-y-1"><label
                                    class="flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                                    <input type="checkbox" value="1" checked=""
                                        class="form-checkbox text-blue-600 feeder-checkbox">
                                    <span class="text-sm text-gray-700 dark:text-gray-200">Feeder 1</span>
                                </label><label
                                    class="flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                                    <input type="checkbox" value="10" checked=""
                                        class="form-checkbox text-blue-600 feeder-checkbox">
                                    <span class="text-sm text-gray-700 dark:text-gray-200">Feeder 10</span>
                                </label><label
                                    class="flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                                    <input type="checkbox" value="11" checked=""
                                        class="form-checkbox text-blue-600 feeder-checkbox">
                                    <span class="text-sm text-gray-700 dark:text-gray-200">Feeder 11</span>
                                </label><label
                                    class="flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                                    <input type="checkbox" value="12" checked=""
                                        class="form-checkbox text-blue-600 feeder-checkbox">
                                    <span class="text-sm text-gray-700 dark:text-gray-200">Feeder 12</span>
                                </label><label
                                    class="flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                                    <input type="checkbox" value="13" checked=""
                                        class="form-checkbox text-blue-600 feeder-checkbox">
                                    <span class="text-sm text-gray-700 dark:text-gray-200">Feeder 13</span>
                                </label><label
                                    class="flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                                    <input type="checkbox" value="2" checked=""
                                        class="form-checkbox text-blue-600 feeder-checkbox">
                                    <span class="text-sm text-gray-700 dark:text-gray-200">Feeder 2</span>
                                </label><label
                                    class="flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                                    <input type="checkbox" value="3" checked=""
                                        class="form-checkbox text-blue-600 feeder-checkbox">
                                    <span class="text-sm text-gray-700 dark:text-gray-200">Feeder 3</span>
                                </label><label
                                    class="flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                                    <input type="checkbox" value="4" checked=""
                                        class="form-checkbox text-blue-600 feeder-checkbox">
                                    <span class="text-sm text-gray-700 dark:text-gray-200">Feeder 4</span>
                                </label><label
                                    class="flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                                    <input type="checkbox" value="5" checked=""
                                        class="form-checkbox text-blue-600 feeder-checkbox">
                                    <span class="text-sm text-gray-700 dark:text-gray-200">Feeder 5</span>
                                </label><label
                                    class="flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                                    <input type="checkbox" value="6" checked=""
                                        class="form-checkbox text-blue-600 feeder-checkbox">
                                    <span class="text-sm text-gray-700 dark:text-gray-200">Feeder 6</span>
                                </label><label
                                    class="flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                                    <input type="checkbox" value="7" checked=""
                                        class="form-checkbox text-blue-600 feeder-checkbox">
                                    <span class="text-sm text-gray-700 dark:text-gray-200">Feeder 7</span>
                                </label><label
                                    class="flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                                    <input type="checkbox" value="8" checked=""
                                        class="form-checkbox text-blue-600 feeder-checkbox">
                                    <span class="text-sm text-gray-700 dark:text-gray-200">Feeder 8</span>
                                </label><label
                                    class="flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                                    <input type="checkbox" value="9" checked=""
                                        class="form-checkbox text-blue-600 feeder-checkbox">
                                    <span class="text-sm text-gray-700 dark:text-gray-200">Feeder 9</span>
                                </label></div>
                        </div>
                        <div
                            class="p-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 rounded-b-lg">
                            <button id="restorationApply"
                                class="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded text-sm font-medium">
                                Apply Filters
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="chart-wrapper h-72 w-full relative">
                <canvas id="restorationChartCanvas" class="w-full h-full" width="1206" height="576"
                    style="display: block; box-sizing: border-box; height: 288px; width: 603px;"></canvas>
            </div>
            <p id="restorationChartLabel" class="mt-auto text-xs text-gray-400 text-center">
                All feeders selected
            </p>
        </div>

        <!-- Advanced Metrics -->
        <h3 class="lg:col-span-5 text-xl font-bold mt-4 text-gray-800 dark:text-white">
            Advanced Metrics
        </h3>

        <div
            class="lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col">
            <h4 class="font-bold text-gray-700 dark:text-gray-300 text-sm uppercase tracking-wide mb-4">
                Root Cause Analysis
            </h4>
            <div class="h-64 w-full relative">
                <canvas id="rootCauseChart" class="w-full h-full" width="1206" height="512"
                    style="display: block; box-sizing: border-box; height: 256px; width: 603px;"></canvas>
            </div>
            <p class="text-xs text-gray-400 mt-2 text-center">
                Top reasons for outages
            </p>
        </div>

        <div
            class="lg:col-span-3 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col">
            <h4 class="font-bold text-gray-700 dark:text-gray-300 text-sm uppercase tracking-wide mb-4">
                Most Affected Barangays
            </h4>
            <div class="h-64 w-full relative">
                <canvas id="barangayImpactChart" class="w-full h-full" width="1206" height="512"
                    style="display: block; box-sizing: border-box; height: 256px; width: 603px;"></canvas>
            </div>
            <p class="text-xs text-gray-400 mt-2 text-center">
                Frequency of outages per area
            </p>
        </div>

        <div
            class="lg:col-span-3 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col">
            <h4 class="font-bold text-gray-700 dark:text-gray-300 text-sm uppercase tracking-wide mb-4">
                Peak Outage Times
            </h4>
            <div class="h-64 w-full relative">
                <canvas id="peakTimeChart" class="w-full h-full" width="1206" height="512"
                    style="display: block; box-sizing: border-box; height: 256px; width: 603px;"></canvas>
            </div>
            <p class="text-xs text-gray-400 mt-2 text-center">
                Bubble size indicates outage frequency
            </p>
        </div>

        <div
            class="lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col">
            <h4 class="font-bold text-gray-700 dark:text-gray-300 text-sm uppercase tracking-wide mb-4">
                Restoration Speed Trend (MTTR)
            </h4>
            <div class="h-64 w-full relative">
                <canvas id="mttrTrendChart" class="w-full h-full" width="1206" height="512"
                    style="display: block; box-sizing: border-box; height: 256px; width: 603px;"></canvas>
            </div>
            <p class="text-xs text-gray-400 mt-2 text-center">
                Avg. repair time (hours) over last 6 months
            </p>
        </div>

        <!-- NEW: Forecasting & Risk Outlook -->
        <div
            class="lg:col-span-5 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col mt-2">
            <div class="flex justify-between items-center mb-4">
                <h4 class="font-bold text-gray-700 dark:text-gray-300 text-sm uppercase tracking-wide">
                    Forecasting &amp; Risk Outlook (Next 7 Days)
                </h4>
                <span id="forecastHorizon" class="text-xs text-gray-400 dark:text-gray-500">
                    Horizon: 7 days, based on historical frequency
                </span>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <!-- Feeder Risk Forecast -->
                <div
                    class="bg-gray-50 dark:bg-gray-900/60 rounded-xl border border-gray-100 dark:border-gray-700 p-4 flex flex-col">
                    <div class="flex items-center justify-between mb-2">
                        <div class="flex items-center gap-2">
                            <span class="material-icons text-blue-500 text-xl">electrical_services</span>
                            <h5 class="font-semibold text-gray-700 dark:text-gray-200 text-sm uppercase tracking-wide">
                                Feeder Risk Forecast
                            </h5>
                        </div>
                        <span id="forecastFeederUpdated"
                            class="text-[10px] text-gray-400 uppercase tracking-wide">Updated: 1/16/2026, 7:33:41
                            AM</span>
                    </div>
                    <div class="h-48 relative">
                        <canvas id="feederForecastChart" class="w-full h-full" width="1138" height="384"
                            style="display: block; box-sizing: border-box; height: 192px; width: 569px;"></canvas>
                    </div>
                    <p id="feederForecastSummary" class="text-xs text-gray-500 dark:text-gray-400 mt-2">Highest risk
                        feeder: Feeder 12 (~70.0% of historical incidents).</p>
                </div>

                <!-- Barangay Risk Forecast -->
                <div
                    class="bg-gray-50 dark:bg-gray-900/60 rounded-xl border border-gray-100 dark:border-gray-700 p-4 flex flex-col">
                    <div class="flex items-center justify-between mb-2">
                        <div class="flex items-center gap-2">
                            <span class="material-icons text-rose-500 text-xl">location_city</span>
                            <h5 class="font-semibold text-gray-700 dark:text-gray-200 text-sm uppercase tracking-wide">
                                Barangay Risk Forecast
                            </h5>
                        </div>
                        <span id="forecastBarangayUpdated"
                            class="text-[10px] text-gray-400 uppercase tracking-wide">Updated: 1/16/2026, 7:33:41
                            AM</span>
                    </div>
                    <div class="h-48 relative">
                        <canvas id="barangayForecastChart" class="w-full h-full" width="1138" height="384"
                            style="display: block; box-sizing: border-box; height: 192px; width: 569px;"></canvas>
                    </div>
                    <p id="barangayForecastSummary" class="text-xs text-gray-500 dark:text-gray-400 mt-2">Barangay with
                        highest expected risk: Camp 7 (~10.9% of historical incidents).</p>
                </div>

                <!-- Restoration Likelihood & Text Insights -->
                <div
                    class="bg-gray-50 dark:bg-gray-900/60 rounded-xl border border-gray-100 dark:border-gray-700 p-4 flex flex-col">
                    <div class="flex items-center justify-between mb-2">
                        <div class="flex items-center gap-2">
                            <span class="material-icons text-emerald-500 text-xl">auto_fix_high</span>
                            <h5 class="font-semibold text-gray-700 dark:text-gray-200 text-sm uppercase tracking-wide">
                                Restoration Likelihood
                            </h5>
                        </div>
                        <span id="forecastRestorationUpdated"
                            class="text-[10px] text-gray-400 uppercase tracking-wide">Updated: 1/16/2026, 7:33:41
                            AM</span>
                    </div>
                    <div class="h-32 relative mb-3">
                        <canvas id="restorationForecastChart" class="w-full h-full" width="1138" height="256"
                            style="display: block; box-sizing: border-box; height: 128px; width: 569px;"></canvas>
                    </div>
                    <div class="mt-1 space-y-1 text-[11px] text-gray-500 dark:text-gray-400">
                        <p id="restorationForecastSummary">Historically, 0.0% of outages are restored in less than 8
                            hours.</p>
                        <p id="overallRiskBadge"
                            class="inline-flex items-center gap-1 px-2 py-1 rounded-full text-[11px] font-semibold bg-red-100 text-red-700">
                            <span class="material-icons text-xs">insights</span>Overall risk: HIGH
                        </p>
                    </div>
                </div>
            </div>

            <!-- Optional text table for top risky assets -->
            <div class="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4 text-xs">
                <div>
                    <h6 class="font-semibold text-gray-700 dark:text-gray-200 mb-1 flex items-center gap-1">
                        <span class="material-icons text-[14px] text-blue-500">trending_up</span>
                        Top Feeder Risk (Next 7 Days)
                    </h6>
                    <ul id="feederRiskList" class="space-y-1 text-gray-600 dark:text-gray-300">
                        <li>
                            <span class="font-semibold">Feeder 12</span>
                            – 70.0% share
                            <span
                                class="ml-1 inline-block px-1.5 py-0.5 rounded-full text-[10px] font-semibold bg-red-100 text-red-700">
                                HIGH
                            </span>
                        </li>
                        <li>
                            <span class="font-semibold">Feeder 11</span>
                            – 30.0% share
                            <span
                                class="ml-1 inline-block px-1.5 py-0.5 rounded-full text-[10px] font-semibold bg-amber-100 text-amber-700">
                                MEDIUM
                            </span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h6 class="font-semibold text-gray-700 dark:text-gray-200 mb-1 flex items-center gap-1">
                        <span class="material-icons text-[14px] text-rose-500">place</span>
                        Top Barangay Risk (Next 7 Days)
                    </h6>
                    <ul id="barangayRiskList" class="space-y-1 text-gray-600 dark:text-gray-300">
                        <li>
                            <span class="font-semibold">Camp 7</span>
                            – 10.9% share
                            <span
                                class="ml-1 inline-block px-1.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-700">
                                LOW
                            </span>
                        </li>
                        <li>
                            <span class="font-semibold">Camp 8</span>
                            – 6.3% share
                            <span
                                class="ml-1 inline-block px-1.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-700">
                                LOW
                            </span>
                        </li>
                        <li>
                            <span class="font-semibold">Ambiong</span>
                            – 4.7% share
                            <span
                                class="ml-1 inline-block px-1.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-700">
                                LOW
                            </span>
                        </li>
                        <li>
                            <span class="font-semibold">Gibraltar</span>
                            – 4.7% share
                            <span
                                class="ml-1 inline-block px-1.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-700">
                                LOW
                            </span>
                        </li>
                        <li>
                            <span class="font-semibold">Lualhati</span>
                            – 4.7% share
                            <span
                                class="ml-1 inline-block px-1.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-700">
                                LOW
                            </span>
                        </li>
                        <li>
                            <span class="font-semibold">Lucnab</span>
                            – 4.7% share
                            <span
                                class="ml-1 inline-block px-1.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-700">
                                LOW
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <!-- Heatmap -->
    <div
        class="lg:col-span-5 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col mb-8 relative">
        <h4 class="font-bold text-gray-700 dark:text-gray-300 text-sm uppercase tracking-wide mb-4">
            Outage Density Heatmap
        </h4>
        <div class="absolute top-6 right-6 z-400">
            <button id="heatmapFilterBtn"
                class="px-3 py-1.5 bg-white dark:bg-gray-700 rounded-lg text-xs font-medium shadow-md flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors relative">
                <span class="material-icons text-xs">filter_list</span>
                <span>Filter Map</span>
                <span class="material-icons text-[16px]">expand_more</span>
                <span class="hidden ml-2 text-[10px] text-gray-500 dark:text-gray-400">Pending only</span>
            </button>
            <div id="heatmapFilterPopup"
                class="hidden absolute right-0 mt-2 w-44 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 p-3 space-y-2 z-401">
                <label
                    class="flex items-center gap-2 cursor-pointer p-1 hover:bg-gray-50 dark:hover:bg-gray-700 rounded">
                    <input type="radio" name="heatmapFilter" value="pending" checked="">
                    <span class="text-gray-700 dark:text-gray-300 text-sm">Pending only</span>
                </label>
                <label
                    class="flex items-center gap-2 cursor-pointer p-1 hover:bg-gray-50 dark:hover:bg-gray-700 rounded">
                    <input type="radio" name="heatmapFilter" value="reportedongoing">
                    <span class="text-gray-700 dark:text-gray-300 text-sm">Reported &amp; Ongoing</span>
                </label>
                <label
                    class="flex items-center gap-2 cursor-pointer p-1 hover:bg-gray-50 dark:hover:bg-gray-700 rounded">
                    <input type="radio" name="heatmapFilter" value="all">
                    <span class="text-gray-700 dark:text-gray-300 text-sm">All</span>
                </label>
                <div class="border-t border-gray-200 dark:border-gray-700 my-1"></div>
                <label
                    class="flex items-center gap-2 cursor-pointer p-1 hover:bg-gray-50 dark:hover:bg-gray-700 rounded">
                    <input type="checkbox" id="heatmapUseDateRange">
                    <span class="text-gray-700 dark:text-gray-300 text-xs">Use selected date range</span>
                </label>
            </div>
        </div>
        <div id="map"
            class="w-full h-175 rounded-xl overflow-hidden shadow-inner bg-gray-100 dark:bg-gray-900 z-0 leaflet-container leaflet-touch leaflet-retina leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom"
            tabindex="0" style="position: relative;">
            <div class="leaflet-pane leaflet-map-pane" style="transform: translate3d(-300px, 0px, 0px);">
                <div class="leaflet-pane leaflet-tile-pane">
                    <div class="leaflet-layer " style="z-index: 1; opacity: 1;">
                        <div class="leaflet-tile-container leaflet-zoom-animated"
                            style="z-index: 18; transform: translate3d(0px, 0px, 0px) scale(1);"><img alt=""
                                src="https://c.tile.openstreetmap.org/13/6839/3717.png"
                                class="leaflet-tile leaflet-tile-loaded"
                                style="width: 256px; height: 256px; transform: translate3d(287px, 209px, 0px); opacity: 1;"><img
                                alt="" src="https://a.tile.openstreetmap.org/13/6840/3717.png"
                                class="leaflet-tile leaflet-tile-loaded"
                                style="width: 256px; height: 256px; transform: translate3d(543px, 209px, 0px); opacity: 1;"><img
                                alt="" src="https://b.tile.openstreetmap.org/13/6839/3716.png"
                                class="leaflet-tile leaflet-tile-loaded"
                                style="width: 256px; height: 256px; transform: translate3d(287px, -47px, 0px); opacity: 1;"><img
                                alt="" src="https://c.tile.openstreetmap.org/13/6840/3716.png"
                                class="leaflet-tile leaflet-tile-loaded"
                                style="width: 256px; height: 256px; transform: translate3d(543px, -47px, 0px); opacity: 1;"><img
                                alt="" src="https://a.tile.openstreetmap.org/13/6839/3718.png"
                                class="leaflet-tile leaflet-tile-loaded"
                                style="width: 256px; height: 256px; transform: translate3d(287px, 465px, 0px); opacity: 1;"><img
                                alt="" src="https://b.tile.openstreetmap.org/13/6840/3718.png"
                                class="leaflet-tile leaflet-tile-loaded"
                                style="width: 256px; height: 256px; transform: translate3d(543px, 465px, 0px); opacity: 1;"><img
                                alt="" src="https://b.tile.openstreetmap.org/13/6838/3717.png"
                                class="leaflet-tile leaflet-tile-loaded"
                                style="width: 256px; height: 256px; transform: translate3d(31px, 209px, 0px); opacity: 1;"><img
                                alt="" src="https://b.tile.openstreetmap.org/13/6841/3717.png"
                                class="leaflet-tile leaflet-tile-loaded"
                                style="width: 256px; height: 256px; transform: translate3d(799px, 209px, 0px); opacity: 1;"><img
                                alt="" src="https://a.tile.openstreetmap.org/13/6838/3716.png"
                                class="leaflet-tile leaflet-tile-loaded"
                                style="width: 256px; height: 256px; transform: translate3d(31px, -47px, 0px); opacity: 1;"><img
                                alt="" src="https://a.tile.openstreetmap.org/13/6841/3716.png"
                                class="leaflet-tile leaflet-tile-loaded"
                                style="width: 256px; height: 256px; transform: translate3d(799px, -47px, 0px); opacity: 1;"><img
                                alt="" src="https://c.tile.openstreetmap.org/13/6838/3718.png"
                                class="leaflet-tile leaflet-tile-loaded"
                                style="width: 256px; height: 256px; transform: translate3d(31px, 465px, 0px); opacity: 1;"><img
                                alt="" src="https://c.tile.openstreetmap.org/13/6841/3718.png"
                                class="leaflet-tile leaflet-tile-loaded"
                                style="width: 256px; height: 256px; transform: translate3d(799px, 465px, 0px); opacity: 1;"><img
                                alt="" src="https://a.tile.openstreetmap.org/13/6837/3717.png"
                                class="leaflet-tile leaflet-tile-loaded"
                                style="width: 256px; height: 256px; transform: translate3d(-225px, 209px, 0px); opacity: 1;"><img
                                alt="" src="https://c.tile.openstreetmap.org/13/6842/3717.png"
                                class="leaflet-tile leaflet-tile-loaded"
                                style="width: 256px; height: 256px; transform: translate3d(1055px, 209px, 0px); opacity: 1;"><img
                                alt="" src="https://c.tile.openstreetmap.org/13/6837/3716.png"
                                class="leaflet-tile leaflet-tile-loaded"
                                style="width: 256px; height: 256px; transform: translate3d(-225px, -47px, 0px); opacity: 1;"><img
                                alt="" src="https://b.tile.openstreetmap.org/13/6842/3716.png"
                                class="leaflet-tile leaflet-tile-loaded"
                                style="width: 256px; height: 256px; transform: translate3d(1055px, -47px, 0px); opacity: 1;"><img
                                alt="" src="https://b.tile.openstreetmap.org/13/6837/3718.png"
                                class="leaflet-tile leaflet-tile-loaded"
                                style="width: 256px; height: 256px; transform: translate3d(-225px, 465px, 0px); opacity: 1;"><img
                                alt="" src="https://a.tile.openstreetmap.org/13/6842/3718.png"
                                class="leaflet-tile leaflet-tile-loaded"
                                style="width: 256px; height: 256px; transform: translate3d(1055px, 465px, 0px); opacity: 1;">
                        </div>
                    </div>
                </div>
                <div class="leaflet-pane leaflet-overlay-pane"></div>
                <div class="leaflet-pane leaflet-shadow-pane"></div>
                <div class="leaflet-pane leaflet-marker-pane"></div>
                <div class="leaflet-pane leaflet-tooltip-pane"></div>
                <div class="leaflet-pane leaflet-popup-pane"></div>
                <div class="leaflet-proxy leaflet-zoom-animated"
                    style="transform: translate3d(1.7511e+06px, 951693px, 0px) scale(4096);"></div>
            </div>
            <div class="leaflet-control-container">
                <div class="leaflet-top leaflet-left">
                    <div class="leaflet-control-zoom leaflet-bar leaflet-control"><a class="leaflet-control-zoom-in"
                            href="#" title="Zoom in" role="button" aria-label="Zoom in" aria-disabled="false"><span
                                aria-hidden="true">+</span></a><a class="leaflet-control-zoom-out" href="#"
                            title="Zoom out" role="button" aria-label="Zoom out" aria-disabled="false"><span
                                aria-hidden="true">−</span></a></div>
                </div>
                <div class="leaflet-top leaflet-right"></div>
                <div class="leaflet-bottom leaflet-left"></div>
                <div class="leaflet-bottom leaflet-right">
                    <div class="leaflet-control-attribution leaflet-control"><a href="https://leafletjs.com"
                            title="A JavaScript library for interactive maps"><svg aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8"
                                class="leaflet-attribution-flag">
                                <path fill="#4C7BE1" d="M0 0h12v4H0z"></path>
                                <path fill="#FFD500" d="M0 4h12v3H0z"></path>
                                <path fill="#E0BC00" d="M0 7h12v1H0z"></path>
                            </svg> Leaflet</a> <span aria-hidden="true">|</span> © OpenStreetMap contributors</div>
                </div>
            </div>
        </div>
        <p class="text-xs text-gray-400 mt-2 text-center">
            Map data © <a href="https://www.openstreetmap.org/copyright" target="_blank" class="underline">OpenStreetMap
                contributors</a>
        </p>
    </div>

    <!-- Barangay breakdown (hidden section you already had) -->
    <div id="barangayBreakdown"
        class="hidden bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 mt-6">
        <h4 class="font-bold text-gray-700 dark:text-gray-300 text-sm uppercase tracking-wide mb-4">
            Barangay Report Breakdown
        </h4>
        <div class="overflow-x-auto">
            <table id="barangayTable" class="w-full text-left">
                <thead>
                    <tr
                        class="text-xs text-gray-500 dark:text-gray-400 border-b dark:border-gray-700 uppercase tracking-wide">
                        <th class="py-3 px-4 font-medium">Barangay</th>
                        <th class="py-3 px-4 font-medium">Total Reports</th>
                    </tr>
                </thead>
                <tbody id="barangayBody" class="text-sm text-gray-600 dark:text-gray-300"></tbody>
            </table>
        </div>
        <button id="backToDashboard"
            class="mt-6 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition text-sm font-medium">
            Back to Dashboard
        </button>
    </div>
</template>