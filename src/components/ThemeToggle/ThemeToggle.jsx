"use client";

import React, { useContext } from 'react'
import styles from './themeToggle.module.css'
import Image from 'next/image'
import { ThemeContext } from '@/context/ThemeContext'

const ThemeToggle = () => {

  const {theme} = useContext(ThemeContext)
  console.log(theme)

  return (
    <div className={styles.container }>
      <Image src={'/sun.png'} alt="sun" width={15} height={15}/>
      <div className={styles.toggler}></div>
      <Image src={'/moon.png'} alt="moon" width={15} height={15}/>
    </div>
  )
}

export default ThemeToggle
