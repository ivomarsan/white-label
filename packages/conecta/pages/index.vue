<script setup lang="ts">
import BlogSection from '@/features/BlogSection.vue';
import FooterSection from '@/features/FooterSection.vue';
import HeaderSection from '@/features/HeaderSection.vue';
import MissionSection from '@/features/MissionSection.vue';
import PurposeSection from '@/features/PurposeSection.vue';
</script>

<template>
  <main>
    <HeaderSection />

    <PurposeSection />

    <MissionSection />

    <BlogSection />

    <NuxtWelcome />

    <FooterSection />
  </main>
</template>

<style module></style>
