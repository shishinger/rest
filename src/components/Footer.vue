<template>
  <footer class="footer">
    <form action="submit" class="form">
      <label for="email" class="form__label">Events, news & actuals</label>
      <input type="email" id="email" placeholder="Your email" />
      <button class="form__btn">ok</button>
    </form>
    <div class="brand">
      <a href="" class="logo">logo</a>
    </div>
    <div class="contacts">
      <a href="tel:1488288282">14 88 22 828 2</a>
      <address><a>add google maps</a></address>
    </div>
    <ul class="social">
      <li class="social__item">
        <a href="" title="Twitter">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              d="M24 4.6c-.9.3-1.8.6-2.8.7a5 5 0 0 0 2.1-2.7c-1 .6-2 1-3 1.2a5 5 0 0 0-8.5 4.5A14 14 0 0 1 1.7 3a5 5 0 0 0 1.5 6.6A4 4 0 0 1 1 9a5 5 0 0 0 4 5 5 5 0 0 1-2.3 0 5 5 0 0 0 4.6 3.5 9.9 9.9 0 0 1-7.3 2A14 14 0 0 0 21.5 7.1 10 10 0 0 0 24 4.6z"
            />
          </svg>
        </a>
      </li>
      <li class="social__item" title="Istagram">
        <a href="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              d="M12 2h5c3 0 5 2 5 5a83 83 0 0 1 0 10c0 3-2 5-5 5a83 83 0 0 1-10 0c-3 0-5-2-5-5A83 83 0 0 1 2 7c0-3 2-5 5-5h5zm0-2H7C3 0 0 3 0 7a84 84 0 0 0 0 10c0 4 3 7 7 7a86 86 0 0 0 10 0c4 0 7-3 7-7a84 84 0 0 0 0-10c0-4-3-7-7-7h-5zm0 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm0 10a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6-12a1 1 0 1 0 0 3 1 1 0 0 0 0-3z"
            />
          </svg>
        </a>
      </li>
      <li class="social__item" title="Facebook">
        <a href="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path d="M9 8H6v4h3v12h5V12h4V8h-4V6l1-1h3V0h-4c-3 0-5 2-5 5v3z" />
          </svg>
        </a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss">
.footer {
  position: relative;
  @extend %df_cc;
  flex-direction: column;
  row-gap: 60px;
  background-color: #7c162e;
  z-index: 1;
}
.form {
  position: relative;
  &__label {
    display: block;
    font-size: 1.4em;
    margin-bottom: 1rem;
  }
  &__btn {
    position: absolute;
    bottom: 2px;
    right: 2px;
    padding: 8px 10px;
    background-color: #007e5d;
  }
}
.brand {
  @extend %df_cc;
  flex-wrap: nowrap;
  &::before,
  &::after {
    content: "";
    display: block;
    border-bottom: 1px solid $text;
    flex-grow: 2;
    min-width: 15em;
  }
  .logo {
    margin: 0 20px;
  }
}
.contacts {
  font-family: monospace;
}
.social {
  position: absolute;
  bottom: 2em;
  right: 2em;
  @extend %dfc;
  row-gap: 1em;
  &__item {
    opacity: 0.5;
    transition: opacity 0.4s cubic-bezier(0.36, 0.33, 0, 1);
    svg {
      fill: $text;
    }
    &:hover {
      opacity: 1;
    }
  }
}
</style>
