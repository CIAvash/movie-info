<script lang="ts">
    export let details: Array<Array<any>>;
</script>

<template>
    <div>
        {#each details as detail}
            <p>
                <strong>{detail[0] + ': '}</strong>
                {#if detail[0] === 'Website'}
                    <a href="{detail[1]}">{detail[1]}</a>
                {:else}
                    {detail[1]}
                {/if}
            </p>
        {/each}
    </div>
</template>