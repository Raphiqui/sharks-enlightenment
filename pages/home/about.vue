<template>
  <div class="about">
    <div class="about-content">
      <span>{{ $t("about.1") }}</span>

      <span>{{ $t("about.2") }}</span>

      <span>{{ $t("about.3") }}</span>

      <span>{{ $t("about.4") }}</span>

      <span>{{ $t("about.5") }}</span>

      <span>{{ $t("about.6") }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "about",
  transition: {
    name: "home",
    mode: "out-in",
  },
};
</script>

<style scoped lang="scss">
.about {
  background-color: rgba(58, 56, 56, 0.5);
  backdrop-filter: blur(12px);

  font-size: 18px;

  border-radius: 12px;

  margin: 100px auto;
  max-width: 1100px;
  padding: 32px;

  &-content {
    color: white;

    display: flex;
    flex-direction: column;
    height: 100%;

    margin: -20px 0;

    span {
      display: block;
      padding: 20px 0;
    }
  }
}
</style>
