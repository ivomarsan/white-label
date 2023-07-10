<template>
  <nav :class="$style.container">
    <ul :class="$style.menu">
      <li>
        <NuxtLink :to="{ path: '/', hash: '#quem-somos' }">
          <span>Quem Somos</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink :to="{ path: '/', hash: '#parcerias' }">
          <span>Parcerias</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink :to="{ path: '/', hash: '#cursos' }">
          <span>Cursos</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink :to="{ path: '/', hash: '#blog' }">
          <span>Blog</span>
        </NuxtLink>
      </li>
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
