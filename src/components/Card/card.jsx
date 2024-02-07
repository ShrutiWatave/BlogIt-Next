import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image className={styles.img} src="/p1.jpeg" alt="p1" fill />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.details}>
          <p className={styles.date}>06-02-2024 - </p>
          <p className={styles.category}>TRAVEL</p>
        </div>
        <h1 className={styles.title}>Lorem ipsum dolor sit amet!</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          repudiandae quasi eligendi perferendis rem sint saepe quisquam maiores
          quia aspernatur eius veritatis, labore nam! Pariatur iste voluptates
          repellendus explicabo saepe.
        </p>
        <Link className={styles.link} href="/">Read more</Link>
      </div>
    </div>
  );
};

export default card;
