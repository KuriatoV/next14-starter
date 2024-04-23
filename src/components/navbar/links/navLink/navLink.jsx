'use client'

import Link from 'next/link'
import styles from './navLink.module.css'
import { usePathname } from 'next/navigation'


const NavLink= ({link})=>{
    const pathname =usePathname()

    
    return <Link className={`${styles.container} ${pathname===link.path && styles.active}`} key={link.title} href={link.path}>{link.title}</Link>
}
export default NavLink