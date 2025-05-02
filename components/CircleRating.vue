<template>
  <!-- cr-container Begin -->
  <div class="cr-container">
    <!-- Donut SVG Begin -->
    <svg class="cr-container-donut" viewBox="1.6 1.6 16.8 16.8">
      <!-- Green line -->
      <circle class="cr-container-donut-bg" cx="10" cy="10" r="8"></circle>
      <!-- white line -->
      <circle
        class="cr-container-donut-bg-stroke"
        cx="10"
        cy="10"
        r="8"
      ></circle>
      <!-- Range Text -->
      <text id="range" x="62%" y="70%">{{ score }}%</text>
    </svg>
    <!-- Donut SVG End -->
  </div>
  <!-- cr-container End -->
</template>

<script>
export default {
  name: "CircleRating",
  data() {
    return {
      timerCount: 0,
    };
  },
  props: {
    score: {
      type: Number,
      require: true,
    },
  },
  mounted() {
    this.rangeEl = document.getElementById("range");
    this.stroke = document.querySelector(".cr-container-donut-bg-stroke");

    setTimeout(() => {
      this.strokeLength(this.score);
    }, 600);
  },
  methods: {
    strokeLength(range) {
      let val = parseInt(range);
      let strokeOffset = -51 - (51 / 100) * val;
      this.stroke.style.strokeDashoffset = parseInt(strokeOffset);
    },
  },
  watch: {
    score: {
      handler(value, previous) {
        if (previous != value) {
          setTimeout(() => {
            this.strokeLength(this.score);
          }, 600);
        }
      },
    },
  },
};
</script>

<style scoped lang="scss">
// Variables
$light-blue: cadetblue;
$white: white;

.title {
  text-align: center;
  margin-bottom: 20px;
}

// cr-container
$cr-container-width: 320;
.cr-container {
  max-width: $cr-container-width + px;
  margin: auto;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &-donut {
    overflow: visible;
    max-width: 100px;
    text {
      font-size: 3px;
      font-weight: 600;
      text-anchor: middle;
    }

    &-bg {
      fill: none;
      stroke: $light-blue;
      stroke-width: 2;

      &-stroke {
        fill: none;
        stroke: $white;
        stroke-width: 1.5;
        stroke-dasharray: 50.9 50.9;
        stroke-dashoffset: -51;
        stroke-linecap: round;
        transition: 2.5s all ease-in-out;
      }
    }
  }
}

// Donut

// Range Slider
$thumb-size: ($cr-container-width * 7%) + px;
.slider {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 2px;
  background: $white;
  outline: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid $white;
    background: $light-blue;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: $light-blue;
    cursor: pointer;
  }
}

#range {
  fill: $white;
}
</style>
