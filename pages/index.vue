<template>
  <div class="flex h-full">
    <div class="m-auto flex w-full max-w-screen-2xl flex-col px-3 lg:pr-3 lg:pl-0">
      <div class="flex flex-col gap-0 xl:gap-20 xl:flex-row">
        <!-- Left Side -->
        <div>
          <div class="flex flex-col">
            <!-- General -->
            <div>
              <AppH2>
                {{ $t('aboutMe.titleAboutMe') }}
              </AppH2>
              <i18n-t tag="p" class="max-w-[818px] mt-2" keypath="aboutMe.aboutMeIntroduction">
                <template #br>
                  <br>
                </template>
                <template #link>
                  <BaseLink link="/projects">
                    {{ $t('aboutMe.aboutMeIntroductionLink') }}
                  </BaseLink>
                </template>
              </i18n-t>
            </div>

            <!-- General -->
            <div class="mt-10">
              <AppH2>
                {{ $t('aboutMe.titleGeneral') }}
              </AppH2>
              <TwoColumn label="Name" size="8rem" class="mt-2" do-not-wrap-on-mobile>
                Edwin Baumann
              </TwoColumn>
              <TwoColumn :label="$t('aboutMe.columnDateOfBirth')" size="8rem" class="mt-2" do-not-wrap-on-mobile>
                23.08.2000
              </TwoColumn>

              <TwoColumn label="Links" size="8rem" class="mt-2" do-not-wrap-on-mobile>
                <div class="flex flex-row gap-5 lg:mb-0 h-[2rem]">
                  <IconLink size="1.8rem" tooltip="LinkedIn" link="https://www.linkedin.com/in/edwinbaumann/" icon-name="devicon:linkedin" />
                  <IconLink size="1.8rem" tooltip="GitHub" link="https://github.com/xWinuX" icon-name="simple-icons:github" />
                  <IconLink size="1.8rem" tooltip="Itch.io" link="https://winux.itch.io" icon-name="cib:itch-io" />
                </div>
              </TwoColumn>
            </div>

            <!-- Education -->
            <div class="mt-10">
              <AppH2>
                {{ $t('aboutMe.titleEducation') }}
              </AppH2>
              <AppH3 class="mt-3">
                {{ $t('aboutMe.educationEmmiAndGibb') }}
              </AppH3>
              <TwoColumn :label="createTranslatedYearSpan('01.08.2016', '01.07.2020')" size="16rem" class="mt-1">
                {{ $t('aboutMe.educationIT') }}
              </TwoColumn>
              <AppH3 class="mt-3">
                SAE Institute
              </AppH3>
              <TwoColumn :label="createTranslatedYearSpan('01.03.2021', '01.03.2023')" size="16rem" class="mt-1">
                Games Programming Diploma
              </TwoColumn>
              <TwoColumn :label="createTranslatedYearSpan('01.03.2023', '01.09.2024')" size="16rem" class="mt-1">
                Bachelor of Science (Honours), Games Programming
              </TwoColumn>
            </div>

            <!-- Experience -->
            <div class="mt-10">
              <AppH2 class="mt-3">
                {{ $t('aboutMe.titleExperience') }}
              </AppH2>
              <AppH3 class="mt-3">
                Emmi Schweiz AG
              </AppH3>
              <TwoColumn :label="createTranslatedYearSpan('01.08.2020', '01.01.2021')" size="16rem" class="mt-1">
                ICT Technician
              </TwoColumn>
              <AppH3 class="mt-3">
                Die Mobiliar AG
              </AppH3>
              <TwoColumn :label="createTranslatedYearSpan('01.07.2021', '01.03.2025')" size="16rem" class="mt-1">
                DevSecOps Engineer
              </TwoColumn>
            </div>
          </div>
        </div>

        <!-- Right Side -->
        <div class="mt-10 xl:mt-0">
          <div v-for="skillSection in skillSections" :key="skillSection.title" class="mb-6">
            <AppH2 class="mb-5">
              {{ $t(skillSection.title) }}
            </AppH2>

            <TwoColumn v-for="(technologies, skillLevelName) in skillSection.skillLevel" :key="skillLevelName" :label="$t(`skills.${skillLevelName}`)" class="mb-10">
              <div class="flex flex-row flex-wrap gap-2 mt-2 lg:mt-0 lg:place-content-start">
                <TechnologyIcon v-for="technology in technologies" :key="technology" :technology="technology" class="svg-shadow-normal" />
              </div>
            </TwoColumn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TwoColumn from "~/components/base/TwoColumn.vue";
import { type TechnologyKey } from "~/types/project";
import TechnologyIcon from "~/components/base/TechnologyIcon.vue";
import { createTranslatedYearSpan } from "~/utils/date";

interface SkillSection {
  title: string;
  skillLevel: Record<string, TechnologyKey[]>
}

const skillSections: SkillSection[] = [
    {
        title: "skills.titleProgrammingLanguage",
        skillLevel: {
            advanced: [
                "cpp",
                "csharp",
                "gml",
            ],
            proficient: [
                "python",
                "html",
                "css",
                "javascript",
                "typescript",
                "glsl",
                "powershell",
            ],
            familiar: [
                "php",
                "sql",
                "bash",
            ],
        },
    },
    {
        title: "skills.titleFrameworks",
        skillLevel: {
            advanced: [
                "unity",
                "gamemaker",

            ],
            proficient: [
                "opengl",
                "vulkan",
                "vuejs",
                "nuxtjs",
                "blazor",
                "flask",
                "tailwind",
                "bootstrap",
                "quasar",
            ],
            familiar: [
                "unreal",
                "drone",
                "docker",
            ],
        },
    },
    {
        title: "skills.titleTools",
        skillLevel: {
            advanced: [
                "rider",
                "clion",
                "phpstorm",
                "pycharm",
                "visualstudio",
            ],
            proficient: [
                "git",
                "github",
                "ansible",
                "aseprite",
                "jira",
                "confluence",
            ],
            familiar: [
                "blender",
                "dbeaver",
                "photoshop",
                "premiere",
            ],
        },
    },
];

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
    "Javascript / Typescript": "2 years of job and hobby experience",
    "Python / Bash": "2 years of job and hobby experience",
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
