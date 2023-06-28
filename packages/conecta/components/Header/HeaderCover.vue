<template>
  <div :class="$style.container">
    <div :class="$style.inner">
      <slot />
    </div>
  </div>
</template>

<style module>
.container {
  background-image: url("@/assets/images/background-header-cover.jpg");
  background-position: 50%;
  background-size: cover;
}

.inner {
  background-image: url("@/assets/images/background-header-cover.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
