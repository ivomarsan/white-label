<template>
  <Button
    background-color="#ccc"
    :class="$style.cta"
    enable-hover-effect
    text-color="#05005b"
  >
    <span>Entrar em Contato</span>
  </Button>
</template>

<style module>
.cta {
  @apply flex;
  @apply m-2;
}
</style>
