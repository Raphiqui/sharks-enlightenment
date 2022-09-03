<template>
  <div class="s-card">
    <div class="s-card-container">
      <div class="s-card-container-content">
        <div
          class="s-card-container-content-grid img"
          :style="{
            backgroundImage: `url(${require(`@/assets/images/species/${shark.path}.jpg`)})`,
          }"
        ></div>
        <div class="s-card-container-content-grid title">
          <h2 class="title">{{ $t(`sharks.${shark.path}.name`) }}</h2>
          <h3>{{ shark.scientific_name }}</h3>
          <span
            >{{ $t("shark.length") }} ({{ $t("shark.av") }})&nbsp;:
            {{ shark.length }}</span
          >
          <span
            >{{ $t("shark.weight") }} ({{ $t("shark.av") }})&nbsp;:
            {{ shark.weight }}</span
          >
        </div>
        <div class="s-card-container-content-grid description">
          {{ shark.description }}
        </div>
        <div class="s-card-container-content-grid iucn">
          <div class="iucn-status-container">
            <div class="iucn-status-container-content">
              <span class="section-title"
                >{{ $t("shark.cs") }} (<a
                  href="https://www.iucn.org/fr"
                  rel="noopener noreferrer"
                  target="_blank"
                  >IUCN</a
                >)</span
              >
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
              {{ $t(`shark.iucnStatus.${key}`) }}
              </li>
            </ul>
          </div>
        </div>
        <div class="s-card-container-content-grid rangemap">
          <span class="section-title"> {{ $t("shark.dm") }} </span>

          <img
            v-if="`${require(`@/assets/svgs/${shark.path}.svg`)}`"
            :src="`${require(`@/assets/svgs/${shark.path}.svg`)}`"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Species",
  transition: {
    name: "home",
    mode: "out-in",
  },
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
.s-card {
  &-container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;

    &-content {
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

      border-radius: 12px;
      overflow: hidden;

      &-grid {
        &.img {
          height: 300px;
          background-size: cover;
          background-position: center;
          height: 300px;
          background-repeat: no-repeat;
        }

        &.title {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;

          & > *:not(:last-child) {
            padding-bottom: 20px;
          }

          .title {
            font-size: 22px;
            font-weight: bold;

            text-transform: uppercase;
          }

          h3 {
            font-style: italic;
            font-size: 18px;
          }
        }

        &.rangemap {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        &.description,
        &.iucn {
          grid-column: 1 / -1;
        }

        &.iucn {
          margin-top: 35px;
          margin: 0 auto;
          width: 100%;

          @media (max-width: 768px) {
            width: unset;
          }
        }

        &:not(:first-child) {
          padding: 10px;
        }
      }

      @media (max-width: 768px) {
        padding: 0 20px;
        border-radius: unset;
      }
    }
  }
}

.section-title {
  text-transform: capitalize;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 30px;
  display: block;
}
</style>
