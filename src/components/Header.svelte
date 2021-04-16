<script lang="ts">
    import SearchForm from './SearchForm.svelte';
    import Logo from './Logo.svelte';
</script>
<style lang="scss">
    .page-header {
        margin-top: 0;
    }
</style>
<template>
    <header class="page-header">
        <Logo/>
        <SearchForm/>
    </header>
</template>