<template>
    <div class="error-view">
        <h1>Error!</h1>
        <router-link to="/">Go back!</router-link>
    </div>
</template>
<style>

    h1 {
        margin: 0;
    }
    .error-view {
        padding: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

</style>