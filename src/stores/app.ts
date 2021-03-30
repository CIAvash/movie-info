import { writable } from 'svelte/store';

interface AppStore {
    subscribe: any,
    setLoading: (value: boolean) => void
    setError: (error: string) => void
}

interface App {
    loading: boolean,
    error: string
}

const app = writable<App>({
    'loading': false,
    'error': ''
});

const appStore: AppStore = {
    'subscribe': app.subscribe,
    'setLoading': (value: boolean): void => {
        app.update((store) => {
            store.loading = value;
            return store;
        });
    },
    'setError': (error: string): void => {
        app.update((store) => {
            store.error = error;
            return store;
        });
    }
}

export default appStore;