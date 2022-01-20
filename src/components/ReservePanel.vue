<template>
  <section class="reserve__panel">
    <button class="close" @click="closeReserve">
      <span class="cross"></span>
    </button>
    <div class="reserve__block eat">
      <h2>Eat</h2>
      <button @click="openModalEat">
        Reserve table
      </button>
    </div>
    <div class="reserve__block play">
      <h2>Play</h2>
      <button @click="openModalPlay">
        Reserve court
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "ReservePanel",
  methods: {
    closeReserve: function() {
      const app = document.querySelector("#app");
      app.classList.remove("showReserve");
    },
    openModalEat: function() {
      const app = document.querySelector("#app");
      app.classList.add("showModalEat");
    },
    openModalPlay: function() {
      const app = document.querySelector("#app");
      app.classList.add("showModalPlay");
      console.log("click");
    }
  }
};
</script>

<style lang="scss">
.reserve {
  &__panel {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: stretch;
    transform: translateY(100%);
    z-index: 1;
    transition: $trans;
  }
  &__block {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 0 0 50%;
    transition: flex 0.6s cubic-bezier(0.36, 0.33, 0, 1),
      background-color 0.6s cubic-bezier(0.36, 0.33, 0, 1),
      transform 0.6s cubic-bezier(0.36, 0.33, 0, 1);
    &:hover {
      flex: 0 0 65%;
    }
    &.eat {
      background-color: #144552;
      button {
        background-color: salmon;
      }
      &:hover {
        background-color: teal;
      }
    }
    &.play {
      background-color: #312244;
      button {
        background-color: darkorange;
      }
      &:hover {
        background-color: DarkSlateBlue;
        transform: translateX(-23%);
      }
    }
    &::before {
      @extend %grain;
    }
  }
}
.showReserve {
  .reserve__panel {
    transform: translateY(0);
  }
}
</style>
