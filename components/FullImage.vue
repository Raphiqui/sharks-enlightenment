<template>
  <div 
    class="bar" 
    :style="{ backgroundImage: `url(${imagePath})` }"
  >
  </div>
</template>

<script>

export default {
  name: 'FullImage',
  computed: {},
  props: {
    imagePath: {
      type: String,
      require: true,
    }
  }
}
</script>

<style scoped>
.bar {
  height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.foo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: black;
    font-size: 20px;
    max-width: 800px;
    width: 100%;
    padding: 10px;
}
</style>>
