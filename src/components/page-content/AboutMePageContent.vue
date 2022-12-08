<template>
    <div class="p-10 grid grid-cols-1 sm:grid-cols-2 grid-rows-1 gap-2">
        <img src="src/assets/images/me.png" width="400" height="400" class="m-auto"/>
        <AppTable class="m-auto" :table-data="generalTableData"/>
    </div>
    <div class="grid grid-cols-1 place-items-center lg:grid-cols-2 mb-20">
        <div class="mb-5 lg:m-auto">
            <h2 class="text-xl underline mb-2">Core Skills:</h2>
            <AppTable :table-data="coreSkillsTableData"/>
        </div>
        <div class="mb-5 lg:m-auto">
            <h2 class="text-xl underline mb-2">Minor Skills:</h2>
            <AppTable :table-data="minorSkillsTableData"/>
        </div>
        <div class="pt-5 lg:m-auto lg:col-span-2">
            <h2 class="text-xl underline mb-2">Soft Skills:</h2>
            <AppTable :table-data="softSkillsTableData"/>
        </div>
    </div>

</template>
<script setup lang="ts">
import AppTable from "../base/AppTable.vue";

const generalTableData = {
    Name: "Edwin Baumann",
    Birthday: "23.08.2000",
    Age: "22"
};

const coreSkillsTableData = {
    "Unity": "3 years of study and hobby experience",
    "Game Maker Studio 2": "6 years of hobby experience",
    "C#": "3 years of study and hobby experience",
    "C++": "Started Learning",
    "VueJs": "2 years of job and hobby experience",
    "Javascript/Typescript": "2 years of job and hobby experience",
    "Python/Bash": "2 years of job and hobby experience",
    "IT System Engineer": "6 years of job experience",
};

const minorSkillsTableData = {
    "3D Art": "Simple modelling/rigging/texturing in Blender",
    "Spriting": "Simple spriting/animation in Asesprite",
    "Audio": "Basic music/sfx production in FL Studio, FMOD",
    "Version Control": "Git CLI, GitHub Desktop",
    "Automation": "Ansible, PowerShell",
    "Agile/Scrum": "Jira, CWiki, Hack n Plan"
}

const softSkillsTableData = {
    "Work Ethic": "I work a lot, maybe a bit too much sometimes...",
    "Fast Learner": "I can learn new concepts/skills very quickly",
    "Creativity": "Hopefully, this can be seen in my work :)",
    "Perfectionist": "This can be a positive or a negative...",
}

</script>