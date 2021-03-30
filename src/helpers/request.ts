import app from '../stores/app';

const request = (url: string): Promise<any> => {
    const baseUrl: string = "https://www.omdbapi.com/?apikey=cbe2fa9&v=1&";

    app.setLoading(true);
    return fetch(`${baseUrl}${url}`).then((response: Response): Promise<any> => {
        app.setLoading(false);
        app.setError('');

        return response.json();
    }).then(data => {
        if (data.Response === 'True') {
            return Promise.resolve(data);
        } else if (data.Error) {
            app.setError(data.Error);
        }
    }).catch((error) => {
        app.setLoading(false);

        app.setError('Error fetching data: ' + error);
    });
}

export default request;