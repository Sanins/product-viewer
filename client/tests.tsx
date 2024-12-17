import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';
import Layout from './components/Layout';

export const testRender = (children, { route = '/' } = {}) => {
    return render(
        <ThemeProvider theme={theme}>
            <Layout>
                {children}
            </Layout>
        </ThemeProvider>
    );
};