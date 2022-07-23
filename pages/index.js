import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Search from '../components/Search'
import styles from '../styles/Home.module.css'

export default function Home(props) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Dream Project</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Search props={{}} />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Here's to What We offer !!
        </h1>
        <div className={styles.grid}>
          <Link href="/talent/startup">
            <a className={styles.card}>
              <h2>Investments and Startups &rarr;</h2>
              <p>Pitch Your Idea Shart tank style or Read others'</p>
            </a>
          </Link>
          <Link href="/talent/music">
            <a className={styles.card}>
              <h2>Music - Inspirations &rarr;</h2>
              <p>Play with your skills and get the Peer group you require</p>
            </a>
          </Link>
          <Link href="">
            <a className={styles.card}>
              <h2>Dance &rarr;</h2>
              <p>Support Local or International dancers to get to know the people in the industry</p>
            </a>
          </Link>

        </div>
      </main>


    </div>
  )
}


