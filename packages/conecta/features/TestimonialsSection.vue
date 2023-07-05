<script setup lang="ts">
import SectionContainer from '@/components/Section/SectionContainer.vue';
import Carousel from '@/components/Carousel.vue';

const testimonials = [
  {
    title: 'Roberto Carlos',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: 'Paulo Porto',
  },
  {
    title: 'Francisco',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
];
</script>

<template>
  <SectionContainer :class="$style.testimonialsSection">
    <template #inner>
      <div :class="$style.blogSectionInner">
        <SectionTitle
          :class="$style.title"
          title="O que dizem sobre a Conecta Treinamentos"
        />

        <Carousel
          blur-inactives
          :items="testimonials"
          show-controls
        />
      </div>
    </template>
  </SectionContainer>
</template>

<style module>
.blogSectionInner {
  @apply flex flex-col items-center;
}

.title {
  @apply mb-16;
}
</style>
