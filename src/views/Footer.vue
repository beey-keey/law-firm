<template>
  <footer class="relative text-white">
    <!-- фон изображение + градиент -->
    <div class="absolute inset-0">
      <img
        :src="bgImage"
        class="w-full h-full object-cover opacity-50"
        alt=""
      />
      <div
        class="absolute inset-0 bg-gradient-to-r from-[#121826]/95 via-[#141a27]/90 to-[#121826]/95"
      ></div>
    </div>

    <div class="relative">
      <!-- горна част -->
      <div class="mx-auto max-w-6xl px-4 lg:px-6 py-10 lg:py-14">
        <div class="grid md:grid-cols-3 gap-10">
          <!-- колона 1: лого + контакти + социалки -->
          <div class="space-y-4">
            <LogoIcon class="h-12 w-12" />
            <div class="text-sm/6 text-slate-200">
              <a :href="`tel:${phoneRaw}`" class="block hover:underline">{{
                phone
              }}</a>
              <p class="mt-1">
                ул. „ Иван Вазов “ No 8, ет.1, оф.6, гр. Пазарджик,<br />
                България
              </p>
            </div>
            <div class="flex items-center gap-3 pt-1">
              <a
                v-for="s in socials"
                :key="s.label"
                :href="s.href"
                target="_blank"
                rel="noopener"
                class="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-white/20 hover:ring-white/40 transition"
              >
                <component :is="s.icon" class="h-4 w-4" />
                <span class="sr-only">{{ s.label }}</span>
              </a>
            </div>
          </div>

          <!-- колона 2-3: услуги в две колони -->
          <div class="md:col-span-2 grid sm:grid-cols-2 gap-6">
            <div>
              <h3
                class="text-sm font-semibold tracking-widest uppercase text-slate-300"
              >
                Услуги
              </h3>
              <ul class="mt-3 space-y-2 text-sm text-slate-200">
                <li v-for="(item, i) in leftServices" :key="`left-${i}`">
                  <a :href="item.href" class="hover:underline">{{
                    item.label
                  }}</a>
                </li>
              </ul>
            </div>
            <div class="mt-6 sm:mt-0">
              <h3
                class="text-sm font-semibold tracking-widest uppercase text-slate-300 invisible sm:visible"
              >
                .
              </h3>
              <ul class="mt-3 space-y-2 text-sm text-slate-200">
                <li v-for="(item, i) in rightServices" :key="`right-${i}`">
                  <a :href="item.href" class="hover:underline">{{
                    item.label
                  }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- долна лента -->
      <div class="bg-black/40 border-t border-white/10">
        <div class="mx-auto max-w-6xl px-4 lg:px-6 py-3">
          <div
            class="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-slate-200"
          >
            <a href="/sitemap" class="hover:underline">Карта на сайта</a>
            <a href="/terms" class="hover:underline">Общи условия</a>
            <a href="/privacy" class="hover:underline"
              >Политика за личните данни</a
            >
            <a href="/newsletter" class="hover:underline"
              >Абонирайте се за нашия бюлетин</a
            >
            <span class="ml-auto opacity-80"
              >© {{ new Date().getFullYear() }} T&L Law. Всички права
              запазени.</span
            >
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed, defineComponent } from "vue";

/** фонова снимка (плейсхолдър) – смени с твоя */
const bgImage = computed(
  () =>
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop"
);

/** контакти */
const phone = "+359888007572";
const phoneRaw = "+359888007572";

/** услуги (редактирай по твой вкус) */
const services = [
  { label: "Дружествено и корпоративно право", href: "/services" },
  { label: "Трудово право, счетоводство и ТРЗ", href: "/services" },
  { label: "Договорно право и търговски сделки", href: "/services" },
  {
    label: "Недвижими имоти и устройство на територията",
    href: "/services",
  },
  {
    label: "Правно съдействие при организация на събития",
    href: "/services",
  },
  { label: "Енергетика", href: "/services" },
  {
    label: "Нормативни съответствия и регулации",
    href: "/services",
  },
  { label: "Процесуално представителство", href: "/services" },
];

// разделяме ги в две колони
const mid = Math.ceil(services.length / 2);
const leftServices = services.slice(0, mid);
const rightServices = services.slice(mid);

/** социалки */
// const socials = [
//   { label: "Facebook", href: "#", icon: FacebookIcon },
//   { label: "LinkedIn", href: "#", icon: LinkedInIcon },
//   { label: "Instagram", href: "#", icon: InstagramIcon },
// ];
</script>

<!-- малки SVG икони -->

<style scoped>
/* всичко е с Tailwind; без допълнителен CSS */
</style>
