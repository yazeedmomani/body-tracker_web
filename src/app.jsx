import { useState } from "react";
import Nav from "./layouts/nav";
import Row from "./layouts/row";
import AddBtn from "./components/add-btn";
import styles from "./app.module.scss";

export default function App() {
  const [isWeight, setIsWeight] = useState(true);

  return (
    <>
      <Nav setIsWeight={setIsWeight} />
      <div className={styles.rowContainer}>
        <AddBtn className={styles.rowContainer_item} />
        <Row className={styles.rowContainer_item} />
      </div>
    </>
  );
}
