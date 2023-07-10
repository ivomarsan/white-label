<script setup lang="ts">
import Carousel from '@/components/Carousel.vue';
import SectionContainer from '@/components/Section/SectionContainer.vue';
import ImageContainer from '@/components/ImageContainer.vue';
import { useTheme } from '@/composables';
import { truncate } from '@/shared';
import Button from '@/components/Button.vue';

const { themeColors } = useTheme();

const posts = [
  {
    title:
      'Quando a relação entre fornecedor e cliente é de parceria, temos o verdadeiro sucesso!',
    description:
      'No mês de setembro, o dia do cliente é comemorado no dia 15 e é com muito orgulho que celebramos essa data com um dos',
    mediaUrl: 'images/blog/post-1.jpg',
    url: '/blog/post-1',
  },
  {
    title: '5 dicas de como manter o seu colaborador motivado',
    description:
      '1. Deixe claro para o colaborador qual o papel dele no propósito da empresa!  Um dos primeiros passos para incentivar funcionários é fazer com que',
    mediaUrl: 'images/blog/post-2.jpg',
    url: '/blog/post-2',
  },
  {
    title: 'Como utilizar as luzes de natal com segurança',
    description:
      'Na época do natal nossas casas ganham vida a mais, a empolgação das crianças ao escrever cartinhas, fazer pão de mel em família e decorar',
    mediaUrl: 'images/blog/post-3.jpg',
    url: '/blog/post-3',
  },
];
</script>

<template>
  <SectionContainer
    id="blog"
    :background-color="themeColors.base"
    :class="$style.blogSection"
  >
    <template #inner>
      <div :class="$style.inner">
        <SectionTitle
          :class="$style.title"
          title="Blog"
        />

        <Carousel
          :class="$style.carousel"
          :items="posts"
        >
          <template #item="{ title, description, mediaUrl, url }">
            <NuxtLink
              :class="$style.post"
              :to="url"
            >
              <ImageContainer
                box-shadow="on"
                :class="$style.postImage"
                :src="mediaUrl"
              />
              <h1 :class="$style.postTitle">{{ title }}</h1>
              <p :class="$style.postDescription">{{
                truncate(description, 110)
              }}</p>
            </NuxtLink>
          </template>
        </Carousel>

        <div :class="$style.buttonWrapper">
          <Button
            :background-color="themeColors.primary"
            :class="$style.button"
            enable-hover-effect
            :text-color="themeColors.secondary"
            to="/blog"
          >
            <span>Acesse o blog</span>
          </Button>
        </div>
      </div>
    </template>
  </SectionContainer>
</template>

<style module>
.blogSection {
  @apply py-12;
}

.inner {
  @apply flex flex-col items-center;
}

.title {
  @apply mb-16;
}

.carousel {
  @apply gap-16;

  @media only screen and (max-width: 1400px) {
    @apply px-0;
  }

  @media only screen and (max-width: 1200px) {
    @apply gap-12;
  }

  @media only screen and (max-width: 800px) {
    @apply flex-wrap justify-center;
  }
}

.post {
  @apply flex flex-col;

  max-width: 350px;

  @media only screen and (max-width: 1400px) {
    max-width: 300px;
  }

  @media only screen and (max-width: 1200px) {
    max-width: 200px;
  }
}

.postImage {
  max-width: 350px;
  height: 350px;
  width: 100%;

  @media only screen and (max-width: 1400px) {
    max-width: 300px;
    height: 300px;
  }

  @media only screen and (max-width: 1200px) {
    max-width: 200px;
    height: 200px;
  }
}

.postTitle {
  @apply text-xl font-bold;
  @apply mx-2 my-4;

  color: v-bind('themeColors.primary');
}

.postDescription {
  @apply text-xl;
  @apply m-2;

  @media only screen and (max-width: 1200px) {
    display: none;
  }

  @media only screen and (max-width: 800px) {
    display: none;
  }
}

.buttonWrapper {
  @apply flex w-full justify-end;
  @apply mt-16;
}
</style>
