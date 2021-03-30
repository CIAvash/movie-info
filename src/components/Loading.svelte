<script lang="ts">
    import app from '../stores/app';
</script>

<template>
    {#if $app.error}
        <p>{$app.error}</p>
    {:else if $app.loading}
        <p>Loading...</p>
    {:else}
        <slot/>
    {/if}
</template>