<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
  />
  <header>
    <nav>
      <h1>
        <router-link @click="disActive" to="/find-coaches"
          >Find a <span>Coach</span></router-link
        >
      </h1>
      <button @click="toggleActive" class="nav-header__toggle">
        <i class="fas fa-bars"></i>
      </button>
      <ul :class="{ inactive: !isActive }">
        <li>
          <router-link
            @click="disActive"
            class="link"
            to="/find-coaches/coaches"
            >All coaches</router-link
          >
        </li>
        <li v-if="isLoggedIn">
          <router-link
            @click="disActive"
            class="link"
            to="/find-coaches/requests"
            >Requestes</router-link
          >
        </li>
        <li v-else>
          <router-link @click="disActive" class="link" to="/find-coaches/auth"
            >Login</router-link
          >
        </li>
        <li>
          <router-link
            class="link"
            to="/find-coaches/auth"
            @click="logout"
            v-if="isLoggedIn"
            >Logout</router-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.replace("/find-coaches/coaches");
      this.isActive = false;
    },
    toggleActive() {
      this.isActive = !this.isActive;
    },
    disActive() {
      this.isActive = false;
    },
  },
};
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #3d008d;
  box-shadow: 0 1px 4px #3d008d;
  display: grid;
  place-items: center;
}

header nav {
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 a {
  text-decoration: none;
  color: white;
  margin: 0;
  font-size: 1.5rem;
}

span {
  color: rgb(65, 142, 155);
}

.nav-header__toggle {
  font-size: 1.5rem;
  color: white;
  background: transparent;
  border-color: transparent;
  transition: 0.3s;
  cursor: pointer;
}

.nav-header__toggle:hover {
  color: rgb(65, 142, 155);
}

header ul {
  position: absolute;
  top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  left: 0;
  list-style: none;
  margin: 0;
  padding:0;
  color: rgb(255, 252, 252);
  background-color: #3d008d;
  width: 100%;
  transition: all .5s;
}

.inactive {
  display: none;
}

li {
  margin: 0 .5rem;
}

.link {
  font-weight: bold;
  font-size: 1.2rem;
  text-decoration: none;
  color: rgb(255, 252, 252);
  background-color: #3d008d;
  display: inline-block;
  padding: 0.75rem 1.25rem;
}

.link:active,
.link:hover,
.link.router-link-active {
  color: rgb(65, 142, 155);
  background-color: #3d008d;
}

@media screen and (min-width: 768px) {
  .inactive,
  header ul {
    position: static;
    list-style: none;
    display: flex;
    justify-content: right;
    flex-direction: row;
    width: auto;
  }
  .nav-header__toggle {
    display: none;
  }
}
</style>
