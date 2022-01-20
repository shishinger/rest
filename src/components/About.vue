<template>
  <section class="about">
    <h2 class="hidden">About us</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, rerum?
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum quidem
      quis accusantium deleniti cumque obcaecati nisi vitae incidunt illum ab
      nobis illo nulla odit ratione saepe, autem error optio! Delectus nobis
      sequi tempore saepe esse.
    </p>
  </section>
</template>

<script>
export default {
  name: "About"
};
</script>

<style lang="scss">
.about {
  @extend %df_cc;
  justify-content: space-evenly;
  background-color: $purple;
  p {
    flex: 0 0 40%;
  }
  p:nth-child(1) {
    font-size: 3em;
    font-family: $monoton;
  }
  p:nth-child(2) {
    font-size: 2em;
  }
}
</style>
