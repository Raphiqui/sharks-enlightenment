<template>
  <div>
    <header
      class="bg-red-500 h-16"
      style="
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 700;
        font-size: 22px;
      "
    >
      <ul>
        <li><nuxt-link to="'home/spiecies'" no-prefetch>Spieces</nuxt-link></li>
        <li><nuxt-link to="/" no-prefetch>Areas</nuxt-link></li>
        <li><nuxt-link to="/" no-prefetch>Info VS Intox</nuxt-link></li>
        <li><nuxt-link :to="'/home/about'" no-prefetch>About</nuxt-link></li>
      </ul>
    </header>
    <nuxt />
  </div>
</template>

<script>
export default {
  name: "red",
};
</script>
<style scoped>
ul {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1000px;
}

li {
  font-weight: 400;
  padding-bottom: 5px;
  background: url("data:image/svg+xml,%3Csvg version='1.1' id='Layer_1_1_' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 19.3 6' style='enable-background:new 0 0 19.3 6;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%230080ff;%7D%0A%3C/style%3E%3Cpath class='st0' d='M-5.5,3.8C-4.2,4.8-2.8,6,0,6s4.2-1.2,5.5-2.2C6.6,2.8,7.6,2,9.7,2s3,0.8,4.2,1.8c1.3,1,2.7,2.2,5.5,2.2 s4.2-1.2,5.5-2.2l-1.4-0.9c-1.1,1-2.1,1.8-4.2,1.8s-3-0.8-4.2-1.8c-1.2-1-2.7-2.2-5.4-2.2c-2.8,0-4.2,1.2-5.5,2.2 C3,3.9,2.1,4.7,0,4.7s-3-0.8-4.2-1.8L-5.5,3.8z'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-position-x: 0%;
  background-position-y: 0%;
  background-size: auto auto;
  background-repeat: repeat-x;
  background-size: 25px 7px;
  background-position: 2px 19px;
  animation: move 8s linear infinite;
  -webkit-animation: move 8s linear infinite;
  animation-play-state: paused;
  text-decoration: none;
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
  cursor: pointer;
}

li:hover {
  animation-play-state: running;
}

@-webkit-keyframes move {
  from {
    background-position: 10px 30px;
  }
  to {
    background-position: 500px 30px;
  }
}

@keyframe move {
  from {
    background-position: 10px 30px;
  }
  to {
    background-position: 500px 30px;
  }
}
</style>
