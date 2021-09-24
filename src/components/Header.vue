<template>
  <header class="header">
    <div class="container end">
      <a href="" class="logo" title="Logo">{{ logo }}</a>
      <ReserveBtn @click="showReserve" />
      <button class="menu__toggle" @click="showMenu">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </button>
    </div>
    <Menu />
  </header>
</template>

<script>
import Menu from "@/components/Menu.vue";
import ReserveBtn from "@/components/ReserveBtn.vue";

export default {
  name: "Header",
  components: {
    Menu,
    ReserveBtn
  },
  methods: {
    showMenu() {
      const app = document.querySelector("#app");
      app.classList.toggle("showMenu");
    }
  }
};
</script>

<style lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  .container {
    padding: 2rem;
  }
}
.logo {
  position: absolute;
  left: 46%;
  display: block;
  font-family: $monoton;
  font-size: 2rem;
  line-height: 1;
  z-index: 10;
}
</style>
