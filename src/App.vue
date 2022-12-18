<template>
  <img class="background" src="@/assets/background.jpeg"/>
  <router-view/>
</template>
<style>
  body {
    color: white;
    margin: 0;
    padding: 0;
  }
  .background {
    object-fit: cover;
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
  }
</style>