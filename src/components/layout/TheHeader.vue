<template>
  <header>
    <nav>
      <h1>
        <router-link to="/find-coaches">Find a <span>Coach</span></router-link>
      </h1>
      <ul>
        <li>
          <router-link class="link" to="/find-coaches/coaches">All coaches</router-link>
        </li>
        <li v-if="isLoggedIn">
          <router-link class="link" to="/find-coaches/requests">Requestes</router-link>
        </li>
        <li v-else><router-link class="link" to="/find-coaches/auth">Login</router-link></li>
        <li>
          <base-button @click="logout" v-if="isLoggedIn">Logout</base-button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import BaseButton from "../ui/BaseButton.vue";
export default {
  components: { BaseButton },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.replace("/find-coaches/coaches");
    },
  },
};
</script>

<style scoped>
header {
  width: 100%;
  height: 6rem;
  background-color: #3d008d;
  box-shadow: 0 1px 4px #3d008d;
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  font-weight: bold;
  text-decoration: none;
  color: rgb(255, 252, 252);
  display: inline-block;
  padding: 0.75rem 1.25rem;
  border: 1px solid transparent;
}

.link:active,
.link:hover,
.link.router-link-active {
  border-radius: 1.5rem;
  background-color: rgb(255, 252, 252);
  color: #3d008d;
}

h1 a {
  background-color: #3d008d;
  color: white;
  margin: 0;
  font-size: 1.7rem;
}

h1 a:active,
h1 a:hover,
h1 a.router-link-active {
  background-color: #3d008d;
  color: rgb(255, 252, 252);
}

span {
  color: rgb(65, 142, 155);
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
</style>
