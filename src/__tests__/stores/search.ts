import search from '../../stores/search';
import request from '../../helpers/request';

jest.mock('../../helpers/request');

it('calls request with the right arguments', (): void => {
    search.fetchResults('query', '1234');

    expect(request).toHaveBeenCalledTimes(1);
    expect(request).toHaveBeenCalledWith('s=query&y=1234');
});

it('sets the right search results in store', (): void => {
    search.fetchResults('batman', '');

    expect.assertions(1);
    search.subscribe(data => {
        if (data && data.length !== 0) {
            expect(data).toEqual([{
                Title: 'Batman Begins',
                Year: '2005',
                Type: 'movie',
                Poster: '',
                imdbID: 'tt12345'
            }]);
        }
    });
});