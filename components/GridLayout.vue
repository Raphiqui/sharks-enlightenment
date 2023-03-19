<template>
  <div>
    <div class="gl-container">
      <div class="gl-title">
        Little summary of causes of deaths made by the
        <a
          href="https://www.floridamuseum.ufl.edu/shark-attacks/odds/compare-risk/death/"
          >university of Florida</a
        >
      </div>
      <div class="gl-column-container">
        <div class="gl-column">
          <div class="gl-text -header">
            disease and accidental causes of deaths
          </div>
          <div class="gl-text">Heart disease</div>
          <div class="gl-text">Cancer</div>
          <div class="gl-text">Flu</div>
          <div class="gl-text">Car accidents</div>
          <div class="gl-text">Drowning</div>
          <div class="gl-text">Air/space accident</div>
          <div class="gl-text">Lightning</div>
          <div class="gl-text">Shark related fatalities</div>
        </div>

        <div class="gl-column">
          <div class="gl-text -header">annual deaths</div>
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
          <div class="gl-text -header">death risk during one's lifetime</div>
          <div class="gl-text">1 in 5</div>
          <div class="gl-text">1 in 7</div>
          <div class="gl-text">1 in 63</div>
          <div class="gl-text">1 in 84</div>
          <div class="gl-text">1 in 1,134</div>
          <div class="gl-text">1 in 5,051</div>
          <div class="gl-text">1 in 79,746</div>
          <div class="gl-text">1 in 4,332,817</div>
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
