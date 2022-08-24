<template>
  <div>
    <header
      class="bg-white h-16"
      style="
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 700;
        font-size: 22px;
      "
    >
      <ul style="padding: 0 20px">
        <li>
          <nuxt-link :to="'/home/species'" no-prefetch>Species</nuxt-link>
        </li>
        <li><nuxt-link to="/home/interactive" no-prefetch>Quiz</nuxt-link></li>
        <li><nuxt-link :to="'/home/about'" no-prefetch>About</nuxt-link></li>
      </ul>
    </header>
    <nuxt />
  </div>
</template>

<script>
export default {
  name: "default",
};
</script>
<style scoped>
header {
  position: fixed;
  width: 100%;
  top: 0;
  background-color: transparent;
  backdrop-filter: blur(12px);
  color: white;
  font-weight: 700;
  z-index: 1;
}

ul {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1000px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
}

li {
  font-weight: 700;
  cursor: pointer;

  text-decoration: underline 0.15em transparent;
  transition: text-decoration-color 300ms;
}

li:hover {
  text-decoration-color: white;
}
</style>
