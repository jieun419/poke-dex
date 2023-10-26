import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider, useSelector } from 'react-redux';
import App from './App.tsx';
import GlobalStyle from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { light, dark } from './styles/theme.ts';
import { QueryClient, QueryClientProvider } from 'react-query';
import store, { RootState } from './store/index.ts';

const queryClient = new QueryClient();

function MyApp() {
  const ThemeMode = useSelector((state: RootState) => state.themeType.themeMode);
  return (
    <ThemeProvider theme={ThemeMode === 'dark' ? dark : light}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <MyApp />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
);
