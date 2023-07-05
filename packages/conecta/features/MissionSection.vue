<script setup lang="ts">
import SectionContainer from '@/components/Section/SectionContainer.vue';
import ImageContainer from '@/components/ImageContainer.vue';
</script>

<template>
  <SectionContainer
    background-color="#f2f4ee"
    :description="[
      'Com a missão de disseminar conhecimento sobre segurança e prevenção, ao máximo de pessoas possível, de um jeito fácil e didático, construímos um portal que vai te transformar em protagonista. Com nossos treinamentos, você estará preparado para enfrentar qualquer situação de risco com confiança e sabedoria',
      'Conectamos empresas e pessoas com os nossos especialistas para elaborar um Plano de Treinamento e fazer a ponte com os parceiros que vão colocá-lo em prática.',
    ]"
    title="Missão"
    title-align="right"
  >
    <template #image>
      <ImageContainer
        border="right"
        box-shadow="on"
        src="images/feeling-safe.jpg"
      />
    </template>
  </SectionContainer>
</template>

<style module></style>
