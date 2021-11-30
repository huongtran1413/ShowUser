import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Coder.module.css'


// function getStaticProps : gui request den api va tra ve data
export const getStaticProps = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(1)
    console.log(data)
    return {
        props: {
            coders : data
        },
       
    };
    console.log(2)
    console.log(coders)
}

export default function AllCoders(props) {
    console.log(4)
    console.log(props);
    const {coders} = props
    console.log(3)
    console.log(coders);
    return (
        <>
        <Head>
            <title>Coder | All Coders</title>
            <meta name="keyword" content="coders"></meta>    
        </Head>
        <div>
            <h1>All Coders</h1>
            {Array.isArray(coders) && coders.map((coder) => (
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
