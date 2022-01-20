<template>
  <Header />
  <main>
    <Lead />
    <About />
  </main>
  <Footer />
  <ReservePanel />
  <ModalEat />
  <ModalPlay />
  <div class="noise"></div>
</template>

<script>
import Header from "./components/Header.vue";
import Lead from "./components/Lead.vue";
import About from "./components/About.vue";
import ReservePanel from "./components/ReservePanel.vue";
import Footer from "./components/Footer.vue";
import ModalEat from "./components/ModalEat.vue";
import ModalPlay from "./components/ModalPlay.vue";

export default {
  name: "App",
  components: {
    Header,
    Lead,
    About,
    ReservePanel,
    Footer,
    ModalEat,
    ModalPlay
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,400;0,700;1,400;1,700;1,900&family=Monoton&display=swap");

*,
::before,
::after {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: $bodoni;
  color: $text;
  font-size: 16px;
  line-height: 1.4;
  font-weight: 400;
  &::before {
    @extend %grain;
  }
}
ul {
  list-style: none;
}
a {
  color: inherit;
  text-decoration: none;
}
button,
h1,
h2,
h3 {
  letter-spacing: 1px;
}
button {
  padding: 0.7em 1em;
  font-size: 1.15em;
  font-weight: 700;
  border-radius: 0.3em;
  cursor: pointer;
  transition: $trans;
  color: $white;
  &:hover {
    transform: scale(1.1);
  }
}
h1,
h2,
h3 {
  font-family: $monoton;
  font-size: 3em;
  text-align: center;
}
h1 {
  font-weight: 900;
  text-transform: uppercase;
}
input {
  width: 100%;
  background-color: $white;
  padding: 1em 1.5em;
  border-radius: 0.3em;
  font-family: monospace;
}
section {
  min-height: 100vh;
}
.logo {
  font-family: $monoton;
}
.hidden {
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  padding: 0;
  border: 0;
  height: 1px;
  width: 1px;
  overflow: hidden;
}
.noise {
  position: fixed;
  top: -20vw;
  right: -20vw;
  bottom: -20vw;
  left: -20vw;
  width: auto;
  height: auto;
  background-position: 50%;
  background-image: url("./assets/noise.png");
  z-index: 1000;
  opacity: 0.4;
  pointer-events: none;
  animation: noise-generate 3s steps(2) infinite;
}
.fade {
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: $black;
  opacity: 0;
  transition: opacity 0.4s cubic-bezier(0.36, 0.33, 0, 1);
  pointer-events: none;
  z-index: -1;
}
@media (max-width: 768px) {
  .nav {
    width: 100%;
  }
}
@media (min-width: 1200px) {
  footer {
    padding: 6.25rem 0;
  }
}
@media (min-width: 1460px) {
  h1,
  h2,
  h3 {
    font-size: 4.375rem;
  }
}
@keyframes noise-generate {
  0% {
    transform: translate(0, 9rem);
  }
  10% {
    transform: translate(-1rem, -4rem);
  }
  20% {
    transform: translate(-8rem, 2rem);
  }
  30% {
    transform: translate(9rem, -9rem);
  }
  40% {
    transform: translate(-2rem, 7rem);
  }
  50% {
    transform: translate(-9rem, -4rem);
  }
  60% {
    transform: translate(2rem, 6rem);
  }
  70% {
    transform: translate(7rem, -8rem);
  }
  80% {
    transform: translate(-9rem, 1rem);
  }
  90% {
    transform: translate(6rem, -5rem);
  }
  to {
    transform: translate(-7rem, 0);
  }
}
@keyframes bounce {
  0% {
    transform: translateY(-20%);
  }
  to {
    transform: translateY(20%);
  }
}
</style>
