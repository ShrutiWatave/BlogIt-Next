import Link from 'next/link'
import React from 'react'
import styles from './authLinks.module.css'

const AuthLinks = () => {
  const status = "auth"
  return (
    <>
    {status === "notauth" ? (

      <Link href={'/login'}>Login</Link>
      ) : (
        <>
        <Link href={'/createBlog'}>Create Blog</Link>
        <span className={styles.links}>Logout</span>
        {/* <Link href={'/logout'}>Logout</Link> */}
        </>
    )
    
  }
    </> 

  )
}

export default AuthLinks
