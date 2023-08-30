<template>
  <div class="grid grid-cols-1 grid-rows-1 gap-2 sm:grid-cols-2">
    <img src="/me.png" width="400" height="400" class="m-auto">
    <AppTable class="m-auto" :table-data="generalTableData" />
  </div>
  <div class="relative m-auto mb-3">
    <AppGradientLine class="mb-5" />
    <h2 class="text-center text-xl col-span-0">
      Hard Skills:
    </h2>
  </div>
  <div class="mb-10 hidden w-full grid-cols-1 place-items-center lg:grid lg:grid-cols-2">
    <div class="mb-5 lg:m-auto">
      <AppTable :table-data="coreSkillsTableData" />
    </div>
    <div class="mb-5 lg:m-auto">
      <AppTable :table-data="minorSkillsTableData" />
    </div>
  </div>
  <div class="mb-12 grid grid-cols-1 place-items-center lg:hidden">
    <AppTable :table-data="{...coreSkillsTableData, ...minorSkillsTableData}" />
  </div>
  <div class="mb-20 grid w-full grid-cols-1 place-items-center">
    <div class="w-full lg:w-1/2">
      <div class="relative mb-5">
        <AppGradientLine class="mb-5" />
        <h2 class="text-center text-xl">
          Soft Skills:
        </h2>
      </div>
      <AppTable class="m-auto" :table-data="softSkillsTableData" />
    </div>
  </div>
</template>
<script setup lang="ts">
const generalTableData = {
    Name: "Edwin Baumann",
    Birthday: "23.08.2000",
    Age: "22",
};

const coreSkillsTableData = {
    Unity: "3 years of study and hobby experience",
    "Game Maker Studio 2": "6 years of hobby experience",
    "C#": "3 years of study and hobby experience",
    "C++": "Started Learning",
    VueJs: "2 years of job and hobby experience",
    "Javascript/Typescript": "2 years of job and hobby experience",
    "Python/Bash": "2 years of job and hobby experience",
    "IT System Engineer": "6 years of job experience",
};

const minorSkillsTableData = {
    "3D Art": "Simple modelling/rigging/texturing in Blender",
    Spriting: "Simple spriting/animation in Asesprite",
    "Content Creation": "Basic use of Photoshop/Premiere",
    Audio: "Basic music/sfx production in FL Studio, FMOD",
    "Version Control": "Git CLI, GitHub Desktop",
    Automation: "Ansible, PowerShell",
    "Agile/Scrum": "Jira, CWiki, Hack n Plan",
};

const softSkillsTableData = {
    "Work Ethic": "I work a lot, maybe a bit too much sometimes...",
    "Fast Learner": "I can learn new concepts/skills very quickly",
    Creativity: "Hopefully, this can be seen in my work :)",
    Perfectionist: "This can be a positive or a negative...",
};

</script>
