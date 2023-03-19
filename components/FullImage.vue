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
  height: 75vh;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  position: relative;
}
</style>
