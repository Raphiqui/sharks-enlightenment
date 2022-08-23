<template>
  <div class="species">
    <div class="species-container">
      <ul>
        <li
          v-for="shark in sharksTable"
          :key="shark.name"
          @click="$router.push(`/home/shark_species/${shark.path}`)"
          :style="{ backgroundImage: `url(${buildPath(shark.path)})` }"
        >
          <div style="backdrop-filter: blur(4px); width: fit-content">
            {{ shark.name }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Species",
  data() {
    return {};
  },
  computed: {
    sharksTable() {
      return this.$store.state.sharksTable;
    },
  },
  prop: {},
  methods: {
    buildPath(name) {
      return require("@/assets/images/species/" + name + ".jpg");
    },
  },
};
</script>

<style scoped lang="scss">
.species {
  width: 100%;
  position: relative;
  padding: 0 20px;

  margin-top: 100px;
}

.species-header-container {
  padding-top: 100px;
}

.species-container {
  margin: 0 auto;
  max-width: 1100px;
  padding: 2rem 0;
}
.species-container > ul {
  --auto-grid-min-size: 16rem;
  display: grid;
  grid-gap: 60px;
  grid-template-columns: repeat(
    auto-fill,
    minmax(var(--auto-grid-min-size), 1fr)
  );
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}

.species-container > ul > li {
  overflow: hidden;
  justify-content: center;
  display: flex;
  align-items: flex-end;

  color: #ffffff;
  font-size: 24px;
  list-style-type: none;
  padding: 10px 16px;
  text-align: center;
  text-transform: capitalize;
  font-weight: 600;

  cursor: pointer;

  height: 176px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;

  transition: 0.3s;

  border-radius: 45px;

  @media (max-width: 768px) {
    background-size: cover;
    font-size: 18px;
  }
}

.species-container > ul > li:hover {
  background-size: 150%;

  @media (max-width: 768px) {
    background-size: cover;
  }
}
</style>
