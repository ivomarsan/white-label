<script setup lang="ts">
import { computed } from 'vue';
import WaveSVG from '@/assets/svgs/wave.svg';

type Wave = 'on' | 'off' | 'no-effect';

interface Props {
  fullscreen?: boolean;
  wave?: Wave;
}

const { fullscreen = false, wave = 'off' } = defineProps<Props>();

const isFullscreen = computed<boolean>(() => {
  return !!fullscreen;
});

const isWaveVisible = computed<boolean>(() => {
  return wave !== 'off';
});

const isWaveEffectEnable = computed<boolean>(() => {
  return !!isWaveVisible.value && wave !== 'no-effect';
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
      v-if="isWaveVisible"
      :class="[
        $style.wave,
        {
          [$style.enableEffect]: isWaveEffectEnable,
        },
      ]"
    >
      <WaveSVG />
    </div>
  </div>
</template>

<style module>
.container {
  @apply flex flex-col items-center justify-between;

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

  max-width: 800px;
  width: 100%;
}

.wave {
  display: block;
  width: 100%;

  &.enableEffect {
    display: block;
  }
}
</style>
