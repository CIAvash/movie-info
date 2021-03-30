import { writable } from 'svelte/store';

import type { Search, SearchStore } from '../types';

import request from '../helpers/request';

const results = writable<Search>([]);

const searchStore: SearchStore = {
    subscribe: results.subscribe,
    fetchResults: (query: string, year: string): void => {
        const url: string = `s=${query}` + (year ? `&y=${year}` : '');

        request(url).then((data: any) => {
            if (data) results.set(data.Search);
        });
    }
}

export default searchStore;