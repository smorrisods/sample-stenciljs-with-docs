'use client";'

import styles from "./page.module.css";

import { MyComponent } from "react-library";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <MyComponent first="Bart" last="Simpson"></MyComponent>
      </main>
    </div>
  );
}
