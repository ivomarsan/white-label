<script setup lang="ts">
import SectionContainer from '@/components/Section/SectionContainer.vue';
import ImageContainer from '@/components/ImageContainer.vue';
</script>

<template>
  <main>
    <AppHeader />

    <SectionContainer
      :class="$style.purposeSection"
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

    <SectionContainer
      background-color="#f0f8ff"
      :class="$style.missionSection"
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

    <NuxtWelcome />

    <AppFooter />
  </main>
</template>

<style module>
.purposeSection {
  @apply pt-8;

  background-color: red;
}

.missionSection {
  @apply pt-8;
}

.blogSection {
  @apply pt-8;
}
</style>
