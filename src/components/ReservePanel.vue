<template>
  <section class="reserve__panel">
    <button class="close" @click="closeReserve">
      <span class="cross"></span>
    </button>
    <div class="reserve__block eat">
      <div class="inner">
        <h3>Eat</h3>
        <button @click="openModalEat">
          Reserve table
        </button>
      </div>
      <div class="visual"></div>
    </div>
    <div class="reserve__block play">
      <div class="inner">
        <h3>Play</h3>
        <button @click="openModalPlay">
          Reserve court 
        </button>
      </div>
      <div class="visual"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ReservePanel",
  components: {
  },
  methods: {
    closeReserve() {
      const app = document.querySelector("#app");
      app.classList.remove("showReserve")
    },
    openModalEat() {
      const app = document.querySelector("#app");
      app.classList.add("showModalEat")
    },
    openModalPlay() {
      const app = document.querySelector("#app");
      app.classList.add("showModalPlay")
    }
  }
}
</script>

<style lang="scss">
.reserve {
  &__panel {
    padding: 0;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: stretch;
    justify-content: flex-start;
    transform: translateY(100%);
    z-index: 999;
    overflow: hidden;
    pointer-events: none;
    transition: $trans;
  }
  &__block {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 50%;
    transition: all .6s cubic-bezier(.36,.33,0,1);
    &:hover {
      width: 75%;
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
      }
    }
    &::before {
      @include grain;
    }
    button {
      position: relative;
      z-index: 999;
    }    
  }
}
.showReserve {
  .reserve__panel {
    pointer-events: all;
    transform: translateY(0);

  }
}
</style>