<script setup lang="ts">
import SectionContainer from '@/components/Section/SectionContainer.vue';
import Carousel from '@/components/Carousel.vue';

const posts = [
  {
    title:
      'Quando a relação entre fornecedor e cliente é de parceria, temos o verdadeiro sucesso!',
    description:
      'No mês de setembro, o dia do cliente é comemorado no dia 15 e é com muito orgulho que celebramos essa data com um dos',
    mediaUrl: 'images/blog/post-1.jpg',
  },
  {
    title: '5 dicas de como manter o seu colaborador motivado',
    description:
      '1. Deixe claro para o colaborador qual o papel dele no propósito da empresa!  Um dos primeiros passos para incentivar funcionários é fazer com que',
    mediaUrl: 'images/blog/post-2.jpg',
  },
  {
    title: 'Como utilizar as luzes de natal com segurança',
    description:
      'Na época do natal nossas casas ganham vida a mais, a empolgação das crianças ao escrever cartinhas, fazer pão de mel em família e decorar',
    mediaUrl: 'images/blog/post-3.jpg',
  },
];
</script>

<template>
  <SectionContainer
    background-color="#afbedb"
    :class="$style.blogSection"
  >
    <template #inner>
      <div :class="$style.inner">
        <SectionTitle
          :class="$style.title"
          title="Blog"
        />

        <Carousel :items="posts" />
      </div>
    </template>
  </SectionContainer>
</template>

<style module>
.blogSection {
  @apply pb-56 pt-40;
}

.inner {
  @apply flex flex-col items-center;
}

.title {
  @apply mb-16;
}
</style>
