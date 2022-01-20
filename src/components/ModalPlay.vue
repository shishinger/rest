<template>
  <div class="fade"></div>
  <div class="modal play">
    <div class="logo">logo</div>
    <button class="close" @click="closeModalPlay" title="Close">
      <span class="cross"></span>
    </button>
    <form action="submit" class="modal__body">
      <fieldset class="modal__form">
        <legend class="modal__legend">
          Very usefull info 'bout table reservation
        </legend>
        <label for="nameP" class="hidden">Name</label>
        <input type="text" placeholder="Name" id="nameP" />

        <label for="dateP" class="hidden">Date</label>
        <input type="date" id="dateP" />

        <label for="timeP" class="hidden">Time</label>
        <input type="time" id="timeP" />

        <label for="gameP" class="hidden">Game</label>
        <input type="number" id="gameP" placeholder="Preferred game" />
        <ReserveBtn />
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  components: { ReserveBtn },
  name: "ModalPlay",
  methods: {
    closeModalPlay() {
      const app = document.querySelector("#app");
      app.classList.remove("showModalPlay");
    }
  }
};

import ReserveBtn from "@/components/ReserveBtn.vue";
</script>

<style lang="scss">
.modal.play {
  transform: translateX(150%);
}
.showModalPlay {
  .modal.play {
    transform: translateX(0);
  }
  .fade {
    opacity: 0.8;
    z-index: 1;
  }
}
</style>
