<template>
  <Button
    :class="$style.cta"
    color-background="#ccc"
    color-text="#05005b"
    enable-hover-effect
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
