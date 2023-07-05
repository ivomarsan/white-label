<script setup lang="ts">
import { useTheme } from '@/composables';
import Button from '@/components/Button.vue';

const { themeColors } = useTheme();
</script>

<template>
  <Button
    background-color="#ccc"
    :class="$style.cta"
    enable-hover-effect
    :text-color="themeColors.primary"
  >
    <span>Entrar em Contato</span>
  </Button>
</template>

<style module>
.cta {
  @apply flex;
  @apply m-2;
}
</style>
