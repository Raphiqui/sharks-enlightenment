<template>
  <div class="about">
    <div class="about-content">
      <span
        >Work of a passionate about oceanography and everything related to
        it.</span
      >

      <span>Working as software engineer.</span>

      <span
        >Enthusiast since I was born about everything bounded to ocean and
        especially about sharks I dedicated free time to study and learn about
        them as much as possible alongside other passions I have.</span
      >

      <span
        >Sharks have always been fascinating creatures to me. As I'm also a
        swimmer since a long time I always wondered myself during my swimming
        sessions into the sea, what'd I do if I'd encountered a shark (doesn't
        really matter which type but let's assume it'd be a hunter one like
        Tiger shark or Great white shark) showing up right in front of me.</span
      >

      <span
        >Well, of course, right now, writing those lines I'd say that I'd stay
        calm and quiet trying not to waist any seconds with this creature. But
        coming back to reality I'm not sure about what reaction I'll have. Maybe
        I'll panic, maybe not. One thing is certain, these are not the killers
        that the cinema shows us.</span
      >

      <span
        >If one day I can work alongside them, I'd have accomplished the biggest
        dream of my life.</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "about",
  transition: {
    name: "home",
    mode: "out-in",
  },
};
</script>

<style scoped lang="scss">
.about {
  background-color: rgba(58, 56, 56, 0.5);
  backdrop-filter: blur(12px);

  font-size: 18px;

  border-radius: 12px;

  margin: 100px auto;
  max-width: 1100px;
  padding: 32px;

  &-content {
    color: white;

    display: flex;
    flex-direction: column;
    height: 100%;

    margin: -20px 0;

    span {
      display: block;
      padding: 20px 0;
    }
  }
}
</style>
