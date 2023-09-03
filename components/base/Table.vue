<template>
  <div>
    <div v-for="(elementValue, elementKey) in tableData" :key="elementKey" class="mb-4 flex flex-col md:h-[3.5rem] md:mb-0 md:flex-row">
      <div class="m-auto w-auto pr-0 font-bold md:w-[7rem] md:m-0 md:mt-auto md:mb-auto md:pr-3">
        {{ elementValue.key ? elementValue.key : elementKey }}:
      </div>
      <div class="m-auto md:m-0 md:mt-auto md:mb-auto">
        {{ elementValue.value !== undefined ? elementValue.value : elementValue }}
        <slot :name="elementKey" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

interface TableEntry {
    key: string,
    value: string,
}

defineProps<{ tableData: Record<string, string | TableEntry> }>();
</script>
