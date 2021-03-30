<script lang="ts">
    import title from '../stores/title';

    import { concatTitleYear } from '../helpers/utils';

    import Loading from '../components/Loading.svelte';
    import Poster from '../components/Poster.svelte';
    import Infobar from '../components/Infobar.svelte';
    import Ratings from '../components/Ratings.svelte';
    import TitleDetails from '../components/TitleDetails.svelte';

    export let params: { id: string };

    let pageTitle: string;
    $: if ($title.title && $title.year) pageTitle = concatTitleYear($title.title, $title.year);

    $: title.fetchTitle(params.id);
</script>

<style lang="scss">
    .title-poster {
        display: inline-block;
        width: 290px;
        margin-right: 10px;
        margin-bottom: 15px;

        @media screen and (min-width: 650px) {
            margin-right: 20px;
        }

        @media screen and (min-width: 768px) {
            margin-right: 15px;
        }

        @media screen and (min-width: 1200px) {
            margin-right: 40px;
        }
    }
</style>

<svelte:head>
    <title>{pageTitle}</title>
</svelte:head>

<template>
    <Loading>
        {#if $title.title}
            <article class="title">
                <header>
                    <h1>{pageTitle}</h1>
                    <Infobar list="{$title.infoList}" />
                </header>
                <div class="row">
                    <div class="col-sm-12 col-md-8 col-lg-7">
                        <div class="title-poster">
                            <Poster url="{$title.poster}" />
                        </div>
                        <Ratings ratings="{$title.ratings}" />
                    </div>
                    <div class="col-sm-12 col-md-4 col-lg-5">
                        <p>{$title.plot}</p>
                        <TitleDetails details="{$title.details}" />
                    </div>
                </div>
            </article>
        {/if}
    </Loading>
</template>