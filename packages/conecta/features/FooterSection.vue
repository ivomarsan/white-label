<script setup lang="ts">
import SectionContainer from '@/components/Section/SectionContainer.vue';
import Footer from '@/components/Footer.vue';
import { useTheme } from '@/composables';

const { themeColors } = useTheme();
</script>

<template>
  <SectionContainer :background-color="themeColors.primary">
    <template #container>
      <Footer />
    </template>
  </SectionContainer>
</template>

<style module></style>
