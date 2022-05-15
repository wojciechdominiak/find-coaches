<template>
  <section>
    <base-card>
      <h2>Page not found</h2>
      <p>
        This page could not be found - maybe check out all our.
        <router-link to="/find-coaches/coaches">coaches</router-link>
      </p>
    </base-card>
  </section>
</template>

<style scoped>
h2 {
  font-size: 2rem;
}
p {
  font-size: 1.2rem;
}
a {
  text-decoration: none;
  font-weight: bold;
}
</style>
