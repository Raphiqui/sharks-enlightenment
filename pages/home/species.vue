<template>
  <div class="species">
    <div class="species-container">
      <ul>
        <li v-for="shark in sharksTable" :key="shark.name" @click="$router.push(`/home/shark_species/${shark.path}`)">
          <nuxt-img preload :src="generateSrc(shark.cloudinary_object_id)" format="webp" />
          <div class="species-content-container">
            <span class="species-title">
              {{ $t(`sharks.${shark.path}.name`) }}
            </span>
            <span class="species-see-more">{{ $t("see_more") }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>

import { useSharkTableStore } from '../../store';

definePageMeta({
  transition: {
    name: "home",
    mode: "out-in",
  },
});

const sharksTable = useSharkTableStore().sharksTable;

const generateSrc = (id) => {
  const { url } = useCldImageUrl({
    options: {
      src: `sharks-enlightenment/${id}`,
    },
  });

  return url;
};

</script>

<style scoped lang="scss">
li {
  &:hover {
    img {
      -webkit-transform: scale(1.3);
      transform: scale(1.3);
    }
  }
}

img {
  height: auto;
  transition: 0.25s all ease-in-out;
  width: 100%;
}

.species {
  width: 100%;
  position: relative;
  padding: 0 20px;

  &-content {
    &-container {
      display: flex;
      flex-direction: column;
      position: absolute;
      bottom: 0;
      height: 56px;

      backdrop-filter: blur(4px);
      width: 100%;
      align-items: center;
    }
  }

  &-title {
    font-size: 20px;
  }

  &-see-more {
    font-size: 14px;
    width: fit-content;

    &::after {
      content: "";
      width: 0px;
      height: 1px;
      display: block;
      background: white;
      transition: 300ms;
    }

    &:hover::after {
      width: 100%;
    }
  }

  &-container {
    margin: 100px auto;
    max-width: 1100px;

    &>ul {
      --auto-grid-min-size: 16rem;
      display: grid;
      grid-gap: 60px;
      grid-template-columns: repeat(auto-fill,
          minmax(var(--auto-grid-min-size), 1fr));
      margin: 0;
      padding: 0;
      box-sizing: border-box;

      &>li {
        overflow: hidden;
        justify-content: center;
        display: flex;
        align-items: center;
        position: relative;

        color: #ffffff;
        font-size: 24px;
        list-style-type: none;
        // padding: 10px 16px;
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

        &:hover {
          background-size: 150%;

          @media (max-width: 768px) {
            background-size: cover;
          }
        }

        @media (max-width: 768px) {
          background-size: cover;
          font-size: 18px;
        }
      }
    }
  }
}
</style>
