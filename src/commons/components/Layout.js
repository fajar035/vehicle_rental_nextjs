import React, { Fragment } from "react";
import Head from "next/head";

function Layout({ children, title }) {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta
          name='description'
          content='Vehicle Rental Next JS App'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <link rel='icon' href='/logo.png' />
      </Head>
      {children}
    </Fragment>
  );
}

export default Layout;
