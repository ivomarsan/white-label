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
    >
      <h1>Treinamento para vida</h1>
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

.menu {
  @apply flex;
}
</style>
