<script setup lang="ts">
import SectionContainer from '@/components/Section/SectionContainer.vue';
import { useTheme } from '@/composables';

const { themeColors } = useTheme();

const brandList = [
  'aguia-de-fogo.png',
  'treinnar.png',
  'ecofire.png',
  'cilla.png',
  'confidere.png',
  'dm.png',
  'escola-action.png',
  'gossi.png',
  'previmax.png',
  'previne.png',
  'ss-treinamentos.png',
  'aguia-de-fogo.png',
  'treinnar.png',
  'ecofire.png',
  'cilla.png',
  'confidere.png',
];

function getBrand(fileName: string) {
  return new URL(`../src/images/partners/${fileName}`, import.meta.url).href
}
</script>

<template>
  <SectionContainer
    id="parcerias"
    :background-color="themeColors.primary"
    :class="$style.partnersSection"
  >
    <template #inner>
      <div :class="$style.partnersSectionInner">
        <SectionTitle
          :class="$style.title"
          title="Nossos parceiros"
        />

        <div :class="$style.listWrapper">
          <div :class="$style.list">
            <template
              v-for="(brand, index) in brandList"
              :key="index"
            >
              <div :class="$style.item">
                <img :src="getBrand(brand)" />
              </div>
            </template>
          </div>
        </div>
      </div>
    </template>
  </SectionContainer>
</template>

<style module>
.partnersSectionInner {
  @apply flex flex-col items-center;

  overflow: hidden;
  position: relative;
  max-width: 100vw;
}

.title {
  @apply mb-16;

  color: v-bind('themeColors.secondary')
}

.listWrapper {
  @apply flex flex-col items-center;
}

.list {
  @apply flex items-center;

  animation: 12s linear 0s infinite normal none running move-left;

  &::before {
    position: absolute;
    background-image: linear-gradient(90deg, v-bind('themeColors.primary') 31.3%, rgba(3, 1, 64, 0) 100%);
    content: "";
    height: 100%;
    width: 25%;
    pointer-events: none;
    top: 0px;
    left: 0px;
  }

  &::after {
    position: absolute;
    background-image: linear-gradient(90deg, v-bind('themeColors.primary') 31.3%, rgba(3, 1, 64, 0) 100%);
    content: "";
    height: 100%;
    width: 25%;
    pointer-events: none;
    right: 0px;
    top: 0px;
    transform: rotateZ(180deg);
  }
}

.item {
  @apply px-12;

  width: 16rem;

  & img {
    height: 100%;
  }
}

@keyframes move-left {
  0% {
    margin-left: 70%;
  }

  100% {
    margin-left: -67%;
  }
}
</style>
