import React from "react";
import styles from "./singlePage.module.css";
import Menu from "@/components/Menu/Menu";
import Image from "next/image";
import Comments from "@/components/Comments/Comments";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, a?
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
                <span className={styles.username}>Keshav Sharma</span>
                <span className={styles.date}>12-05-2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
            <div className={styles.description}>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis dicta possimus nihil voluptatibus eveniet aperiam consectetur magnam quibusdam? Consequuntur repellendus veniam quae quos, iusto enim. Tempora corporis doloremque quibusdam repellendus.
                </p>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam facere animi itaque magni natus tempora dicta neque laboriosam exercitationem eveniet quasi facilis, odit, velit commodi. Reiciendis, cumque. Nam, voluptates doloribus.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nemo ullam perferendis tempora repellat ea, adipisci nihil aperiam illum maiores, expedita voluptas ad amet rem laborum necessitatibus ipsum quibusdam exercitationem.</p>
            </div>
            <div className={styles.comment}>
                <Comments/>
            </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
