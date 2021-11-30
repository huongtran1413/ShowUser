import React from 'react'

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
            <h1>Detail</h1>
             <h1>{coder.name} Detail</h1>
           <p>Email: {coder.email}</p>
            <p>Website: {coder.website}</p>
            <p>Address: {coder.address.street}, {coder.address.city}</p>
            <p>Company: {coder.company.name}</p>
        </div>
    )
}
