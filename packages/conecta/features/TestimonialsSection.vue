<script setup lang="ts">
import SectionContainer from '@/components/Section/SectionContainer.vue';
import Testimonials from '@/components/Testimonials.vue';
import { useTheme } from '@/composables';

const { themeColors } = useTheme();

const testimonials = [
  {
    title: 'Roberto Carlos',
    description:
      'A experiência de contratar a Conecta Treinamentos para nossas necessidades de treinamento foi incrível. Eles foram altamente profissionais desde o primeiro contato até a conclusão do curso. A equipe da Conecta Treinamentos foi muito atenciosa, compreendendo nossos requisitos específicos e recomendando os cursos mais adequados para nossa equipe. Além disso, a qualidade do treinamento foi excepcional, com instrutores experientes e materiais didáticos abrangentes. Recomendo a Conecta Treinamentos a todas as empresas que buscam aprimorar as habilidades e conhecimentos de sua equipe.',
    mediaUrl: 'images/people/person-1.png',
  },
  {
    title: 'Paulo Porto',
    description: 'Estamos extremamente satisfeitos com os serviços prestados pela Conecta Treinamentos. A equipe foi muito receptiva e cooperativa durante todo o processo de contratação dos cursos. Eles se esforçaram para garantir que todas as nossas necessidades fossem atendidas e que o treinamento fosse personalizado de acordo com as demandas específicas de nossa empresa. Os instrutores foram altamente qualificados e demonstraram profundo conhecimento dos tópicos abordados. A Conecta Treinamentos superou nossas expectativas e definitivamente continuaremos a usar seus serviços no futuro.',
    mediaUrl: 'images/people/person-2.png',
  },
  {
    title: 'Francisco',
    description:
      'Recomendamos vivamente a Conecta Treinamentos por seu excelente serviço e qualidade de treinamento. Ao contratar a Conecta Treinamentos, tivemos uma experiência perfeita desde o início até o fim. A equipe foi profissional, ágil e sempre disponível para responder a todas as nossas dúvidas. Os cursos que ofereceram foram abrangentes e bem estruturados, fornecendo aos nossos funcionários as habilidades necessárias para lidar com situações de emergência, como primeiros socorros, combate a incêndios e serviços em eletricidade. Estamos muito satisfeitos com os resultados e definitivamente continuaremos a trabalhar com a Conecta Treinamentos em projetos futuros.',
    mediaUrl: 'images/people/person-3.png',
  },
];
</script>

<template>
  <SectionContainer
    :background-color="themeColors.primary"
    :class="$style.testimonialsSection"
  >
    <template #inner>
      <div :class="$style.inner">
        <SectionTitle
          :class="$style.title"
          title="O que dizem sobre a Conecta Treinamentos"
        />

        <Testimonials
          blur-inactives
          expand-active
          :items="testimonials"
          show-controls
        />
      </div>
    </template>
  </SectionContainer>
</template>

<style module>
.testimonialsSection {
  @apply py-12;
}

.inner {
  @apply flex flex-col items-center;
}

.title {
  @apply mb-16;

  color: #f8eb88;
}
</style>
