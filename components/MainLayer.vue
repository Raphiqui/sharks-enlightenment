<template>
  <div class="bar">
    <FullImage
      ref="fullImg"
      :image-path="require('@/assets/images/shark1.jpg')"
    />
    <GridLayout />
    <Parallax :text="$t(`home.parallax.msg`)" />
    <ImageAndText :imageAlignLeft="true" imagePath="jaws_xm9up8.jpg" />
  </div>
</template>

<script>
export default {
  name: "MainLayer",
  data() {
    return {
      sharkShapeRight: require("@/assets/svgs/sharkShapeFromRightToLeft.svg"),
      sharkShapeLeft: require("@/assets/svgs/sharkShapeFromLeftToRight.svg"),
    };
  },

  methods: {
    getRandomInt(max) {
      return Math.floor(Math.random() * max);
    },
    getRange(min, max) {
      return [...Array(max - min + 1).keys()].map((i) => i + min);
    },
  },

  mounted() {
    const imgLeft = document.createElement("img");
    const imgRight = document.createElement("img");

    imgLeft.className = "shark-svg -left";
    imgRight.className = "shark-svg -right";

    imgLeft.src = this.sharkShapeLeft;
    imgRight.src = this.sharkShapeRight;

    const leftRange = this.getRange(1, this.getRandomInt(11));

    leftRange.forEach((idx) => this.$el.appendChild(imgLeft.cloneNode()));

    const rightRange = this.getRange(1, this.getRandomInt(11));

    rightRange.forEach((idx) => {
      this.$el.appendChild(imgRight.cloneNode());
    });

    const fullImgHeight = this.$refs.fullImg.$el.clientHeight;

    this.$el.querySelectorAll(".shark-svg.-left").forEach((shark) => {
      shark.width = Math.random() * 200;

      shark.style.left =
        Math.random() * (this.$el.clientWidth - shark.clientWidth) + "px";
      shark.style.top =
        Math.random() *
          (this.$el.clientHeight - shark.clientHeight + fullImgHeight) +
        "px";
    });

    this.$el.querySelectorAll(".shark-svg.-right").forEach((shark) => {
      shark.width = Math.random() * 200;

      shark.style.right =
        Math.random() * (this.$el.clientWidth - shark.clientWidth) + "px";
      shark.style.top =
        Math.random() *
          (this.$el.clientHeight - shark.clientHeight + fullImgHeight) +
        "px";
    });
  },
};
</script>

<style lang="scss">
.bar {
  @media (max-width: 768px) {
    top: 0;
    bottom: 0;
    position: fixed;
    overflow-y: scroll;
    overflow-x: hidden;
  }
}

.shark-svg {
  height: auto;
  z-index: -1;
  position: absolute;

  &.-right {
    animation: translate-right 60s forwards infinite;
  }

  &.-left {
    animation: translate-left 60s forwards infinite;
  }
}

@keyframes translate-left {
  0% {
    transform: translate3d(-100vw, 0, 0);
  }

  100% {
    transform: translate3d(100vw, 0, 0);
  }
}

@keyframes translate-right {
  0% {
    transform: translate3d(100vw, 0, 0);
  }

  100% {
    transform: translate3d(-100vw, 0, 0);
  }
}
</style>
