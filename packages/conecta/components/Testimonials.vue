<script setup lang="ts">
import ImageContainer from '@/components/ImageContainer.vue';
import Carousel from '@/components/Carousel.vue';
import type { Props as CarouselProps } from '@/components/Carousel.vue';

interface Props {
  items?: CarouselProps['items'];
}

const { items } = defineProps<Props>();
</script>

<template>
  <Carousel
    blur-inactives
    expand-active
    :items="items"
    show-controls
  >
    <template
      #default="{
        isActive,
        title,
        description,
        mediaUrl,
        areInactiveItemsBlured,
        isActiveItemExpanded,
      }"
    >
      <ImageContainer
        box-shadow="on"
        :class="[
          $style.image,
          {
            [$style.isBlurred]: areInactiveItemsBlured,
            [$style.isExpanded]: isActiveItemExpanded,
          },
          [isActive ? $style.isActive : $style.isInactive],
        ]"
        :overlay-description="description"
        :overlay-title="title"
        :src="mediaUrl"
      />
    </template>
  </Carousel>
</template>

<style module>
.image {
  transition: all 100ms ease-in-out;
  max-width: 350px;
  height: 350px;
  width: 100%;

  &.isInactive {
    z-index: 0;

    &.isBlurred {
      filter: blur(3px);
    }
  }

  &.isActive {
    z-index: 1;

    &.isExpanded {
      transform: scale(1.15);
    }
  }
}
</style>
