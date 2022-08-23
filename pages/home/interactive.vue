<template>
  <div class="questionBox" id="app">
    <div style="width: 100%" class="question-box-inside">
      <div class="question-container-header">
        <h1 class="title is-6">Quiz</h1>
      </div>

      <div class="questionContainer" v-if="questionIndex < questions.length">
        <div class="title-container title">
          <transition name="fade">
            <h2 v-if="showQuestion">
              {{ questions[questionIndex].text }}
            </h2>
          </transition>
        </div>

        <div class="optionContainer">
          <transition name="fade">
            <div v-if="show" style="width: 100%">
              <div
                class="option"
                v-for="(response, index) in questions[questionIndex].responses"
                @click="selectOption(index)"
                :key="index"
              >
                {{ index | charIndex }}. {{ response.text }}
              </div>
            </div>
            <div
              v-if="showCorrectAnswer"
              style="
                width: 100%;
                text-align: center;
                display: flex;
                align-items: center;
                flex-direction: column;
              "
            >
              <div class="correct-answer-container">
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
        class="quizCompleted has-text-centered"
      >
        <a class="button" @click="restart()"
          >restart <i class="fa fa-refresh"></i
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "interactive",
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
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,400i,700");
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700");

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
  font-family: Montserrat, sans-serif;
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

  @media (max-width: 768px) {
    border-radius: unset;
    margin: 100px 0;
  }
}

.questionBox {
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
  .optionContainer {
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
  .quizCompleted {
    width: 100%;
    padding: 1rem;
    text-align: center;

    > .icon {
      color: #ff5252;
      font-size: 5rem;

      .is-active {
        color: #00e676;
      }
    }
  }
  .questionContainer {
    white-space: normal;
    width: 100%;

    height: 250px;

    @media (max-width: 768px) {
      height: auto;
      min-height: 600px;
    }

    .optionContainer {
      width: 65%;
      padding: 1.5rem;
      flex-grow: 1;
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
  .questionBox {
    align-items: center;
    justify-content: center;

    .questionContainer {
      display: flex;
    }
  }
}

@media screen and (max-width: 768px) {
  .sidebar {
    height: auto !important;
    border-radius: 6px 6px 0px 0px;
  }
}
</style>
