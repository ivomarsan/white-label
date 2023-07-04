<script setup lang="ts">
import { computed } from 'vue';

type Border = 'left' | 'right' | 'none';

type BoxShadow = 'on' | 'off';

interface Props {
  border?: Border;
  boxShadow?: BoxShadow;
  src?: string;
  alt?: string;
}

const { border = 'none', boxShadow = 'off', src, alt } = defineProps<Props>();

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
  </div>
</template>

<style module>
.container {
  @apply flex;

  &.hasBoxShadow {
    box-shadow: 0px 2px 18px 0px rgba(0, 0, 0, 0.23);
  }

  &.hasBorder {
    overflow: hidden;
    border-color: #05005b;
  }

  &.hasBorderLeft {
    border-radius: 16px 16px 16px 15vw;
    border-left-width: 2vw;
  }

  &.hasBorderRight {
    border-radius: 16px 16px 15vw 16px;
    border-right-width: 2vw;
  }
}
</style>
