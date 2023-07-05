<script setup lang="ts">
import { computed } from 'vue';
import ImageContainer from '@/components/ImageContainer.vue';

type MediaType = 'image' | 'video';

interface CarouselItem {
  title: string;
  description?: string;
  mediaType?: MediaType;
  mediaUrl?: string;
}

interface Props {
  items?: CarouselItem[];
  blurInactives?: boolean;
  expandActive?: boolean;
}

const {
  items,
  blurInactives = false,
  expandActive = true,
} = defineProps<Props>();

const isEmpty = computed<boolean>(() => {
  if (Array.isArray(items)) {
    return !items.length;
  }

  return !items;
});

const areInactiveItemsBlured = computed<boolean>(() => {
  return !!blurInactives;
});

const isActiveItemExpanded = computed<boolean>(() => {
  return !!expandActive;
});

function isActiveItem(index: number) {
  return index === 1;
}
</script>

<template>
  <div
    :class="[
      $style.carousel,
      {
        [$style.isEmpty]: isEmpty,
      },
    ]"
  >
    <template v-if="isEmpty">
      <slot name="isEmpty"></slot>
    </template>

    <template v-else>
      <template
        v-for="(item, index) in items"
        :key="index"
      >
        <ImageContainer
          box-shadow="on"
          :class="[
            $style.item,
            {
              [$style.isBlurred]: areInactiveItemsBlured,
              [$style.isExpanded]: isActiveItemExpanded,
            },
            [isActiveItem(index) ? $style.isActive : $style.isInactive],
          ]"
          :overlay-description="item.description"
          :overlay-title="item.title"
          src="images/feeling-safe.jpg"
        />
      </template>
    </template>
  </div>
</template>

<style module>
.carousel {
  @apply flex;
  @apply gap-4;

  &.isEmpty {
    @apply font-bold;
  }
}

.item {
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
