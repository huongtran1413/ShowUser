import React from 'react'
import styles from '../../styles/Coder.module.css'

export const getStaticPaths = async () => {
    const res = await fetch ('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    // map data to an array of path object with params (id)
    console.log(1)
    console.log(data);
    const paths = data.map((coder) => {
        return {
            params: {
                id: coder.id.toString()
            },
        }
    })
    return {
        paths,
        fallback: false, // dung de neu khong tim thay id nao trong data thi tra ve not found
    }
}

// get id
export const getStaticProps = async (context) => {

    const id = context.params.id;//khi tren brower nhap path 1, 2 ,3 thi ham getStaticProps nhan gia tri id
    const res = await fetch ('https://jsonplaceholder.typicode.com/users/' + id);// gui request den api + id lay o tren
    const data = await res.json(); // chuyen doi thanh object
    console.log(2)
    console.log(data);
    return {
        props : {
            coder: data
        },
    }
}

export default function DetailCoder( {coder}) { // {lay 1 array tu cai object tren}
    console.log(coder)
    return (
        <div>
            <h1 className="header_title">{coder.name} Detail</h1>
            <table className={styles.table}>
                <tr>
                    <th>Name</th>
                    <td>{coder.name}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>{coder.email}</td>
                </tr>
                <tr>
                    <th>Website</th>
                    <td>{coder.website}</td>
                </tr>
                <tr>
                    <th>Address</th>
                    <td>{coder.address.street}, {coder.address.city}</td>
                </tr>
                <tr>
                    <th>Company</th>
                    <td>{coder.company.name}</td>
                </tr>
            </table>
            
        </div>
    )
}
