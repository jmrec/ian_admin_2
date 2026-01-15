<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
    <aside class="bg-slate-900 text-white flex flex-col shadow-2xl z-40 shrink-0 items-center py-6">
        <div class="mb-8">
            <RouterLink to="index"
                class="block w-14 h-14 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform bg-transparent">
                <img src="../assets/beacon.png" alt="BEACON Logo" class="w-full h-full object-cover block">
            </RouterLink>
        </div>

        <nav class="flex-1 w-full px-2 space-y-4 overflow-y-auto no-scrollbar overflow-x-hidden">
            <RouterLink to="dashboard"
                class="sidebar-link flex items-center text-gray-400 hover:bg-white/10 hover:text-white relative group">
                <span class="material-icons text-3xl">dashboard</span>
                <div
                    class="absolute left-full ml-4 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap z-50">
                    Dashboard</div>
            </RouterLink>
            <RouterLink to="reports"
                class="sidebar-link flex items-center text-gray-400 hover:bg-white/10 hover:text-white relative group">
                <span class="material-icons text-3xl">assessment</span>
                <div
                    class="absolute left-full ml-4 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap z-50">
                    Reports</div>
            </RouterLink>
            <RouterLink to="outages"
                class="sidebar-link flex items-center text-gray-400 hover:bg-white/10 hover:text-white relative group">
                <span class="material-icons text-3xl">warning</span>
                <div
                    class="absolute left-full ml-4 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap z-50">
                    Outages</div>
            </RouterLink>
            <RouterLink to="map"
                class="sidebar-link bg-primary flex items-center text-gray-400 hover:bg-white/10 hover:text-white relative group">
                <span class="material-icons text-3xl">map</span>
                <div
                    class="absolute left-full ml-4 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap z-50">
                    Map View</div>
            </RouterLink>
            <RouterLink to="notifications"
                class="sidebar-link flex items-center text-gray-400 hover:bg-white/10 hover:text-white relative group">
                <span class="material-icons text-3xl">notifications</span>
                <div
                    class="absolute left-full ml-4 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap z-50">
                    Notifications</div>
            </RouterLink>
            <RouterLink to="settings"
                class="sidebar-link flex items-center text-gray-400 hover:bg-white/10 hover:text-white relative group">
                <span class="material-icons text-3xl">settings</span>
                <div
                    class="absolute left-full ml-4 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap z-50">
                    Settings</div>
            </RouterLink>
        </nav>

        <div class="mt-auto mb-4 flex flex-col gap-4 items-center w-full border-t border-white/10 pt-6">
            <div id="profileDropdownWrapper" class="relative">
                <button id="profileTrigger"
                    class="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-500 hover:border-white transition">
                    <img id="adminProfile" src="https://via.placeholder.com/40" alt="Admin"
                        class="w-full h-full object-cover" />
                </button>
                <div id="profileDropdown"
                    class="hidden absolute left-14 bottom-0 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl z-50 p-2">
                    <RouterLink to="#" id="openProfileModalBtn"
                        class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 rounded">
                        Profile</RouterLink>
                    <RouterLink to="login" id="logoutBtn"
                        class="block px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/50 rounded">
                        Logout</RouterLink>
                </div>
            </div>
        </div>
    </aside>
</template>

<style scoped>
aside {
    width: 100px !important;
    z-index: 40;
    display: flex !important;
    flex-shrink: 0 !important;
    flex-direction: column !important;
    align-items: center !important;
    background-color: rgb(15 23 42) !important;
    /* Slate 900 */
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
    color: rgb(255 255 255) !important;
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;
}

.router-link-active::after {
    background-color: #F9FAFB !important;
    color: #007BFF !important;
    position: relative;
    box-shadow: -5px 5px 15px rgba(0, 0, 0, 0.05);
    border-top-right-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
    border-top-left-radius: 1rem !important;
    border-bottom-left-radius: 1rem !important;
    margin-right: -1px;
    z-index: 50;
}

.dark .router-link-active::after {
    background-color: #111827 !important;
    color: #60A5FA !important;
    box-shadow: none;
}

.router-link-active::after::after {
    content: '';
    position: absolute;
    right: -12px;
    top: 50%;
    transform: translateY(-50%);
    border-top: 12px solid transparent;
    border-bottom: 12px solid transparent;
    border-left: 12px solid #F9FAFB;
    z-index: 51;
}

.dark .router-link-active::after::after {
    border-left-color: #111827;
}

.sidebar-link span.ml-3 {
    display: none;
}

.sidebar-link {
    justify-content: center;
    flex-direction: column;
    height: 80px;
    width: 80px;
    margin: 0 auto 1rem auto;
    border-radius: 1rem;
    transition: all 0.3s ease;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
        opacity: 0;
    }

    60% {
        transform: scale(1.1);
        opacity: 1;
    }

    100% {
        transform: scale(1);
    }
}

.no-scrollbar::-webkit-scrollbar {
    display: none;
}

.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.animate-bounce-in {
    animation: bounce-in 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}

*,
::after,
::before {
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: #e5e7eb;
    /* Standard Gray-200 */
}

.text-3xl {
    font-size: 1.875rem;
    line-height: 2.25rem;
}
</style>