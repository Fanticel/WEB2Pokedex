import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

export const worker = setupWorker(...handlers);

// Modified worker start with GitHub Pages path
export function startMockServiceWorker() {
    return worker.start({
        serviceWorker: {
            url: '/WEB2Pokedex/mockServiceWorker.js',  // Full path to your worker
            options: {
                scope: '/WEB2Pokedex/'  // Must match your deployment path
            }
        },
        // Optional: Quiet MSW warnings in production
        quiet: process.env.NODE_ENV === 'production'
    });
}