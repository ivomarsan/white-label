<script setup lang="ts">
import SectionContainer from '@/components/Section/SectionContainer.vue';
import ImageContainer from '@/components/ImageContainer.vue';
import { useTheme } from '@/composables';

const { themeColors } = useTheme();

const description =
  'Conectamos empresas e pessoas com os nossos especialistas para elaborar um Plano de Treinamento e fazer a ponte com os parceiros que vão colocá-lo em prática. Nós ajudamos empresas a estarem em conformidade com a lei e fazerem um melhor  uso de seus recursos, ao mesmo tempo em que garantimos uma experiência de  qualidade através de nossos parceiros credenciados.';
</script>

<template>
  <SectionContainer
    id="quem-somos"
    :background-color="themeColors.base"
    :description="description"
    title="Quem somos"
    title-align="left"
  >
    <template #image>
      <ImageContainer
        border="left"
        box-shadow="on"
        src="images/about.png"
      />
    </template>
  </SectionContainer>
</template>

<style module></style>
