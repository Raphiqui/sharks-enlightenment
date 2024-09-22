<template>
  <MainLayer />
</template>

<script setup>
import MainLayer from "@/components/MainLayer.vue";
definePageMeta({
  transition: {
    name: "home",
    mode: "out-in",
  },
});
</script>
