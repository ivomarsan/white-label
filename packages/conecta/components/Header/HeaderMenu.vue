<template>
  <nav :class="$style.container">
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </nav>
</template>

<style module>
.container {
  @apply flex;
}
</style>
