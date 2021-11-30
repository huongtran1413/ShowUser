import React from 'react'
import { useEffect } from 'react' // component load, goi function trong useEffect
import { useRouter } from 'next/router' // dieu huong user ve 1 trang nao do

  
export default function NotFound() {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [])

    return ( <div className="not-found">
            <h1>Oooops...</h1>
            <h2>That page cannot be found </h2>
            <p>Going back to the 
            <a> HomePage </a>
                is 3 seconds ...
            </p>
        </div>
    )
}
