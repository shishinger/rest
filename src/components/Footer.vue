<template>
  <footer class="footer">
    <div class="container center col">
      <form action="submit" class="form">
        <label for="">Events, news & actuals</label>
        <input type="email" placeholder="Your email" />
        <button class="btn right">ok</button>
      </form>
      <div class="brand">
        <a href="" class="brand__logo">logo</a>
      </div>
      <div class="contacts">
        <a href="tel:1488288282">14 88 22 828 2</a>
        <address><a>add google maps</a></address>
      </div>
      <div class="social center">
        <a href="" class="social__item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              id="twitter"
              d="M24 4.6c-.9.3-1.8.6-2.8.7a5 5 0 002.1-2.7c-1 .6-2 1-3 1.2a5 5 0 00-8.5 4.5A14 14 0 011.7 3a5 5 0 001.5 6.6c-.8 0-1.6-.2-2.2-.6A5 5 0 005 14a5 5 0 01-2.3 0 5 5 0 004.6 3.5 9.9 9.9 0 01-7.3 2A14 14 0 0021.5 7.1 10 10 0 0024 4.6z"
            />
          </svg>
        </a>
        <a href="" class="social__item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              id="insta"
              d="M12 2h5c3 0 5 2 5 5a83 83 0 010 10c0 3-2 5-5 5a83 83 0 01-10 0c-3 0-5-2-5-5A83 83 0 012 7c0-3 2-5 5-5h5zm0-2H7C3 0 0 3 0 7a84 84 0 000 10c0 4 3 7 7 7a86 86 0 0010 0c4 0 7-3 7-7a84 84 0 000-10c0-4-3-7-7-7h-5zm0 6a6 6 0 100 12 6 6 0 000-12zm0 10a4 4 0 110-8 4 4 0 010 8zm6-12a1 1 0 100 3 1 1 0 000-3z"
            />
          </svg>
        </a>
        <a href="" class="social__item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              id="facebook"
              d="M9 8H6v4h3v12h5V12h4V8h-4V6l1-1h3V0h-4c-3 0-5 2-5 5v3z"
            />
          </svg>
        </a>
      </div>
      <div class="copyright">
        &#169; spizjenno
      </div>
    </div>
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #7c162e;
  z-index: 1;
}
.form {
  position: relative;
  label {
    display: inline-block;
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
  .btn {
    position: absolute;
    padding: 8px 10px;
    min-height: 32px;
    background-color: #007e5d;
    &.right {
      top: 50%;
      right: 10px;
    }
  }
  input + input {
    margin-top: 1.5rem;
  }
}
.brand {
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  &::before,
  &::after {
    content: "";
    display: block;
    border-bottom: 1px solid $text;
    flex-grow: 2;
    min-width: 240px;
  }
  &__logo {
    max-width: 64px;
    margin: 0px 20px;
    font-family: $monoton;
    font-weight: 3rem;
  }
}
.contacts {
  font-family: monospace;
  margin-top: 2rem;
}
.social {
  position: absolute;
  bottom: 80px;
  right: 80px;
  &__item {
    display: block;
    opacity: 0.5;
    svg {
      fill: $text;
    }
    & + & {
      margin-left: 1rem;
    }
    &:hover {
      opacity: 1;
    }
  }
}
.copyright {
  margin-top: 3.5rem;
}
</style>
