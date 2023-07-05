<script setup lang="ts">
import SectionContainer from '@/components/Section/SectionContainer.vue';
import ImageContainer from '@/components/ImageContainer.vue';
</script>

<template>
  <SectionContainer :class="$style.blogSection">
    <template #inner>
      <div :class="$style.blogSectionInner">
        <SectionTitle
          :class="$style.title"
          title="O que dizem sobre a Conecta Treinamentos"
        />

        <ImageContainer
          box-shadow="on"
          src="images/feeling-safe.jpg"
        />
      </div>
    </template>
  </SectionContainer>
</template>

<style module>
.blogSectionInner {
  @apply flex flex-col items-center;
}
</style>
