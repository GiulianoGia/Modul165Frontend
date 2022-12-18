<template>
    <div class="question-card" v-if="questions[currentQuestionNumber]">
        <p class="question-card__title">{{ questions[currentQuestionNumber].question }}</p>
        <div class="question-card__possible-answers">
            <button class="possible-answers__item" :id="selection" @click="checkSelection(selection)" v-for="selection in questions[currentQuestionNumber].selection" :key="selection">{{selection}}</button>
        </div>
    </div>
    <div class="question-card" v-else>
        <h1>Your Points {{pointsCount}}</h1>
        <button @click="setQuiz">Save Results</button>
    </div>
</template>
<script lang="ts" src="./QuestionCard.ts"></script>
<style lang="scss" scoped src="./QuestionCard.scss"></style>
