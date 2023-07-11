<script setup lang="ts">
import Carousel from '@/components/Carousel.vue';
import SectionContainer from '@/components/Section/SectionContainer.vue';
import ImageContainer from '@/components/ImageContainer.vue';
import { useTheme } from '@/composables';
import { truncate } from '@/shared';
import Button from '@/components/Button.vue';

interface Props {
  limit?: number;
  unlimited?: boolean;
}

const { limit = 3, unlimited } = defineProps<Props>();

const { themeColors } = useTheme();

const posts = [
  {
    title:
      'Quando a relação entre fornecedor e cliente é de parceria, temos o verdadeiro sucesso!',
    description:
      'No mês de setembro, o dia do cliente é comemorado no dia 15 e é com muito orgulho que celebramos essa data com um dos',
    mediaUrl: 'images/blog/post-1.jpg',
    url: '/blog/quando-a-relacao-entre-fornecedor-e-cliente-e-de-parceria-temos-o-verdadeiro-sucesso',
  },
  {
    title: '5 dicas de como manter o seu colaborador motivado',
    description:
      '1. Deixe claro para o colaborador qual o papel dele no propósito da empresa!  Um dos primeiros passos para incentivar funcionários é fazer com que',
    mediaUrl: 'images/blog/post-2.jpg',
    url: '/blog/5-dicas-de-como-manter-o-seu-colaborador-motivado',
  },
  {
    title: 'Como utilizar as luzes de natal com segurança',
    description:
      'Na época do natal nossas casas ganham vida a mais, a empolgação das crianças ao escrever cartinhas, fazer pão de mel em família e decorar',
    mediaUrl: 'images/blog/post-3.jpg',
    url: '/blog/como-utilizar-as-luzes-de-natal-com-seguranca',
  },
  {
    title: 'NR10 é obrigatório e salva vidas',
    description:
      'Desde 2013 a Abracopel (Associação Brasileira de Conscientização para os Perigos da Eletricidade), avalia os dados de acidentes de origem elétrica e registrou em 2019 um aumento de 12% comparado a 2018 em relação as mortes causadas por choque elétrico e 23% no aumento de casos de incêndios originados em sobrecargas de energia e posterior curto-circuito, este é um cenário muito preocupante que requer atenção de profissionais e empresas que atuam na área.',
    mediaUrl: 'images/blog/post-4.jpg',
    url: '/blog/nr10-e-obrigatorio-e-salva-vidas',
  },
];

const isPostsListUnlimited = computed<boolean>(() => {
  return !!unlimited;
});

const postsList = computed<typeof posts>(() => {
  if (isPostsListUnlimited.value) {
    return posts;
  }

  return posts.slice(0, limit);
});
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
          :items="postsList"
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

        <div
          v-if="!isPostsListUnlimited"
          :class="$style.buttonWrapper"
        >
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
