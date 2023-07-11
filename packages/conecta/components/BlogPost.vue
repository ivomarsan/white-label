<script setup lang="ts">
import ImageContainer from '@/components/ImageContainer.vue';
import { useTheme } from '@/composables';

interface Props {
  title?: string;
  coverPhoto?: string;
}

const { title, coverPhoto } = defineProps<Props>();

const { themeColors } = useTheme();
</script>

<template>
  <SectionContainer
    :background-color="themeColors.base"
    :class="$style.blogPost"
  >
    <template #inner>
      <div :class="$style.inner">
        <SectionTitle
          :class="$style.title"
          :title="title"
        />

        <ImageContainer
          box-shadow="on"
          :src="coverPhoto"
        />

        <article :class="$style.post">
          <slot></slot>
        </article>
      </div>
    </template>
  </SectionContainer>
</template>

<style module>
.blogPost {
  @apply py-12;
}

.inner {
  @apply flex flex-col items-center;
}

.title {
  @apply mb-16;
}

.post {
  @apply text-xl;
  @apply mt-16;

  max-width: 1024px;
  width: 100%;
  color: v-bind('themeColors.primary');

  & > * + * {
    @apply mt-4;
  }
}
</style>
