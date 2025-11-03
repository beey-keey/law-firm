<template>
  <div class="min-h-screen bg-gradient-to-br to-emerald-100 text-gray-800">
    <header class="top-bar">
      <div
        class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
      >
        <!-- Logo & Title -->
        <div @click="openHome()" style="cursor: pointer">
          <img src="/favicon1.jpg" alt="Law firm Logo" class="h-20 w-50" />
        </div>
        <!-- Nav Tabs: column on mobile, row on desktop -->
        <nav
          class="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-6"
        >
          <router-link
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="menu-item text-base"
            :class="
              $route.path === link.path
                ? 'text-emerald-600 underline'
                : 'text-green-800'
            "
          >
            {{ link.label }}
          </router-link>
        </nav>
        <!-- Contact Button (desktop) -->
        <button
          @click="openContactUs()"
          class="ml-4 px-5 py-2 rounded-full bg-emerald-600 text-white text-base font-semibold shadow hover:bg-emerald-700 transition hidden md:block"
        >
          Контакти
        </button>
        <!-- Contact Icon Button (mobile) -->
        <button
          @click="openContactUs()"
          class="ml-4 p-2 rounded-full hover:bg-emerald-100 focus:outline-none md:hidden"
          aria-label="Контакти"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7 text-emerald-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </button>
      </div>
    </header>

    <main class="p-6">
      <router-view />
      <footer class="mt-10 text-center text-sm text-gray-600">
        <!-- <p>&copy; 2025 Law firm.</p> -->
      </footer>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();

const navLinks = [
  { path: "/about", label: "За нас" },
  { path: "/services", label: "Услуги" },
  { path: "/team", label: "Екип" },
];

function openHome() {
  router.push("/");
}

function openContactUs() {
  router.push("/contact");
}
</script>
