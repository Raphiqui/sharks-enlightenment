<template>
  <div class="s-card">
    <div class="s-card-container">
      <div class="s-card-container-content">
        <div class="s-card-container-content-grid title">
          <h2 class="title">{{ $t(`sharks.${shark.path}.name`) }}</h2>
          <h3>{{ shark.scientific_name }}</h3>
        </div>
        <div class="s-card-container-content-grid img">
          <nuxt-img preload :src="src" format="webp" />
        </div>
        <div class="s-card-container-content-grid size">
          <span class="section-title">Size</span>
          <span class="size">{{ shark.length }}</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 122.88 41.04"
            style="enable-background: new 0 0 122.88 41.04"
            xml:space="preserve"
            fill="white"
          >
            <path
              d="M115.39 6.09c0-2.07 1.68-3.75 3.75-3.75 2.07 0 3.75 1.68 3.75 3.75v28.86c0 2.07-1.68 3.75-3.75 3.75-2.07 0-3.75-1.68-3.75-3.75V6.09zM0 6.09c0-2.07 1.68-3.75 3.75-3.75 2.07 0 3.75 1.68 3.75 3.75v28.86c0 2.07-1.68 3.75-3.75 3.75C1.68 38.69 0 37.02 0 34.95V6.09zm13.27 15.94c-.18-.41-.29-.85-.31-1.29V20.29c.03-.44.13-.88.31-1.29v-.01l.01-.01.03-.07.01-.01.03-.07.01-.02.01-.01c.12-.24.27-.47.45-.68L27.33 1.4c1.29-1.61 3.65-1.86 5.25-.57 1.61 1.29 1.86 3.65.57 5.25l-8.67 10.73 71-.02-8.64-10.71c-1.29-1.61-1.04-3.96.57-5.25 1.61-1.29 3.96-1.04 5.25.57l13.52 16.72c.18.21.33.44.45.68l.01.01.01.02.03.07.01.01.03.07.01.01V19c.18.41.29.85.31 1.29V20.74c-.03.44-.13.88-.31 1.29v.01l-.01.01-.03.07-.01.01-.03.07-.01.02-.01.01c-.12.24-.27.47-.45.68L92.66 39.64c-1.29 1.61-3.65 1.86-5.25.57-1.61-1.29-1.86-3.65-.57-5.25l8.65-10.7-70.97.02 8.63 10.68c1.29 1.61 1.04 3.96-.57 5.25-1.61 1.29-3.96 1.04-5.25-.57L13.82 22.92c-.18-.21-.33-.44-.45-.68l-.01-.01-.01-.02-.03-.07-.01-.01-.03-.07-.01-.01v-.02z"
            />
          </svg>
        </div>
        <div class="s-card-container-content-grid description">
          <span class="section-title">Description</span>

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

          <div class="separator"></div>

          <span>
            {{ shark.distribution }}
          </span>
        </div>
        <div class="s-card-container-content-grid pagination">
          <div
            v-if="previous"
            @click="$router.push(previous)"
            style="margin-right: auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="arrow-left"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </div>
          <div
            v-if="next"
            @click="$router.push(next)"
            style="margin-left: auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="arrow-right"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
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
      previous: null,
      next: null,
      src: null,
    };
  },
  async asyncData({ context, store, route, $cloudinary }) {
    let shark = store.state.sharksTable.filter((shark) => {
      return shark.path === route.params.species;
    });

    shark = shark[0];

    const src = $cloudinary.image.url(
      `sharks-enlightenment/${shark.cloudinary_object_id}`,
      {
        height: "1920",
        width: "1414",
      }
    );
    return { src, shark };
  },
  mounted() {
    const paths = this.$store.state.sharksTable.map((item) => {
      return item.path;
    });

    const targetIndex = paths.indexOf(this.shark.path);

    if (targetIndex !== 0) {
      this.previous = `/home/shark_species/${
        paths[paths.indexOf(this.shark.path) - 1]
      }`;
      this.next = `/home/shark_species/${
        paths[paths.indexOf(this.shark.path) + 1]
      }`;
    }

    if (targetIndex === 0) {
      this.previous = null;
      this.next = `/home/shark_species/${
        paths[paths.indexOf(this.shark.path) + 1]
      }`;
    }

    if (targetIndex === paths.length - 1) {
      this.previous = `/home/shark_species/${
        paths[paths.indexOf(this.shark.path) - 1]
      }`;
      this.next = null;
    }
  },
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

      padding: 20px;

      background-color: rgba(58, 56, 56, 0.5);
      backdrop-filter: blur(12px);
      color: white;

      display: grid;

      grid-gap: 20px;

      margin-top: 100px;

      & > div {
        border: 2px solid white;
        border-radius: 25px;
      }

      box-sizing: border-box;

      border-radius: 12px;
      overflow: hidden;

      &-grid {
        display: flex;
        flex-direction: column;
        align-items: center;

        &.img {
          padding: unset !important;

          height: 500px;

          position: relative;
          overflow: hidden;
          display: flex;
          justify-content: center;

          grid-area: 2 / 1 / 3 / 4;

          @media (max-width: 768px) {
            grid-area: 2 / 1 / 2 / 5;
            height: unset;
          }
        }

        &.title {
          display: flex;
          justify-content: center;
          flex-direction: column;

          grid-area: 1 / 1 / 2 / 4;

          @media (max-width: 768px) {
            grid-area: 1 / 1 / 1 / 5;
          }

          & > * {
            padding: 10px 0;
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

        &.size {
          justify-content: space-between;
          grid-area: 3 / 1 / 4 / 2;

          & > .section-title {
            margin-bottom: unset;
          }

          & > .size {
            font-size: 25px;

            @media (max-width: 768px) {
              margin: 10px 0;
            }
          }

          & > svg {
            width: 60px;
          }

          @media (max-width: 768px) {
            grid-area: 3 / 1 / 3 / 5;
          }
        }

        &.description {
          grid-area: 3 / 2 / 4 / 3;
          @media (max-width: 768px) {
            grid-area: 4 / 1 / 4 / 5;
          }
        }

        &.iucn {
          grid-area: 4 / 1 / 5 / 3;
          @media (max-width: 768px) {
            grid-area: 5 /1 / 5 / 5;
          }
        }

        &.rangemap {
          grid-area: 3 / 3 / 5 / 4;

          & > img {
            width: 100%;
          }

          @media (max-width: 768px) {
            grid-area: 6 / 1 / 6 / 5;
          }
        }

        &.pagination {
          grid-area: 5/4/5/1;

          display: flex;
          flex-direction: row;
          justify-content: space-between;

          border: unset;

          @media (max-width: 768px) {
            grid-area: 7/1/7/5;
          }

          .arrow {
            display: flex;

            &-left,
            &-right {
              cursor: pointer;
            }
          }
        }

        &:not(:first-child) {
          padding: 10px;
        }
      }

      @media (max-width: 768px) {
        border-radius: unset;
      }
    }
  }
}

.section-title {
  text-transform: capitalize;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
  display: block;

  & > a {
    text-decoration: underline;
  }
}

.separator {
  width: 100%;
  background-color: white;
  height: 2px;
  border-radius: 25px;
  margin: 15px 0;
}
</style>
