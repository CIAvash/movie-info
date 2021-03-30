<script lang="ts">
    import { link } from 'svelte-spa-router';
</script>

<style lang="scss">
    .logo {
        display: inline-block;
        color: #006e80;
        font-size: 30px;
        font-weight: bold;
        border-bottom: 4px double;
        vertical-align: super;
    }
</style>

<template>
    <a href="/" use:link>
        <h1 class="logo">MovieInfo</h1>
    </a>
</template>