<template>
<div class="modal__fade"></div>
<div class="modal eat center">
  <div class="modal__header">
    <div class="logo">logo</div>
    <button class="close" @click="closeModalEat">
      <span class="cross"></span>
    </button>
  </div>
  <div class="modal__body">
    <form action="submit" class="form">
      <label for="">Very usefull info 'bout reservation</label>
      <input type="text">
      <input type="date">
      <input type="time" name="" id="">
      <button class="btn bottom">Reserve</button>
    </form>
  </div>
  <div class="modal__footer">
    <div class="time"></div>
  </div>
</div>
</template>

<script>
export default {
  name: "ModalEat",
  methods: {
    closeModalEat() {
      const app = document.querySelector("#app");
      app.classList.remove("showModalEat");
    }
  }
}
</script>

<style lang="scss">
.modal {
  position: fixed;
  top: 25%;
  right: 25%;
  width: 50%;
  height: 50%;
  padding: 2rem 3rem;
  background-color: #5c162e;
  transform: translateX(-150%);
  z-index: 1000;
  transition: $trans;
  overflow: hidden;
  border-radius: 10px;
  &__header {
    .logo {
      position: absolute;
      top: 1rem;
      right: 50%;
    }
  }
  &__fade {
    @include fade;
  }
}
.btn.bottom {
  bottom: -25%;
  right: 35%;
}
.showModalEat {
  .modal {
    &.eat {
      transform: translateX(0);
    }
    &__fade {
      opacity: 0.8;
    }
  }
}
</style>