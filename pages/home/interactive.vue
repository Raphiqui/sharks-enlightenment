<template>
  <div class="question-box">
    <div class="question-box-inside">
      <div class="question-container-header">
        <h1 class="title is-6">Quiz</h1>
      </div>

      <div class="question-container" v-if="questionIndex < questions.length">
        <div class="title-container title">
          <transition name="fade">
            <h2 v-if="showQuestion">
              {{ questions[questionIndex].text }}
            </h2>
          </transition>
        </div>

        <div class="option-container">
          <transition name="fade">
            <div v-if="show" class="option-container-content">
              <div
                class="option"
                v-for="(response, index) in questions[questionIndex].responses"
                @click="selectOption(index)"
                :key="index"
              >
                {{ index | charIndex }}. {{ response.text }}
              </div>
            </div>
            <div v-if="showCorrectAnswer" class="correct-answer">
              <div class="correct-answer-container">
                <div class="correct-response-label-container">
                  Correct response&nbsp;: {{ correctResponse }}
                </div>

                {{ questions[questionIndex].answer }}
              </div>
              <div class="next-button button" @click="next()">Next</div>
            </div>
          </transition>
        </div>
      </div>

      <div
        v-if="questionIndex >= questions.length"
        v-bind:key="questionIndex"
        class="quiz-completed"
      >
        <div class="button" @click="restart()">restart</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "interactive",
  transition: {
    name: "home",
    mode: "out-in",
  },
  data() {
    return {
      questions: [],
      userResponseSkeleton: null,
      userResponses: null,
      questionIndex: 0,
      isActive: false,
      show: true,
      showQuestion: true,
      showCorrectAnswer: false,
    };
  },
  mounted() {
    this.questions = [...this.$store.state.questions].sort(
      () => Math.random() - 0.5
    );
    (this.userResponseSkeleton = Array(this.questions.length).fill(null)),
      (this.userResponses = this.userResponseSkeleton);
  },
  filters: {
    charIndex: function (i) {
      return String.fromCharCode(97 + i);
    },
  },
  methods: {
    restart: function () {
      this.questionIndex = 0;
      this.userResponses = Array(this.questions.length).fill(null);
    },
    selectOption: function (index) {
      this.show = false;

      setTimeout(() => {
        this.$set(this.userResponses, this.questionIndex, index);
        this.showCorrectAnswer = true;
      }, 1000);
    },
    next: function () {
      this.showCorrectAnswer = false;
      this.showQuestion = false;

      setTimeout(() => {
        if (this.questionIndex < this.questions.length) this.questionIndex++;
      }, 1000);

      setTimeout(() => {
        this.show = true;
        this.showQuestion = true;
      }, 1000);
    },

    prev: function () {
      if (this.questions.length > 0) this.questionIndex--;
    },
  },
  computed: {
    correctResponse() {
      return this.questions[this.questionIndex].responses.filter(
        (resp) => resp.correct === true
      )[0].text;
    },
  },
};
</script>

<style lang="scss" scoped>
.correct-answer {
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.correct-response-label-container {
  margin-bottom: 20px;
  font-size: 20px;
  font-style: italic;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.title {
  font-size: 20px;
}

.title,
.subtitle {
  font-weight: normal;
}
.animated {
  transition-duration: 0.3/2;
}

.container {
  margin: 0 0.5rem;
}

.next-button {
  margin-top: 20px;
}

.question-box-inside {
  background-color: rgba(58, 56, 56, 0.5);
  backdrop-filter: blur(12px);
  border-radius: 12px;

  color: white;
  max-width: 1100px;
  width: 100%;

  @media (max-width: 768px) {
    border-radius: unset;
    margin: 100px 0;
  }
}

.question-box {
  margin: 0 auto;
  min-height: 100vh;
  max-width: 1100px;
  width: 100%;

  font-size: 18px;

  position: relative;
  display: flex;

  border-radius: 0.5rem;
  overflow: hidden;

  .question-container-header {
    padding: 1.5rem;
    text-align: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    h1 {
      font-weight: bold;
    }
  }
  .title-container {
    text-align: center;
    margin: 0 auto;
    padding: 1.5rem;
    width: 35%;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  }

  .title-container,
  .option-container {
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      width: 100% !important;
    }
  }

  .quizForm {
    display: block;
    white-space: normal;

    height: 100%;
    width: 100%;

    .quizFormContainer {
      height: 100%;
      margin: 15px 18px;

      .field-label {
        text-align: left;
        margin-bottom: 0.5rem;
      }
    }
  }
  .quiz-completed {
    width: 100%;
    padding: 1rem;
    text-align: center;

    display: flex;
    justify-content: center;

    & > .button {
      width: 100px;
    }
  }
  .question-container {
    white-space: normal;
    width: 100%;

    height: 350px;

    @media (max-width: 768px) {
      height: auto;
      min-height: 600px;
    }

    .option-container {
      width: 65%;
      padding: 1.5rem;
      flex-grow: 1;

      &-content {
        width: 100%;
      }

      .option {
        border-radius: 290486px;
        padding: 9px 18px;
        margin: 0 18px;
        margin-bottom: 12px;
        transition: 0.3;
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.05);
        border: transparent 1px solid;
        transition: all 0.3s ease-in-out;

        @media (max-width: 768px) {
          text-align: center;
        }

        &.is-selected {
          border-color: rgba(black, 0.25);
          background-color: white;
        }
        &:hover {
          background-color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }
}

@media screen and (min-width: 769px) {
  .question-box {
    align-items: center;
    justify-content: center;

    .question-container {
      display: flex;
    }
  }
}

@media (max-width: 768px) {
  .sidebar {
    height: auto !important;
    border-radius: 6px 6px 0px 0px;
  }
}
</style>
