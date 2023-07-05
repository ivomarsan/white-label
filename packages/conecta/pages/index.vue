<script setup lang="ts">
import AppFooter from '@/components/App/AppFooter.vue';
import AppHeader from '@/components/App/AppHeader.vue';
import BlogSection from '@/features/BlogSection.vue';
import MissionSection from '@/features/MissionSection.vue';
import PurposeSection from '@/features/PurposeSection.vue';
</script>

<template>
  <main>
    <AppHeader />

    <PurposeSection />

    <MissionSection />

    <BlogSection />

    <NuxtWelcome />

    <AppFooter />
  </main>
</template>

<style module></style>
