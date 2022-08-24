<template>
  <div class="content">
    <div class="row-1">
      <div class="foo">
        <div
          class="bar stuff1"
          :style="{
            backgroundImage: `url(${require(`@/assets/images/species/${shark.path}.jpg`)})`,
          }"
        ></div>
        <div class="bar stuff2">
          <h2 class="title">{{ shark.name }}</h2>
          <h3>{{ shark.scientific_name }}</h3>
          <span>{{ shark.length }}</span>
          <span>{{ shark.weight }}</span>
        </div>
        <div class="bar stuff3">
          {{ shark.description }}
        </div>
        <div class="bar stuff4">
          <div class="iucn-status-container">
            <div class="coco">
              <span class="section-title">Conservation status (IUCN)</span>
            </div>
            <ul class="iucn-grid">
              <li
                v-for="(value, key) in iucnStatus"
                :key="key"
                :class="[
                  {
                    [key.toLowerCase()]:
                      key === shark.uicn_status.toUpperCase(),
                  },
                  'iucn-cell',
                ]"
              >
                {{ value }}
              </li>
            </ul>
          </div>
        </div>
        <div class="bar stuff5">
          <span class="section-title"> rangemap </span>

          <img
            v-if="`${require(`@/assets/svgs/${shark.path}.svg`)}`"
            :src="`${require(`@/assets/svgs/${shark.path}.svg`)}`"
          />
        </div>
        <div class="bar stuff6"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Species",
  data() {
    return {
      iucnStatus: this.$store.state.iucnStatus,
    };
  },
  computed: {
    shark() {
      const sharkObjectMatch = this.$store.state.sharksTable.filter((shark) => {
        return shark.path === this.$route.params.species;
      });

      return sharkObjectMatch[0];
    },
  },
  prop: {},
};
</script>

<style scoped lang="scss">
.row-1 {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.section-title {
  text-transform: capitalize;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 30px;
  display: block;
}

.foo {
  max-width: 1100px;
  width: 100%;
  display: flex;
  justify-content: center;

  margin: 100px 0;

  background-color: rgba(58, 56, 56, 0.5);
  backdrop-filter: blur(12px);
  color: white;

  --auto-grid-min-size: 330px;
  display: grid;
  grid-gap: 30px 60px;
  grid-template-columns: repeat(
    auto-fill,
    minmax(var(--auto-grid-min-size), 1fr)
  );
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;

  border-radius: 12px;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 0 20px;
    border-radius: unset;
  }
}

.bar:not(:first-child) {
  padding: 10px;
}

.bar.stuff1 {
  height: 300px;
  background-size: cover;
  background-position: center;
  height: 300px;
  background-repeat: no-repeat;
}

.bar.stuff2 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > *:not(:last-child) {
    padding-bottom: 20px;
  }

  .title {
    font-size: 24px;
    font-weight: bold;

    text-transform: uppercase;
  }

  h3 {
    font-style: italic;
    font-size: 18px;
  }
}

.bar.stuff5 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.bar.stuff3,
.bar.stuff4 {
  grid-column: 1 / -1;
}

.bar.stuff4 {
  margin-top: 35px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 768px) {
    width: unset;
  }
}

.bar.stuff6 {
  text-align: center;
  span {
    text-transform: capitalize;
  }
}
</style>
