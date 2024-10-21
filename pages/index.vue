<template>
  <div>
    <p>Home</p>
    <p>{{ $t('navbar.projects') }}</p>
  </div>
</template>

<script setup lang="ts">

const { locale, setLocale } = useI18n();

function onButtonClick() {
    if (locale.value === "en") {
        setLocale("de");
    } else {
        setLocale("en");
    }
}

</script>
