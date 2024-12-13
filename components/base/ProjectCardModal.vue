<template>
  <VueFinalModal
    content-class="group"
    hide-overlay
    prevent-click
    :click-to-close="false"
    :esc-to-close="false"
  >
    <!-- Background Blur -->
    <div
      class="fixed w-[100vw] h-[100vh] transition delay-500 z-1"
      :class="isExpanding ? ' bg-gray-900/60 backdrop-blur-md': 'bg-gray-900/0 backdrop-blur-0'"
      @click="onClose"
    />

    <!-- Actual Content -->
    <div
      class="absolute group max-w-[1280px]"
      :class="isExpanding ? 'enter-animation' : 'exit-animation max-w-[1280px] max-h-[100vh]'"
      :style="{
        left: left,
        top: top,
        width: isExpanding ? '99vw' : width,
        height: isExpanding ? '99vh' : height,
        transform: transform,
      }"
    >
      <BaseProjectCard :project="project" class="flex flex-col h-full" pause-animated>
        <template #header-begin>
          <button class="absolute top-[1.1rem] left-0 ml-5 top" @click="onClose">
            <Icon
              class="text-emerald-400 svg-shadow-glow"
              :class="showContentTransition"
              name="mingcute:large-arrow-left-fill"
              size="1.8rem"
            />
          </button>
        </template>
        <BaseProjectTileContent
          ref="container"
          class="mt-2 bg-black/60 flex-shrink flex-grow overflow-y-hidden"
          :class="showContentTransition"
        >
          <OverlayScrollbarsComponent
            ref="scroll"
            class="overflow-y-hidden"
          >
            <div class="mx-auto px-5 mt-4 prose prose-invert max-w-full text-white">
              <ContentRenderer v-if="markdownData" :value="markdownData">
                <ContentRendererMarkdown :value="markdownData" />
              </ContentRenderer>
            </div>
          </OverlayScrollbarsComponent>
        </BaseProjectTileContent>
      </BaseProjectCard>
    </div>
  </VueFinalModal>
</template>

<script setup lang="ts">
import { VueFinalModal } from "vue-final-modal";
import { OverlayScrollbarsComponent } from "overlayscrollbars-vue";
import { BaseProjectTileContent } from "#components";
import type { Project } from "~/types/project";
import type { VueUseElementBounding } from "~/types/vue-use";
import LanguageSelection from "~/components/app/LanguageSelection.vue";

const { locale } = useI18n();

const emit = defineEmits<{(e: "close"): void }>();

interface Props {
  project: Project;
  startState: VueUseElementBounding;
}

const props = defineProps<Props>();

const left = ref("");
const top = ref("");
const transform = ref("");
const width = ref("");
const height = ref("");

const container = ref<InstanceType<typeof BaseProjectTileContent> | null>(null);
const scroll = ref<InstanceType<typeof OverlayScrollbarsComponent> | null>(null);
const isExpanding = ref(false);
const canClose = ref(false);

function getScrollHeight() {
    if (container.value && container.value.content) {
        return container.value.content.clientHeight.toString() + "px";
    } else {
        return "0px";
    }
}

function setStartState() {
    left.value = props.startState.left.toString() + "px";
    top.value = props.startState.top.toString() + "px";
    transform.value = "translate(0, 0)";
    width.value = props.startState.width.toString() + "px";
    height.value = props.startState.height.toString() + "px";
}

function onClose() {
    if (!canClose.value) {
        return;
    }

    isExpanding.value = false;
    setStartState();
    setTimeout(() => {
        emit("close");
    }, 1.25 * 1000);
}

const markdownPath = computed(() => `/projects/${props.project.name}/_locales/${locale.value}`);

const showContentTransition = computed(() => isExpanding.value ? "show-content-animation opacity-100" : "hide-content-animation opacity-0");

const { data: markdownData } = await useAsyncData("projectSpecific", () => queryContent("projects").where({ _partial: true, _path: markdownPath.value }).findOne());

onMounted(() => {
    setStartState();

    setInterval(() => {
        if (container.value && container.value.content) {
            scroll.value.getElement().style.height = getScrollHeight();
        }
    });

    setTimeout(() => {
        left.value = "50%";
        top.value = "50%";
        transform.value = "translate(-50%, -50%)";
        isExpanding.value = true;
    }, 100);

    setTimeout(() => {
        canClose.value = true;
    }, 1.25 * 1000);
});

</script>

<style scoped>

* {
  --anim-move-duration: 0.5s;
  --anim-grow-duration: 0.5s;
  --anim-opacity-duration: 0.25s;
  --ease-in-out-back: cubic-bezier(0.68, -0.6, 0.32, 1.6);
}

.enter-animation {
  transition:
    transform var(--anim-move-duration) var(--ease-in-out-back),
    left var(--anim-move-duration) var(--ease-in-out-back),
    top var(--anim-move-duration) var(--ease-in-out-back),
    width var(--anim-grow-duration) var(--anim-move-duration) var(--ease-in-out-back),
    height var(--anim-grow-duration) var(--anim-move-duration) var(--ease-in-out-back),
}

.exit-animation {
  transition:
      transform var(--anim-move-duration) calc(var(--anim-opacity-duration) + var(--anim-grow-duration)) var(--ease-in-out-back),
      left var(--anim-move-duration) calc(var(--anim-opacity-duration) + var(--anim-grow-duration)) var(--ease-in-out-back),
      top var(--anim-move-duration) calc(var(--anim-opacity-duration) + var(--anim-grow-duration)) var(--ease-in-out-back),
      width var(--anim-grow-duration) var(--anim-opacity-duration) var(--ease-in-out-back),
      height var(--anim-grow-duration) var(--anim-opacity-duration) var(--ease-in-out-back),
}

.show-content-animation {
  transition: var(--anim-opacity-duration) calc(var(--anim-move-duration) + var(--anim-grow-duration));
}

.hide-content-animation {
  transition: var(--anim-opacity-duration);
}

</style>
