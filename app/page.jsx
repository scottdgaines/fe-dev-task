import Image from "next/image";
import styles from "./page.module.css";
import Menu from './components/Menu/Menu.jsx'

export default function Home() {

  return (
    <main className={styles.main}>
      <div>
        <Menu />
      </div>
    </main>
  );
}
