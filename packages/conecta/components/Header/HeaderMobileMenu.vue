<script setup lang="ts">
import { useTheme } from '@/composables';
import Button from '@/components/Button.vue';
import type { RouteLocationRaw } from 'vue-router';
import CloseSVG from '@/assets/svgs/close.svg';

interface MenuItem {
  title: string;
  url?: RouteLocationRaw;
}

export interface Props {
  menuItems?: MenuItem[];
}

const {
  menuItems
} = defineProps<Props>();

const { themeColors } = useTheme();

const isMenuVisible = ref<boolean>(false);

function openMenu() {
  isMenuVisible.value = true
}

function closeMenu() {
  isMenuVisible.value = false
}

function onOpenMenuButtonClick() {
  openMenu()
}

function onCloseMenuButtonClick() {
  closeMenu()
}

function onItemClick() {
  closeMenu()
}
</script>

<template>
  <Button
    :background-color="themeColors.primary"
    :outline-color="themeColors.secondary"
    :class="$style.button"
    enable-hover-effect
    :text-color="themeColors.secondary"
    outline
    @click="onOpenMenuButtonClick"
  >
    <span>Menu</span>
  </Button>

  <nav :class="$style.container" v-show="isMenuVisible">
    <ul :class="$style.menu">
      <template
        v-for="(item, index) in menuItems"
        :key="index"
      >
        <li :class="$style.item">
          <NuxtLink :to="item.url" @click="onItemClick()">
            <span>{{  item.title }}</span>
          </NuxtLink>
        </li>
      </template>
    </ul>

    <button
      :class="$style.closeButton"
      @click="onCloseMenuButtonClick"
    >
      <CloseSVG />
    </button>
  </nav>
</template>

<style module>
.button {
  @apply m-2;
}

.container {
  @apply flex;

  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0,0,0,0.8);
  backdrop-filter: blur(6px);
  z-index: 1;
}

.menu {
  @apply flex flex-col;
  @apply py-8;

  color: v-bind('themeColors.secondary');
  background-color: v-bind('themeColors.primary');
}

.item {
  @apply px-16 py-6;
}

.closeButton {
  @apply flex items-center justify-center;

  height: 48px;
  width: 48px;
  border-radius: 50%;
  background-color: v-bind('themeColors.base');
  color: v-bind('themeColors.primary');
  position: relative;
  transform: translateX(-50%) translateY(8px);

  & svg {
    width: 32px;
    fill: v-bind('themeColors.primary');
  }

  &.left {
    left: 0;
  }

  &.right {
    right: 0;
  }
}
</style>
