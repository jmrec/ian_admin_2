<template>
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        <div class="lg:col-span-8">

            <div class="flex items-center justify-between mb-6">
                <div class="flex space-x-1 p-1 bg-gray-100 dark:bg-gray-800 rounded-xl">
                    <button id="filterAllBtn"
                        class="px-4 py-2 text-sm font-bold rounded-lg bg-white dark:bg-gray-700 shadow text-blue-600 dark:text-blue-400 transition-all">All</button>
                    <button id="filterUnreadBtn"
                        class="px-4 py-2 text-sm font-bold rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-700 hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-all">Unread</button>
                </div>

                <button id="markAllReadBtn"
                    class="text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1">
                    <span class="material-icons text-sm">done_all</span> Mark all as read
                </button>
            </div>

            <div id="notification-feed" class="space-y-4">
                <div id="feed-placeholder" class="flex flex-col items-center justify-center py-16 text-gray-400">
                    <span class="material-icons text-4xl mb-2">notifications_off</span>
                    <p class="text-sm font-medium">No new notifications</p>
                </div>
            </div>

        </div>

        <div class="lg:col-span-4 space-y-6 sticky top-4">

            <div
                class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 flex items-center justify-between">
                <div>
                    <h4 class="text-xs font-bold uppercase tracking-wider text-gray-500">Unread Count</h4>
                    <p id="unreadCountDisplay" class="text-4xl font-black text-gray-800 dark:text-white mt-2">0</p>
                </div>
                <div
                    class="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-500">
                    <span class="material-icons text-3xl">mark_chat_unread</span>
                </div>
            </div>

            <div class="bg-blue-600 rounded-2xl p-6 shadow-lg shadow-blue-600/20 text-white relative overflow-hidden">
                <span id="campaign"
                    class="material-icons absolute -right-4 -bottom-4 text-[8rem] opacity-10">campaign</span>
                <h4 class="font-bold text-lg mb-2 relative z-10">Stay Updated</h4>
                <p class="text-blue-100 text-sm leading-relaxed relative z-10 mb-4">
                    Notifications are generated automatically when reports are filed or statuses change.
                </p>
                <div class="flex gap-2">
                    <div
                        class="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1.5 text-xs font-medium flex items-center gap-1">
                        <span class="w-2 h-2 rounded-full bg-red-400"></span> Critical
                    </div>
                    <div
                        class="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1.5 text-xs font-medium flex items-center gap-1">
                        <span class="w-2 h-2 rounded-full bg-blue-400"></span> Update
                    </div>
                    <div
                        class="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1.5 text-xs font-medium flex items-center gap-1">
                        <span class="w-2 h-2 rounded-full bg-green-400"></span> Info
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<style scoped>
#campaign {
    -webkit-text-size-adjust: 100%;
    tab-size: 4;
    font-variation-settings: normal;
    -webkit-tap-highlight-color: transparent;
    --tw-bg-opacity: 1;
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity, 1));
    --tw-shadow-color: rgb(37 99 235 / 0.2);
    --tw-space-y-reverse: 0;
    --tw-border-spacing-x: 0;
    --tw-border-spacing-y: 0;
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    --tw-pan-x: ;
    --tw-pan-y: ;
    --tw-pinch-zoom: ;
    --tw-scroll-snap-strictness: proximity;
    --tw-gradient-from-position: ;
    --tw-gradient-via-position: ;
    --tw-gradient-to-position: ;
    --tw-ordinal: ;
    --tw-slashed-zero: ;
    --tw-numeric-figure: ;
    --tw-numeric-spacing: ;
    --tw-numeric-fraction: ;
    --tw-ring-inset: ;
    --tw-ring-offset-width: 0px;
    --tw-ring-offset-color: #fff;
    --tw-ring-color: rgb(59 130 246 / 0.5);
    --tw-ring-offset-shadow: 0 0 #0000;
    --tw-ring-shadow: 0 0 #0000;
    --tw-shadow: 0 0 #0000;
    --tw-shadow-colored: 0 0 #0000;
    --tw-blur: ;
    --tw-brightness: ;
    --tw-contrast: ;
    --tw-grayscale: ;
    --tw-hue-rotate: ;
    --tw-invert: ;
    --tw-saturate: ;
    --tw-sepia: ;
    --tw-drop-shadow: ;
    --tw-backdrop-blur: ;
    --tw-backdrop-brightness: ;
    --tw-backdrop-contrast: ;
    --tw-backdrop-grayscale: ;
    --tw-backdrop-hue-rotate: ;
    --tw-backdrop-invert: ;
    --tw-backdrop-opacity: ;
    --tw-backdrop-saturate: ;
    --tw-backdrop-sepia: ;
    --tw-contain-size: ;
    --tw-contain-layout: ;
    --tw-contain-paint: ;
    --tw-contain-style: ;
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: #e5e7eb;
    -webkit-font-feature-settings: 'liga';
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-smoothing: antialiased;
    position: absolute;
    bottom: -1rem;
    right: -1rem;
    font-size: 8rem;
    opacity: 0.1;
}
</style>