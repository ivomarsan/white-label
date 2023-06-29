<script setup lang="ts">
import { computed } from 'vue';
import CurveShapeSVG from '@/assets/svgs/curve-shape.svg';

type CurveShape = 'on' | 'off' | 'no-effect';

interface Props {
  fullscreen?: boolean;
  curveShape?: CurveShape;
}

const { fullscreen = false, curveShape = 'off' } = defineProps<Props>();

const isFullscreen = computed<boolean>(() => {
  return !!fullscreen;
});

const isCurveShapeVisible = computed<boolean>(() => {
  return curveShape !== 'off';
});

const isCurveShapeEffectEnable = computed<boolean>(() => {
  return !!isCurveShapeVisible.value && curveShape !== 'no-effect';
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
      :class="[
        $style.curveShape,
        {
          [$style.enableEffect]: isCurveShapeEffectEnable,
        },
      ]"
    >
      <CurveShapeSVG />
    </div>
  </div>
</template>

<style module>
.container {
  @apply flex flex-col justify-between;

  background-image: url('@/assets/images/background-header-cover.webp');
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
