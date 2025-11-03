<template>
  <div class="min-h-screen bg-[#F8F6F3]">
    <div class="mx-auto max-w-6xl px-4 lg:px-6 py-10 lg:py-16">
      <!-- Хедър -->
      <h1 class="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6">
        Контакти
      </h1>

      <!-- Изображение заглавка -->
      <div
        class="rounded-2xl overflow-hidden shadow-sm ring-1 ring-black/5 bg-white mb-10"
      >
        <img
          :src="headerImage"
          alt="Контакти - офис"
          class="w-full h-64 sm:h-72 lg:h-80 object-cover"
        />
      </div>

      <!-- Основен блок -->
      <div class="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <!-- Лява част: карта + адрес -->
        <div>
          <!-- Карта -->
          <div
            class="rounded-2xl overflow-hidden ring-1 ring-slate-200 shadow-sm mb-6"
          >
            <iframe
              :src="mapUrl"
              width="100%"
              height="350"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <!-- Адрес и работно време -->
          <div class="grid sm:grid-cols-2 gap-6 text-sm text-slate-700">
            <div>
              <h3 class="font-semibold text-slate-900 mb-1">Адрес</h3>
              <p>гр. Пазарджик<br />ул. „ Иван Вазов “ No 8, ет.1, оф.6</p>
            </div>
            <div>
              <h3 class="font-semibold text-slate-900 mb-1">Работно време</h3>
              <p>Понеделник – Петък<br />09:00 – 19:00 ч.</p>
            </div>
          </div>

          <!-- Контакти -->
          <div class="mt-6 space-y-2 text-sm text-slate-700">
            <div class="flex items-center gap-2">
              <PhoneIcon class="h-4 w-4 text-slate-800" />
              <a href="tel:+0888007572" class="hover:underline"
                >+359 888 007 572</a
              >
            </div>
            <div class="flex items-center gap-2">
              <MailIcon class="h-4 w-4 text-slate-800" />
              <a href="mailto:adv.eistoyanova@gmail.com" class="hover:underline"
                >adv.eistoyanova@gmail.com</a
              >
            </div>
          </div>

          <!-- Бележка -->
          <p class="mt-6 text-sm text-slate-600 leading-relaxed">
            Силно препоръчваме предварителна уговорка за среща, за да можем да
            ви отделим необходимото време и внимание. Отговаряме на запитвания
            по имейл обикновено в рамките на <strong>24–48 часа</strong>.
          </p>
        </div>

        <!-- Дясна част: инфо панел -->
        <aside class="relative rounded-2xl overflow-hidden">
          <div
            class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1525186402429-b4ff38bedbec?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center"
          ></div>
          <div
            class="relative z-[1] bg-slate-900/80 text-slate-100 p-6 sm:p-8 rounded-2xl backdrop-blur"
          >
            <p class="text-xs tracking-widest uppercase text-indigo-300 mb-3">
              Свържете се с нас
            </p>
            <p class="text-sm leading-6 text-slate-200 mb-4">
              Нашият офис се намира в гр. Пазарджик, с удобен достъп и паркинг в
              близост. Работим по предварителна уговорка, за да осигурим
              спокойствие и индивидуално внимание на всеки клиент.
            </p>
            <ul class="space-y-3 text-sm leading-6">
              <li class="flex gap-3">
                <CheckIcon /> <span>Срещи в офиса или онлайн по избор.</span>
              </li>
              <li class="flex gap-3">
                <CheckIcon /> <span>Бърз имейл отговор до 48 часа.</span>
              </li>
              <li class="flex gap-3">
                <CheckIcon /> <span>Конфиденциалност и защита на данните.</span>
              </li>
            </ul>
          </div>
        </aside>
      </div>

      <!-- разделител -->
      <div class="my-12 border-t border-slate-200"></div>

      <!-- CTA секция -->
      <section
        class="relative overflow-hidden rounded-2xl bg-slate-900 text-white"
      >
        <img
          class="absolute inset-0 w-full h-full object-cover opacity-20"
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop"
          alt=""
        />
        <div class="relative p-6 sm:p-8">
          <h3 class="text-2xl font-bold">Нуждаете се от консултация?</h3>
          <p class="mt-1 text-slate-200">
            Обадете се или ни пишете – ще получите отговор и насоки в рамките на
            един работен ден.
          </p>
          <div class="mt-4 flex flex-wrap items-center gap-3">
            <a
              href="tel:+0888007572"
              class="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-4 py-2 text-sm font-medium hover:bg-slate-100 transition"
            >
              <PhoneIcon class="h-4 w-4" /> Позвънете ни
            </a>
            <a
              href="mailto:adv.eistoyanova@gmail.com"
              class="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-4 py-2 text-sm font-medium hover:bg-slate-100 transition"
            >
              <MailIcon class="h-4 w-4" /> Пишете ни
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

// Плейсхолдър снимка за горната част
const headerImage = computed(
  () =>
    "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?q=80&w=1400&auto=format&fit=crop"
);

// Google Maps embed (примерен адрес – смени с твоя)
const mapUrl = computed(
  () =>
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2956.0161555277623!2d24.329936777700766!3d42.19272207120892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14acaffe499aed01%3A0xd738ab3765b94d59!2z0J_QsNC30LDRgNC00LbQuNC6INCm0LXQvdGC0YrRgCwg0YPQuy4g4oCe0JjQstCw0L0g0JLQsNC30L7QsuKAnCA4LCA0NDAwINCf0LDQt9Cw0YDQtNC20LjQuiwg0JHRitC70LPQsNGA0LjRjw!5e0!3m2!1sbg!2sde!4v1762185968550!5m2!1sbg!2sde"
);
</script>

<!-- Икони -->
<!-- <script>
export const PhoneIcon = {
  name: "PhoneIcon",
  props: { class: { type: String, default: "" } },
  template: `
    <svg :class="class" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
         fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24
         11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h2.5a1 1 0 011
         1 11.36 11.36 0 00.57 3.56 1 1 0 01-.24 1.01l-2.2 2.2z"/></svg>`,
};
export const MailIcon = {
  name: "MailIcon",
  props: { class: { type: String, default: "" } },
  template: `
    <svg :class="class" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
         fill="currentColor"><path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002
         2h16a2 2 0 002-2V6a2 2 0 00-2-2zm-1 4l-7 5-7-5V6l7 5 7-5v2z"/></svg>`,
};
export const CheckIcon = {
  name: "CheckIcon",
  template: `
    <svg class="mt-1 h-5 w-5 shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24" fill="currentColor">
      <path fill-rule="evenodd"
            d="M2.25 12a9.75 9.75 0 1119.5 0 9.75 9.75 0 01-19.5 0zm14.03-2.78a.75.75 0 10-1.06-1.06l-4.72
             4.72-1.72-1.72a.75.75 0 10-1.06 1.06l2.25 2.25c.29.3.77.3
             1.06 0l5.25-5.25z" clip-rule="evenodd"/>
    </svg>`,
};
</script> -->

<style scoped>
/* всичко е със Tailwind */
</style>
