<script setup lang="ts">
import { useTheme } from '@/composables';

const { themeColors } = useTheme();

interface Props {
  fixed?: boolean;
}

const { fixed } = defineProps<Props>();

const isFixed = computed<boolean>(() => {
  return !!fixed;
});
</script>

<template>
  <section
    :class="[
      $style.container,
      {
        [$style.isFixed]: isFixed,
      },
    ]"
  >
    <header :class="$style.header">
      <HeaderLogo />

      <HeaderMenu :class="$style.menu" />

      <HeaderCTA />
    </header>

    <HeaderCover
      :background-wave-color="themeColors.base"
      :class="$style.cover"
      wave="on"
    >
      <div :class="$style.content">
        <h1 :class="$style.title">
          <span>Treinamentos para vida</span>
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
  </section>
</template>

<style module>
:root {
  --header-height: 7rem;
}

.container {
  @apply flex flex-col;
}

.header {
  @apply flex items-center justify-between;

  position: absolute;
  left: 0;
  right: 0;
  height: var(--header-height);
  max-width: var(--max-content-width);
  margin: 0 auto;

  &.isFixed {
    position: fixed;
  }
}

.cover {
  padding-top: var(--header-height);
}

.content {
  @apply flex flex-col items-center;
  @apply w-full;
  @apply mb-40 mt-40;
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
