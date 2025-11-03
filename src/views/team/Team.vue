<template>
  <div class="min-h-screen bg-[#F8F6F3]">
    <div class="mx-auto max-w-6xl px-4 lg:px-6 py-10 lg:py-16">
      <!-- Лейбъл -->
      <p class="text-xs tracking-widest uppercase text-slate-500 mb-3">
        Нашият екип
      </p>

      <!-- Hero секция: заглавие + тъмен панел -->
      <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <!-- Лява колона -->
        <div>
          <h1
            class="text-4xl sm:text-5xl font-extrabold leading-tight text-slate-900 mb-4"
          >
            Хората зад успеха
          </h1>
          <p class="text-slate-700 max-w-prose">
            Двама адвокати, една визия – да превръщаме сложното в ясно и
            постижимо. Тук ще добавим кратко представяне, когато имаме финалните
            текстове.
          </p>

          <!-- Снимка (плейсхолдър) -->
          <div
            class="mt-8 rounded-2xl overflow-hidden shadow-sm ring-1 ring-black/5 bg-white"
          >
            <img
              :src="teamWideImage"
              alt="Екип (временна снимка)"
              class="w-full h-72 sm:h-80 lg:h-[360px] object-cover"
            />
          </div>
        </div>

        <!-- Дясна колона: тъмен инфо-панел -->
        <aside class="relative rounded-2xl overflow-hidden">
          <div
            class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center"
          ></div>
          <div
            class="relative z-[1] bg-slate-900/80 text-slate-100 p-6 sm:p-8 rounded-2xl backdrop-blur"
          >
            <p class="text-xs tracking-widest uppercase text-indigo-300 mb-3">
              Какво ни отличава
            </p>
            <ul class="space-y-3 text-sm leading-6">
              <li class="flex gap-3">
                <CheckIcon /><span>Силен фокус върху клиента и резултата.</span>
              </li>
              <li class="flex gap-3">
                <CheckIcon /><span
                  >Прозрачна комуникация и ясни етапи на работа.</span
                >
              </li>
              <li class="flex gap-3">
                <CheckIcon /><span
                  >Комбинация от съдебна практика и консултиране.</span
                >
              </li>
            </ul>
          </div>
        </aside>
      </div>

      <!-- разделител -->
      <div class="my-10 lg:my-14 border-t border-slate-200"></div>

      <!-- Статистики -->
      <section class="grid sm:grid-cols-3 gap-8">
        <div>
          <p class="text-5xl font-extrabold tracking-tight text-slate-900">2</p>
          <p class="mt-1 text-sm text-slate-500">Адвокати</p>
        </div>
        <div>
          <p class="text-5xl font-extrabold tracking-tight text-slate-900">
            10+ г.
          </p>
          <p class="mt-1 text-sm text-slate-500">Сборен опит*</p>
        </div>
        <div>
          <p class="text-5xl font-extrabold tracking-tight text-slate-900">
            1000+
          </p>
          <p class="mt-1 text-sm text-slate-500">Клиентски казуса*</p>
        </div>
      </section>

      <!-- Екип: Карти -->
      <section class="mt-8 lg:mt-12">
        <p class="text-xs tracking-widest uppercase text-slate-500 mb-3">
          Запознайте се с екипа
        </p>

        <div class="grid sm:grid-cols-2 gap-6">
          <article
            v-for="(m, i) in members"
            :key="i"
            class="bg-white rounded-2xl ring-1 ring-slate-200 shadow-sm hover:shadow transition overflow-hidden"
          >
            <!-- Фото -->
            <div class="relative h-64 bg-slate-100">
              <img
                :src="m.photo"
                :alt="`Портрет на ${m.name} (временна снимка)`"
                class="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
              ></div>
              <div class="absolute bottom-3 left-3 right-3">
                <span
                  class="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-medium text-slate-800 ring-1 ring-black/5"
                >
                  <ShieldIcon class="h-4 w-4" /> {{ m.role }}
                </span>
              </div>
            </div>

            <!-- Текст -->
            <div class="p-5">
              <h3 class="text-xl font-semibold text-slate-900">{{ m.name }}</h3>
              <p class="mt-1 text-sm text-slate-600">
                {{ m.teaser }}
              </p>

              <!-- Специализации / тагове -->
              <div class="mt-4 flex flex-wrap gap-2">
                <span
                  v-for="(t, j) in m.tags"
                  :key="j"
                  class="inline-flex items-center rounded-full bg-slate-100 text-slate-700 ring-1 ring-slate-200 px-3 py-1 text-xs"
                >
                  {{ t }}
                </span>
              </div>

              <!-- Контакти -->
              <div class="mt-5 flex flex-wrap items-center gap-3 text-sm">
                <a
                  v-if="m.email"
                  :href="`mailto:${m.email}`"
                  class="inline-flex items-center gap-1 text-slate-800 hover:underline"
                >
                  <MailIcon class="h-4 w-4" /> Email
                </a>
                <a
                  v-if="m.phone"
                  :href="`tel:${m.phone}`"
                  class="inline-flex items-center gap-1 text-slate-800 hover:underline"
                >
                  <PhoneIcon class="h-4 w-4" /> Телефон
                </a>
                <a
                  v-if="m.linkedIn"
                  :href="m.linkedIn"
                  target="_blank"
                  rel="noopener"
                  class="inline-flex items-center gap-1 text-slate-800 hover:underline"
                >
                  <LinkedInIcon class="h-4 w-4" /> LinkedIn
                </a>
              </div>

              <!-- Бутон към подробен профил (по избор) -->
              <div class="mt-5">
                <a
                  :href="m.profileUrl || '/contact'"
                  class="inline-flex items-center gap-2 rounded-full bg-white shadow ring-1 ring-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
                >
                  Пълен профил
                  <ArrowRightIcon class="h-4 w-4" />
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      <!-- CTA Банер -->
      <section class="mt-12">
        <div
          class="relative overflow-hidden rounded-2xl bg-slate-900 text-white"
        >
          <img
            class="absolute inset-0 w-full h-full object-cover opacity-20"
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop"
            alt=""
          />
          <div class="relative p-6 sm:p-8">
            <h3 class="text-2xl font-bold">Искате да говорите с адвокат?</h3>
            <p class="mt-1 text-slate-200">
              Пишете ни с няколко изречения за казуса – ще върнем план за
              действие.
            </p>
            <a
              href="contact"
              class="mt-4 inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-4 py-2 text-sm font-medium hover:bg-slate-100 transition"
            >
              Свържете се с нас
              <ArrowRightIcon class="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

