<template>
  <div class="min-h-screen bg-[#F8F6F3]">
    <div class="mx-auto max-w-6xl px-4 lg:px-6 py-10 lg:py-16">
      <p class="text-xs tracking-widest uppercase text-slate-500 mb-3">
        Нашата мисия
      </p>

      <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <!-- Лява колона -->
        <div>
          <h1
            class="text-4xl sm:text-5xl font-extrabold leading-tight text-slate-900 mb-6"
          >
            С фокус върху<br class="hidden sm:block" />
            клиента.<br class="hidden sm:block" />
            Водени от успеха
          </h1>

          <div
            class="rounded-2xl overflow-hidden shadow-sm ring-1 ring-black/5 bg-white"
          >
            <img
              :src="heroImage"
              alt="Екип"
              class="w-full h-72 sm:h-80 lg:h-[360px] object-cover"
            />
          </div>

          <div class="mt-4">
            <button
              type="button"
              @click="openTeam()"
              class="inline-flex items-center gap-2 rounded-full bg-white shadow ring-1 ring-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
            >
              Запознайте се с екипа
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <!-- Дясна колона -->
        <aside class="relative rounded-2xl overflow-hidden">
          <div
            class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center"
          ></div>
          <div
            class="relative z-[1] bg-slate-900/80 text-slate-100 p-6 sm:p-8 rounded-2xl backdrop-blur"
          >
            <p class="text-xs tracking-widest uppercase text-indigo-300 mb-3">
              Нашата история
            </p>
            <div class="space-y-4 text-sm leading-6 text-slate-200">
              <p>
                Адвокатско дружество „Лумбева и Ценова“ е регистрирано през 2019
                г., като практиката на дружеството е съсредоточена в гр.
                Пловдив, гр. Пазарджик и гр. Хасково.
              </p>
              <p>
                Дружеството предоставя текущо правно обслужване на широк спектър
                от клиенти – физически и юридически лица, на лица от частния и
                публичния сектор. Адвокатското дружеството е специализирано в
                областта на гражданското и административното право като
                предоставя професионални консултации в застрахователното,
                търговското, облигационното, трудовото, вещното, семейното,
                наследственото, осигурителното и данъчното право.
              </p>
              <p>
                Работим с енергия и мотивация, надграждаме с фокус върху бизнеса
                на своите клиенти и търсим най-доброто възможно решение за тях.
                Водени от принципи и морал, вземаме идеи и знание и стремеж към
                усъвършенстване и израстване.
              </p>
            </div>
          </div>
        </aside>
      </div>

      <div class="my-10 lg:my-14 border-t border-slate-200"></div>

      <section class="grid sm:grid-cols-2 gap-8">
        <div>
          <p class="text-5xl font-extrabold tracking-tight text-slate-900">
            1,000+
          </p>
          <p class="mt-1 text-sm text-slate-500">
            Успешни извънсъдебни споразумения
          </p>
        </div>
        <div>
          <p class="text-5xl font-extrabold tracking-tight text-slate-900">
            1,500+
          </p>
          <p class="mt-1 text-sm text-slate-500">Успешни дела</p>
        </div>
      </section>

      <section class="mt-8 grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <div
          class="rounded-2xl overflow-hidden shadow-sm ring-1 ring-black/5 bg-white"
        >
          <img
            :src="handshakeImage"
            alt="Партньорство"
            class="w-full h-72 sm:h-80 lg:h-[340px] object-cover"
          />
        </div>

        <div>
          <p class="text-xs tracking-widest uppercase text-slate-500 mb-3">
            Нашите силни страни
          </p>
          <ul class="space-y-4">
            <li
              v-for="(item, i) in strengths"
              :key="i"
              class="flex items-start gap-3"
            >
              <CheckIcon />
              <p class="text-slate-700" v-html="item"></p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

// изображения
const heroImage = computed(
  () =>
    "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&auto=format&fit=crop"
);
const handshakeImage = computed(
  () =>
    "https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=1200&auto=format&fit=crop"
);

// списък с предимства
const strengths = [
  "<strong>Даваме цялостни решения за бизнеса</strong> – съдействайки от началото до края на процеса.",
  "<strong>Иновативни сме</strong> – дигитализирани процеси и удобни електронни услуги.",
  "<strong>Компетентен екип</strong> с широка експертиза в различни области на правото.",
  "<strong>Работим заедно с клиента</strong> – планираме ясно и държим процеса прозрачен.",
  "<strong>Активна комуникация</strong> – знаем колко са ценни времето и спокойствието.",
  "<strong>Имаме общо око за детайла</strong> – партньорски подход и честност.",
  "<strong>Върху принципи и морал</strong> – ценности, които ни направляват.",
  "<strong>Вървим напред с мисъл за природата</strong> – устойчиво развитие и отговорност.",
];

function openTeam() {
  window.location.href = "/team";
}
</script>

<!-- малък компонент за чек икона -->
<!-- <script>
export default {
  name: "CheckIcon",
  template: `
    <svg class="mt-1 h-5 w-5 shrink-0 text-green-600" xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24" fill="currentColor">
      <path fill-rule="evenodd"
            d="M2.25 12a9.75 9.75 0 1119.5 0 9.75 9.75 0 01-19.5 0zm14.03-2.78a.75.75 0 10-1.06-1.06l-4.72 4.72-1.72-1.72a.75.75 0 10-1.06 1.06l2.25 2.25c.29.3.77.3 1.06 0l5.25-5.25z"
            clip-rule="evenodd" />
    </svg>`,
};
</script> -->

<style scoped>
/* без допълнителен CSS – Tailwind стилизира всичко */
</style>
