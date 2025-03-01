import { createRoot } from 'react-dom/client';
import App from './App';
import GlobalStyle from 'components/styles/GlobalStyle';
import { Provider } from 'react-redux';
import { store } from './store';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
);
