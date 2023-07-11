<script setup lang="ts">
import { useTheme } from '@/composables';

const { themeColors } = useTheme();

interface Props {
  fixed?: boolean;
  hideCover?: boolean;
}

const { fixed, hideCover } = defineProps<Props>();

const isFixed = computed<boolean>(() => {
  return !!fixed;
});

const isCoverVisible = computed<boolean>(() => {
  return !hideCover;
});
</script>

<template>
  <section :class="$style.container">
    <header
      :class="[
        $style.header,
        {
          [$style.isFixed]: isFixed,
        },
      ]"
    >
      <div :class="$style.inner">
        <HeaderLogo />

        <HeaderMenu :class="$style.menu" />

        <HeaderCTA />
      </div>
    </header>

    <template v-if="isCoverVisible">
      <HeaderCover
        :background-wave-color="themeColors.base"
        :class="$style.cover"
        wave="on"
      >
        <div :class="$style.content">
          <h1 :class="$style.title">
            <span>Treinamentos para a vida</span>
          </h1>

          <h2 :class="$style.subtitle">
            <span
              >Somos uma empresa gestora de treinamentos para a vida. Para isso,
              nós conectamos quem precisa de treinamentos com os maiores
              especialistas em segurança de todo o Brasil.</span
            >
          </h2>
        </div>
      </HeaderCover>
    </template>
  </section>
</template>

<style module>
:root {
  --header-height: 6rem;
}

.container {
  @apply flex flex-col items-center;

  background-color: v-bind('themeColors.primary');
}

.header {
  @apply flex w-full;

  height: var(--header-height);
  background-color: v-bind('themeColors.primary');

  position: fixed;
  z-index: 9;

  &.isFixed {
    position: fixed;
  }
}

.inner {
  @apply flex  flex-grow items-center justify-between;

  max-width: var(--max-content-width);
  margin: 0 auto;
}

.cover {
  @apply w-full;

  margin-top: var(--header-height);
}

.content {
  @apply flex flex-col items-center;
  @apply w-full;
  @apply mb-40 mt-40 px-8;
}

.title {
  @apply text-5xl font-bold;

  color: v-bind('themeColors.secondary');
}

.subtitle {
  @apply text-center text-xl font-light;
  @apply mt-8;

  color: v-bind('themeColors.secondary');
}

.menu {
  @apply flex;
}
</style>
