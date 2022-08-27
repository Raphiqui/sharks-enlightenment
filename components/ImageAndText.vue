<template>
  <div class="image-and-text-container">
    <div
      class="image-and-text-container-content"
      :style="{ backgroundImage: `url(${imagePath})`, height: `${height}px` }"
    >
      <div class="image-and-text-container-content-text">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
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
      require: true,
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
};
</script>

<style scoped lang="scss">
.image-and-text-container {
  display: flex;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }

  &-content {
    width: 100%;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    &-text {
      position: absolute;
      bottom: 0;
      background-color: rgba(58, 56, 56, 0.5);
      min-height: 100px;
      text-align: center;
      vertical-align: ce;
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
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
