<script setup lang="ts">
import { RouterView } from 'vue-router'
import SideBar from './components/SideBar.vue'
import { useRoute } from 'vue-router';
import { capitalize, computed } from 'vue';

const route = useRoute();
const path = computed(() => route.path);

function toTitleCase(str: string): string {
  str = str.toLowerCase();

  return str.replace(/(?:^|\s|-)\S/g, function (match) {
    return match.toUpperCase();
  });
}

function getTitleFromPath(path: string): string {
  if (path === '/map') {
    return 'Live Map';
  } else if (path === '/notifications') {
    return 'Inbox';
  } else {
    return toTitleCase(path.substring(1));
  }
}
</script>

<template>

  <body class="bg-gray-50 dark:bg-gray-900 font-display text-gray-800 dark:text-gray-200 overflow-hidden">
    <div class="flex h-screen w-full">
      <SideBar />
      <div class="flex-1 flex flex-col h-screen overflow-hidden relative bg-gray-50 dark:bg-gray-900 z-0">
        <header class="h-16 bg-transparent flex justify-between items-center px-8 py-4 shrink-0">
          <h2 class="text-2xl font-bold text-gray-800 dark:text-white tracking-tight">
            BEACON <span class="text-blue-600 capitalize">{{ getTitleFromPath(path) }}</span>
          </h2>
        </header>
        <main class="flex-1 overflow-y-auto px-8 pb-8 scroll-smooth">
          <RouterView />
        </main>
      </div>
    </div>
  </body>
</template>

<style>
.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
}
</style>

<!-- <style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style> -->
