// filepath: c:\Users\Acer\Documents\GitHub\CelestiFan-landingpage\pages\_app.js

import Head from "next/head";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>CelestiFan</title>
        <link rel="icon" href="/favicon.ico.PNG" type="image/x-icon" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
