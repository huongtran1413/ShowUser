import React from 'react'

import Navbar from './navbar'

export default function Layout({children}) {
    return (
        <div className="content">
            <div className="row">
                <div className="col-3">
                    <Navbar></Navbar>
                </div>
                <div className="col-9">
                    <div className="container">
                        {children}
                    </div>
                </div>
            </div>
           
        </div>
    )
}
