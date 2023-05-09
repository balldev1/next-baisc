import styles from "@/styles/Home.module.css"
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"
export default function Home() {
  return (
    <>
      <Head>
          <title>หน้าแรก | KongRuksiam</title>
          <meta name="keywords" content="Home Eel"/>
      </Head>
      <div className={styles.container}>
          <h1 className={styles.title}>Welcome elephant it</h1>
          <Image src="/shopping.svg" width={400} height={400} alt="logo"/>
          <p>IT Product Center</p>
          <Link href="/products" className={styles.btn}>View All</Link>
      </div>
    </>
  )
}