<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Treinamentos para vida` : 'Conecta';
  },
});
</script>

<template>
  <div>
    <slot />
  </div>
</template>
