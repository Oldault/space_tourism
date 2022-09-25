import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Spaceravel</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="../assets/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.home_text}>
          <div className={styles.main_text}>
            <div className={styles.uppercase_text}>
              <h5>So, you want to travel to</h5>
              <h1>Space</h1>
            </div>
            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className={styles.explore_button}>
            <Link href="/destination">
              <button className={styles.button}>
                <h5>Explore</h5>
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
