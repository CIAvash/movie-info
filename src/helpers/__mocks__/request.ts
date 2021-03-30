export default jest.fn((url): Promise<{}> => {
    switch (url) {
        case 's=batman': return Promise.resolve({
            Search: [{
                Title: 'Batman Begins',
                Year: '2005',
                Type: 'movie',
                Poster: '',
                imdbID: 'tt12345'
            }]
        })
        case 's=joker': return Promise.resolve({
            Search: [{
                Title: 'Joker',
                Year: '2019',
                Type: 'movie',
                Poster: 'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
                imdbID: 'tt7286456'
            }]
        })
        case 'i=tt7286456': return Promise.resolve({
            "Title": "Joker",
            "Year": "2019",
            "Rated": "R",
            "Released": "04 Oct 2019",
            "Runtime": "122 min",
            "Genre": "Crime, Drama, Thriller",
            "Director": "Todd Phillips",
            "Writer": "Todd Phillips, Scott Silver, Bob Kane (based on characters created by), Bill Finger (based on characters created by), Jerry Robinson (based on characters created by)",
            "Actors": "Joaquin Phoenix, Robert De Niro, Zazie Beetz, Frances Conroy",
            "Plot": "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
            "Language": "English",
            "Country": "USA, Canada",
            "Awards": "Won 2 Oscars. Another 110 wins & 228 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "8.4/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "68%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "59/100"
                }
            ],
            "Metascore": "59",
            "imdbRating": "8.4",
            "imdbVotes": "951,938",
            "imdbID": "tt7286456",
            "Type": "movie",
            "DVD": "03 Oct 2019",
            "BoxOffice": "$335,451,311",
            "Production": "Bron Studios, Creative Wealth Media Finance, DC Comics",
            "Website": "N/A",
            "Response": "True"
        })
        default: return Promise.resolve({})
    }
});