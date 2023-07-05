<script setup lang="ts">
import { computed, ref } from 'vue';
import ImageContainer from '@/components/ImageContainer.vue';
import ArrowRightSVG from '@/assets/svgs/arrow-right.svg';
import ArrowLeftSVG from '@/assets/svgs/arrow-left.svg';
import { useTheme } from '@/composables';

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
  showControls?: boolean;
}

const {
  items,
  blurInactives = false,
  expandActive = false,
  showControls = false,
} = defineProps<Props>();

const { themeColors } = useTheme();

const currentCaroulselItemIndex = ref<number>(0);

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

const areControlsVisible = computed<boolean>(() => {
  return !!showControls;
});

function isActiveItem(index: number) {
  return index === currentCaroulselItemIndex.value;
}

function onPrevButtonClick() {
  if (!items?.length) {
    return;
  }

  const lastItem = items?.length - 1;

  if (currentCaroulselItemIndex.value === 0) {
    currentCaroulselItemIndex.value = lastItem;
  } else {
    currentCaroulselItemIndex.value--;
  }
}

function onNextButtonClick() {
  if (!items?.length) {
    return;
  }

  const lastItem = items?.length - 1;

  if (currentCaroulselItemIndex.value === lastItem) {
    currentCaroulselItemIndex.value = 0;
  } else {
    currentCaroulselItemIndex.value++;
  }
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

      <template v-if="areControlsVisible">
        <button
          :class="[$style.controlButton, $style.left]"
          @click="onPrevButtonClick"
        >
          <ArrowLeftSVG />
        </button>

        <button
          :class="[$style.controlButton, $style.right]"
          @click="onNextButtonClick"
        >
          <ArrowRightSVG />
        </button>
      </template>
    </template>
  </div>
</template>

<style module>
.carousel {
  @apply flex;
  @apply gap-4 px-16;

  position: relative;

  &.isEmpty {
    @apply font-bold;
  }
}

.item {
  transition: all 100ms ease-in-out;

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

.controlButton {
  @apply flex items-center justify-center;

  height: 48px;
  width: 48px;
  border-radius: 50%;
  background-color: #cfcdcd;
  z-index: 1;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  & svg {
    width: 32px;
    fill: v-bind('themeColors.primary');
  }

  &.left {
    left: 0;
  }

  &.right {
    right: 0;
  }
}
</style>
