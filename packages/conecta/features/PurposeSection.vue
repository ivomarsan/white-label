<script setup lang="ts">
import SectionContainer from '@/components/Section/SectionContainer.vue';
import ImageContainer from '@/components/ImageContainer.vue';
</script>

<template>
  <SectionContainer
    background-color="#afbedb"
    :description="[
      'Disseminar conhecimento que garanta e assegure a integridade das pessoas, patrimônio e meio-ambiente',
      'Facilitar o acesso aos melhores treinamentos de prevenção e proteção da vida a fim de despertar o máximo interesse das empresas e pessoap pelo bem-estar coletivo e individual',
      'Ser Referência e Autoridade em Treinamentos para a Vida com foco em impactar o maior número de vidas possível',
    ]"
    title="Propósito"
    title-align="left"
  >
    <template #image>
      <ImageContainer
        border="left"
        box-shadow="on"
        src="images/helping-hands.jpg"
      />
    </template>
  </SectionContainer>
</template>

<style module></style>
