<template>
<div class="modal__fade"></div>
<div class="modal play center">
  <div class="modal__header">
    <div class="logo">logo</div>
    <button class="close" @click="closeModalPlay">
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
  name: "ModalPlay",
  methods: {
    closeModalPlay() {
      const app = document.querySelector("#app");
      app.classList.remove("showModalPlay");
    }
  }
}
</script>

<style lang="scss">
.modal.play {
  transform: translateX(150%);
}
.showModalPlay {
  .modal {
    &.play {
      transform: translateX(0);
    }
    &__fade {
      opacity: 0.8;
    }
  }
}
</style>