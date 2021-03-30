import { writable } from 'svelte/store';

import type { Title, Ratings, TitleStore } from '../types';

import request from '../helpers/request';
import { isValid } from '../helpers/utils';

const title = writable<Title>({
    title: '',
    year: '',
    poster: '',
    plot: '',
    infoList: [],
    details: [],
    ratings: []
});

const titleStore: TitleStore = {
    subscribe: title.subscribe,
    fetchTitle: (id: string): void => {
        request(`i=${id}`).then((data: any) => {
            if (data) setupStore(data);
        });
    }
}

function setupStore(data: any): void {
    title.set({
        title: data.Title,
        year: data.Year,
        poster: data.Poster,
        plot: isValid(data.Plot) ? data.Plot : '',
        infoList: infoList(data),
        details: titleDetails(data),
        ratings: ratings(data)
    });
}

function infoList(data: any): Array<string> {
    return [data.Type, data.Rated, data.Runtime, data.Genre, data.Released].filter(isValid);
}

function titleDetails(data: any): Array<[string, string]> {
    let details: Array<[string, any]> = [
        ['Directors', data.Director],
        ['Writers', data.Writer],
        ['Actors', data.Actors],
        ['Seasons', data.totalSeasons],
        ['Awards', data.Awards],
        ['Country', data.Country],
        ['Language', data.Language],
        ['Production', data.Production],
        ['Website', data.Website],
    ];
    return details.filter((item: [string, any]) => isValid(item[1]));
}

function ratings(data: any): Ratings {
    // extract rotten tomatoes rating
    let rottentomatoesRating: string;
    let rottenTomatoes: { Source: string, Value: string };
    if (data.Ratings) rottenTomatoes = data.Ratings.filter(({ Source }) => Source === 'Rotten Tomatoes')[0];
    if (rottenTomatoes) {
        rottentomatoesRating = rottenTomatoes.Value.replace('%', '');
    } else {
        rottentomatoesRating = 'N/A';
    }


    // calculate average rating
    let averageRating: number | string;
    let floatRatings: Array<number>;
    floatRatings = [data.imdbRating, rottentomatoesRating, data.Metascore].map(parseFloat);
    floatRatings[0] *= 10; // Turn imdb rating to 0-100
    floatRatings = floatRatings.filter(num => !isNaN(num));
    if (floatRatings.length > 1) {
        const ratingsSum: number = floatRatings.reduce((accumulator, currentValue) => accumulator + currentValue);
        averageRating = Math.round(ratingsSum / floatRatings.length);
    } else if (floatRatings.length == 1) {
        averageRating = floatRatings[0];
    } else {
        averageRating = 'N/A';
    }

    const makeIMDBUrl = (id: string): string => `https://imdb.com/title/${id}`;

    function makeMetacriticUrl(title: string, year: string): string {
        let dateRange = `01-01-${year}`;
        return `https://www.metacritic.com/search/all/${title}/results?date_range_from=${dateRange}&search_type=advanced`;
    };

    return [
        {
            source: 'Overall',
            data: {
                rating: averageRating.toString()
            }
        },
        {
            source: 'IMDB',
            data: {
                rating: data.imdbRating,
                votes: isValid(data.imdbVotes) ? data.imdbVotes : '',
                url: makeIMDBUrl(data.imdbID)
            }
        },
        {
            source: 'RottenTomatoes',
            data: {
                rating: rottentomatoesRating
            }
        },
        {
            source: 'Metacritic',
            data: {
                rating: data.Metascore,
                url: makeMetacriticUrl(data.Title, data.Year)
            }
        }
    ]
}

export default titleStore;