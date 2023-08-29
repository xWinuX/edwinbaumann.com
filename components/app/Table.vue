<template>
  <table>
    <tr v-for="(elementValue, elementKey) in tableData" :key="elementKey">
      <td class="font-bold">
        {{ elementKey }}:
      </td>
      <td class="pl-6">
        {{ elementValue }}
      </td>
    </tr>
  </table>
</template>

<script setup lang="ts">
defineProps<{ tableData: Record<string, string> }>();
</script>
