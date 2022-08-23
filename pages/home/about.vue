<template>
  <div class="about">
    <div class="about-content">
      Work of a pasionate about oceanography and everything related to it, most
      especially sharks. My biggest dream would be to study and work closely to
      them.
    </div>
  </div>
</template>

<script>
export default {
  name: "about",
};
</script>

<style scoped lang="scss">
.about {
  background-color: rgba(58, 56, 56, 0.5);
  backdrop-filter: blur(12px);

  border-radius: 12px;

  margin: 100px auto 0 auto;
  max-width: 1100px;
  padding: 32px;
  height: 600px;

  &-content {
    color: white;
  }
}
</style>
