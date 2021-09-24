<template> 
  <div class="menu">
    <nav class="nav center col">
      <ul class="nav__list">
        <li class="nav__item" v-for="(value, name) in menuList" :key="value.id">
          <a href="" class="nav__link">
            <span class="index">{{name}}</span>
            <span class="text">{{value}}</span>
          </a>
        </li>
      </ul>
      <ReserveBtn />          
    </nav>
    <div class="menu__fade"></div>    
  </div>
</template>

<script>
import ReserveBtn from "@/components/ReserveBtn.vue"
export default {
  name: "Menu",
  components: {
    ReserveBtn
  },
  data() {
    return {
      menuList: {
        I: "Main",
        II: "Menu",
        III: "Banquets",
        IV: "Interior",
        V: "Events",
        VI: "Contacts"
      }
    }
  }
}
</script>

<style lang="scss">
.menu {
  position: fixed;  
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
  &__toggle {
    margin-left: 10px;
    background-color: #000;
    z-index: 10;
    .line {
      display: block;
      height: 3px;
      width: 12px;
      border-radius: 6px;
      background-color: #fff;
      transform-origin: left center;
      transition: $trans;
    }
    .line + .line {
      margin-top: 4px;
    }
  }
  &__fade {
    @include fade;
  }
}
.nav {
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background-color: $skobeloff;
  color: #fff;
  transform: translateX(100%);
  transition: $trans;
  z-index: 1000;
  overflow-x: hidden;
  overflow-y: auto;
  pointer-events: all;
  &::before {
    @include grain;
  }
  &__list {
    position: relative;
    text-align-last: left;
  }
  &__item {
    display: block;
    position: relative;
    font-size: 2rem;
    & + & {
      margin-top: 40px;
    }
    .index {
      position: absolute;
      top: 4px;
      left: -60px;
      display: block;
      font-size: 0.7rem;
    }
    &::after {
      content: "";
      position: absolute;
      top: 100%;
      left: 0;
      display: block;
      background-color: #fff;
      width: 100%;
      height: 0.1rem;
      border-radius: 0.1rem;
      transform: scaleX(0);
      transform-origin: left center;
      transition: $trans;
    }
    &:hover::after {
      transform: scaleX(1);
    }
  }
  .reserve {
    margin-top: 60px;
    z-index: 999999;
  }
}
.showMenu {
  .menu__toggle {
    transition: $trans;
    .line:first-child {
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
  .menu__fade {
    opacity: 0.8;
  }
}
</style>