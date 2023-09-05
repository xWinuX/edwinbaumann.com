<template>
  <div class="group w-[90vw] h-[50vh] sm:w-[500px] sm:h-[600px]">
    <div
      ref="card"
      class="h-full w-full rounded-xl bg-cover bg-top bg-no-repeat card group shadow-glow"
      :style="{
        transform: cardTransform,
        transition: 'transform 0.25s ease-out',
        backgroundImage: `url(${thumbnail})`
      }"
    >
      <div class="flex h-full flex-col">
        <!-- Title -->
        <BaseProjectTileContent class="m-2 flex-col p-5 text-center">
          <div class="flex flex-row">
            <Icon
              class="transition absolute text-emerald-400 top-[1.1rem] svg-shadow-normal"
              :class="isExpanded ? 'scale-100 cursor-pointer': 'scale-0'"
              name="mingcute:large-arrow-left-fill"
              size="1.8rem"
              @click="() => {if (isExpanded) {emit('close'); console.log('HHHHHHHHH')}}"
            />
            <h2 class="m-auto mb-2 text-shadow-normal font-bold">
              Cpp Game Engine
            </h2>
          </div>

          <BaseGradientLine shadow-type="normal" />
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
            <div class="p-5">
              <div class="flex flex-col gap-5 md:flex-row">
                <p class="m-auto basis-1 md:basis-2/3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id enim et metus blandit auctor ac vitae justo. Praesent dui purus, lacinia quis ultrices vel, vulputate ac nibh. Quisque
                  tincidunt nisi accumsan diam pretium, quis imperdiet nisi maximus. Proin ut est odio. Integer ut auctor eros, ac dictum ante. Aenean luctus, urna eget sagittis vehicula, turpis nisi
                  congue quam, eget semper leo quam a elit. Cras lacinia euismod lectus, id egestas diam efficitur in. Nullam ultrices pellentesque congue. Mauris risus sapien, gravida vitae ipsum non,
                  fringilla lobortis felis. Donec ultricies, ex suscipit euismod consequat, velit dolor facilisis elit, id tincidunt elit sapien ac felis. Praesent sagittis congue pharetra. Pellentesque
                  habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                </p>
                <div class="m-auto flex basis-1 flex-col md:basis-1/3">
                  <img class="m-auto shadow-normal rounded-xl" src="~/assets/images/projects/cpp-game-engine/main.png" alt="CPP Game Engine main image">
                  <BaseTable
                    class="m-auto mt-10"
                    :table-data="{
                      'technologies': { key: 'Technologies', value: '' },
                      'Duration': '3.5 Months',
                      'sourceCode': { key: 'Source Code', value: ''},
                    }"
                  >
                    <template #technologies>
                      <div class="flex flex-row gap-2">
                        <BaseTechnologyIcon technology="Cpp" />
                        <BaseTechnologyIcon technology="OpenGL" />
                      </div>
                    </template>
                    <template #sourceCode>
                      <BaseLink link="https://github.com/xWinuX/CppGameEngine">
                        https://github.com/xWinuX/CppGameEngine
                      </BaseLink>
                    </template>
                  </BaseTable>
                </div>
              </div>
              <div class="flex flex-col gap-5 md:flex-row">
                <p class="m-auto basis-1 md:basis-2/3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id enim et metus blandit auctor ac vitae justo. Praesent dui purus, lacinia quis ultrices vel, vulputate ac nibh. Quisque
                  tincidunt nisi accumsan diam pretium, quis imperdiet nisi maximus. Proin ut est odio. Integer ut auctor eros, ac dictum ante. Aenean luctus, urna eget sagittis vehicula, turpis nisi
                  congue quam, eget semper leo quam a elit. Cras lacinia euismod lectus, id egestas diam efficitur in. Nullam ultrices pellentesque congue. Mauris risus sapien, gravida vitae ipsum non,
                  fringilla lobortis felis. Donec ultricies, ex suscipit euismod consequat, velit dolor facilisis elit, id tincidunt elit sapien ac felis. Praesent sagittis congue pharetra. Pellentesque
                  habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                </p>
                <div class="m-auto flex basis-1 flex-col md:basis-1/3">
                  <img class="m-auto project-image" src="~/assets/images/projects/cpp-game-engine/main.png" alt="CPP Game Engine main image">
                  <BaseTable
                    class="m-auto mt-10"
                    :table-data="{
                      'technologies': { key: 'Technologies', value: '' },
                      'Duration': '3.5 Months',
                      'sourceCode': { key: 'Source Code', value: ''},
                    }"
                  >
                    <template #technologies>
                      <div class="flex flex-row gap-2">
                        <BaseProjectTileContent class="p-1">
                          <BaseTechnologyIcon technology="Cpp" />
                        </BaseProjectTileContent>
                        <BaseProjectTileContent class="p-1">
                          <BaseTechnologyIcon technology="OpenGL" />
                        </BaseProjectTileContent>
                      </div>
                    </template>
                    <template #sourceCode>
                      <BaseLink link="https://github.com/xWinuX/CppGameEngine">
                        https://github.com/xWinuX/CppGameEngine
                      </BaseLink>
                    </template>
                  </BaseTable>
                </div>
              </div>
            </div>
          </OverlayScrollbarsComponent>
        </BaseProjectTileContent>

        <!-- Icons and duration -->
        <div
          class="mt-auto flex flex-row place-items-end justify-end gap-3 transition duration-500"
          :class="(isExpanded ? 'overflow-visible opacity-0' : 'delay-500 opacity-100') + ' ' + bottomHeightClasses"
        >
          <BaseProjectTileContent class="mr-auto p-4 text-center font-bold">
            3 Months
          </BaseProjectTileContent>
          <BaseProjectTileContent class="p-1">
            <BaseTechnologyIcon technology="Cpp" />
          </BaseProjectTileContent>
          <BaseProjectTileContent class="p-1">
            <BaseTechnologyIcon technology="OpenGL" />
          </BaseProjectTileContent>
        </div>
      </div>
    </div>
    <div
      class="relative opacity-0 glow glow-project-tile"
      :class="isExpanded ? 'group-hover:opacity-0' : 'group-hover:opacity-20'"
    />
  </div>
</template>

<script setup lang="ts">
import thumbnail from "assets/images/projects/cpp-game-engine/main.png";

import { OverlayScrollbarsComponent } from "overlayscrollbars-vue";
import { BaseProjectTileContent } from "#components";

export interface Props {
    isExpanded: boolean;
}

const loaded: Ref<boolean> = ref(false);

const container = ref<InstanceType<typeof BaseProjectTileContent> | null>(null);
const scroll = ref<InstanceType<typeof OverlayScrollbarsComponent> | null>(null);

const props = withDefaults(defineProps<Props>(), {
    isExpanded: false,
});

const emit = defineEmits(["close"]);

const card = ref();
const { elementX, elementY, isOutside, elementHeight, elementWidth } = useMouseInElement(card);
const cardTransform = computed(() => {
    if (isOutside.value || props.isExpanded) {
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

watch(() => props.isExpanded, (previous, current) => {
    if (previous) {
        bottomHeightClasses.value = "h-0 p-2";
        setTimeout(() => {
            bottomHeightClasses.value = "h-0";
        }, 500);
    } else {
        setTimeout(() => {
            bottomHeightClasses.value = defaultBottomHeightClasses;
        }, 500);
    }
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
