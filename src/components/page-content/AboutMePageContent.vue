<template>
    <div class="p-10 grid grid-cols-1 sm:grid-cols-2 grid-rows-1 gap-2">
        <img src="src/assets/images/me.png" width="400" height="400" class="m-auto"/>
        <AppTable class="m-auto" :table-data="generalTableData"/>
    </div>
    <div class="w-[96%] m-auto">
        <div class="relative m-auto mb-3">
            <AppGradientLine class="-top-5"/>
            <h2 class="text-xl text-center col-span-0">Hard Skills:</h2>
        </div>
        <div class=" grid-cols-1 w-full place-items-center hidden lg:grid lg:grid-cols-2 mb-10">
            <div class="mb-5 lg:m-auto">
                <AppTable :table-data="coreSkillsTableData"/>
            </div>
            <div class="mb-5 lg:m-auto">
                <AppTable :table-data="minorSkillsTableData"/>
            </div>
        </div>
        <div class="grid grid-cols-1 place-items-center mb-12 lg:hidden">
            <AppTable :table-data="{...coreSkillsTableData, ...minorSkillsTableData}"/>
        </div>
        <div class="grid grid-cols-1 w-full place-items-center mb-20">
            <div class="w-full lg:w-1/2">
                <div class="relative mb-5">
                    <AppGradientLine class="-top-5"/>
                    <h2 class="text-xl text-center">Soft Skills:</h2>
                </div>
                <AppTable class="m-auto" :table-data="softSkillsTableData"/>
            </div>
        </div>
    </div>

</template>
<script setup lang="ts">
import AppTable        from "../base/AppTable.vue";
import AppGradientLine from "../base/AppGradientLine.vue";

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
    "Content Creation": "Basic use of Photoshop/Premiere",
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