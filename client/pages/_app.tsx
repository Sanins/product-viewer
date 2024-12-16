import type { AppProps } from 'next/app'
import "../styles/globals.css";
import Layout from '../components/Layout';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
