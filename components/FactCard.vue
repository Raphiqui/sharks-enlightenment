<template>
  <div class="fact-card">
    <div class="fact-card-inner">
      <h4>{{ fact.title }}</h4>
      <p>{{ fact.content }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  fact: {
    type: Object,
    required: true,
  },
});

const { fact } = props;
</script>

<style lang="scss">
.fact-card {
  border-radius: 10px;
  transition: transform 0.3s ease, background-color 0.3s ease;
  height: 200px;
  background-image: url(https://res.cloudinary.com/dncxe2je1/image/upload/c_limit,w_1414/f_auto/q_auto/v1/sharks-enlightenment/main_page1.png?_a=BBDAADAD0);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;

  &-inner {
    position: absolute;
    bottom: 0;
    padding: 10px;
    box-sizing: border-box;
    transition: all 1s linear;
    background-color: teal;
    width: 100%;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  &:hover {
    .fact-card-inner {
      p {
        max-height: 50px;
        opacity: 1;
      }
      background-color: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(12px);
    }
  }

  h4 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    margin: 0;
  }

  p {
    opacity: 0;
    max-height: 0;
    transition: all 1s ease-in-out;
    margin: 0;
  }
}
</style>
