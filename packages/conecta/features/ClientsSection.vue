<script setup lang="ts">
import SectionContainer from '@/components/Section/SectionContainer.vue';
import { useTheme } from '@/composables';

const { themeColors } = useTheme();

const brandList = [
  'amazon.webp',
  'fast-shop.png',
  'natura.webp',
  'ambev.webp',
  'albert-einstein.png',
  'amil.png',
  'bridgestone.webp',
  'santa-marcelina.png',
  'kaiser.webp',
  'iron-mountain.png',
  'st-marche.png',
  'edp.png',
  'avon.webp',
  'leforte.png',
  'hospital-santa-catarina.png',
  'yamaha.webp',
  'tok-stok.png',
  'leroy-merlin.png',
  'sbt.png',
  'globo.png',
  'itau.webp',
  'amazon.webp',
  'fast-shop.png',
  'natura.webp',
  'ambev.webp',
];

function getBrand(fileName: string) {
  return new URL(`../src/images/clients/${fileName}`, import.meta.url).href
}
</script>

<template>
  <SectionContainer
    id="clientes"
    :background-color="themeColors.base"
    :class="$style.clientsSection"
  >
    <template #inner>
      <div :class="$style.clientsSectionInner">
        <SectionTitle
          :class="$style.title"
          title="Empresas que confiam em nossos serviços"
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
.clientsSectionInner {
  @apply flex flex-col items-center;

  overflow: hidden;
  position: relative;
}

.title {
  @apply mb-16 px-16;
}

.listWrapper {
  @apply flex flex-col items-center;
}

.list {
  @apply flex items-center;

  animation: 20s linear 0s infinite normal none running move-left;

  &::before {
    position: absolute;
    background-image: linear-gradient(90deg, v-bind('themeColors.base') 31.3%, rgba(3, 1, 64, 0) 100%);
    content: "";
    height: 100%;
    width: 25%;
    pointer-events: none;
    top: 0px;
    left: 0px;
  }

  &::after {
    position: absolute;
    background-image: linear-gradient(90deg, v-bind('themeColors.base') 31.3%, rgba(3, 1, 64, 0) 100%);
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
    margin-left: 88%;
  }

  100% {
    margin-left: -80%;
  }
}
</style>
