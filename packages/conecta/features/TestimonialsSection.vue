<script setup lang="ts">
import SectionContainer from '@/components/Section/SectionContainer.vue';
import Carousel from '@/components/Carousel.vue';

const testimonials = [
  {
    title: 'Roberto Carlos',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    mediaUrl: 'images/people/person-1.png',
  },
  {
    title: 'Paulo Porto',
    mediaUrl: 'images/people/person-2.png',
  },
  {
    title: 'Francisco',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    mediaUrl: 'images/people/person-3.png',
  },
];
</script>

<template>
  <SectionContainer
    background-color="#05005B"
    :class="$style.testimonialsSection"
  >
    <template #inner>
      <div :class="$style.inner">
        <SectionTitle
          :class="$style.title"
          title="O que dizem sobre a Conecta Treinamentos"
        />

        <Carousel
          blur-inactives
          expand-active
          :items="testimonials"
          show-controls
        />
      </div>
    </template>
  </SectionContainer>
</template>

<style module>
.testimonialsSection {
  @apply pb-56 pt-40;
}

.inner {
  @apply flex flex-col items-center;
}

.title {
  @apply mb-16;

  color: #f8eb88;
}
</style>
