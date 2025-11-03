<template>
  <!-- Full-width hero image -->
  <div class="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
    <img
      src="/law-firm.webp"
      alt="Law Firm"
      class="w-full h-64 md:h-80 lg:h-96 xl:h-[500px] 2xl:h-[600px] object-cover"
    />
  </div>

  <div class="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-105">
    <HeroCard />
  </div>

  <div
    class="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-cover bg-center"
    :style="{ backgroundImage: `url('/law-firm/1.png')` }"
  >
    <!-- Dark overlay for better text contrast -->
    <div class="absolute inset-0 bg-black/30"></div>

    <!-- Content area -->
    <div class="relative z-10 py-16 md:py-24">
      <div class="max-w-6xl mx-auto px-4 md:px-6">
        <CorporateClients />
      </div>
    </div>
  </div>
  <div
    class="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-64"
  ></div>

  <div
    class="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-cover bg-center"
    :style="{ backgroundImage: `url('/law-firm/2.png')` }"
  >
    <!-- Dark overlay for better text contrast -->
    <div class="absolute inset-0 bg-black/30"></div>

    <!-- Content area -->
    <div class="relative z-10 py-16 md:py-24">
      <div class="max-w-6xl mx-auto px-4 md:px-6">
        <IndividualClients />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeroCard from "./HeroCard.vue";

import CorporateClients from "./CorporateClients.vue";
import IndividualClients from "./IndividualClients.vue";
</script>
