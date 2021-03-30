<script lang="ts">
    import { location } from 'svelte-spa-router';

    import SearchForm from './SearchForm.svelte';
    import Logo from './Logo.svelte';
</script>
<style lang="scss">
    .page-header {
        margin-top: 0;
    }
</style>
<template>
    {#if $location !== '/'}
        <header class="page-header">
            <Logo/>
            <SearchForm/>
        </header>
    {/if}
</template>