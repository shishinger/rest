<template>
  <Header logo="logo" />
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
  },
  data() {
    return {
      logo: "logo"
    };
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,400;0,700;1,400;1,700;1,900&family=Monoton&display=swap");
* {
  margin: 0;
  padding: 0;
  border: 0;
  font-family: inherit;
  font-weight: inherit;
  line-height: inherit;
}
*,
::before,
::after {
  box-sizing: border-box;
}
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  min-height: 100%;
  scroll-behavior: smooth;
  font-family: $bodoni;
  color: $text;
  font-size: 16px;
  line-height: 1.4;
  font-weight: 400;
}
body::before {
  @include grain;
}
ol,
ul {
  list-style: none;
}
a {
  color: inherit;
  text-decoration: none;
}
button {
  display: inline-flex;
  min-height: 45px;
  padding: 0 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: 0.6px;
  border-radius: 6px;
  cursor: pointer;
  transition: $trans;
  color: $white;
  outline: none;
  letter-spacing: 1px;
  &:hover {
    transform: scale(1.1);
  }
}
h1,
h2,
h3 {
  font-family: $monoton;
  font-size: 3rem;
  text-align: center;
  line-height: 1.2;
  letter-spacing: 1px;
}
h1 {
  font-weight: 900;
  text-transform: uppercase;
}
input {
  width: 100%;
  background-color: $white;
  padding: 0px 20px;
  height: 50px;
  bottom: 0;
  border-radius: 6px;
  font-family: monospace;
}
section {
  height: 100vh;
}
section,
footer {
  position: relative;
  padding: 5rem 0;
  width: 100%;
  z-index: 10;
}
strong {
  font-weight: 700;
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
.container {
  position: relative;
  width: 100%;
  margin: 0 auto;
}
.end {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.row {
  padding: 2rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  .intro {
    width: 50%;
    font-size: 3rem;
    font-family: $monoton;
  }
  .content {
    width: 40%;
    font-size: 2rem;
  }
}
.center {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.col {
  flex-direction: column;
}
.close {
  position: absolute;
  top: 2rem;
  right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
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
    transform: rotate(-45deg);
  }
  &::after {
    transform: rotate(45deg);
  }
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
@media (max-width: 768px) {
  .nav {
    width: 100%;
  }
}
@media (min-width: 1200px) {
  section,
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
    transform: translate3d(0, 9rem, 0);
  }
  10% {
    transform: translate3d(-1rem, -4rem, 0);
  }
  20% {
    transform: translate3d(-8rem, 2rem, 0);
  }
  30% {
    transform: translate3d(9rem, -9rem, 0);
  }
  40% {
    transform: translate3d(-2rem, 7rem, 0);
  }
  50% {
    transform: translate3d(-9rem, -4rem, 0);
  }
  60% {
    transform: translate3d(2rem, 6rem, 0);
  }
  70% {
    transform: translate3d(7rem, -8rem, 0);
  }
  80% {
    transform: translate3d(-9rem, 1rem, 0);
  }
  90% {
    transform: translate3d(6rem, -5rem, 0);
  }
  to {
    transform: translate3d(-7rem, 0, 0);
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
