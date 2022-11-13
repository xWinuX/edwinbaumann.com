<template>
    <div class="p-10 grid grid-cols-1 sm:grid-cols-2 grid-rows-1 gap-2">
        <img src="src/assets/images/me.png" width="400" height="400" />
        <AppTable class="m-auto" :table-data="tableData">

        </AppTable>
    </div>
</template>
<script setup lang="ts">
import AppTable from "../base/AppTable.vue";

const tableData = {
    Name: "Edwin Baumann",
    Birthday: "23.08.2000",
    Age: "22"
}

</script>