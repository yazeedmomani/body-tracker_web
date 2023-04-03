import { useState } from "react";
import Nav from "./layouts/nav";
import Row from "./layouts/row";
import styles from "./app.module.scss";

export default function App() {
  const [isWeight, setIsWeight] = useState(true);

  return (
    <>
      <Nav setIsWeight={setIsWeight} />
      <div className={styles.rowContainer}>
        <Row />
      </div>
    </>
  );
}
