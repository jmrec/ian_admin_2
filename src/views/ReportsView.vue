<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';

const currentView = ref('feeders'); // 'feeders', 'barangays', 'individuals'
const currentFeederId = ref<number | null>(null);
const currentBarangay = ref<string | null>(null);
const selectedItems = ref(new Set<number>());
const feeders = ref([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
    { id: 12 },
    { id: 13 },
    { id: 14 },
]);
const isModalOpen = ref(false);
// const showScheduledDate = ref(false);
// const showDispatchSection = ref(false);
// const customCoordinatesEnabled = ref(false);
const modalFormData = ref({
    outageType: 'unscheduled',
    scheduledAt: '',
    cause: '',
    location: '',
    status: 'Reported',
    dispatchTeam: '',
    description: '',
    eta: '',
    coordinates: '',
    affectedBarangays: [] as string[]
});
const closeModal = () => {
    isModalOpen.value = false;
};
const feederBarangays = ref(['Barangay 1', 'Barangay 2', 'Barangay 3']);
const feederBarangaysLength = computed(() => feederBarangays.value.length);
const toggleBarangay = (barangay: string) => {
    const index = modalFormData.value.affectedBarangays.indexOf(barangay);
    if (index > -1) {
        modalFormData.value.affectedBarangays.splice(index, 1);
    } else {
        modalFormData.value.affectedBarangays.push(barangay);
    }
};
const selectAllBarangays = (e: Event) => {
    const checked = (e.target as HTMLInputElement).checked;
    modalFormData.value.affectedBarangays = checked ? [...feederBarangays.value] : [];
};
const showBarangayView = (feederId: number) => {
    currentFeederId.value = feederId;
    currentView.value = 'barangays';
    // Fetch your data here...
};

const handleBack = () => {
    if (currentView.value === 'individuals') {
        currentView.value = 'barangays';
    } else if (currentView.value === 'barangays') {
        currentView.value = 'feeders';
    }
};

// const handleBulkUpdate = () => {
//     if (selectedItems.value.size === 0) return;
//     (window as any).showUpdateModal(Array.from(selectedItems.value), 'reports', {
//         currentView: currentView.value,
//         currentFeederId: currentFeederId.value,
//         currentBarangay: currentBarangay.value
//     });
// };

const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'F5') {
        e.preventDefault();
    }
    if (e.key === 'Escape') {
        handleBack();
    }
};

const handleOutsideClick = (e: MouseEvent) => {
    const popup = document.getElementById('profileDropdown');
    const button = document.getElementById('profileTrigger');
    if (popup && button && !popup.contains(e.target as Node) && !button.contains(e.target as Node)) {
        popup.classList.add("hidden");
    }
};

onMounted(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleOutsideClick);
});

onUnmounted(() => {
    document.removeEventListener('keydown', handleKeyDown);
    document.removeEventListener('click', handleOutsideClick);
});
</script>

