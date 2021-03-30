import '@testing-library/jest-dom';
import { waitFor, render } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';

import App from '../App.svelte';

import app from '../stores/app';

jest.mock('../helpers/request');

it('should render home', async (): Promise<void> => {
    const { getByRole } = render(App);

    await waitFor(() => {
        expect(document.title).toMatch(/MovieInfo/);
        expect(getByRole('heading').textContent).toEqual('MovieInfo')
    });
});

it('search form should work, clicking on search result should render the title', async (): Promise<void> => {
    const { container, getAllByRole, findByRole } = render(App);

    const input = await findByRole('searchbox');
    userEvent.type(input, 'joker');

    const searchButton = await findByRole('button');
    userEvent.click(searchButton);

    await waitFor((): void => {
        expect(document.title).toMatch(/search joker/i);

        const searchResult = getAllByRole('link')[1];

        expect(searchResult).toHaveTextContent('Joker');
        expect((searchResult as HTMLLinkElement).href).toMatch(/title\/tt7286456$/);

        userEvent.click(searchResult);
    });

    await waitFor((): void => {
        expect(document.title).toMatch(/Joker \(2019\)/i);
        expect(getAllByRole('heading')[1].textContent).toMatch(/Joker \(2019\)/i);
        expect(container).toHaveTextContent('movie');
        expect(container).toHaveTextContent('R');
        expect(container).toHaveTextContent('122 min');
        expect(container).toHaveTextContent('Crime, Drama, Thriller');
        expect(container).toHaveTextContent('Todd Phillips');
        expect(container).toHaveTextContent('Joaquin Phoenix');
        expect(container).toHaveTextContent('English');
        expect(container).toHaveTextContent('USA, Canada');
        expect(container).toHaveTextContent('Won 2 Oscars');
        expect(container).toHaveTextContent('Arthur Fleck');
        expect(container).toHaveTextContent('Overall');
        expect(container).toHaveTextContent('70');
        expect(container).toHaveTextContent('IMDB');
        expect(container).toHaveTextContent('8.4');
        expect(container).toHaveTextContent('Rotten Tomatoes');
        expect(container).toHaveTextContent('68');
        expect(container).toHaveTextContent('Metacritic');
        expect(container).toHaveTextContent('59');
        expect(container).toHaveTextContent('DC Comics');
    });
});

it('should show page not found page when the route doesn\'t exist', async (): Promise<void> => {
    const { container } = render(App);

    document.location.href = '/#/nonexistent';

    await waitFor((): void => {
        expect(document.title).toMatch(/page not found/i);
        expect(container).toHaveTextContent(/page not found/i);
    })
});

it('should show loading when data is being fetched', async (): Promise<void> => {
    const { container } = render(App);

    document.location.href = '/#/search/batman';

    app.setLoading(true);

    await waitFor((): void => expect(container).toHaveTextContent(/loading\.\.\./i));
});

it('should show error message when something went wrong', async (): Promise<void> => {
    const { container } = render(App);

    document.location.href = '/#/search/batman';

    app.setError('Some Error Occurred.');

    await waitFor((): void => expect(container).toHaveTextContent(/some error occurred\./i))
});