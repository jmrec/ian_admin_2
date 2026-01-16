<template>
    <div>
        <div
            class="bg-white dark:bg-gray-800 p-4 rounded-2xl border border-gray-100 dark:border-gray-700 flex flex-wrap items-center gap-4 shadow-sm mb-6 z-10">

            <div class="relative flex-grow max-w-lg">
                <input type="text" id="locationSearch" placeholder="Search map location, area, or landmark..."
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
                    class="absolute right-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-600 z-[1001] hidden p-4">
                    <div class="flex justify-between items-center mb-3 border-b dark:border-gray-700 pb-2">
                        <span class="text-xs font-bold text-gray-500 uppercase">Feeders</span>
                        <div class="flex gap-2">
                            <span id="feederSelectAll"
                                class="text-blue-600 text-xs cursor-pointer hover:underline font-bold">All</span>
                            <span class="text-gray-300">|</span>
                            <span id="feederClearAll"
                                class="text-red-500 text-xs cursor-pointer hover:underline font-bold">Clear</span>
                        </div>
                    </div>
                    <div id="feederButtonContainer" class="grid grid-cols-4 gap-2">
                        <button
                            class="feeder-toggle px-2 py-1 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-medium"
                            data-feeder="1">
                            Feeder 1
                        </button>

                        <button
                            class="feeder-toggle px-2 py-1 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-medium"
                            data-feeder="2">
                            Feeder 2
                        </button>

                        <button
                            class="feeder-toggle px-2 py-1 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-medium"
                            data-feeder="3">
                            Feeder 3
                        </button>

                        <button
                            class="feeder-toggle px-2 py-1 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-medium"
                            data-feeder="4">
                            Feeder 4
                        </button>

                        <button
                            class="feeder-toggle px-2 py-1 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-medium"
                            data-feeder="5">
                            Feeder 5
                        </button>

                        <button
                            class="feeder-toggle px-2 py-1 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-medium"
                            data-feeder="6">
                            Feeder 6
                        </button>

                        <button
                            class="feeder-toggle px-2 py-1 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-medium"
                            data-feeder="7">
                            Feeder 7
                        </button>

                        <button
                            class="feeder-toggle px-2 py-1 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-medium"
                            data-feeder="8">
                            Feeder 8
                        </button>

                        <button
                            class="feeder-toggle px-2 py-1 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-medium"
                            data-feeder="9">
                            Feeder 9
                        </button>

                        <button
                            class="feeder-toggle px-2 py-1 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-medium"
                            data-feeder="10">
                            Feeder 10
                        </button>

                        <button
                            class="feeder-toggle px-2 py-1 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-medium"
                            data-feeder="11">
                            Feeder 11
                        </button>

                        <button
                            class="feeder-toggle px-2 py-1 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-medium"
                            data-feeder="12">
                            Feeder 12
                        </button>

                        <button
                            class="feeder-toggle px-2 py-1 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-medium"
                            data-feeder="13">
                            Feeder 13
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div id="map"
            class="w-full grow min-h-150 rounded-3xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 z-0 relative leaflet-container leaflet-touch leaflet-retina leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom">
        </div>
        <p class="text-xs text-gray-400 mt-2 text-center">
            Map data © <a href="https://www.openstreetmap.org/copyright" target="_blank" class="underline">OpenStreetMap
                contributors</a>
        </p>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import L from 'leaflet';
import "leaflet/dist/leaflet.css";

const map = ref<L.Map | null>(null);

onMounted(() => {
    map.value = L.map('map').setView([16.4148, 120.5960], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map.value);

    L.marker([16.4148, 120.5960]).addTo(map.value)
        .bindPopup('Baguio City Center')
        .openPopup();
});
</script>