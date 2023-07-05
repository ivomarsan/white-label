<script setup lang="ts">
import { computed } from 'vue';
import { useTheme } from '@/composables';

type Border = 'left' | 'right' | 'none';

type BoxShadow = 'on' | 'off';

interface Props {
  border?: Border;
  boxShadow?: BoxShadow;
  src?: string;
  alt?: string;
  overlayTitle?: string;
  overlayDescription?: string;
}

const {
  border = 'none',
  boxShadow = 'off',
  src,
  alt,
  overlayTitle,
  overlayDescription,
} = defineProps<Props>();

const { themeColors } = useTheme();

const hasBorder = computed<boolean>(() => {
  return border !== 'none';
});

const hasBoxShadow = computed<boolean>(() => {
  return boxShadow === 'on';
});

const hasBorderLeft = computed<boolean>(() => {
  return !!hasBorder.value && border === 'left';
});

const hasBorderRight = computed<boolean>(() => {
  return !!hasBorder.value && border === 'right';
});

const hasOverlayTitle = computed<boolean>(() => {
  return !!overlayTitle;
});

const hasOverlayDescription = computed<boolean>(() => {
  return !!overlayDescription;
});

const isOverlayVisible = computed<boolean>(() => {
  return !!hasOverlayTitle.value || !!hasOverlayDescription.value;
});

function getImage(src: Props['src']) {
  if (!src) {
    return '';
  }

  return new URL(`../assets/${src}`, import.meta.url).href;
}
</script>

<template>
  <div
    :class="[
      $style.container,
      {
        [$style.hasBoxShadow]: hasBoxShadow,
        [$style.hasBorder]: hasBorder,
        [$style.hasBorderLeft]: hasBorderLeft,
        [$style.hasBorderRight]: hasBorderRight,
      },
    ]"
  >
    <img
      :alt="alt"
      :src="getImage(src)"
    />

    <div
      v-if="isOverlayVisible"
      :class="$style.overlay"
    >
      <span
        v-if="hasOverlayTitle"
        :class="$style.title"
      >
        {{ overlayTitle }}
      </span>
      <span
        v-if="hasOverlayDescription"
        :class="$style.description"
      >
        {{ overlayDescription }}
      </span>
    </div>
  </div>
</template>

<style module>
.container {
  @apply flex;

  position: relative;
  border-radius: 16px;
  overflow: hidden;

  &.hasBoxShadow {
    box-shadow: 0px 2px 18px 0px rgba(0, 0, 0, 0.23);
  }

  &.hasBorder {
    border-color: v-bind('themeColors.primary');
  }

  &.hasBorderLeft {
    border-radius: 16px 16px 16px 15vw;
    border-left-width: 1vw;
  }

  &.hasBorderRight {
    border-radius: 16px 16px 15vw 16px;
    border-right-width: 1vw;
  }
}

.overlay {
  @apply flex flex-col items-center justify-center;
  @apply gap-4 p-4;

  position: absolute;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  display: flex;
}

.title {
  color: #ffffff;
}

.description {
  color: #ffffff;
}
</style>
