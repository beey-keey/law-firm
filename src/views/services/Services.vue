<template>
  <div class="min-h-screen bg-[#F8F6F3]">
    <div class="mx-auto max-w-6xl px-4 lg:px-6 py-10 lg:py-16">
      <!-- Лейбъл -->
      <p class="text-xs tracking-widest uppercase text-slate-500 mb-3">
        Нашите услуги
      </p>

      <!-- Hero секция: заглавие + тъмен панел -->
      <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <!-- Лява колона -->
        <div>
          <h1
            class="text-4xl sm:text-5xl font-extrabold leading-tight text-slate-900 mb-4"
          >
            Правни решения,<br class="hidden sm:block" />
            фокусирани върху резултата
          </h1>
          <p class="text-slate-700 max-w-prose">
            Подкрепяме бизнеса и хората с практични, навременни и ефективни
            правни услуги. Работим прозрачно, с ясен план и постоянна
            комуникация.
          </p>

          <div class="mt-6 flex items-center gap-3">
            <!-- <a
              href="#services"
              class="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-black transition"
            >
              Разгледайте услугите
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a> -->
            <a
              href="contact"
              class="inline-flex items-center gap-2 rounded-full bg-white shadow ring-1 ring-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
            >
              Свържете се с нас
            </a>
          </div>

          <!-- Снимка -->
          <!-- <div
            class="mt-8 rounded-2xl overflow-hidden shadow-sm ring-1 ring-black/5 bg-white"
          >
            <img
              :src="teamImage"
              alt="Екип"
              class="w-full h-72 sm:h-80 lg:h-[360px] object-cover"
            />
          </div> -->
        </div>

        <!-- Дясна колона: тъмен инфо-панел -->
        <aside class="relative rounded-2xl overflow-hidden">
          <div
            class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center"
          ></div>
          <div
            class="relative z-[1] bg-slate-900/80 text-slate-100 p-6 sm:p-8 rounded-2xl backdrop-blur"
          >
            <p class="text-xs tracking-widest uppercase text-indigo-300 mb-3">
              Как работим
            </p>
            <ul class="space-y-3 text-sm leading-6">
              <li class="flex gap-3">
                <CheckIcon />
                <span>Бърз първоначален анализ и уточняване на целите.</span>
              </li>
              <li class="flex gap-3">
                <CheckIcon />
                <span>Ясен план по етапи, срокове и очаквани резултати.</span>
              </li>
              <li class="flex gap-3">
                <CheckIcon />
                <span>Редовни ъпдейти и прозрачна комуникация.</span>
              </li>
              <li class="flex gap-3">
                <CheckIcon />
                <span
                  >Фокус върху споразумения и ефективни решения в съда.</span
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
          <p class="text-5xl font-extrabold tracking-tight text-slate-900">
            20+
          </p>
          <p class="mt-1 text-sm text-slate-500">Области на практика</p>
        </div>
        <div>
          <p class="text-5xl font-extrabold tracking-tight text-slate-900">
            1,500+
          </p>
          <p class="mt-1 text-sm text-slate-500">Успешни дела</p>
        </div>
        <div>
          <p class="text-5xl font-extrabold tracking-tight text-slate-900">
            1,000+
          </p>
          <p class="mt-1 text-sm text-slate-500">Споразумения</p>
        </div>
      </section>

      <!-- Услуги -->
      <section id="services" class="mt-10 lg:mt-14">
        <p class="text-xs tracking-widest uppercase text-slate-500 mb-3">
          Какво предлагаме
        </p>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <article
            v-for="(s, i) in services"
            :key="i"
            class="group bg-white rounded-2xl p-5 ring-1 ring-slate-200 hover:ring-slate-300 shadow-sm hover:shadow transition"
          >
            <div class="flex items-start gap-3">
              <!-- Икона -->
              <div
                class="shrink-0 rounded-xl bg-slate-100 p-2 ring-1 ring-slate-200"
              >
                <component :is="s.icon" class="h-6 w-6 text-slate-700" />
              </div>
              <div>
                <h3 class="text-lg font-semibold text-slate-900">
                  {{ s.title }}
                </h3>
                <p class="mt-1 text-sm text-slate-600">{{ s.desc }}</p>
              </div>
            </div>

            <ul
              v-if="s.points?.length"
              class="mt-4 space-y-2 text-sm text-slate-700"
            >
              <li v-for="(p, j) in s.points" :key="j" class="flex gap-2">
                <svg
                  class="mt-1 h-4 w-4 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.25 12a9.75 9.75 0 1119.5 0 9.75 9.75 0 01-19.5 0zm14.03-2.78a.75.75 0 10-1.06-1.06l-4.72 4.72-1.72-1.72a.75.75 0 10-1.06 1.06l2.25 2.25c.29.3.77.3 1.06 0l5.25-5.25z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>{{ p }}</span>
              </li>
            </ul>

            <a
              href="/contact"
              class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-slate-800 group-hover:underline"
            >
              Консултация
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </article>
        </div>
      </section>

      <!-- Банер CTA -->
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
            <h3 class="text-2xl font-bold">
              Нуждаете се от бърз правен съвет?
            </h3>
            <p class="mt-1 text-slate-200">
              Опишете казуса си и ще се свържем с вас с първоначален план до 24
              часа.
            </p>
            <a
              href="/contact"
              class="mt-4 inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-4 py-2 text-sm font-medium hover:bg-slate-100 transition"
            >
              Изпратете запитване
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

