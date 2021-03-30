import type { Writable } from 'svelte/store';

export type Title = {
    title: string,
    year: string,
    poster: string,
    plot: string,
    infoList: Array<string>,
    details: Array<[string, string]>,
    ratings: Ratings,
}

export type Ratings = Array<{
    source: string,
    data: {
        rating: string,
        votes?: string,
        url?: string
    }
}>;

export interface TitleStore {
    subscribe: Writable<Title>['subscribe'],
    fetchTitle: (id: string) => void
}

export type Search = Array<{
    Title: string,
    Year: string,
    Type: string,
    Poster: string,
    imdbID: string
}>

export interface SearchStore {
    subscribe: Writable<Search>['subscribe'],
    fetchResults: (query: string, year: string) => void
}