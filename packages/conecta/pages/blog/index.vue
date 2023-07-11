<script setup lang="ts">
import BlogSection from '@/features/BlogSection.vue';
import Header from '@/components/Header/Header.vue';
</script>

<template>
  <main>
    <Header hide-cover />

    <BlogSection unlimited />
  </main>
</template>

<style module></style>
