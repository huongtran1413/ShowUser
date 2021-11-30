import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Coder.module.css'


// function getStaticProps : gui request den api va tra ve data
export const getStaticProps = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
   
    return {
        defaultProps: {
            coders : data
        },
       
    };
}

export default function AllCoders(coders) {
    console.log(coders);
    return (
        <>
        <Head>
            <title>Coder | All Coders</title>
            <meta name="keyword" content="coders"></meta>    
        </Head>
        <div>
            <h1>All Coders</h1>
            {coders.map((coder) => (
                <Link href = {'/coders/' + coder.id} key = {coder.id}>
                    <a className={styles.single}>
                        <h3>{coder.name}</h3>
                    </a>
                </Link>
            ))}
        </div>
        </>
    )
}
