<script lang="ts">
    import Router, { location } from 'svelte-spa-router';

    import Home from './pages/Home.svelte';
    import Search from './pages/Search.svelte';
    import Title from './pages/Title.svelte';
    import NotFound from './pages/NotFound.svelte';

    import Header from './components/Header.svelte';

    const routes = {
        '/': Home,
        '/search/:query': Search,
        '/title/:id': Title,
        '*': NotFound
    }
</script>

<style global lang="scss">
    body {
        font-family: Roboto, 'Open Sans', sans-serif;
        background-color: #fafafa;
    }

    input {
        padding: 5px 8px;
        border: 1px solid #DDD;
        border-radius: 3px;

        &:focus {
            border-color: #31bbd2;
        }
    }
</style>

<template>
    <div class="{'container ' + ($location === '/' ? 'home' : '')}">
        <Header/>
        <main>
            <Router {routes} />
        </main>
    </div>
</template>