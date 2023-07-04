<script setup lang="ts">
import { computed } from 'vue';
import { useTheme } from '@/composables';

type TitleAlign = 'left' | 'right';

interface Props {
  title?: string;
  description?: string | string[];
  titleAlign?: TitleAlign;
}

const { title, description, titleAlign = 'left' } = defineProps<Props>();

const { themeColors } = useTheme();

const hasTitle = computed<boolean>(() => {
  return !!title;
});

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
    <section
      :class="[
        $style.container,
        {
          [$style.isColumnsReversed]: isColumnsReversed,
        },
      ]"
    >
      <div>
        <slot :name="isColumnsReversed ? 'last-column' : 'first-column'">
          <slot name="title">
            <h1
              v-if="hasTitle"
              :class="$style.title"
            >
              <span>{{ title }}</span>
            </h1>
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
    </section>
  </slot>
</template>

<style module>
.container {
  @apply flex justify-between;
  @apply gap-14 py-14;

  max-width: var(--max-content-width);
  margin: 0 auto;

  &.isColumnsReversed {
    flex-direction: row-reverse;
  }
}

.title {
  @apply text-3xl font-bold;

  color: v-bind('themeColors.primary');
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
    @apply font-bold;

    content: counter(item) '. ';
    counter-increment: item;
    color: v-bind('themeColors.primary');
  }
}
</style>
