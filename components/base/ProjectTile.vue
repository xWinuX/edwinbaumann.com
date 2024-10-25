<template>
  <div class="group w-[400px] h-[600px]">
    <div
      ref="card"
      class="h-full w-full rounded-xl bg-cover bg-top bg-no-repeat card group shadow-glow"
      :style="{
        transform: cardTransform,
        transition: 'transform 0.25s ease-out',
        backgroundImage: `url(/projects/${project.path}/media/thumbnail.png)`
      }"
    >
      <div class="flex flex-col h-full ">
        <!-- Title -->
        <BaseProjectTileContent class="m-2 flex-col p-5 text-center">
          <div class="flex flex-row">
            <Icon
              class="transition absolute text-emerald-400 top-[1.1rem] svg-shadow-glow scale-0"
              name="mingcute:large-arrow-left-fill"
              size="1.8rem"
            />
            <h2 class="m-auto mb-2 text-shadow-normal font-bold">
              {{ project.name }}
            </h2>
          </div>

          <BaseGradientLine shadow-type="glow" />
        </BaseProjectTileContent>

        <BaseProjectTileContent
          class="flex-row mr-2 mb-2 ml-2 mt-auto p-4 justify-items-end justify-end align-bottom transition duration-500"
        >
          {{ description }}
        </BaseProjectTileContent>

        <!-- Icons and duration -->
        <div class="flex flex-row gap-3 justify-self-end p-2">
          <BaseProjectTileContent class="mr-auto p-4 text-center font-bold">
            {{ duration }}
          </BaseProjectTileContent>
          <BaseProjectTileContent v-for="technology in project.technologies" :key="technology" class="p-1">
            <BaseTechnologyIcon :technology="technology" />
          </BaseProjectTileContent>
        </div>
      </div>
    </div>
    <div class="relative opacity-0 glow glow-project-tile group-hover:opacity-20" />
  </div>
</template>

<script setup lang="ts">
import { OverlayScrollbarsComponent } from "overlayscrollbars-vue";
import humanizeDuration from "humanize-duration";
import type { Project } from "~/types/project";
import { dateToECMAFormat } from "~/utils/date";

export interface ProjectTileProps {
  project: Project;
}

const { locale } = useI18n();

const props = defineProps<ProjectTileProps>();

const loaded: Ref<boolean> = ref(false);

const container = ref<InstanceType<typeof BaseProjectTileContent> | null>(null);
const scroll = ref<InstanceType<typeof OverlayScrollbarsComponent> | null>(null);

const card = ref();
const { elementX, elementY, isOutside, elementHeight, elementWidth } = useMouseInElement(card);
const cardTransform = computed(() => {
    if (isOutside.value) {
        return "";
    }

    const maxRotation = 6;
    const rX = (maxRotation / 2 - (elementY.value / elementHeight.value) * maxRotation);
    const rY = ((elementX.value / elementWidth.value) * maxRotation - maxRotation / 2);

    return `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`;
});

function getScrollHeight() {
    if (container.value && container.value.content) {
        return container.value.content.clientHeight.toString() + "px";
    } else {
        return "0px";
    }
}

const defaultBottomHeightClasses = "p-2";
const bottomHeightClasses = ref(defaultBottomHeightClasses);

const description = computed(() => props.project.description[locale.value]);

const duration = computed(() => {
    const dateStart = new Date(dateToECMAFormat(props.project.dateStart));
    const dateEnd = new Date(dateToECMAFormat(props.project.dateEnd));
    const diffTime = Math.abs(dateEnd - dateStart);
    return humanizeDuration(diffTime, { language: locale.value, units: ["mo"], round: true });
});

onMounted(() => {
    loaded.value = true;

    setInterval(() => {
        if (container.value && container.value.content) {
            scroll.value.getElement().style.height = getScrollHeight();
        }
    });
});

</script>
