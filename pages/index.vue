<template>
  <div>
    <MainLayer />
  </div>
</template>

<script>
export default {
  name: "IndexPage",

  transition: {
    name: "home",
    mode: "out-in",
  },
};
</script>

<style lang="scss">
body {
  overflow-x: hidden;
}
</style>
