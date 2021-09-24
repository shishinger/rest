<template>
  <button class="reserve" @click="showReserve">Reserve</button>
</template>

<script>
export default {
  name: "ReserveBtn",
  methods: {
    showReserve() {
      const app = document.querySelector("#app");
      app.classList.add("showReserve")
    }
  }
}
</script>

<style lang="scss">
.reserve {
  background-color: #6c236c;
  color: honeydew;
}
</style>