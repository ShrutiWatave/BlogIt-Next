import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Popular Categories</h1>
      </div>

      <div className={styles.categories}>
        <Link href={`/blog`} className={`${styles.category} ${styles.sports}`}>
          <Image src="/sports.png" alt="style.png" width={32} height={32} className={styles.Image}/>
          sports
        </Link>
        <Link href={`/blog`} className={`${styles.category} ${styles.culture}`}>
          <Image src="/culture.png" alt="style.png" width={32} height={32} className={styles.Image}/>
          culture
        </Link>
        <Link href={`/blog`} className={`${styles.category} ${styles.fashion}`}>
          <Image src="/fashion.png" alt="style.png" width={32} height={32} className={styles.Image}/>
          fashion
        </Link>
        <Link href={`/blog`} className={`${styles.category} ${styles.food}`}>
          <Image src="/food.png" alt="style.png" width={32} height={32} className={styles.Image}/>
          food
        </Link>
        <Link href={`/blog`} className={`${styles.category} ${styles.travel}`}>
          <Image src="/travel.png" alt="style.png" width={32} height={32} className={styles.Image}/>
          travel
        </Link>
        <Link href={`/blog`} className={`${styles.category} ${styles.style}`}>
          <Image src="/style.png" alt="style.png" width={32} height={32} className={styles.Image}/>
          style
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
