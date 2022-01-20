<template>
  <header class="header">
    <ReserveBtn @click="showReserve" />
    <button class="menu__toggle" @click="showMenu" title="Menu">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </button>
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
    showMenu: function() {
      const app = document.querySelector("#app");
      app.classList.toggle("showMenu");
    },
    showReserve: function() {
      const app = document.querySelector("#app");
      app.classList.add("showReserve");
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
  padding: 2em;
  display: flex;
  align-items: stretch;
  justify-content: flex-end;
}
.menu__toggle {
  margin-left: 10px;
  background-color: #000;
  z-index: 2;
  @extend %dfc;
  row-gap: 4px;
}
.line {
  height: 3px;
  width: 12px;
  border-radius: 0.5em;
  background-color: $white;
  transform-origin: left center;
  transition: $trans;
}
</style>
