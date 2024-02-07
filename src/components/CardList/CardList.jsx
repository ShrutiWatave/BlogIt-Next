import React from 'react'
import Pagination from '../Pagination/Pagination'
import styles from "./cardList.module.css";
import Card from '../Card/card';

const CardList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent posts</h1>
      <div className={styles.posts}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <Pagination/>
    </div>
  )
}

export default CardList
