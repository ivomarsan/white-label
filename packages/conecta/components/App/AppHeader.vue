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
      wave="on"
    >
      <div :class="$style.content">
        <h1 :class="$style.title">
          <span>Treinamentos para vida</span>
        </h1>

        <h2 :class="$style.subtitle">
          <span
            >Somos uma empresa gestora de treinamentos para a vida. Para isso,
            nós conectamos quem precisa de treinamentos com os maiores
            especialistas em segurança de todo o Brasil.</span
          >
        </h2>
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
  max-width: var(--max-content-width);
  margin: 0 auto;
}

.cover {
  padding-top: var(--header-height);
}

.content {
  @apply flex flex-col items-center;
  @apply w-full;
  @apply mb-40 mt-40;
}

.title {
  @apply text-5xl font-bold;

  color: #ffffff;
}

.subtitle {
  @apply text-center text-xl font-light;
  @apply mt-8;

  color: #ffffff;
}

.menu {
  @apply flex;
}
</style>
