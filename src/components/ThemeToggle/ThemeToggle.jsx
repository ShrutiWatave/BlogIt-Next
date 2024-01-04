"use client";

import React, { useContext } from 'react'
import styles from './themeToggle.module.css'
import Image from 'next/image'
import { ThemeContext } from '@/context/ThemeContext'

const ThemeToggle = () => {

  const {theme, toggle} = useContext(ThemeContext)
  console.log(theme)

  return (
    <div className={styles.container } onClick={toggle}
      style={
        theme === "dark" ? {backgroundColor: "rgb(245, 238, 238)"} : { backgroundColor: "rgb(62, 56, 56)"}
      }
    >
      <Image src={'/sun.png'} alt="sun" width={15} height={15}/>
      <div className={styles.toggler}
        style={
          theme === "dark" ? {background: "rgb(54, 49, 49)", right: "2px"} : {background: "white", left: "2px"}
        
        }
      ></div>
      <Image src={'/moon.png'} alt="moon" width={15} height={15}/>
    </div>
  )
}

export default ThemeToggle
