<template>
  <div class="lang-dropdown">
    <ul>
      <li v-for="lang in $i18n.locales" :key="lang.code">
        <span
          :class="{
            active: lang.code === $i18n.locale,
          }"
          @click="$i18n.setLocale(lang.code)"
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
    align-items: center;
    text-transform: capitalize;
    height: 100%;

    @media (max-width: 768px) {
      margin-left: unset;
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
