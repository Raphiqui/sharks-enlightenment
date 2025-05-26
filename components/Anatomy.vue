<template>
  <div class="interactive-anatomy">
    <h3>Shark anatomy</h3>
    <div class="interactive-wrapper">
      <svg
        class="responsive-svg"
        viewBox="0 0 690 362"
        fill="none"
        height="390"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <foreignObject class="foreign-object" height="271" width="246">
          <img
            :src="greatWhiteSharkImage.url"
            alt="geat white shark interactive anatomy"
          />
        </foreignObject>
        <g class="ca-interactive-images-container-left-item">
          <circle
            class="ca-interactive-images-container-left-item-circle"
            cx="390"
            cy="70"
            fill="white"
            r="7"
          ></circle>
          <circle
            class="ca-interactive-images-container-left-item-blur"
            cx="390"
            cy="70"
            r="13.5"
            stroke="white"
          ></circle>
          <line
            class="ca-interactive-images-container-left-item-line"
            stroke="white"
            x1="250"
            x2="450"
            y1="30"
            y2="30"
          ></line>
          <line
            class="ca-interactive-images-container-left-item-line"
            stroke="white"
            x1="390"
            x2="390"
            y1="57"
            y2="30"
          ></line>
          <text
            class="ca-interactive-images-container-left-item-text"
            fill="white"
            font-family="Noto Sans"
            font-size="14"
            letter-spacing="0px"
            style="white-space: pre"
            xml:space="preserve"
          >
            <tspan x="250" y="25">Dorsal Fin</tspan>
          </text>
        </g>
        <g class="ca-interactive-images-container-left-item">
          <circle
            class="ca-interactive-images-container-left-item-circle"
            cx="340"
            cy="150"
            fill="white"
            r="7"
          ></circle>
          <circle
            class="ca-interactive-images-container-left-item-blur"
            cx="340"
            cy="150"
            r="13.5"
            stroke="white"
          ></circle>
          <line
            class="ca-interactive-images-container-left-item-line"
            stroke="white"
            x1="280"
            x2="140"
            y1="90"
            y2="90"
          ></line>
          <line
            class="ca-interactive-images-container-left-item-line"
            stroke="white"
            x1="340"
            x2="280"
            y1="137"
            y2="90"
          ></line>
          <text
            class="ca-interactive-images-container-left-item-text"
            fill="white"
            font-family="Noto Sans"
            font-size="14"
            letter-spacing="0px"
            style="white-space: pre"
            xml:space="preserve"
          >
            <tspan x="140" y="85">Gill slit</tspan>
          </text>
        </g>
        <g class="ca-interactive-images-container-left-item">
          <circle
            class="ca-interactive-images-container-left-item-circle"
            cx="90"
            cy="200"
            fill="white"
            r="7"
          ></circle>
          <circle
            class="ca-interactive-images-container-left-item-blur"
            cx="90"
            cy="200"
            r="13.5"
            stroke="white"
          ></circle>
          <line
            class="ca-interactive-images-container-left-item-line"
            stroke="white"
            x1="250"
            x2="90"
            y1="100"
            y2="100"
          ></line>
          <line
            class="ca-interactive-images-container-left-item-line"
            stroke="white"
            x1="90"
            x2="90"
            y1="100"
            y2="187"
          ></line>
          <text
            class="ca-interactive-images-container-left-item-text"
            fill="white"
            font-family="Noto Sans"
            font-size="14"
            letter-spacing="0px"
            style="white-space: pre"
            xml:space="preserve"
          >
            <tspan x="90" y="95">Lorenzini bulbs</tspan>
          </text>
        </g>
        <g class="ca-interactive-images-container-left-item">
          <circle
            class="ca-interactive-images-container-left-item-circle"
            cx="620"
            cy="160"
            fill="white"
            r="7"
          ></circle>
          <circle
            class="ca-interactive-images-container-left-item-blur"
            cx="620"
            cy="160"
            r="13.5"
            stroke="white"
          ></circle>
          <line
            class="ca-interactive-images-container-left-item-line"
            stroke="white"
            x1="470"
            x2="620"
            y1="90"
            y2="90"
          ></line>
          <line
            class="ca-interactive-images-container-left-item-line"
            stroke="white"
            x1="620"
            x2="620"
            y1="90"
            y2="147"
          ></line>
          <text
            class="ca-interactive-images-container-left-item-text"
            fill="white"
            font-family="Noto Sans"
            font-size="14"
            letter-spacing="0px"
            style="white-space: pre"
            xml:space="preserve"
          >
            <tspan x="470" y="85">Caudal fin</tspan>
          </text>
        </g>
        <g class="ca-interactive-images-container-left-item">
          <circle
            class="ca-interactive-images-container-left-item-circle"
            cx="260"
            cy="290"
            fill="white"
            r="7"
          ></circle>
          <circle
            class="ca-interactive-images-container-left-item-blur"
            cx="260"
            cy="290"
            r="13.5"
            stroke="white"
          ></circle>
          <line
            class="ca-interactive-images-container-left-item-line"
            stroke="white"
            x1="260"
            x2="100"
            y1="340"
            y2="340"
          ></line>
          <line
            class="ca-interactive-images-container-left-item-line"
            stroke="white"
            x1="260"
            x2="260"
            y1="303"
            y2="340"
          ></line>
          <text
            class="ca-interactive-images-container-left-item-text"
            fill="white"
            font-family="Noto Sans"
            font-size="14"
            letter-spacing="0px"
            style="white-space: pre"
            xml:space="preserve"
          >
            <tspan x="100" y="335">Pectoral fin</tspan>
          </text>
        </g>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { useFactCardsStore } from "~/store";

const facts = useFactCardsStore().factCards;

const greatWhiteSharkImage = useCldImageUrl({
  options: {
    src: `sharks-enlightenment/interactive-anatomy.png`,
  },
});
</script>

<style lang="scss">
.interactive-anatomy {
  background-color: transparent;
  backdrop-filter: blur(12px);
}

.interactive-anatomy {
  text-align: center;
  margin-top: 30px;

  h3 {
    font-size: 2rem;
    margin-bottom: 30px;
  }
}

.interactive-wrapper {
  width: 100%;
  max-width: 1140px;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 4px;

  @media (max-width: 768px) {
    overflow-y: hidden;
    scroll-behavior: smooth;
    scrollbar-width: thin;
    scrollbar-color: rgba(0, 0, 0, 0.3) transparent;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
  }
}

.foreign-object {
  height: 362px;
  width: 100%;
  & > img {
    margin: 0 auto;
  }
}

.ca-interactive-images-container-left-item-blur:hover {
  stroke-opacity: 1;
  stroke-width: 1px;
}

.ca-interactive-images-container-left-item-blur {
  fill: transparent;
  fill-opacity: 0;
  stroke: white;
  stroke-width: 13px;
  stroke-opacity: 0.3;
  cursor: pointer;
  transition: all 0.3s ease;
}

.ca-interactive-images-container-left-item-line {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  transition: stroke-dashoffset 1s ease;
}

.ca-interactive-images-container-left-item:hover
  .ca-interactive-images-container-left-item-line {
  stroke-dashoffset: 0;
}

.ca-interactive-images-container-left-item-text {
  opacity: 0;
  transition: opacity 0.4s ease 0.3s;
}

.ca-interactive-images-container-left-item:hover
  .ca-interactive-images-container-left-item-text {
  opacity: 1;
}
</style>
