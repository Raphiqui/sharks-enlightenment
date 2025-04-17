<template>
  <div class="lang-dropdown">
    <ul>
      <li v-for="lang in locales" :key="lang.code">
        <span
          :class="{
            active: lang.code === locale,
          }"
          @click="setLocale(lang.code)"
          >{{ lang.code }}</span
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "LanguageInput",

  computed: {
    activeLanguageStyle() {
      return "active";
    },
  },
};
</script>

<script setup>
import { computed } from "vue";

const { locales, locale, setLocale } = useI18n();

const activeLanguageStyle = computed(() => "active");
</script>

<style scoped lang="scss">
.lang-dropdown {
  height: 100%;

  @media (max-width: 768px) {
    padding: 10px 0;
  }

  ul {
    min-width: 100px;
    margin-left: 20px;
    display: flex;
    justify-content: center;
    text-transform: capitalize;
    height: 100%;

    @media (max-width: 768px) {
      margin-left: unset;
      padding: 0;
    }

    li {
      display: flex;

      span {
        cursor: pointer;

        &.active {
          color: darkblue;
          font-weight: 700;

          &::after {
            background: darkblue;
          }

          @media (max-width: 768px) {
            color: darkblue;
            font-weight: 700;

            &::after {
              background: darkblue;
            }
          }
        }

        @media (max-width: 768px) {
          padding: 0 10px;
          display: block;
        }

        &::after {
          content: "";
          width: 0;
          height: 1px;
          display: block;
          background: white;
          transition: 300ms;
        }

        &:hover::after {
          width: 100%;

          @media (max-width: 768px) {
            width: 0;
          }
        }
      }

      &:not(:last-child) {
        &:after {
          content: "|";
          padding: 0 8px;
        }
      }
    }
  }
}
</style>
