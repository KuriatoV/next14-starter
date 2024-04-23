'use client';
import { useState } from 'react';
import styles from './links.module.css';
import NavLink from './navLink/navLink';
import Image from 'next/image';

const links = [
    { title: 'Homepage', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
    { title: 'Blog', path: '/blog' },
];
//TEmporary
const session = false;
const isAdmin = true;

const Links = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map((link) => (
                    <NavLink key={link.path} link={link} />
                ))}
                {session ? (
                    <>
                        {isAdmin && (
                            <NavLink
                                key="admin"
                                link={{ title: 'Admin', path: '/admin' }}
                            />
                        )}
                        <button className={styles.logout}>Logout</button>
                    </>
                ) : (
                    <NavLink
                        key="login"
                        link={{ title: 'Login', path: '/login' }}
                    />
                )}
            </div>

            <Image
                className={styles.menuButton}
                src="/menu.png"
                alt="menu"
                width={30}
                height={30}
                onClick={() => setOpen((prev) => !prev)}
            />
            {open && (
                <div className={styles.mobileLinks}>
                    {links.map((link) => (
                        <NavLink key={link.path} link={link} />
                    ))}
                </div>
            )}
        </div>
    );
};
export default Links;
