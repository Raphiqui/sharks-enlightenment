<template>
    <div class="bubble" :class="[bubbleClass, { 'reset': isResetting }]" :style="bubbleStyle"
        @animationiteration="handleAnimationIteration"></div>
</template>

<script setup>
import { ref } from 'vue';

const isResetting = ref(false);

const emit = defineEmits(['resetPosition']);

const props = defineProps({
    size: Number,
    left: Number,
    duration: Number
});

const bubbleClass = computed(() => {
    return props.size < 15 ? 'small' : props.size < 25 ? 'medium' : 'large';
});

const bubbleStyle = computed(() => {
    return {
        width: `${props.size}px`,
        height: `${props.size}px`,
        left: `${props.left}%`,
        animationDuration: `${props.duration}s`
    };
});

const handleAnimationIteration = () => {
    isResetting.value = true;
    emit('resetPosition');
    setTimeout(() => {
        isResetting.value = false;
    }, 50);
};
</script>

<style scoped>
.bubble {
    position: absolute;
    bottom: -40px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    animation: rise linear infinite;
}

.bubble.reset {
    animation: none;
    bottom: -40px;
}

.bubble.small {
    background-color: rgba(255, 255, 255, 0.3);
}

.bubble.medium {
    background-color: rgba(255, 255, 255, 0.5);
}

.bubble.large {
    background-color: rgba(255, 255, 255, 0.7);
}

@keyframes rise {
    to {
        transform: translateY(-100vh);
    }
}
</style>