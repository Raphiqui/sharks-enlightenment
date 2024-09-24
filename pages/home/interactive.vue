<template>
  <div class="question-box">
    <div class="question-box-inside">
      <div class="question-container-header">
        <h1 class="title">{{ $t("header.2") }}</h1>
      </div>

      <div class="question-container" v-if="questionIndex < questions.length">
        <div class="title-container title">
          <!-- <transition name="fade"> -->
          <h2 v-if="showQuestion">
            {{ $t(`quiz.${questions[questionIndex].id}.text`) }}&nbsp;?
          </h2>
          <!-- </transition> -->
        </div>

        <div class="option-container">
          <!-- <transition name="fade"> -->
          <div v-if="show" class="option-container-content">
            <div
              class="option"
              v-for="(response, index) in questions[questionIndex].responses"
              @click="selectOption(index)"
              :key="index"
            >
              {{ index | charIndex }}.
              {{
                $t(
                  `quiz.${questions[questionIndex].id}.responses.${response.id}`
                )
              }}
            </div>
          </div>
          <div v-if="showCorrectAnswer" class="correct-answer">
            <div class="correct-answer-container">
              <div class="correct-response-label-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="green"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  style="margin: 0 auto 20px auto; width: 30px; height: 30px"
                  v-if="isCorrect"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="red"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  style="margin: 0 auto 20px auto; width: 30px; height: 30px"
                  v-else
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="15" y1="9" x2="9" y2="15"></line>
                  <line x1="9" y1="9" x2="15" y2="15"></line></svg
                >{{ $t("correct") }}&nbsp;:
                {{
                  $t(
                    `quiz.${questions[questionIndex].id}.responses.${correctResponse}`
                  )
                }}
              </div>
              {{ $t(`quiz.${questions[questionIndex].id}.answer`) }}
            </div>
            <div class="next-button button" @click="next()">
              {{ $t("next") }}
            </div>
          </div>
          <!-- </transition> -->
        </div>
      </div>

      <div
        v-if="questionIndex >= questions.length"
        v-bind:key="questionIndex"
        class="quiz-completed"
      >
        <div class="quiz-completed-score-container">
          <CircleRating
            :score="(score / questions.length) * 100"
          ></CircleRating>
          <div class="quiz-completed-score-text">
            {{ $t(`quiz.${scoreMessage}`) }}
          </div>
        </div>

        <div class="button" @click="restart()">{{ $t("restart") }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useQuestionsStore } from "../../store";

useSeoMeta({
  title: "Interactive Quiz",
});

const store = useQuestionsStore();

const questions = ref([]);
const userResponseSkeleton = ref(null);
const userResponses = ref(null);
const questionIndex = ref(0);
const show = ref(true);
const showQuestion = ref(true);
const showCorrectAnswer = ref(false);
const score = ref(0);
const isCorrect = ref(false);

onMounted(() => {
  questions.value = [...store.questions].sort(() => Math.random() - 0.5);
  userResponseSkeleton.value = Array(questions.value.length).fill(null);
  userResponses.value = userResponseSkeleton.value;
});

const restart = () => {
  questionIndex.value = 0;
  score.value = 0;
  userResponses.value = userResponseSkeleton.value;
};

const selectOption = (index) => {
  show.value = false;

  if ("correct" in questions.value[questionIndex.value].responses[index])
    score.value++;

  setTimeout(() => {
    userResponses.value[questionIndex.value] = index;
    showCorrectAnswer.value = true;
  }, 1000);
};

const next = () => {
  showCorrectAnswer.value = false;
  showQuestion.value = false;
  isCorrect.value = false;

  setTimeout(() => {
    if (questionIndex.value < questions.value.length) questionIndex.value++;
  }, 1000);

  setTimeout(() => {
    show.value = true;
    showQuestion.value = true;
  }, 1000);
};

const correctResponse = computed(() => {
  return questions.value[questionIndex.value].responses.filter(
    (resp) => resp.correct === true
  )[0].id;
});

const scoreMessage = computed(() => {
  const percentageScore = (score.value / questions.value.length) * 100;

  if (percentageScore > 75) return "contextual1";
  if (percentageScore > 50) return "contextual2";
  return "contextual3";
});

const charIndex = (i) => {
  return String.fromCharCode(97 + i);
};

watch(
  () => score.value,
  (newValue, oldValue) => {
    isCorrect.value = newValue > oldValue;
  }
);
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
      box-sizing: border-box;
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

    flex-direction: column;

    display: flex;
    justify-content: center;
    align-items: center;

    &-score {
      &-container {
        width: 100%;
      }

      &-text {
        margin-bottom: 20px;
      }
    }

    & > .button {
      min-width: 100px;
    }
  }

  .question-container {
    white-space: normal;
    width: 100%;

    min-height: 350px;
    height: auto;

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
