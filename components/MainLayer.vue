<template>
  <div class="main">
    <div class="header">
      <div class="header-wave-animation-container">
        <h1 class="header-wave-animation-container-upfront">
          {{ $t("main.title") }}
        </h1>
        <h1 class="header-wave-animation-container-wave">
          {{ $t("main.title") }}
        </h1>
      </div>
      <p>{{ $t("main.subtitles") }}</p>
    </div>

    <div class="main-content">
      <section class="hero-section">
        <div class="hero-text">
          <h2>{{ $t("main.hero.title") }}</h2>
          <p>
            {{ $t("main.hero.subtitles") }}
          </p>
        </div>
      </section>

      <Anatomy />

      <section class="facts-section">
        <h3>{{ $t("main.facts.title") }}</h3>
        <div class="facts-grid">
          <FactCard
            v-for="(fact, index) in facts"
            :key="fact.title"
            :fact="fact"
            :index="index"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { useFactCardsStore } from "~/store";

const facts = useFactCardsStore().factCards;
</script>

<style lang="scss">
body {
  font-family: "Arial", sans-serif;
  margin: 0;
  padding: 0;
  color: #ecf0f1;
}

main {
  max-width: 1140px;
  margin: 0 auto;
}

.header {
  text-align: center;
  padding: 50px 20px;
  color: #f1c40f;

  &-wave-animation-container {
    position: relative;

    &-wave {
      color: darkblue;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      animation: waves 4s ease-in-out infinite;
    }
  }

  @keyframes waves {
    0%,
    100% {
      clip-path: polygon(
        0% 45%,
        16% 44%,
        33% 50%,
        54% 60%,
        70% 61%,
        84% 59%,
        100% 52%,
        100% 100%,
        0% 100%
      );
    }

    50% {
      clip-path: polygon(
        0% 60%,
        15% 65%,
        34% 66%,
        51% 62%,
        67% 50%,
        84% 45%,
        100% 46%,
        100% 100%,
        0% 100%
      );
    }
  }

  h1 {
    font-size: 3rem;
    margin: 0;
  }

  p {
    font-size: 1.2rem;
    margin-top: 10px;
  }
}

.main-content {
  padding: 20px;
}

.hero {
  &-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 50px;
  }

  &-text {
    max-width: 700px;

    h2 {
      font-size: 2.5rem;
      margin-bottom: 20px;
    }

    p {
      font-size: 1.2rem;
    }
  }
}

.facts-section {
  text-align: center;
  margin-top: 30px;

  h3 {
    font-size: 2rem;
    margin-bottom: 30px;
  }
}

.facts {
  &-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }
}
</style>
