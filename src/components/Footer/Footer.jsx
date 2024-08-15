import React from 'react'
import styles from "./footer.module.css"
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="logo" width={50} height={50}/>
          <h1 className={styles.logoText}>BlogIt</h1>
        </div>
        <p className={styles.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem nesciunt sunt, incidunt quod dolorem adipisci autem itaque aliquid nisi inventore, ab officia quasi! Ratione recusandae, officiis delectus iste totam iusto.</p>
        <div className={styles.icons}>
          <Image src="/linkedin.png" alt='insta' width={20} height={20}/>
          <Image src="/instagram.png" alt='insta' width={20} height={20}/>
          <Image src="/facebook.png" alt='insta' width={20} height={20}/>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href='/'>Home</Link>
          <Link href='/'>Blog</Link>
          <Link href='/'>About</Link>
          <Link href='/'>Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href='/'>Sports</Link>
          <Link href='/'>Fashion</Link>
          <Link href='/'>Food</Link>
          <Link href='/'>Style</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Socials</span>
          <Link href='/'>Linkedin</Link>
          <Link href='/'>Instagram</Link>
          <Link href='/'>Facebook</Link>
          <Link href='/'>Others</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
