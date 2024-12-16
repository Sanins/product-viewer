import React, { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
        <Header />
        <main>{children}</main>
        <Footer />
    </div>
  );
};

export default Layout;
