<script lang="ts">
    import { push } from 'svelte-spa-router';

    let query: string;
    let year: string;
    
    function submitSearch () : void {
        if (query) push('/search/' + query + '/' + (year ? `?year=${year}` : ''));
        query = year = '';
    }
</script>
<style lang="scss">
    .search-form {
        * {
            margin: 2px 3px;
            vertical-align: bottom;
        }

        display: inline-block;

        @media screen and (min-width: 650px) {
            margin-left: 50px;
        }
    }

    .search-form-query {
        width: 250px;
    }

    .search-form-year {
        width: 50px;
    }

</style>
<template>
    <form class="search-form" on:submit|preventDefault="{submitSearch}" role="search">
        <input class="search-form-query" type="search" placeholder="Title" bind:value="{query}" required />
        <input class="search-form-year" type="text" placeholder="Year" bind:value="{year}" />
        <button class="search-form-button btn btn-info" type="submit">Search</button>
    </form>
</template>