<script setup lang="ts">
import { useTheme } from '@/composables';

const { themeColors } = useTheme();
</script>

<template>
  <AppButton
    background-color="#ccc"
    :class="$style.cta"
    enable-hover-effect
    :text-color="themeColors.primary"
  >
    <span>Entrar em Contato</span>
  </AppButton>
</template>

<style module>
.cta {
  @apply flex;
  @apply m-2;
}
</style>
