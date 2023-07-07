<script setup lang="ts">
import LogoSVG from '@/assets/svgs/logo.svg';
import { useTheme } from '@/composables';

const { themeColors } = useTheme();
</script>

<template>
  <div :class="$style.logo">
    <LogoSVG />
  </div>
</template>

<style module>
.logo {
  @apply flex h-full;
  @apply m-2;

  max-width: 15rem;

  & svg {
    fill: v-bind('themeColors.secondary');
  }
}
</style>
