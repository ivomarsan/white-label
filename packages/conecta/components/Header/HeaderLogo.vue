<template>
  <div :class="$style.logo">
    <img
      alt="Conecta Logo"
      src="@/src/logo.png"
    />
  </div>
</template>

<style module>
.logo {
  @apply flex;
  @apply m-2;

  max-width: 15rem;
}
</style>
