<script setup lang="ts"></script>

<template>
  <section :class="$style.container">
    <header :class="$style.header">
      <div :class="$style.logo">
        <span>Header</span>
      </div>
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
  position: fixed;
  left: 0;
  right: 0;
  background-color: red;
}

.logo {
  color: white;
}
</style>
