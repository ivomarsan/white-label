<script setup lang="ts">
import BlogSection from '@/features/BlogSection.vue';
import HeaderSection from '@/features/HeaderSection.vue';
import MissionSection from '@/features/MissionSection.vue';
// import PurposeSection from '@/features/PurposeSection.vue';
import ServicesSection from '@/features/ServicesSection.vue';
import AboutSection from '@/features/AboutSection.vue';
import TestimonialsSection from '@/features/TestimonialsSection.vue';
import ClientsSection from '@/features/ClientsSection.vue';
import PartnersSection from '@/features/PartnersSection.vue';
</script>

<template>
  <main>
    <HeaderSection />

    <!-- <PurposeSection /> -->
    <AboutSection />

    <MissionSection />

    <ClientsSection />

    <ServicesSection />
    
    <PartnersSection />
    
    <TestimonialsSection />

    <BlogSection />
  </main>
</template>

<style module></style>
