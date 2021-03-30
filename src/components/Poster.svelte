<script lang="ts">
    import { isValid } from '../helpers/utils';
    
    export let url: string;
</script>

<style lang="scss">
    $poster-height: 420px;
    .poster {
        display: inline-block;
        width: 300px;
        height: $poster-height;
        vertical-align: top;
    }

    .empty-poster {
        background: #1e2b2c;
        display: inline-flex;
        justify-content: center;
        align-items: center;

        &::after {
            content: 'Poster N/A';
            font-size: 35px;
            color: #fafafa;
        }
    }

</style>

<template>
    {#if isValid(url)}
        <img class="poster" alt="Poster" src="{url}"/>
    {:else}
        <span class="poster empty-poster"></span>
    {/if}
</template>