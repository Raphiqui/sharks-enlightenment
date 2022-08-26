<template>
  <div>
    <header :class="{ 'scrolled-nav': scrolledNav }">
      <nav>
        <nuxt-link @click.native="handle" to="/" no-prefetch
          ><div class="branding">
            <img src="~/static/android-chrome-512x512.png" alt="" /></div
        ></nuxt-link>
        <ul v-show="!mobile" class="navigation">
          <li>
            <nuxt-link
              class="link"
              @click.native="handle"
              to="/home/species"
              no-prefetch
              >Sharks</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              class="link"
              @click.native="handle"
              to="/home/interactive"
              no-prefetch
              >Quiz</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              class="link"
              @click.native="handle"
              to="/home/about"
              no-prefetch
              >About</nuxt-link
            >
          </li>
        </ul>
        <div class="icon">
          <div
            class="container"
            @click="toggleMobileNav"
            v-show="mobile"
            :class="mobileNav ? 'is-open' : 'is-closed'"
          >
            <div class="line-top"></div>
            <div class="line-middle"></div>
            <div class="line-bottom"></div>
          </div>
        </div>
        <transition name="mobile-nav">
          <ul v-show="mobileNav" class="dropdown-nav">
            <li>
              <nuxt-link
                class="link"
                @click.native="handle"
                to="/home/species"
                no-prefetch
                >Sharks</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                class="link"
                @click.native="handle"
                to="/home/interactive"
                no-prefetch
                >Quiz</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                class="link"
                @click.native="handle"
                to="/home/about"
                no-prefetch
                >About</nuxt-link
              >
            </li>
          </ul>
        </transition>
      </nav>
    </header>

    <nuxt />
  </div>
</template>

<script>
export default {
  name: "default",
  data() {
    return {
      scrolledNav: null,
      mobile: false,
      mobileNav: false,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkScreen);
    window.removeEventListener("scroll", this.updateScroll);
  },
  methods: {
    handle() {
      this.mobileNav = false;
    },

    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },

    updateScroll() {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 50) {
        this.scrolledNav = true;
        return;
      }
      this.scrolledNav = false;
    },

    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }

      this.mobile = false;
      this.mobileNav = false;
      return;
    },
  },
};
</script>

<style scoped lang="scss">
header {
  background-color: transparent;
  backdrop-filter: blur(12px);
  z-index: 99;
  width: 100%;
  position: fixed;
  top: 0;
  transition: 0.3s ease all;
  color: white;

  nav {
    display: flex;
    flex-direction: row;
    padding: 12px 0;
    transition: 0.3s ease all;
    width: 90%;
    margin: 0 auto;

    @media (min-width: 1140px) {
      max-width: 1140px;
    }

    ul,
    .link {
      font-weight: 500;
      color: white;
      list-style: none;
      text-decoration: none;
    }

    li {
      text-transform: uppercase;
      transition: 0.3s ease all;
      border-bottom: 1px solid transparent;
      font-weight: 700;
      cursor: pointer;
      display: inline-block;

      &::after {
        content: "";
        width: 0px;
        height: 1px;
        display: block;
        background: white;
        transition: 300ms;
      }

      &:hover::after {
        width: 100%;
      }
    }

    .branding {
      display: flex;
      align-items: center;

      img {
        width: 100%;
        height: 40px;
        transition: 0.3s ease all;
      }
    }

    .navigation {
      display: flex;
      align-items: center;
      flex: 0.85 1 0%;
      margin-left: auto;
      justify-content: space-between;
    }

    .icon {
      display: flex;
      align-items: center;
      position: absolute;
      top: 0;
      right: 24px;
      height: 100%;

      // burger
      .container {
        position: relative;
        height: 28px;
        width: 36px;
        cursor: pointer;

        .line-top,
        .line-middle,
        .line-bottom {
          position: absolute;
          display: block;
          height: 4px;
          width: 36px;
          border-radius: 2px;
          background: #fff;
        }

        .line-top {
          top: 0;
          transform-origin: 34px 2px;
        }

        .line-middle {
          top: 12px;
          transition: opacity 200ms linear;
        }

        .line-bottom {
          bottom: 0;
          transform-origin: 34px 2px;
        }

        &.is-open {
          .line-top {
            animation: line-top-out 600ms linear normal;
            animation-fill-mode: forwards;
          }
          .line-middle {
            opacity: 0;
          }
          .line-bottom {
            animation: line-bot-out 600ms linear normal;
            animation-fill-mode: forwards;
          }
        }

        &.is-closed {
          .line-top {
            animation: line-top-in 600ms linear normal;
            animation-fill-mode: forwards;
          }
          .line-middle {
            transition-delay: 200ms;
          }
          .line-bottom {
            animation: line-bot-in 600ms linear normal;
            animation-fill-mode: forwards;
          }
        }
      }

      @keyframes line-top-in {
        0% {
          left: -5px;
          bot: 0;
          transform: rotate(-45deg);
        }
        20% {
          left: -5px;
          bot: 0;
          transform: rotate(-60deg);
        }
        80% {
          left: 0;
          bot: 0;
          transform: rotate(15deg);
        }
        100% {
          left: 0;
          bot: 1px;
          transform: rotate(0deg);
        }
      }

      @keyframes line-top-out {
        0% {
          left: 0;
          top: 0;
          transform: rotate(0deg);
        }
        20% {
          left: 0;
          top: 0;
          transform: rotate(15deg);
        }
        80% {
          left: -5px;
          top: 0;
          transform: rotate(-60deg);
        }
        100% {
          left: -5px;
          top: 1px;
          transform: rotate(-45deg);
        }
      }

      @keyframes line-bot-in {
        0% {
          left: -5px;
          transform: rotate(45deg);
        }
        20% {
          left: -5px;
          bot: 0;
          transform: rotate(60deg);
        }
        80% {
          left: 0;
          bot: 0;
          transform: rotate(-15deg);
        }
        100% {
          left: 0;
          transform: rotate(0deg);
        }
      }

      @keyframes line-bot-out {
        0% {
          left: 0;
          transform: rotate(0deg);
        }
        20% {
          left: 0;
          transform: rotate(-15deg);
        }
        80% {
          left: -5px;
          transform: rotate(60deg);
        }
        100% {
          left: -5px;
          transform: rotate(45deg);
        }
      }

      i {
        cursor: pointer;
        font-size: 24px;
        transition: 0.8s all ease;
      }
    }

    .icon-active {
      transform: rotate(180deg);
    }

    .dropdown-nav {
      display: flex;
      flex-direction: column;
      position: fixed;
      width: 100%;
      max-width: 250px;
      height: 100vh;
      backdrop-filter: blur(12px);
      background-color: transparent;
      top: 0;
      left: 0;

      li {
        margin-left: 0;

        @media (max-width: 768px) {
          text-align: center;
          border-bottom: 1px solid black;
          padding-bottom: unset;
        }
        .link {
          color: black;

          @media (max-width: 768px) {
            padding: 10px 0;
            width: 100%;
            cursor: pointer;
            display: block;
          }
        }
      }
    }

    .mobile-nav-enter-active,
    .mobile-nav-leave-active {
      transition: 1s ease all;
    }

    .mobile-nav-enter,
    .mobile-nav-leave-to {
      transform: translateX(-250px);
    }

    .mobile-nav-enter-to {
      transform: translateX(0);
    }
  }
}

.scrolled-nav {
  nav {
    padding: 8px 0;

    .branding {
      img {
        width: 40px;
      }
    }
  }
}
</style>
