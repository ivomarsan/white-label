<script setup lang="ts">
import { computed, ref } from 'vue';
import ArrowRightSVG from '@/assets/svgs/arrow-right.svg';
import ArrowLeftSVG from '@/assets/svgs/arrow-left.svg';
import { useTheme } from '@/composables';
import type {ComputedRef} from 'vue'

type MediaType = 'image' | 'video';

type SlotBinds<T> = {
  isActive?: boolean
  areInactiveItemsBlured?: ComputedRef<boolean>
  isActiveItemExpanded?: ComputedRef<boolean>
} & Partial<T>

interface CarouselItem {
  title: string;
  description?: string;
  mediaType?: MediaType;
  mediaUrl?: string;
  url?: string;
}

export interface Props {
  items?: CarouselItem[];
  blurInactives?: boolean;
  expandActive?: boolean;
  showControls?: boolean;
  autoplay?: boolean;
}

const {
  items,
  blurInactives = false,
  expandActive = false,
  showControls = false,
  autoplay = false,
} = defineProps<Props>();

const { themeColors } = useTheme();
const slots = useSlots()

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

const isBottomSlotVisible = computed<boolean>(() => {
  return !!slots['bottom'];
});

function isActiveItem(index: number) {
  return index === currentCaroulselItemIndex.value;
}

function setPreviousItem() {
  if (!items?.length) {
    return;
  }

  const lastItemIndex = items?.length - 1;

  if (currentCaroulselItemIndex.value === 0) {
    currentCaroulselItemIndex.value = lastItemIndex;
  } else {
    currentCaroulselItemIndex.value--;
  }
}

function setNextItem() {
  if (!items?.length) {
    return;
  }

  const lastItemIndex = items?.length - 1;

  if (currentCaroulselItemIndex.value === lastItemIndex) {
    currentCaroulselItemIndex.value = 0;
  } else {
    currentCaroulselItemIndex.value++;
  }
}

function generateSlotBinds(item?: CarouselItem, index?: number): SlotBinds<CarouselItem> {
  if(item && index || index === 0) {
    return {
      ...item,
      isActive: isActiveItem(index),
      areInactiveItemsBlured,
      isActiveItemExpanded,
    }  
  } else if (items?.length) {
    return {
      ...items[currentCaroulselItemIndex.value],
    }
  } else {
    return {}
  }
}

onMounted(() => {
  if (autoplay) {
    setInterval(() => {
      setNextItem();
    }, 5000);
  }
});

function onPrevButtonClick() {
  setPreviousItem();
}

function onNextButtonClick() {
  setNextItem();
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
        <div :class="$style.items">
          <slot
            v-bind="generateSlotBinds(item, index)"
          ></slot>
        </div>
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

  <div :class="$style.bottom" v-if="isBottomSlotVisible">
    <slot name="bottom"
      v-bind="generateSlotBinds()"
    ></slot>
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

.items {
  width: 100%;
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

.bottom {
  @apply mt-4;
}
</style>
