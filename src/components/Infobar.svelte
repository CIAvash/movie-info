<script lang="ts">
    export let list: Array<string>;
</script>

<style lang="scss">
    .infobar {
        margin-bottom: 20px;

        span {
            padding: 0 5px;
            border-left: 1px solid #ddd;

            &:first-of-type {
                text-transform: capitalize;
                border-left: none;
            }
        }
    }
</style>

<template>
    <div class="infobar textmuted">
        {#each list as info}
            <span>{info}</span>
        {/each}
    </div>
</template>