<script setup lang="ts">
import { computed } from 'vue';
import WaveSVG from '@/assets/svgs/wave.svg';

type Wave = 'on' | 'off' | 'no-effect';

interface Props {
  fullscreen?: boolean;
  wave?: Wave;
  backgroundWaveColor?: string;
}

const {
  fullscreen = false,
  wave = 'off',
  backgroundWaveColor = '#ffffff',
} = defineProps<Props>();

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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background-image: url('@/assets/images/background-header-cover.webp');
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;

  &.isFullscreen {
    min-height: 100vh;
  }
}

.inner {
  display: flex;
  flex-direction: column;
  max-width: 800px;
  width: 100%;
}

.wave {
  width: 100%;

  svg path {
    fill: v-bind(backgroundWaveColor);
  }

  &.enableEffect {
    overflow-x: hidden;

    & svg {
      width: 200%;
      position: relative;
      animation: move-left 5s linear infinite;
    }
  }
}

@keyframes move-left {
  0% {
    left: 0;
  }

  100% {
    left: -100%;
  }
}
</style>
