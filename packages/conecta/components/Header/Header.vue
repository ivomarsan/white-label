<script setup lang="ts">
import { useTheme, useBreakpoints } from '@/composables';
import type { Props as MobileMenuProps } from '@/components/Header/HeaderMobileMenu.vue';

const { themeColors } = useTheme();
const { width } = useBreakpoints();

interface Props {
  fixed?: boolean;
  hideCover?: boolean;
}

const { fixed, hideCover } = defineProps<Props>();

const menuItems: MobileMenuProps['menuItems'] = [
  { title: 'Quem Somos', url: { path: '/', hash: '#quem-somos' } },
  { title: 'Formação Online', url: { path: '/', hash: '#formacao-online' } },
  { title: 'Parcerias', url: { path: '/', hash: '#parcerias' } },
  { title: 'Cursos', url: { path: '/', hash: '#cursos' } },
  { title: 'Blog', url: { path: '/', hash: '#blog' } },
];

const isFixed = computed<boolean>(() => {
  return !!fixed;
});

const isCoverVisible = computed<boolean>(() => {
  return !hideCover;
});

const isMobileMenuVisible = computed<boolean>(() => {
  return width.value <= 1200;
});
</script>

<template>
  <section
    :class="[$style.container, { [$style.isCoverVisible]: isCoverVisible }]"
  >
    <header
      :class="[
        $style.header,
        {
          [$style.isFixed]: isFixed,
        },
      ]"
    >
      <div :class="$style.inner">
        <HeaderMobileMenu
          v-if="isMobileMenuVisible"
          :class="$style.menu"
          :menu-items="menuItems"
        />

        <HeaderLogo />

        <HeaderMenu
          v-if="!isMobileMenuVisible"
          :class="$style.menu"
        />

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

  &:not(.isCoverVisible) {
    padding-bottom: var(--header-height);
  }
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

  @media only screen and (max-width: 800px) {
    @apply mb-32 mt-32 px-8;
  }
}

.title {
  @apply text-5xl font-bold;

  color: v-bind('themeColors.secondary');

  @media only screen and (max-width: 800px) {
    @apply text-4xl;
  }
}

.subtitle {
  @apply text-center text-xl font-light;
  @apply mt-8;

  color: v-bind('themeColors.secondary');

  @media only screen and (max-width: 800px) {
    @apply text-lg;
  }
}

.menu {
  @apply flex;
}
</style>