<template>
    <div id="feederTiles" v-if="currentView === 'feeders'"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-2">
        <div class="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer h-40 w-full feeder-tile"
            v-for="feeder in feeders" :key="feeder.id" @click="showBarangayView(feeder.id)">

            <div class="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-500 group-hover:w-3 transition-all duration-300">
            </div>

            <div class="h-full px-6 py-5 pl-8 flex flex-col justify-between relative z-10">

                <div class="flex justify-between items-start">
                    <div>
                        <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Substation
                            Area</p>
                        <h3 class="text-2xl font-bold text-gray-800 dark:text-white tracking-tight">Feeder {{ feeder.id
                            }}</h3>
                    </div>

                    <div
                        class="w-10 h-10 rounded-xl bg-gray-50 dark:bg-gray-700/50 flex items-center justify-center text-gray-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-inner">
                        <span class="material-icons">bolt</span>
                    </div>
                </div>

                <div class="flex items-center justify-between mt-auto">
                    <div
                        class="px-3 py-1.5 rounded-lg border bg-gray-50 text-gray-500 border-gray-100 dark:bg-gray-700/30 dark:text-gray-400 dark:border-gray-600 text-xs font-bold flex items-center gap-2">
                        <span class="relative flex h-2.5 w-2.5">

                            <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-gray-400"></span>
                        </span>
                        <span>0 Pending</span>
                    </div>

                    <span
                        class="material-icons text-gray-300 group-hover:text-blue-500 group-hover:translate-x-2 transition-transform duration-300 text-lg">arrow_forward</span>
                </div>
            </div>

            <div
                class="absolute -right-4 -bottom-8 text-[6rem] font-black text-gray-50 dark:text-gray-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none select-none leading-none z-0">
                {{ String(feeder.id).padStart(2, '0') }}
            </div>
        </div>


    </div>

    <div v-if="currentView !== 'feeders'" id="reportsContainer" class="mt-4 flex flex-col h-full">

        <div class="flex justify-between items-center mb-6">
            <div class="flex items-center gap-4">
                <button @click="handleBack" id="backBtn"
                    class="w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-gray-800 text-gray-500 hover:text-blue-600 hover:bg-blue-50 shadow-sm transition border border-gray-200 dark:border-gray-700">
                    <span class="material-icons">arrow_back</span>
                </button>
                <div>
                    <h3 id="reportsTitle" class="text-xl font-bold text-gray-800 dark:text-white">
                        Pending Reports - Feeder {{ currentFeederId }}
                    </h3>
                    <p class="text-xs text-gray-500">Manage outage reports for this area</p>
                </div>
            </div>

            <button @click="isModalOpen = true" id="createAnnouncementBtn"
                class="bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-xl shadow-lg shadow-green-500/30 transition flex items-center gap-2 font-medium text-sm">
                <span class="material-icons text-sm">add</span> New Announcement
            </button>
        </div>

        <div
            class="bg-white dark:bg-gray-800 p-4 rounded-t-2xl border-b dark:border-gray-700 flex flex-wrap justify-end items-center gap-4 shadow-sm">
            <div class="flex flex-wrap gap-3 w-full sm:w-auto">
                <div class="relative hidden">
                    <select id="statusFilter"
                        class="appearance-none bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-2 pl-4 pr-10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
                        <option value="all">All Statuses</option>
                        <option value="Reported">Reported</option>
                        <option value="Ongoing">Ongoing</option>
                        <option value="Completed">Completed</option>
                    </select>
                    <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <span class="material-icons text-gray-400 text-sm">expand_more</span>
                    </div>
                </div>

                <div class="relative">
                    <select id="sortFilter"
                        class="appearance-none bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-2 pl-4 pr-10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
                        <option value="id">Sort by ID</option>
                        <option value="volume-high">Highest Volume</option>
                        <option value="volume-low">Lowest Volume</option>
                        <option value="with-pictures" id="sortWithPictures" class="hidden">With Pictures</option>
                        <option value="with-coordinates" id="sortWithCoords" class="hidden">With Coordinates
                        </option>
                    </select>
                    <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <span class="material-icons text-gray-400 text-sm">expand_more</span>
                    </div>
                </div>

                <div class="relative grow sm:grow-0">
                    <input type="text" id="searchInput" placeholder="Search reports..."
                        class="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-2 pl-4 pr-10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-64 transition">
                    <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <span class="material-icons text-gray-400 text-sm">search</span>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="isModalOpen"
            class="fixed inset-0 bg-black/50 flex items-center justify-center z-9999 p-4 backdrop-blur-sm">
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col">
                <div class="flex justify-between items-center p-6 border-b dark:border-gray-700">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Update Report / Announce</h3>
                    <button @click="closeModal" type="button"
                        class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                        <span class="material-icons">close</span>
                    </button>
                </div>

                <form @submit.prevent="handleFormSubmit" class="p-6 space-y-4 overflow-y-auto no-scrollbar">
                    <div class="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                        <label class="block text-sm font-medium text-blue-700 dark:text-blue-300 mb-1">Feeder
                            Group</label>
                        <p class="text-lg font-semibold text-blue-600 dark:text-blue-400">Feeder {{ currentFeederId }}
                        </p>
                        <p class="text-xs text-blue-600 dark:text-blue-300 mt-1">{{ feederBarangays.length }} barangays
                            in this group</p>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Outage
                            Type</label>
                        <div class="flex space-x-4">
                            <label class="inline-flex items-center cursor-pointer">
                                <input type="radio" v-model="modalFormData.outageType" value="scheduled"
                                    class="form-radio text-blue-600">
                                <span class="ml-2 text-gray-700 dark:text-gray-300">Scheduled</span>
                            </label>
                            <label class="inline-flex items-center cursor-pointer">
                                <input type="radio" v-model="modalFormData.outageType" value="unscheduled"
                                    class="form-radio text-blue-600">
                                <span class="ml-2 text-gray-700 dark:text-gray-300">Unscheduled</span>
                            </label>
                        </div>
                    </div>

                    <div v-if="modalFormData.outageType === 'scheduled'" class="transition-all">
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Scheduled Date &
                            Time</label>
                        <input type="datetime-local" v-model="modalFormData.scheduledAt"
                            class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700">
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Cause</label>
                        <input type="text" v-model="modalFormData.cause"
                            class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700"
                            placeholder="e.g. Transformer Failure">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Location
                            (Text)</label>
                        <input type="text" v-model="modalFormData.location"
                            class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700"
                            placeholder="Purok / Area">
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Affected Areas <span id="affected-areas">(Feeder {{ currentFeederId }} - {{
                                feederBarangaysLength }}
                                barangays)</span>
                        </label>
                        <div class="flex items-center mb-3">
                            <input type="checkbox" id="selectAll" @change="selectAllBarangays"
                                :checked="modalFormData.affectedBarangays.length === feederBarangays.length && feederBarangays.length > 0"
                                class="h-4 w-4 text-blue-600 rounded border-gray-300 cursor-pointer">
                            <label for="selectAll" class="ml-2 text-sm text-gray-700 dark:text-gray-300 cursor-pointer">
                                Select All {{ feederBarangaysLength }} Barangays
                            </label>
                        </div>
                        <div
                            class="flex flex-wrap gap-2 p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700/50">
                            <button v-for="b in feederBarangays" :key="b" type="button" @click="toggleBarangay(b)"
                                :class="modalFormData.affectedBarangays.includes(b) ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'"
                                class="px-3 py-1.5 rounded-full text-sm font-medium transition">
                                {{ b }}
                            </button>
                        </div>
                    </div>

                    <div class="w-full">
                        <div class="">
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Set Status
                            </label>
                            <select v-model="modalFormData.status"
                                class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700">
                                <option value="Reported">Reported</option>
                                <option value="Ongoing">Ongoing</option>
                                <option value="Completed">Completed</option>
                            </select>
                        </div>
                        <div v-if="modalFormData.status === 'Ongoing'">
                            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Dispatch
                                Team</label>
                            <select v-model="modalFormData.dispatchTeam"
                                class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700">
                                <option value="alpha">Team Alpha</option>
                                <option value="beta">Team Beta</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label
                            class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Description</label>
                        <textarea v-model="modalFormData.description" rows="3"
                            class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700"></textarea>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Restoration
                            ETA</label>
                        <input type="datetime-local" v-model="modalFormData.eta"
                            class="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700">
                    </div>
                </form>

                <div
                    class="flex justify-end space-x-3 p-6 border-t dark:border-gray-700 bg-gray-50 dark:bg-gray-800 rounded-b-lg">
                    <button @click="closeModal" type="button"
                        class="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 rounded-md">Cancel</button>
                    <button type="submit"
                        class="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition">Update
                        Announcement</button>
                </div>
            </div>
        </div>

        <div
            class="bg-white dark:bg-gray-800 rounded-b-2xl shadow-sm overflow-hidden border border-t-0 border-gray-100 dark:border-gray-700">
            <div class="overflow-x-auto">
                <table class="w-full">
                    <thead class="bg-gray-50 dark:bg-gray-700/50">
                        <tr id="reportsThead"
                            class="text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider border-b dark:border-gray-700">
                            <th class="py-3 px-4 text-left text-sm font-medium text-gray-700 dark:text-gray-300 w-10">
                                <input type="checkbox" id="selectAllCheckbox"
                                    class="h-4 w-4 text-blue-600 rounded-full focus:ring-blue-500 border-gray-300">
                            </th>
                            <th class="py-3 px-4 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                                Barangay</th>
                            <th class="py-3 px-4 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                                Reports</th>
                            <th class="py-3 px-4 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                                Most Common Cause</th>
                            <th class="py-3 px-4 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                                Status</th>
                            <th class="py-3 px-4 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                                Coordinates</th>
                            <th class="py-3 px-4 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                                Actions</th>
                        </tr>
                    </thead>
                    <tbody id="reportsBody"
                        class="divide-y divide-gray-100 dark:divide-gray-700 text-sm text-gray-600 dark:text-gray-300">
                    </tbody>
                </table>
            </div>

            <div id="emptyState" class="p-12 text-center">
                <div
                    class="w-16 h-16 bg-gray-100 dark:bg-gray-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span class="material-icons text-gray-400 text-3xl">search_off</span>
                </div>
                <h3 class="text-gray-900 dark:text-white font-medium mb-1">No reports found</h3>
                <p class="text-gray-500 dark:text-gray-400 text-sm">Try adjusting your filters or search query.</p>
            </div>

            <div
                class="p-4 border-t dark:border-gray-700 flex justify-between items-center bg-gray-50 dark:bg-gray-800/50">
                <div class="text-xs text-gray-500 dark:text-gray-400">
                    Showing <span id="showingCount" class="font-medium">0</span> of <span id="totalCount"
                        class="font-medium">0</span>
                </div>
                <div class="flex space-x-2">
                    <button id="prevPage"
                        class="px-3 py-1.5 text-xs font-medium bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled="">
                        Previous
                    </button>
                    <button id="nextPage"
                        class="px-3 py-1.5 text-xs font-medium bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled="">
                        Next
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#affected-areas {
    --tw-text-opacity: 1;
    color: #60a5fa;
}
</style>