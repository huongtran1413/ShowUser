import React from 'react'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
import Footer from './Footer'

export default function Navbar() {
    return (
        <nav>
            <div className={styles.header}>
                <Link href="/">
                    <a className={styles.title}>Coder Wikipedia</a>
                </Link>
            </div>
            <div className={styles.hexagon_menu}>
                <div className={styles.hexagon_item}>
                    <div className={styles.hex_item}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className={styles.hex_item}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <Link href="/todolist">
                        <a className={styles.hex_content}>
                            <span className={styles.hex_content_inner}>
                                <span className={styles.icon}>
                                    <i className="fa fa_universal_access"></i>
                                </span>
                                <span className={styles.title}>TodoList</span>
                            </span>
                            <svg viewBox="0 0 173.20508075688772 200" height="200" width="120" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1d7874"></path></svg>
                        </a>
                    </Link>
                </div>
                <div className={styles.hexagon_item}>
                    <div className={styles.hex_item}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className={styles.hex_item}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <Link href="/coders">
                        <a  className={styles.hex_content}>
                            <span className={styles.hex_content_inner}>
                                <span className={styles.icon}>
                                {/* <FontAwesomeIcon icon={['fab', 'google']} /> */}
                                    {/* <i className="fa fa_clipboard"></i> */}
                                </span>
                                <span className={styles.title}>AllCoders</span>
                            </span>
                            <svg viewBox="0 0 173.20508075688772 200" height="200" width="120" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1d7874"></path></svg>
                        </a>
                    </Link>

                </div>
                <div className={styles.hexagon_item}>
                    <div className={styles.hex_item}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className={styles.hex_item}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <Link href="/">
                        <a className={styles.hex_content}>
                            <span className={styles.hex_content_inner}>
                                <span className={styles.icon}>
                                    {/* <i className="fa fa-map-signs"></i> */}
                                </span>
                                <span className={styles.title}>Term</span>
                            </span>
                            <svg viewBox="0 0 173.20508075688772 200" height="200" width="120" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1d7874"></path></svg>
                        </a>
                    </Link>

                </div>
                <div className={styles.hexagon_item}>
                    <div className={styles.hex_item}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className={styles.hex_item}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <Link href="/about">
                        <a className={styles.hex_content}>
                            <span className={styles.hex_content_inner}>
                                <span className={styles.icon}>
                                    {/* <i className="fa fa-map-signs"></i> */}
                                </span>
                                <span className={styles.title}>About</span>
                            </span>
                            <svg viewBox="0 0 173.20508075688772 200" height="200" width="120" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1d7874"></path></svg>
                        </a>
                    </Link>

                </div>
            </div>
            <Footer></Footer>
        </nav>
    )
}
