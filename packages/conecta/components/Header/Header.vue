<script setup lang="ts"></script>

<template>
  <section :class="$style.container">
    <header :class="$style.header">
      <HeaderLogo />

      <HeaderMenu :class="$style.menu" />

      <HeaderCTA />
    </header>

    <HeaderCover>
      <h1>Teste</h1>
    </HeaderCover>
  </section>
</template>

<style module>
.container {
  @apply flex flex-col;
}

.header {
  @apply flex items-center justify-between;

  position: fixed;
  left: 0;
  right: 0;
  background-color: red;
}

.menu {
  @apply flex;
}
</style>
