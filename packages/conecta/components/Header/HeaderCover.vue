<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  fullscreen?: boolean;
}

const { fullscreen = false } = defineProps<Props>();

const isFullscreen = computed<boolean>(() => {
  return !!fullscreen;
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
  </div>
</template>

<style module>
.container {
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
