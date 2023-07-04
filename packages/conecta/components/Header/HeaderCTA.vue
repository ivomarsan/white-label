<script setup lang="ts">
const accent = ref('#05005b');
</script>

<template>
  <AppButton
    background-color="#ccc"
    :class="$style.cta"
    enable-hover-effect
    :text-color="accent"
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
