<template>
<section class="lead">
  <div class="container center">
    <h1>Most.<br>Pretention.<br>Tagline.</h1>
  </div>
  <div class="scroll">
    <a href="#about">
      <svg width="19" height="45" viewBox="0 0 19 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.2 26.4C4.7 26.4 1 22.7 1 18.2V9.3C1 4.7 4.7 1 9.2 1C13.7 1 17.4 4.7 17.4 9.2V18.1C17.5 22.7 13.8 26.4 9.2 26.4Z" stroke="#f4abc4" stroke-width="2" stroke-miterlimit="10"></path>
        <path d="M9.2002 6.69995V10.2" stroke="#f4abc4" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"></path>
        <path d="M5.2002 32.5L9.2002 36.5L13.3002 32.5" stroke="#f4abc4" stroke-width="2" stroke-miterlimit="10"></path>
      </svg>
    </a>
  </div>
  
</section>

</template>

<script>
export default {
  name: "Lead"
}
</script>

<style lang="scss">
.lead {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  
  background-color: $space;
}
.scroll {
  position: absolute;
  bottom: 5%;
  right: 10%;
  cursor: pointer;
  svg {
    animation: bounce 1.8s linear infinite alternate;
  }
  
}
</style>