/** Плейсхолдър снимка */
const teamImage = computed(
  () =>
    "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&auto=format&fit=crop"
);

/** Малки SVG компоненти като функционални темплейти (без JSX) */
const iconScale = {
  name: "IconScale",
  props: { class: { type: String, default: "" } },
  template: `
    <svg :class="class" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3a1 1 0 011 1v2h4a1 1 0 110 2h-1.06l2.67 6.67A4.5 4.5 0 1114 17.97V19a1 1 0 11-2 0v-1.03A4.5 4.5 0 117.39 14.67L10.06 8H9a1 1 0 110-2h4V4a1 1 0 011-1zM8.94 10L7.1 14.6A4.48 4.48 0 0112 15c1.22 0 2.34-.49 3.14-1.28L13.06 10H8.94z"/>
    </svg>`,
};
const iconDoc = {
  name: "IconDoc",
  props: { class: { type: String, default: "" } },
  template: `
    <svg :class="class" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M7 2a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V8.83a2 2 0 00-.59-1.41l-4.83-4.83A2 2 0 0012.17 2H7z"/>
      <path fill="#fff" d="M9 12h6v2H9zm0-4h3v2H9zm0 8h6v2H9z"/>
    </svg>`,
};
const iconHandshake = {
  name: "IconHandshake",
  props: { class: { type: String, default: "" } },
  template: `
    <svg :class="class" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.59 7.41a2 2 0 012.82 0l.88.88 1.41-1.41a2 2 0 112.83 2.82l-4.95 4.95a3 3 0 01-4.24 0l-.12-.12-.71.71a2 2 0 11-2.83-2.83l1.41-1.41-.88-.88a2 2 0 010-2.82l2.38-2.38z"/>
    </svg>`,
};
const iconShield = {
  name: "IconShield",
  props: { class: { type: String, default: "" } },
  template: `
    <svg :class="class" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l7 3v6c0 5-3.5 9.74-7 11-3.5-1.26-7-6-7-11V5l7-3z"/>
      <path fill="#fff" d="M11 12l-2 2 4 4 6-6-2-2-4 4-2-2z"/>
    </svg>`,
};
const iconBuilding = {
  name: "IconBuilding",
  props: { class: { type: String, default: "" } },
  template: `
    <svg :class="class" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 21h18v-2H3v2zm2-4h14V3H5v14zM7 7h2v2H7V7zm0 4h2v2H7v-2zm4-4h2v2h-2V7zm0 4h2v2h-2v-2zm4-4h2v2h-2V7zm0 4h2v2h-2v-2z"/>
    </svg>`,
};
const iconPeople = {
  name: "IconPeople",
  props: { class: { type: String, default: "" } },
  template: `
    <svg :class="class" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 11c1.66 0 3-1.57 3-3.5S17.66 4 16 4s-3 1.57-3 3.5 1.34 3.5 3 3.5zM8 11c1.66 0 3-1.57 3-3.5S9.66 4 8 4 5 5.57 5 7.5 6.34 11 8 11zM8 13c-2.67 0-8 1.34-8 4v3h10v-3c0-2.66-5.33-4-2-4zm8 0c-.29 0-.62.01-.97.04C17.12 13.56 20 14.62 20 17v3h4v-3c0-2.66-5.33-4-8-4z"/>
    </svg>`,
};

/** Списък услуги */
const services = [
  {
    title: "Търговско право",
    desc: "Учредяване на дружества, договори, съвети за управление и сделки.",
    icon: iconBuilding,
    points: ["Договори и общи условия", "Сделки и преговори", "Дю дилиджънс"],
  },
  {
    title: "Корпоративно консултиране",
    desc: "Продължаваща правна подкрепа за растящ бизнес.",
    icon: iconDoc,
    points: ["Вътрешни политики", "Риск и съответствие (compliance)"],
  },
  {
    title: "Съдебни дела и арбитраж",
    desc: "Представителство и защита по търговски и граждански спорове.",
    icon: iconShield,
    points: ["Извънсъдебни споразумения", "Процесуално представителство"],
  },
  {
    title: "Трудово право",
    desc: "Договори, процедури и спорове между работодател и служител.",
    icon: iconPeople,
    points: ["Вътрешни правила", "Прекратяване и обезщетения"],
  },
  {
    title: "Облигационно и вещно право",
    desc: "Договори, наеми, продажби, ипотеки и управление на имоти.",
    icon: iconHandshake,
    points: ["Покупко-продажби", "Наемни отношения", "Нотариални производства"],
  },
  {
    title: "Защита на потребители и данни",
    desc: "GDPR и защита на интересите на клиенти и търговци.",
    icon: iconScale,
    points: ["GDPR одит", "Политики и обучение", "Реакция при инциденти"],
  },
];
</script>

<!-- Икона „чек“ за списъци -->
<!-- <script>
export default {
  name: "CheckIcon",
  template: `
    <svg class="mt-1 h-5 w-5 shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24" fill="currentColor">
      <path fill-rule="evenodd"
            d="M2.25 12a9.75 9.75 0 1119.5 0 9.75 9.75 0 01-19.5 0zm14.03-2.78a.75.75 0 10-1.06-1.06l-4.72 4.72-1.72-1.72a.75.75 0 10-1.06 1.06l2.25 2.25c.29.3.77.3 1.06 0l5.25-5.25z"
            clip-rule="evenodd" />
    </svg>`,
};
</script> -->

<style scoped>
/* всичко е с Tailwind */
</style>
