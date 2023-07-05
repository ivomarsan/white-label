<script setup lang="ts">
import { computed } from 'vue';
import SectionTitle from './SectionTitle.vue';
import { useTheme } from '@/composables';

type TitleAlign = 'left' | 'right';

interface Props {
  title?: string;
  description?: string | string[];
  titleAlign?: TitleAlign;
  backgroundColor?: string;
}

const {
  title,
  description,
  titleAlign = 'left',
  backgroundColor = '#ffffff',
} = defineProps<Props>();

const { themeColors } = useTheme();

const isDescriptionList = computed<boolean>(() => {
  return !!Array.isArray(description);
});

const hasDescription = computed<boolean>(() => {
  if (isDescriptionList.value) {
    return !!description?.length;
  }

  return !!description;
});

const isColumnsReversed = computed<boolean>(() => {
  return titleAlign === 'right';
});
</script>

<template>
  <slot name="container">
    <section :class="$style.container">
      <div
        :class="[
          $style.inner,
          {
            [$style.isColumnsReversed]: isColumnsReversed,
          },
        ]"
      >
        <slot name="inner">
          <div>
            <slot :name="isColumnsReversed ? 'last-column' : 'first-column'">
              <slot name="title">
                <SectionTitle
                  :class="$style.title"
                  :title="title"
                />
              </slot>

              <slot name="description">
                <div
                  v-if="hasDescription"
                  :class="$style.description"
                >
                  <ol
                    v-if="isDescriptionList"
                    :class="$style.descriptionList"
                  >
                    <template
                      v-for="(text, index) in description"
                      :key="index"
                    >
                      <li :class="$style.descriptionItem">{{ text }}</li>
                    </template>
                  </ol>
                </div>
              </slot>
            </slot>
          </div>

          <div>
            <slot :name="isColumnsReversed ? 'first-column' : 'last-column'">
              <slot name="image"> </slot>
            </slot>
          </div>
        </slot>
      </div>
    </section>
  </slot>
</template>

<style module>
.container {
  @apply flex justify-center;
  @apply py-28;

  background-color: v-bind(backgroundColor);
}

.inner {
  @apply flex justify-between;
  @apply gap-28;

  max-width: var(--max-content-width);

  &.isColumnsReversed {
    flex-direction: row-reverse;
  }
}

.description {
  @apply mt-8;
}

.descriptionList {
  list-style: none;
  counter-reset: item;
}

.descriptionItem {
  @apply mt-4;

  &:before {
    @apply text-xl font-bold;

    content: counter(item) '. ';
    counter-increment: item;
    color: v-bind('themeColors.primary');
  }
}
</style>
