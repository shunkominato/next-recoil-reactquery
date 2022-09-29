import '../styles/globals.css';
// import { Provider } from 'react-redux';
import { RecoilRoot } from 'recoil';
import type { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';
import apiClient from '@/util/apiClient';
import { useCsrfToken } from '../hooks/useCsrfToken';
// import { store } from '../app/store';
// import 'tailwindcss/tailwindcss'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  useCsrfToken();
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          fontFamily: 'Noto Sans JP',
          // breakpoints: {
          //   xs: 500,
          //   sm: 800,
          // },
          colors: {
            'FA-blue': [
              '#F0BBDD',
              '#ED9BCF',
              '#EC7CC3',
              '#ED5DB8',
              '#3c74c9',
              '#2860b5',
              '#144CA1',
              '#3c74c9',
              '#C50E82',
              '#AD1374',
            ],
          },
          primaryColor: 'FA-blue',
        }}
      >
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </MantineProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
