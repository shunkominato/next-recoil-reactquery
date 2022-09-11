import '../styles/globals.css';
// import { Provider } from 'react-redux';
import { RecoilRoot } from 'recoil';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';
import apiClient from '@/util/apiClient';
import { useCsrfToken } from './useCsrfToken';
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
  useCsrfToken()
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default MyApp;
