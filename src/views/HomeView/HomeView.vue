<template>
  <div class="home">
    <p class="home__username">{{ username }}</p>
    <div class="home__title">
      <h1 class="title__item">The</h1>
      <h2 class="title__item">Quiz Game</h2>
      <h3>Points: {{ quiz[0].points + pointsCount }} Fails: {{ quiz[0].fails + failsCount }} Time: {{ quiz[0].time + timeCount}}</h3>
    </div>
    <QuestionCard class="home__question-card" :title="quiz[0]['questions:'][0].question" />
  </div>
</template>
<script lang="ts" src="./HomeView.ts"></script>
<style lang="scss" scoped src="./HomeView.scss"></style>
