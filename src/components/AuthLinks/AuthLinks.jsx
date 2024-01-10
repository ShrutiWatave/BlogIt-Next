"use client";

import Link from "next/link";
import React, { useState } from "react";
import styles from "./authLinks.module.css";

const AuthLinks = () => {
  const status = "notauth";
  const [open, setOpen] = useState(false);

  return (
    <>
      {status === "notauth" ? (
        <Link href={"/login"} className={styles.link}>Login</Link>
      ) : (
        <>
          <Link href={"/createBlog"} className={styles.link}>Create</Link>
          <span className={styles.link}>Logout</span>
        </>
      )}

      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {status === "notauth" ? (
            <Link href={"/login"}>Login</Link>
          ) : (
            <>
              <Link href={"/createBlog"}>Create</Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
