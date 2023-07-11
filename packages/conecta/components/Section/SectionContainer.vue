<script setup lang="ts">
import { computed } from 'vue';
import SectionTitle from '@/components/Section/SectionTitle.vue';
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
  <section :class="$style.container">
    <slot name="container">
      <div
        :class="[
          $style.inner,
          {
            [$style.isColumnsReversed]: isColumnsReversed,
          },
        ]"
      >
        <slot name="inner">
          <div :class="$style.column">
            <slot :name="isColumnsReversed ? 'last-column' : 'first-column'">
              <slot name="title">
                <SectionTitle :title="title" />
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

                  <p v-else>
                    {{ description }}
                  </p>
                </div>
              </slot>
            </slot>
          </div>

          <div :class="$style.column">
            <slot :name="isColumnsReversed ? 'first-column' : 'last-column'">
              <slot name="image"> </slot>
            </slot>
          </div>
        </slot>
      </div>
    </slot>
  </section>
</template>

<style module>
.container {
  @apply flex justify-center;

  background-color: v-bind(backgroundColor);
}

.inner {
  @apply flex justify-between;
  @apply gap-28 py-28;

  max-width: var(--max-content-width);

  &.isColumnsReversed {
    flex-direction: row-reverse;
  }

  @media only screen and (max-width: 1700px) {
    @apply gap-12 p-12;
  }

  @media only screen and (max-width: 800px) {
    @apply gap-8 p-8;
  }

  @media only screen and (max-width: 600px) {
    @apply flex-col;

    &.isColumnsReversed {
      @apply flex-col;
    }
  }
}

.column {
  min-width: 30%;
}

.description {
  @apply mt-8 text-xl;

  @media only screen and (max-width: 800px) {
    @apply text-base;
  }
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
