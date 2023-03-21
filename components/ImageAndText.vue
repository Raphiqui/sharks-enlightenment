<template>
  <div class="image-and-text-container">
    <div class="image-and-text-container-content">
      <div class="image-and-text-container-content-img">
        <nuxt-img preload :src="src" format="webp" :height="height" />
      </div>
      <div class="image-and-text-container-content-text">
        When talking about sharks many people think about a specific movie. 
        This movie is considered as <i>"responsible"</i> responsible for having frighten an entire generation (even if
        it's a great movie and one of my favorite).
        It was so well made that it still inspires our fear of sharks.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageAndText",
  computed: {},
  props: {
    imagePath: {
      type: String,
      require: false,
    },
    height: {
      type: Number,
      default: 300,
    },
    imageAlignLeft: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    src() {
      const src = this.$cloudinary.image.url(
        `sharks-enlightenment/${this.imagePath}`
      );

      return src;
    },
  },
};
</script>

<style scoped lang="scss">
.image-and-text-container {
  max-width: 1100px;
  margin: 0 auto;

  &-content {
    width: 100%;

    padding: 20px 0;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      width: 100%;
    }

    &-img {
      width: 50%;
      justify-content: center;
      display: flex;
      align-items: center;

      & > img {
        border-radius: 50px;
      }
    }

    &-text {
      width: 50%;
      min-height: 100px;
      text-align: center;
      padding: 20px;
      font-size: 16px;
      color: white;

      @media (max-width: 768px) {
        font-size: 16px;
      }
    }
  }
}
</style>
