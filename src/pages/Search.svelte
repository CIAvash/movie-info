<script lang="ts">
    import { link, querystring } from 'svelte-spa-router';

    import { concatTitleYear } from '../helpers/utils';

    import search from '../stores/search';

    import Loading from '../components/Loading.svelte';
    import Poster from '../components/Poster.svelte';

    export let params: { query: string };

    let year: string;
    $: if ($querystring) year = /year=(\d+)/.exec($querystring)[1];
    
    $: search.fetchResults(params.query, year);
</script>

<style lang="scss">
    .search-result {
        position: relative;
        display: inline-block;
        width: 300px;
        height: 450px;
        margin: 2px;

        &:hover {
            text-decoration: none;
        }
    }

    $search-title-height: 30px;
    .search-result-title {
        background: #133547;
        color: white;
        height: $search-title-height;
        padding: 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    $label-padding: 0px 3px 1px;
    .search-result-type, .search-result-year {
        display: inline-block;
        color: white;
        position: absolute;
        bottom: $search-title-height;
        padding: $label-padding;
    }

    .search-result-type {
        background: #007bc9;
        left: 0;
        text-transform: capitalize;
    }

    .search-result-year {
        background: #ab0079;
        right: 0;
    }
</style>

<svelte:head>
    <title>{`Search ${params.query}`}</title>
</svelte:head>

<template>
    <Loading>
        {#if $search.length !== 0}
            <div class="search-results">
                {#each $search as result}
	                <a class="search-result"
                       title="{concatTitleYear(result.Title, result.Year)}"
                       href="{`/title/${result.imdbID}`}"
                       use:link>
                        <Poster url="{result.Poster}" />

                        <div class="search-result-title">{result.Title}</div>
                        <span class="search-result-type">{result.Type}</span>
                        <span class="search-result-year">{result.Year}</span>
                    </a>
                {/each}
            </div>
        {/if}
    </Loading>
</template>