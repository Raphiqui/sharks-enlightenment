<template>
    <div class="bubble" :class="[bubbleClass, { 'reset': isResetting }]" :style="bubbleStyle"
        @animationiteration="handleAnimationIteration"></div>
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
    data() {
        return {
            isResetting: false
        };
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
            this.isResetting = true;
            this.$emit('resetPosition');
            setTimeout(() => {
                this.isResetting = false;
            }, 50);
        }
    }
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