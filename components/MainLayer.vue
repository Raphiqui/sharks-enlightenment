<template>
  <div>
    <FullImage :image-path="require('@/assets/images/shark1.jpg')" />
    <ImageAndText
      :image-path="require('@/assets/images/shark3.jpg')"
      :height="500"
    />
    <ImageAndText :image-path="require('@/assets/images/shark4.jpg')" />
  </div>
</template>

<script>
import CircleRating from "./CircleRating.vue";
export default {
  name: "MainLayer",
  components: { CircleRating },
};
</script>
