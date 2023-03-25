<template>
  <div>
    <svg
      id="text-container"
      viewBox="0 0 1000 200"
      xmlns="http://www.w3.org/2000/svg"
      v-show="!isMobile"
    >
      <path
        id="text-curve"
        d="M0 100s269.931 86.612 520 0c250.069-86.612 480 0 480 0"
        fill="none"
      />

      <text
        y="40"
        font-size="32"
        style="stroke: white; fill: white; transform: translateY(-30px)"
      >
        <textPath id="text-path" href="#text-curve" startOffset="200">
          {{ text }}
        </textPath>
      </text>
    </svg>
    <span v-show="isMobile" class="text-mobile">
      {{ text }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      default: "foo",
      required: true,
    },
  },
  data() {
    return {
      textPath: null,
      textContainer: null,
      path: null,
      pathLength: null,
      isMobile: true,
    };
  },
  mounted() {
    this.textPath = this.$el.querySelector("#text-path");
    this.textContainer = this.$el.querySelector("#text-container");
    this.path = this.$el.querySelector(this.textPath.getAttribute("href"));
    this.pathLength = this.path.getTotalLength();

    if (this.$el.clientWidth > 768) {
      window.addEventListener("scroll", this.onScroll);

      this.updateTextPathOffset(this.pathLength);

      this.isMobile = false;
    }
  },

  methods: {
    onScroll() {
      const rect = this.$el
        .querySelector("#text-container")
        .getBoundingClientRect();
      const scrollPercent = rect.y / window.innerHeight;
      this.updateTextPathOffset(scrollPercent * 2 * this.pathLength);
    },

    updateTextPathOffset(offset) {
      this.textPath.setAttribute("startOffset", offset);
    },
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
};
</script>

<style scoped lang="scss">
#text-path {
  @media (max-width: 768px) {
    font-size: 50px;
  }
}

.text-mobile {
  text-align: center;
  font-size: 30px;
  color: white;
  display: flex;
}
</style>
