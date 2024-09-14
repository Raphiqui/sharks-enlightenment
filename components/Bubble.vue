<template>
    <div class="bubble" :class="bubbleClass" :style="bubbleStyle" @animationiteration="handleAnimationIteration"></div>
</template>

<script>
export default {
    name: "Bubble",
    props: {
        size: {
            type: Number,
            required: true
        },
        left: {
            type: Number,
            required: true
        },
        duration: {
            type: Number,
            required: true
        }
    },
    computed: {
        bubbleClass() {
            return this.size < 15 ? 'small' : this.size < 25 ? 'medium' : 'large';
        },
        bubbleStyle() {
            return {
                width: `${this.size}px`,
                height: `${this.size}px`,
                left: `${this.left}%`,
                animationDuration: `${this.duration}s`
            };
        }
    },
    methods: {
        handleAnimationIteration() {
            this.$emit('resetPosition');
        }
    }
};
</script>

<style scoped>
.bubble {
    position: absolute;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    animation: rise linear infinite;
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