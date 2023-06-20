<template>
  <header :class="$style.container">
    <div :class="$style.logo">
      <span>Header</span>
    </div>
  </header>
</template>

<style module>
.container {
  position: fixed;
  left: 0;
  right: 0;
  background-color: red;
}

.logo {
  color: white;
}
</style>