/** Широка снимка (плейсхолдър) */
const teamWideImage = computed(
  () =>
    "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&auto=format&fit=crop"
);

/** Списък с членове (2 адвокати) — смени текстовете и снимките по-късно */
const members = [
  {
    name: "Адв. Иванка Лумбева",
    role: "Адвокат",
    teaser:
      "Основната сфера на дейност на адв. Лумбева е строителното право, като тя притежава високи познания в областта на ЗУТ и консултира строителни предприемачи на всеки етап от осъществяване на строителството.",
    tags: ["Строително право", "ЗУТ"],
    photo: "law-lumbeva.jpg", // плейсхолдър
    email: "office@example.com",
    phone: "+359 88 000 0000",
    linkedIn: "#",
    profileUrl: "/team/adv-1",
  },
  {
    name: "Адв. Eлица Ценова",
    role: "Адвокат",
    teaser:
      "Основна сфера на дейност на адв. Ценова е търговското, застрахователното и данъчното право, като представлява клиенти по застрахователни, търговски, трудови, облигационни, данъчни и административни дела.",
    tags: ["Търговско право", "Застрахователно право", "Данъчно право"],
    photo: "", // плейсхолдър
    email: "office@example.com",
    phone: "+359 88 000 0000",
    linkedIn: "#",
    profileUrl: "/team/adv-2",
  },
];
</script>

<!-- Малки SVG „икони“ като шаблонни компоненти (без JSX) -->
<!-- <script>
export default {
  name: "InlineIcons",
};
</script> -->

<!-- локални иконки -->
<!-- <script>
/* глобален компонент CheckIcon */
export const CheckIcon = {
  name: "CheckIcon",
  template: `
    <svg class="mt-1 h-5 w-5 shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24" fill="currentColor">
      <path fill-rule="evenodd"
            d="M2.25 12a9.75 9.75 0 1119.5 0 9.75 9.75 0 01-19.5 0zm14.03-2.78a.75.75 0 10-1.06-1.06l-4.72 4.72-1.72-1.72a.75.75 0 10-1.06 1.06l2.25 2.25c.29.3.77.3 1.06 0l5.25-5.25z"
            clip-rule="evenodd" />
    </svg>`,
};
export const MailIcon = {
  name: "MailIcon",
  props: { class: { type: String, default: "" } },
  template: `
    <svg :class="class" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
         fill="currentColor"><path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002
         2h16a2 2 0 002-2V6a2 2 0 00-2-2zm-1 4l-7 5-7-5V6l7 5 7-5v2z"/></svg>`,
};
export const PhoneIcon = {
  name: "PhoneIcon",
  props: { class: { type: String, default: "" } },
  template: `
    <svg :class="class" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
         fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24
         11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h2.5a1 1 0 011
         1 11.36 11.36 0 00.57 3.56 1 1 0 01-.24 1.01l-2.2 2.2z"/></svg>`,
};
export const LinkedInIcon = {
  name: "LinkedInIcon",
  props: { class: { type: String, default: "" } },
  template: `
    <svg :class="class" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
         fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98
         2.12 4.98 3.5zM0 8h5v16H0zM8 8h4.8v2.2h.07c.67-1.2 2.32-2.47 4.78-2.47 5.11 0 6.05 3.37 6.05
         7.76V24h-5V16c0-1.91-.03-4.36-2.66-4.36-2.66 0-3.07 2.08-3.07 4.22V24H8z"/></svg>`,
};
export const ShieldIcon = {
  name: "ShieldIcon",
  props: { class: { type: String, default: "" } },
  template: `
    <svg :class="class" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
         fill="currentColor"><path d="M12 2l7 3v6c0 5-3.5 9.74-7 11-3.5-1.26-7-6-7-11V5l7-3z"/></svg>`,
};
export const ArrowRightIcon = {
  name: "ArrowRightIcon",
  props: { class: { type: String, default: "" } },
  template: `
    <svg :class="class" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
         fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round"
         stroke-width="2" d="M9 5l7 7-7 7"/></svg>`,
};
</script> -->

<style scoped>
/* всичко е с Tailwind */
</style>
