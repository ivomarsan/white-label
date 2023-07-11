<script setup lang="ts">
import { computed } from 'vue';
import { useTheme } from '@/composables';

interface Props {
  title?: string;
}

const { title } = defineProps<Props>();

const { themeColors } = useTheme();

const hasTitle = computed<boolean>(() => {
  return !!title;
});
</script>

<template>
  <h1
    v-if="hasTitle"
    :class="$style.title"
  >
    <span>{{ title }}</span>
  </h1>
</template>

<style module>
.title {
  @apply text-center text-3xl font-bold;

  color: v-bind('themeColors.primary');

  @media only screen and (max-width: 800px) {
    @apply text-2xl;
  }
}
</style>
