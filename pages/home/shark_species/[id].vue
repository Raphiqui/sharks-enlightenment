<template>
  <div class="s-card">
    <div class="s-card-container">
      <div class="s-card-container-content">
        <div class="s-card-container-content-grid title">
          <h2 class="title">
            {{ $t(`sharks.${shark.path}.name`) }}
          </h2>
          <h3>
            {{ shark.scientific_name }}
          </h3>
        </div>
        <div class="s-card-container-content-grid img">
          <nuxt-img preload :src="url" format="webp" />
        </div>
        <div class="s-card-container-content-grid size">
          <span class="section-title">{{ $t(`shark.length`) }}</span>
          <span class="size">{{ shark.length }}</span>
        </div>
        <div class="s-card-container-content-grid iucn">
          <div class="iucn-status-container">
            <div class="iucn-status-container-content">
              <span class="section-title">{{ $t("shark.cs") }}</span>
            </div>
            <ul class="iucn-grid">
              <a
                href="https://www.iucn.org/fr"
                rel="noopener noreferrer"
                target="_blank"
                ><li
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
                </li></a
              >
            </ul>
          </div>
        </div>
        <div class="s-card-container-content-grid description">
          <span class="section-title">{{ $t(`shark.ds`) }}</span>

          {{ $t(`sharks.${shark.path}.description`) }}
        </div>
        <div class="s-card-container-content-grid rangemap">
          <span class="section-title">
            {{ $t("shark.dm") }}
          </span>

          <div v-if="isDistributionMapAvailable">
            <img :src="`/svgs/${shark.path}.svg`" alt="Shark Image" />

            <div class="separator"></div>

            <span>
              {{ $t(`sharks.${shark.path}.distribution`) }}
            </span>
          </div>

          <div v-else>
            <span>{{ $t("404") }}</span>
          </div>
        </div>
        <div class="s-card-container-content-grid pagination">
          <div
            v-if="previous"
            @click="$router.push(previous)"
            style="margin-right: auto"
          >
            <svg
              data-test-id="leftArrow"
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
              data-test-id="rightArrow"
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

<script setup>
import { useSharkTableStore, useIUCNStatusStore } from "@/store";

const sharksTableStore = useSharkTableStore();
const iucnStore = useIUCNStatusStore();

const shark = ref(null);
const url = ref(null);
const previous = ref(null);
const next = ref(null);
const iucnStatus = iucnStore.iucnStatus;
const route = useRoute();

const { data, status, error, refresh, clear } = await useAsyncData(
  () => `sharkData${route.params.id}`,
  async () => {
    const shark = sharksTableStore.sharksTable.find((shark) => {
      return shark.path === route.params.id;
    });

    const { url } = useCldImageUrl({
      options: {
        src: `sharks-enlightenment/${shark.cloudinary_object_id}`,
        height: "1920",
        width: "1414",
      },
    });

    return {
      shark,
      url,
    };
  }
);

shark.value = data.value.shark;
url.value = data.value.url;

const isDistributionMapAvailable = ref(false);

async function checkDistributionMapExists() {
  const distributionMapUrl = `/svgs/${shark.value.path}.svg`;
  const response = await fetch(distributionMapUrl, { method: "HEAD" });
  isDistributionMapAvailable.value = response.ok;
}

onMounted(() => {
  const paths = sharksTableStore.sharksTable.map((item) => {
    return item.path;
  });

  const targetIndex = paths.indexOf(shark.value.path);

  if (targetIndex !== 0) {
    previous.value = `/home/shark_species/${
      paths[paths.indexOf(shark.value.path) - 1]
    }`;
    next.value = `/home/shark_species/${
      paths[paths.indexOf(shark.value.path) + 1]
    }`;
  }

  if (targetIndex === 0) {
    previous.value = null;
    next.value = `/home/shark_species/${
      paths[paths.indexOf(shark.value.path) + 1]
    }`;
  }

  if (targetIndex === paths.length - 1) {
    previous.value = `/home/shark_species/${
      paths[paths.indexOf(shark.value.path) - 1]
    }`;
    next.value = null;
  }

  checkDistributionMapExists();
});
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

          max-height: 500px;
          height: 100%;

          position: relative;
          overflow: hidden;
          display: flex;
          justify-content: center;

          grid-area: 2 / 1 / 3 / 4;

          @media (max-width: 768px) {
            grid-area: 2 / 1 / 2 / 5;
            height: unset;
          }

          & > img {
            width: 100%;
          }
        }

        &.title {
          text-align: center;
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
              margin-top: 10px 0;
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
          grid-area: 4 / 1 / 5 / 3;
          @media (max-width: 768px) {
            grid-area: 5 /1 / 5 / 5;
          }
        }

        &.iucn {
          grid-area: 3 / 2 / 4 / 3;
          @media (max-width: 768px) {
            grid-area: 4 / 1 / 4 / 5;
          }
        }

        &.rangemap {
          grid-area: 3 / 3 / 6 / 4;

          & > img {
            width: 100%;
          }

          @media (max-width: 768px) {
            grid-area: 6 / 1 / 6 / 5;
          }
        }

        &.pagination {
          grid-area: 6/4/6/1;

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

.iucn-grid {
  padding: 0;

  a {
    display: flex;
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

img {
  max-width: 100%;
  height: auto;
}
</style>
