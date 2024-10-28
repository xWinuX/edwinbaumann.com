<template>
  <VueFinalModal
    class="flex justify-center items-center"
    content-class="group"
  >
    <div
      :class="isExpanded ? 'w-[80vw] h-[95vh] opacity-100' : 'w-[0px] h-[0px] opacity-0' "
      class="rounded-xl bg-cover bg-top bg-no-repeat card group shadow-glow grow-animation"
      :style="{
        backgroundImage: `url(/projects/cpp-game-engine/media/thumbnail.png)`
      }"
    >
      <div class="flex flex-col h-full ">
        <!-- Title -->
        <BaseProjectTileContent class="m-2 flex-col p-5 text-center">
          <div class="flex flex-row">
            <Icon
              class="transition absolute text-emerald-400 top-[1.1rem] svg-shadow-glow"
              :class="isExpanded ? 'scale-100 cursor-pointer': 'scale-0'"
              name="mingcute:large-arrow-left-fill"
              size="1.8rem"
              @click="() => {
                if (isExpanded) {emit('close');}
              }"
            />
            <h2 class="m-auto mb-2 text-shadow-normal font-bold">
              Cpp Game Engine
            </h2>
          </div>

          <BaseGradientLine shadow-type="glow" />
        </BaseProjectTileContent>

        <BaseProjectTileContent
          ref="container"
          class="mr-2 mb-2 ml-2 flex-shrink flex-grow overflow-y-hidden transition duration-500"
          :class="isExpanded ? 'opacity-100  delay-500': 'opacity-0'"
        >
          <OverlayScrollbarsComponent
            ref="scroll"
            class="overflow-y-hidden"
          >
            <div class="mx-4 mt-4 prose prose-invert max-w-full text-white">
              <ContentRenderer :value="markdownData">
                <ContentRendererMarkdown :value="markdownData" />
              </ContentRenderer>
            </div>
          </OverlayScrollbarsComponent>
        </BaseProjectTileContent>

        <!-- Icons and duration -->
        <div
          class="flex flex-row gap-3 justify-self-end transition duration-500"
          :class="bottomHeightClasses"
        >
          <BaseProjectTileContent class="mr-auto p-4 text-center font-bold">
            3 Months
          </BaseProjectTileContent>
          <BaseProjectTileContent class="p-1">
            <BaseTechnologyIcon technology="cpp" />
          </BaseProjectTileContent>
          <BaseProjectTileContent class="p-1">
            <BaseTechnologyIcon technology="opengl" />
          </BaseProjectTileContent>
        </div>
      </div>
    </div>
  </VueFinalModal>
</template>

<script setup lang="ts">
import { VueFinalModal } from "vue-final-modal";
import { OverlayScrollbarsComponent } from "overlayscrollbars-vue";
import { BaseProjectTileContent } from "#components";
import type { ProjectContent } from "~/types/project";

const { locale } = useI18n();

const emit = defineEmits<{(e: "close"): void}>();

export interface Props {
  projectData: ProjectContent;
}

const props = defineProps<Props>();

const loaded: Ref<boolean> = ref(false);

const container = ref<InstanceType<typeof BaseProjectTileContent> | null>(null);
const scroll = ref<InstanceType<typeof OverlayScrollbarsComponent> | null>(null);
const isExpanded = ref(false);

function getScrollHeight() {
    if (container.value && container.value.content) {
        return container.value.content.clientHeight.toString() + "px";
    } else {
        return "0px";
    }
}

const defaultBottomHeightClasses = "p-2";
const bottomHeightClasses = ref(defaultBottomHeightClasses);

const markdownPath = computed(() => `/projects/cpp-game-engine/_locales/${locale.value}`);

const { data: markdownData } = await useAsyncData("projectSpecific", () => queryContent("projects").where({ _partial: true, _path: markdownPath.value }).findOne());

console.log(markdownData.value);

onMounted(() => {
    loaded.value = true;

    setInterval(() => {
        if (container.value && container.value.content) {
            scroll.value.getElement().style.height = getScrollHeight();
        }
    });

    setTimeout(() => {
        isExpanded.value = true;
    }, 100);
});

</script>

<style scoped>

.grow-animation {
  transition: width 0.5s, height 0.5s, opacity 0.25s 0.1s;
}

</style>
