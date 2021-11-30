import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
        <title>Coder | Home</title>
        <meta name="keyword" content="coders"></meta>    
    </Head>
        <div>
            <h1 className={styles.title}>HomePage</h1>
            <p className={styles.text}>LoremLoremLoremLoremLoremLoremLoremLorem</p>
            <p className={styles.text}>LoremLoremLoremLoremLoremLoremLoremLorem</p>
            <Link href="/coders">
                <a className="btn">See All Coders</a>
            </Link>
            <style jsx>
                {
                    `
                        .btn {
                            display:block;
                            width:150px;
                            padding:8px 0;
                            margin:20px auto;
                            background:#ffbf49;
                            border-radius:4px;
                            color:black;
                            text-align:center;
                        }
                    `
                }
            </style>
        </div>
    </>
  )
}
