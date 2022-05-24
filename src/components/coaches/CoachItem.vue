<template>
  <li>
    <div class="container">
      <h3>{{ fullName }}</h3>
      <h4>${{ rate }}/hour</h4>
    </div>
    <div>
      <base-badge
        v-for="area in areas"
        :key="area"
        :type="area"
        :title="area"
      ></base-badge>
    </div>
    <div class="actions">
      <base-button link :to="coachDetailsLink">View details</base-button>
    </div>
  </li>
</template>

<script>
export default {
  props: ["id", "firstName", "lastName", "rate", "areas"],
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    },
    coachDetailsLink() {
      return this.$route.path + "/" + this.id;
    },
  },
};
</script>

<style scoped>
li {
  background-color: rgb(255, 255, 252);
  box-shadow: 0 1px 4px rgba(243, 233, 251);
  margin: 2rem 0;
  border-radius: 1rem;
  padding: 1rem;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.5rem;
}
h4{
  font-size: 1.25rem;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
}
a {
  margin-top: 1rem;
}
</style>
