import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Spaceravel</title>
        <link rel="shortcut icon" href="/public/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
