<template>
  <div>
    <span v-for="(l, index) in locales" :key="l.code" @click="() => setLocale(l.code)">
      {{ index == 0 ? "" : " / " }}
      <b v-if="l.code == locale" class="cursor-pointer">
        <u>
          {{ l.code }}
        </u>
      </b>
      <span v-else class="cursor-pointer">
        {{ l.code }}
      </span>
    </span>
  </div>
</template>

<script setup lang="ts">
const { locale, locales, setLocale } = useI18n();
</script>
