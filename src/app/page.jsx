import Link from "next/link";
import styles from "./homepage.module.css";
import Featured from "@/components/Featured/Featured";
import CardList from "@/components/CardList/CardList";
import CategoryList from "@/components/CategoryList/CategoryList";
import Menu from "@/components/Menu/Menu";

export default function Home() {
  return (
    <div>
      <Featured />
      <CategoryList />
      <div className={styles.container}>
        <div className={styles.content}>
          <CardList />
          <Menu />
        </div>
      </div>
    </div>
  );
}
