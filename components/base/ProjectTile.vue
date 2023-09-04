<template>
  <div class="group w-[500px] h-[600px]">
    <div
      ref="card"
      class="h-full w-full rounded-xl bg-cover bg-top bg-no-repeat card group glow-shadow"
      :style="{
        transform: cardTransform,
        transition: 'transform 0.25s ease-out',
        backgroundImage: `url(${thumbnail})`
      }"
    >
      <div class="flex h-full flex-col">
        <!-- Title -->
        <BaseProjectTileContent class="m-2 flex-row p-5 text-center">
          <h2 class="mb-2 font-bold">
            Cpp Game Engine
          </h2>
          <BaseGradientLine />
        </BaseProjectTileContent>

        <BaseProjectTileContent
          ref="container"
          class="mt-auto mr-2 mb-auto ml-2 flex-shrink flex-grow overflow-y-hidden transition duration-500"
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
            </div>
          </OverlayScrollbarsComponent>
        </BaseProjectTileContent>

        <!-- Icons and duration -->
        <div class="mt-auto flex flex-row place-items-end justify-end gap-3 p-2">
          <BaseProjectTileContent class="mr-auto p-4 text-center font-bold">
            3 Months
          </BaseProjectTileContent>
          <BaseTechnologyIcon technology="Cpp" />
          <BaseTechnologyIcon technology="OpenGL" />
        </div>
      </div>
    </div>
    <div
      class="relative opacity-0 glow glow-project-tile "
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
};

onMounted(() => {
    loaded.value = true;

    setInterval(() => {
        if (container.value && container.value.content) {
            scroll.value.getElement().style.height = getScrollHeight();
        }
    });
});

</script>
