import type { AppProps } from 'next/app'
import "../styles/globals.css";
import Layout from '../components/Layout';
import { ThemeProvider } from 'styled-components';

export const theme = {
  colors: {
    primary: '#0070f3',
    secondary: '#1db954',
    background: '#f0f0f0',
    text: '#333',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
  },
  fonts: {
    body: 'Arial, sans-serif',
    heading: 'Georgia, serif',
  },
};

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
