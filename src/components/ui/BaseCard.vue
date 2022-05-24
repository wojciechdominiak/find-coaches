<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  border-radius: 1em;
  box-shadow: 0 2px 8px rgba(243, 233, 251);
  padding: 2rem;
  margin: 3rem auto;
  max-width: 40rem;
  background-color: rgb(255, 255, 252);
}
</style>
