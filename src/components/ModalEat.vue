<template>
  <div class="fade"></div>
  <div class="modal eat">
    <div class="logo">logo</div>
    <button class="close" @click="closeModalEat" title="Close">
      <span class="cross"></span>
    </button>
    <form action="submit" class="modal__body">
      <fieldset class="modal__form">
        <legend class="modal__legend">
          Very usefull info 'bout table reservation
        </legend>
        <label for="nameE" class="hidden">Name</label>
        <input type="text" placeholder="Name" id="nameE" />

        <label for="dateE" class="hidden">Date</label>
        <input type="date" id="dateE" />

        <label for="timeE" class="hidden">Time</label>
        <input type="time" id="timeE" />

        <label for="personsE" class="hidden">Persons</label>
        <input type="number" id="personsE" placeholder="Number of persons" />
        <ReserveBtn />
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  components: { ReserveBtn },
  name: "ModalEat",
  methods: {
    closeModalEat() {
      const app = document.querySelector("#app");
      app.classList.remove("showModalEat");
    }
  }
};
import ReserveBtn from "@/components/ReserveBtn.vue";
</script>

<style lang="scss">
.modal {
  position: fixed;
  top: 25%;
  right: 25%;
  text-align: center;
  padding: 2em 3em;
  background-color: #5c162e;
  transform: translateX(-150%);
  z-index: 2;
  transition: $trans;
  border-radius: 1em;
  &__legend {
    font-size: 1.5em;
    margin-bottom: 1em;
  }
  &__form {
    min-width: 50vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 1.5em;
  }
}
.close {
  position: absolute;
  top: 2em;
  right: 2em;
  z-index: 1000;
}
.cross {
  transition: $trans;
  &::before,
  &::after {
    content: "";
    display: block;
    background: $red;
    width: 20px;
    height: 2px;
    transform-origin: center;
  }
  &::before {
    transform: rotate(-45deg) translateX(-1px);
  }
  &::after {
    transform: rotate(45deg) translateX(-1px);
  }
}
.showModalEat {
  .modal.eat {
    transform: translateX(0);
  }
  .fade {
    opacity: 0.8;
    z-index: 1;
  }
}
</style>
