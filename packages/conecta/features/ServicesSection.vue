<script setup lang="ts">
import SectionContainer from '@/components/Section/SectionContainer.vue';
import ImageContainer from '@/components/ImageContainer.vue';
</script>

<template>
  <SectionContainer
    background-color="#afbedb"
    :class="$style.blogSection"
  >
    <template #inner>
      <div :class="$style.blogSectionInner">
        <SectionTitle
          :class="$style.title"
          title="Nossos serviços"
        />

        <ImageContainer src="images/services.png" />
      </div>
    </template>
  </SectionContainer>
</template>

<style module>
.blogSectionInner {
  @apply flex flex-col items-center;
}

.title {
  @apply mb-16;
}
</style>
