<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import SectionContainer from '@/components/Section/SectionContainer.vue';

import { useTheme } from '@/composables';

const { themeColors } = useTheme();

const services = [
  { icon: 'safe-helmet', description: 'CIPA' },
  { icon: 'doctors-bag', description: 'Primeiros socorros' },
  {
    icon: 'electricity-hazard',
    description: 'Segurança em instalações e serviços em eletricidade',
  },
  { icon: 'fire-extinguisher', description: 'Proteção e combate a incêndio' },
  { icon: 'claustrophobia', description: 'Trabalho em espaços confinados' },
  { icon: 'folding-ladder', description: 'Trabalho em altura' },
];

function getIcon(iconName: string) {
  return defineAsyncComponent(
    () => import(`@/assets/svgs/${iconName}.svg?component`),
  );
}
</script>

<template>
  <SectionContainer
    id="cursos"
    background-color="#afbedb"
    :class="$style.servicesSection"
  >
    <template #inner>
      <div :class="$style.servicesSectionInner">
        <SectionTitle
          :class="$style.title"
          title="Nossos serviços"
        />

        <div :class="$style.list">
          <template
            v-for="(service, index) in services"
            :key="index"
          >
            <div :class="$style.item">
              <div :class="$style.badge">
                <component :is="getIcon(service.icon)" />
              </div>

              <div :class="$style.description">
                <span>{{ service.description }}</span>
              </div>
            </div>
          </template>
        </div>
      </div>
    </template>
  </SectionContainer>
</template>

<style module>
.servicesSectionInner {
  @apply flex flex-col items-center;
}

.title {
  @apply mb-16;
}

.list {
  @apply flex flex-wrap justify-center;
  @apply gap-32 px-32 py-16;

  @media only screen and (max-width: 1200px) {
    @apply gap-12 p-4;
  }

  @media only screen and (max-width: 800px) {
    @apply p-0;
  }

  @media only screen and (max-width: 600px) {
    @apply gap-8;
  }

  @media only screen and (max-width: 500px) {
    @apply gap-4;
  }
}

.item {
  @apply flex flex-col items-center;

  width: 20rem;

  @media only screen and (max-width: 1200px) {
    width: 16rem;
  }

  @media only screen and (max-width: 800px) {
    width: 12rem;
  }

  @media only screen and (max-width: 600px) {
    width: 10rem;
  }

  @media only screen and (max-width: 500px) {
    width: 8rem;
  }
}

.badge {
  @apply p-6;

  width: 8rem;
  background-color: v-bind('themeColors.primary');
  border-radius: 50%;

  & svg {
    fill: v-bind('themeColors.secondary');
  }

  @media only screen and (max-width: 600px) {
    @apply p-4;

    width: 6rem;
  }

  @media only screen and (max-width: 500px) {
    width: 5rem;
  }
}

.description {
  @apply text-center text-2xl;
  @apply mt-2;

  color: v-bind('themeColors.primary');

  @media only screen and (max-width: 1200px) {
    @apply text-center text-xl;
  }
}
</style>
