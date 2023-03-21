<template>
  <div
    class="full-img-container"
    :style="{ backgroundImage: `url(${imagePath})` }"
  ></div>
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
};
</script>

<style scoped lang="scss">
.full-img-container {
  height: 90vh;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  position: relative;

  &::after {
    content: "";
    display: flex;
    z-index: -1;
    position: absolute;
    background: linear-gradient(to bottom, #4c9b8c, #002e66);
    bottom: -5px;
    height: 10px;
    width: 100%;
  }
}
</style>
