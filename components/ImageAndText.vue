<template>
  <div class="image-and-text-container">
    
    <div 
      class="bar"
      :style="{backgroundImage: `url(${imagePath})`, height: `${height}px`}"
    >
      <div class="foo">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'ImageAndText',
  computed: {},
    props: {
    imagePath: {
      type: String,
      require: true,
    },
    height: {
      type: Number,
      default: 300,
    },
    imageAlignLeft: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style scoped>
.image-and-text-container {
  display: flex;
}

.bar {
  width: 100%;
  position: relative;
}

.foo {
  position: absolute;
  bottom: 0;
  background-color: rgba(58, 56, 56, 0.5);
  min-height: 100px;
  text-align: center;
  vertical-align: ce;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding: 20px;
  font-size: 16px;
  color: white;
}

.bar {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

@media (max-width: 768px) {
    .image-and-text-container {
      width: 100%;
      flex-direction: column;
    }

    .foo {
      font-size: 16px;
    }
}

</style>>
