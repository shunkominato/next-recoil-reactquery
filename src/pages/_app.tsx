import '../styles/globals.css';
// import { Provider } from 'react-redux';
import {
  RecoilRoot,
} from 'recoil';
import type { AppProps } from 'next/app';
// import { store } from '../app/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
