<script setup lang="ts">
import ImageContainer from '@/components/ImageContainer.vue';
import Carousel from '@/components/Carousel.vue';
import type { Props as CarouselProps } from '@/components/Carousel.vue';
import { useTheme } from '@/composables';

interface Props {
  items?: CarouselProps['items'];
}

const { items } = defineProps<Props>();

const { themeColors } = useTheme();
</script>

<template>
  <Carousel
    autoplay
    blur-inactives
    expand-active
    :items="items"
    show-controls
  >
    <template
      #item="{
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
        :src="mediaUrl"
      />
    </template>

    <template #bottom="{ title, description }">
      <div :class="$style.legend">
        <p :class="$style.testimonial">
          <span>{{ description }}</span>
        </p>
        <h1 :class="$style.name">
          <span>{{ title }}</span>
        </h1>
      </div>
    </template>
  </Carousel>
</template>

<style module>
.image {
  width: 100%;
  max-width: 150px;
  aspect-ratio: 1 / 1;

  &.isInactive {
    z-index: 0;

    &.isBlurred {
      filter: blur(3px);
      transition: filter 200ms linear;
    }
  }

  &.isActive {
    z-index: 1;

    &.isExpanded {
      transform: scale(1.15);
      transition: transform 300ms ease-in-out;
    }
  }
}

.legend {
  @apply flex flex-col w-full;
  @apply text-center;
  @apply mt-4 p-4;

  color: v-bind('themeColors.base');
  max-width: 600px;
}

.name {
  @apply text-xl;

  &::before {
    content: '— ';
  }
}

.testimonial {
  @apply mb-2;

  quotes: "“" "„" "‘" "‚";

  &::before {
    content: open-quote;
    font-size: 3rem;
    line-height: 1;
    margin-right: 1rem;
    vertical-align: text-bottom;
    color: v-bind('themeColors.secondary');
  }

  &::after {
    content: close-quote;
    font-size: 3rem;
    line-height: 0;
    margin-left: 1rem;
    vertical-align: text-top;
    color: v-bind('themeColors.secondary');
  }
}
</style>
