import * as React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import { App } from './app';
import { enableMocking } from './testing/mocks';



const root = document.getElementById('root');
if (!root) throw new Error('No root element found');

async function render() {
  if (process.env.NODE_ENV === 'development') {
    const { worker } = require('./mocks')
    await worker.start()
  }

  createRoot(root!).render(<App/>)
}

render()

enableMocking().then(() => {
  createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
});
