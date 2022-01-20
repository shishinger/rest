<template>
  <section class="lead">
    <h1 class="tagline">Most. Pretention. Tagline.</h1>
    <a href="#about" class="scroll" title="Scroll">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 19 45"
        width="19"
        height="45"
      >
        <path
          d="M9.2 26.4A8.2 8.2 0 0 1 1 18.2V9.3C1 4.7 4.7 1 9.2 1c4.5 0 8.2 3.7 8.2 8.2v8.9a8.1 8.1 0 0 1-8.2 8.3Z"
        />
        <path d="M9.2 6.7v3.5" />
        <path d="m5.2 32.5 4 4 4.1-4" />
      </svg>
    </a>
  </section>
</template>

<script>
export default {
  name: "Lead"
};
</script>

<style lang="scss">
.lead {
  @extend %df_cc;
  background-color: $space;
}
.tagline {
  flex: 0 0 30%;
}
.scroll {
  position: absolute;
  bottom: 5%;
  right: 10%;
  cursor: pointer;
  svg {
    fill: none;
    stroke: #f4abc4;
    stroke-width: 2;
    animation: bounce 1.8s linear infinite alternate;
  }
}
</style>
