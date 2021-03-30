import request from '../../helpers/request';
import app from '../../stores/app';

enum FetchType {
    Empty, Full, Error, FetchError
}

function fakeFetch(kind: FetchType) {
    return (): Promise<any> => {
        switch (kind) {
            case FetchType.Empty:
                return Promise.resolve({ json: () => Promise.resolve({}) })
            case FetchType.Full:
                return Promise.resolve({
                    json: () => Promise.resolve({
                        Response: 'True', someData: 'some data'
                    })
                });
            case FetchType.Error:
                return Promise.resolve({
                    json: () => Promise.resolve({
                        Response: 'False', Error: 'An error occurred'
                    })
                });
            case FetchType.FetchError:
                return Promise.reject('Could not fetch data')
        }
    }
};

it("calls fetch with the right argument", (): void => {
    window.fetch = jest.fn().mockImplementation(fakeFetch(FetchType.Empty));

    request('query=value');

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
        expect.stringMatching(/^https:\/\/www.omdbapi.com\/\?apikey=\w+?&v=\d&query=value$/i)
    );
})

it("gets the right data from fetch", (): Promise<void> => {
    window.fetch = jest.fn().mockImplementation(fakeFetch(FetchType.Full));

    expect.assertions(1);
    return request('query=value').then(
        data => expect(data).toEqual({ Response: 'True', someData: 'some data' })
    );
})

it("sets error in app store when fetch returns data containing error", (): Promise<void> => {
    window.fetch = jest.fn().mockImplementation(fakeFetch(FetchType.Error));

    let appData;
    app.subscribe(data => appData = data);

    expect.assertions(1);
    return request('query=value').then(() =>
            expect(appData).toEqual({
            error: 'An error occurred',
            loading: false
        }));
})

it("sets error in app store when fetch fails", (): Promise<void> => {
    window.fetch = jest.fn().mockImplementation(fakeFetch(FetchType.FetchError));

    let appData;
    app.subscribe(data => appData = data);

    expect.assertions(1);
    return request('query=value').then(() =>
        expect(appData).toEqual({
            error: 'Error fetching data: Could not fetch data',
            loading: false
        }));
})