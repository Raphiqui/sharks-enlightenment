<template>
  <div class="about">
    <div class="about-container">
      <div class="about-content">
        <span>{{ $t("about.1") }}</span>

        <span>{{ $t("about.2") }}</span>

        <span>{{ $t("about.3") }}</span>

        <span>{{ $t("about.4") }}</span>

        <span>{{ $t("about.5") }}</span>
      </div>
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
  min-height: 100vh;
  display: flex;

  &-container {
    background-color: rgba(58, 56, 56, 0.5);
    backdrop-filter: blur(12px);

    font-size: 18px;

    border-radius: 12px;

    margin: 100px auto auto;
    max-width: 1100px;
    padding: 32px;

    @media (max-width: 768px) {
      margin: 100px auto;
    }
  }

  &-content {
    color: white;

    display: flex;
    flex-direction: column;
    height: 100%;

    span {
      display: block;
      padding: 20px 0;

      box-sizing: border-box;
    }
  }
}
</style>
