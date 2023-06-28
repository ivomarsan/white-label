<script setup lang="ts"></script>

<template>
  <section :class="$style.container">
    <header :class="$style.header">
      <div :class="$style.logo">
        <img src="@/src/logo.png" alt="Conecta Logo" />
      </div>

      <HeaderMenu :class="$style.menu" />
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

.logo {
  max-width: 15rem;
}

.menu {
  @apply flex;
}
</style>
