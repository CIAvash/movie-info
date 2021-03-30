<script lang="ts">
    import type { Ratings } from '../types';

    export let ratings: Ratings;
</script>

<style lang="scss">
    .all-ratings {
        display: inline-block;
        background: #f5f5f5;
        font-size: 125%;
        color: #006e80;
        padding: 20px;
        vertical-align: top;
        margin-bottom: 10px;

        @media screen and (max-width: 650px) {
            width: 290px;
            padding: 11px;
        }

        .rating {
            padding: 10px 5px;
        }

        .rating-description {
            font-size: 70%;
            color: #6395ad;
        }

        $average-rating-circle-width: 65px;
        $rating-circle-width: $average-rating-circle-width - 15;
        .rating-Overall {
            font-size: 160%;

            .rating-circle {
                font-size: 90%;
                color: indianred;
                border: 3px solid;
                width: $average-rating-circle-width;
                height: $average-rating-circle-width;
            }
        }

        .rating-source {
            display: inline-block;
            width: 160px;

            @media screen and (min-width: 350px) {
                width: 180px;
            }
        }

        .rating-number {
            display: inline-block;
            width: 70px;
            vertical-align: middle;
        }

        .rating-circle {
            font-weight: bold;
            color: white;
            width: $rating_circle_width;
            height: $rating_circle_width;
            border-radius: 100px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            margin: 0 auto;
        }

        .rating-IMDB {
            .rating-circle {
                background: #E7C02C;
            }
        }

        .rating-RottenTomatoes {
            .rating-circle {
                background: #EC1E24;
            }
        }

        .rating-Metacritic {
            .rating-circle {
                background: #66CC33;
            }
        }
    }
</style>

<template>
    <div class="all-ratings">
        <div class="ratings">
            {#each ratings as { source, data } }
                <div class="rating rating-{source}">
                    <div>
                        <span class="rating-source">
                            {#if data.url}
                                <a href="{data.url}">{source}</a>
                            {:else}
                                {#if source === 'RottenTomatoes'}
                                    Rotten Tomatoes
                                {:else}
                                    {source}
                                {/if}
                            {/if}
                        </span>
                        <span class="rating-number">
                            <span class="rating-circle">{data.rating}</span>
                        </span>
                    </div>
                    {#if data.votes}
                        <div class="rating-description">
                            {`from ${data.votes} votes`}
                        </div>
                    {/if}
                </div>
            {/each}
        </div>
    </div>
</template>