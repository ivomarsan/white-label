<script setup lang="ts"></script>

<template>
  <section :class="$style.container">
    <header :class="$style.header">
      <HeaderLogo />

      <HeaderMenu :class="$style.menu" />

      <HeaderCTA />
    </header>

    <HeaderCover
      :class="$style.cover"
      fullscreen
      wave="on"
    >
      <div :class="$style.content">
        <h1 :class="$style.title">Treinamento para vida</h1>
      </div>
    </HeaderCover>
  </section>
</template>

<style module>
:root {
  --header-height: 7rem;
}

.container {
  @apply flex flex-col;
}

.header {
  @apply flex items-center justify-between;

  position: fixed;
  left: 0;
  right: 0;
  height: var(--header-height);
  max-width: 1600px;
  margin: 0 auto;
}

.cover {
  padding-top: var(--header-height);
}

.content {
  @apply flex flex-col items-center;
  @apply w-full;
  @apply mt-20;
}
.title {
  @apply text-5xl font-bold;

  color: #ffffff;
}

.menu {
  @apply flex;
}
</style>
