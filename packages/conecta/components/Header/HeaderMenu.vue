<template>
  <nav :class="$style.container">
    <ul :class="$style.menu">
      <li>Quem Somos</li>
      <li>Parcerias</li>
      <li>Cursos</li>
      <li>Blog</li>
    </ul>
  </nav>
</template>

<style module>
.container {
  @apply flex;
}

.menu {
  @apply flex gap-8;

  color: #ffffff;
}
</style>
