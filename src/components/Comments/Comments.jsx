import React from 'react'
import styles from './comments.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Comments = () => {
    const status="authenticated"
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Comments</h1>
        {status==="authenticated" ? (
            <div className={styles.write}>
                <textarea className={styles.input} placeholder='Write a comment'/>
                <button className={styles.button}>Send</button>
            </div>
        ) : (
            <Link href="/login">Login to comment</Link>
        )}
        <div className={styles.comments}>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image src="/p1.jpeg" alt='' className={styles.image} width={50} height={50}/>
                    <div className={styles.userInfo}>
                        <span className={styles.username}>Keshav Sharma</span>
                        <span className={styles.date}>12-05-2024</span>
                    </div>
                </div>
                <p className={styles.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
            </div>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image src="/p1.jpeg" alt='' className={styles.image} width={50} height={50}/>
                    <div className={styles.userInfo}>
                        <span className={styles.username}>Keshav Sharma</span>
                        <span className={styles.date}>12-05-2024</span>
                    </div>
                </div>
                <p className={styles.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
            </div>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image src="/p1.jpeg" alt='' className={styles.image} width={50} height={50}/>
                    <div className={styles.userInfo}>
                        <span className={styles.username}>Keshav Sharma</span>
                        <span className={styles.date}>12-05-2024</span>
                    </div>
                </div>
                <p className={styles.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
            </div>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image src="/p1.jpeg" alt='' className={styles.image} width={50} height={50}/>
                    <div className={styles.userInfo}>
                        <span className={styles.username}>Keshav Sharma</span>
                        <span className={styles.date}>12-05-2024</span>
                    </div>
                </div>
                <p className={styles.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
            </div>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image src="/p1.jpeg" alt='' className={styles.image} width={50} height={50}/>
                    <div className={styles.userInfo}>
                        <span className={styles.username}>Keshav Sharma</span>
                        <span className={styles.date}>12-05-2024</span>
                    </div>
                </div>
                <p className={styles.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
            </div>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image src="/p1.jpeg" alt='' className={styles.image} width={50} height={50}/>
                    <div className={styles.userInfo}>
                        <span className={styles.username}>Keshav Sharma</span>
                        <span className={styles.date}>12-05-2024</span>
                    </div>
                </div>
                <p className={styles.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
            </div>
        </div>
    </div>
  )
}

export default Comments
