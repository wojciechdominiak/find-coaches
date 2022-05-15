<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ rate }}/hour</h4>
    <div>
      <base-badge
        v-for="area in areas"
        :key="area"
        :type="area"
        :title="area"
      ></base-badge>
    </div>
    <div class="actions">
      <base-button link mode="outline" :to="coachContactLink"
        >Contact</base-button
      >
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
    coachContactLink() {
      return this.$route.path + "/" + this.id + "/contact";
    },
    coachDetailsLink() {
      return this.$route.path + "/" + this.id;
    },
  },
};
</script>

<style scoped>
li {
  background-color: rgb(249, 244, 249);
  margin: 2rem 0;
  border-radius: 1rem;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
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
