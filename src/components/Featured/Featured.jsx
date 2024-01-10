import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'

const Featured = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
      <h1>Hey, this is the heading! In minima dolorum natus. Incidunt fugia</h1>
      </div>
      <div className={styles.post}>

      <div className={styles.imgContainer}>
        <Image className={styles.image} src="/p1.jpeg" alt="p1.jpeg" fill/>
      </div>
      <div className={styles.textContainer}>

        <h1 className={styles.postTitle}>Lorem, ipsum dolor sit amet consectetur </h1>
        <p className={styles.postDescription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, vitae? Culpa officiis repellendus nihil velit fuga magnam nemo? Voluptate illum ipsum modi nemo fugit necessitatibus, iure dignissimos excepturi dolores velit?
        </p>

        <button className={styles.button}>Read more</button>
      </div>
      </div>

    </div>
  )
}

export default Featured
