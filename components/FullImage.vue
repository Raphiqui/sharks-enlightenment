<template>
  <div
    class="full-img-container"
    :style="{ backgroundImage: `url(${imagePath})` }"
  >
    <div class="scroll-down" @click="scrollDown">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-arrow-down-circle"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="8 12 12 16 16 12"></polyline>
        <line x1="12" y1="8" x2="12" y2="16"></line>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "FullImage",
  computed: {},
  props: {
    imagePath: {
      type: String,
      require: true,
    },
  },
  methods: {
    scrollDown() {
      const heightToScroll = this.$el.clientHeight;
      window.scrollTo({
        top: heightToScroll ? heightToScroll : 0,
        left: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped lang="scss">
.full-img-container {
  height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  position: relative;

  .scroll-down {
    position: absolute;
    bottom: 100px;
    display: flex;
    justify-content: center;
    left: 0;
    right: 0;

    & > svg {
      stroke: darkblue;
      cursor: pointer;
    }

    animation: bounce 0.6s ease-in-out infinite alternate;
  }

  @keyframes bounce {
    0% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(-10px);
    }
  }
}
</style>
>
