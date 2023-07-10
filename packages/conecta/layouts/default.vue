<script setup lang="ts">
import FooterSection from '@/features/FooterSection.vue';

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Treinamentos para vida` : 'Conecta';
  },
});
</script>

<template>
  <main>
    <slot />
  </main>

  <FooterSection />
</template>
