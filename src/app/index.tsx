import { AppProvider } from './provider';
import { AppRouter } from './router';

export const App = () => {
  if (process.env.NODE_ENV === 'development' || window.location.hostname === 'fanticel.github.io') {
    const { startWorker } = require('./mocks/browser');
    startWorker().catch(console.error);
  }
  
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
};
