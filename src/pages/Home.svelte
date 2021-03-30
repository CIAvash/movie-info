<script>
    import SearchForm from '../components/SearchForm.svelte';
    import Logo from '../components/Logo.svelte';
</script>

<style lang="scss">
    .home {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;

        @media screen and (min-height: 650px) {
            margin-top: -270px;
        }
    }

    .home-footer {
        width: 100%;
        text-align: center;
        padding: 5px 0;
        margin-top: 10px;

        @media screen and (min-height: 370px) {
            margin-top: 70px;
        }
    }

    .home-main {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

</style>

<svelte:head>
    <title>MovieInfo - Information and ratings for Movies, TV Series and games</title>
</svelte:head>

<template>    
    <div class="home">
        <div class="home-main">
            <Logo/>
            <SearchForm/>
        </div>
        <div class="home-footer small">
            <a href="https://github.com/CIAvash/movie-info">MovieInfo</a>
            is a Libre Software created by <a href="https://ciavash.name">Siavash Askari Nasr</a>.
            It uses <a href="https://omdbapi.com/">OMDB API</a> for obtaining data.
        </div>
    </div>
</template>