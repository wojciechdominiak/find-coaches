<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  border-radius: 1em;
  box-shadow: 0 2px 8px rgb(235, 222, 245);
  padding: 2rem;
  margin: 3rem auto;
  width: 45rem;
  max-width: 90%;
  background-color: rgb(255, 255, 252);
}
</style>
