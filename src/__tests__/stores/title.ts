import title from '../../stores/title';
import request from '../../helpers/request';

jest.mock('../../helpers/request');

it('calls request with the right arguments', (): void => {
    title.fetchTitle('tt46846');

    expect(request).toHaveBeenCalledTimes(1);
    expect(request).toHaveBeenCalledWith('i=tt46846');
});

it('sets the right title in store', (): void => {
    title.fetchTitle('tt7286456');

    expect.assertions(1);
    title.subscribe((data): void => {
        if (data && data.title) {
            expect(data).toEqual({
                title: 'Joker',
                year: '2019',
                poster: 'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
                plot: 'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.',
                infoList: ['movie', 'R', '122 min', 'Crime, Drama, Thriller', '04 Oct 2019'],
                details: [
                    ['Directors', 'Todd Phillips'],
                    ['Writers', 'Todd Phillips, Scott Silver, Bob Kane (based on characters created by), Bill Finger (based on characters created by), Jerry Robinson (based on characters created by)'],
                    ['Actors', 'Joaquin Phoenix, Robert De Niro, Zazie Beetz, Frances Conroy'],
                    ['Awards', 'Won 2 Oscars. Another 110 wins & 228 nominations.'],
                    ['Country', 'USA, Canada'],
                    ['Language', 'English'],
                    ['Production', 'Bron Studios, Creative Wealth Media Finance, DC Comics'],
                ],
                ratings: [
                    {
                        source: 'Overall',
                        data: {
                            rating: '70'
                        }
                    },
                    {
                        source: 'IMDB',
                        data: {
                            rating: '8.4',
                            votes: '951,938',
                            url: 'https://imdb.com/title/tt7286456'
                        }
                    },
                    {
                        source: 'RottenTomatoes',
                        data: {
                            rating: '68'
                        }
                    },
                    {
                        source: 'Metacritic',
                        data: {
                            rating: '59',
                            url: 'https://www.metacritic.com/search/all/Joker/results?date_range_from=01-01-2019&search_type=advanced'
                        }
                    },
                ]
            });
        }
    });
});