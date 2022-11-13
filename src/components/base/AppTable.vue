<template>
    <table>
        <tr v-for="(elementValue, elementKey) in tableData" v-bind:key="elementKey">
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
import { defineProps } from "vue";

defineProps<{ tableData: Record<string, string> }>()
</script>
