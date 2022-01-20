<template>
  <nav class="nav">
    <ol class="nav__list">
      <li class="nav__item" v-for="name in menuList" :key="name">
        <a href="" class="nav__link">
          <span class="text">{{ name }}</span>
        </a>
      </li>
    </ol>
    <ReserveBtn />
  </nav>
  <div class="fade"></div>
</template>

<script>
import ReserveBtn from "@/components/ReserveBtn.vue";
export default {
  name: "Menu",
  components: {
    ReserveBtn
  },
  data() {
    return {
      menuList: ["Main", "Menu", "Banquets", "Interior", "Events", "Contacts"]
    };
  }
};
</script>

<style lang="scss">
.nav {
  position: fixed;
  top: 0;
  right: 0;
  padding-left: 10%;
  display: flex;
  @extend %dfc;
  align-items: start;
  row-gap: 5vh;
  width: 50%;
  height: 100%;
  background-color: $skobeloff;
  color: #fff;
  transform: translateX(100%);
  transition: $trans;
  z-index: 1;
  &__list {
    display: flex;
    flex-direction: column;
    row-gap: 5vh;
    list-style-type: upper-roman;
  }
  &__item {
    position: relative;
    width: min-content;
    font-size: 2rem;
    letter-spacing: 1.5px;
    &::marker {
      font-size: 0.6em;
    }
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      display: block;
      background-color: $white;
      width: 100%;
      height: 2px;
      transform: scaleX(0);
      transform-origin: left center;
      transition: $trans;
    }
    &:hover::after {
      transform: scaleX(1);
    }
  }
  .reserve {
    transform: translateX(-1.5em);
  }
}
.showMenu {
  .menu__toggle {
    transition: $trans;
    .line:nth-child(1) {
      transform: rotate(45deg) scale(1.65);
    }
    .line:nth-child(2) {
      transform-origin: center;
      transform: scale(0);
    }
    .line:nth-child(3) {
      transform: rotate(-45deg) scale(1.65);
    }
  }
  .nav {
    transform: translateX(0);
    transition: $trans;
  }
  .fade {
    opacity: 0.8;
    transition: opacity 0.4s cubic-bezier(0.36, 0.33, 0, 1);
  }
}
</style>
