<template>
  <div class="min-h-screen bg-gradient-to-br to-emerald-100 text-gray-800">
    <header class="top-bar">
      <div
        class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
      >
        <!-- Logo & Title -->
        <div @click="openHome()" style="cursor: pointer">
          <img src="/favicon1.jpg" alt="Law firm Logo" class="h-20 w-50" />
          <!-- <h1 class="font-brand text-2xl text-emerald-600">Law firm</h1> -->
        </div>
        <!-- Desktop Nav -->
        <nav class="hidden md:flex" style="margin-left: 100px">
          <router-link
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="menu-item"
          >
            {{ link.label }}
          </router-link>
        </nav>

        <button style="margin-left: 100px" class="button">Контакти</button>

        <!-- MOBILE VIEW -->

        <!-- Mobile button -->
        <button
          class="text-green-700 focus:outline-none md:hidden"
          @click="showMenu = !showMenu"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <!-- Mobile menu -->
      <div
        v-if="showMenu"
        class="space-y-2 px-6 pb-4 text-lg font-semibold md:hidden"
      >
        <router-link
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          class="block"
          :class="
            $route.path === link.path
              ? 'text-emerald-600 underline'
              : 'text-green-800'
          "
          @click="showMenu = false"
        >
          {{ link.label }}
        </router-link>
      </div>

      <!-- MOBILE VIEW END -->
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
import { ref } from "vue";
const showMenu = ref(false);

const navLinks = [
  { path: "/about", label: "За нас" },
  { path: "/services", label: "Услуги" },
  { path: "/team", label: "Екип" },
  { path: "/articles", label: "Статии" },
  { path: "/projects", label: "Проекти" },
  { path: "/partners", label: "Партньори" },
];

const activeTab = ref("home");

function openHome() {
  window.location.href = "/";
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600&display=swap");

.font-brand {
  font-family: "Cormorant Garamond", serif;
}
</style>

<style></style>
