<template>
  <div>
    <div class="gl-container">
      <div class="gl-title">
        {{ $t(`home.study_table.title`) }}
        <a
          href="https://www.floridamuseum.ufl.edu/shark-attacks/odds/compare-risk/death/"
          >{{ $t(`home.study_table.title_link`) }}</a
        >
      </div>
      <div class="gl-column-container">
        <div class="gl-column">
          <div class="gl-text -header">
            {{ $t(`home.study_table.tab1.title`) }}
          </div>
          <div class="gl-text">{{ $t(`home.study_table.tab1.line1`) }}</div>
          <div class="gl-text">{{ $t(`home.study_table.tab1.line2`) }}</div>
          <div class="gl-text">{{ $t(`home.study_table.tab1.line3`) }}</div>
          <div class="gl-text">{{ $t(`home.study_table.tab1.line4`) }}</div>
          <div class="gl-text">{{ $t(`home.study_table.tab1.line5`) }}</div>
          <div class="gl-text">{{ $t(`home.study_table.tab1.line6`) }}</div>
          <div class="gl-text">{{ $t(`home.study_table.tab1.line7`) }}</div>
          <div class="gl-text">{{ $t(`home.study_table.tab1.line8`) }}</div>
        </div>

        <div class="gl-column">
          <div class="gl-text -header">
            {{ $t(`home.study_table.tab2.title`) }}
          </div>
          <div class="gl-text">652,486</div>
          <div class="gl-text">553,888</div>
          <div class="gl-text">59,664</div>
          <div class="gl-text">44,757</div>
          <div class="gl-text">3,306</div>
          <div class="gl-text">742</div>
          <div class="gl-text">47</div>
          <div class="gl-text">1</div>
        </div>

        <div class="gl-column">
          <div class="gl-text -header">
            {{ $t(`home.study_table.tab3.title`) }}
          </div>
          <div class="gl-text">
            1 {{ $t(`home.study_table.preposition_in`) }} 5
          </div>
          <div class="gl-text">
            1 {{ $t(`home.study_table.preposition_in`) }} 7
          </div>
          <div class="gl-text">
            1 {{ $t(`home.study_table.preposition_in`) }} 63
          </div>
          <div class="gl-text">
            1 {{ $t(`home.study_table.preposition_in`) }} 84
          </div>
          <div class="gl-text">
            1 {{ $t(`home.study_table.preposition_in`) }} 1,134
          </div>
          <div class="gl-text">
            1 {{ $t(`home.study_table.preposition_in`) }} 5,051
          </div>
          <div class="gl-text">
            1 {{ $t(`home.study_table.preposition_in`) }} 79,746
          </div>
          <div class="gl-text">
            1 {{ $t(`home.study_table.preposition_in`) }} 4,332,817
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.gl {
  &-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }

  &-title {
    color: white;
    text-align: center;
    font-size: 18px;

    a {
      text-decoration: underline;
    }
  }

  &-column {
    display: inline-block;
    padding: 20px;
  }

  &-text {
    border-bottom: 1px solid white;
    color: white;

    &:nth-of-type(odd) {
      background-color: lightslategray;
    }

    &.-header {
      text-transform: uppercase;
      font-weight: bold;
      background-color: #002e66;
    }

    &:last-child {
      font-weight: bold;
    }
  }
}
</style>
