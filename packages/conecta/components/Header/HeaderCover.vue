<script setup lang="ts">
import { computed } from 'vue';
import CurveShapeSVG from '@/assets/svgs/curve-shape.svg';

interface Props {
  fullscreen?: boolean;
  enableCurveShape?: boolean;
}

const { fullscreen = false, enableCurveShape = false } = defineProps<Props>();

const isFullscreen = computed<boolean>(() => {
  return !!fullscreen;
});

const isCurveShapeVisible = computed<boolean>(() => {
  return !!enableCurveShape;
});
</script>

<template>
  <div
    :class="[
      $style.container,
      {
        [$style.isFullscreen]: isFullscreen,
      },
    ]"
  >
    <div :class="$style.inner">
      <slot />
    </div>

    <div
      v-if="isCurveShapeVisible"
      :class="$style.curveShape"
    >
      <CurveShapeSVG />
    </div>
  </div>
</template>

<style module>
.container {
  @apply flex flex-col justify-between;

  background-image: url('@/assets/images/background-header-cover.jpg');
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;

  &.isFullscreen {
    min-height: 100vh;
  }
}

.inner {
  @apply flex flex-col;
}
</style>
