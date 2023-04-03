import styles from "./row.module.scss";
import { BsFillTrashFill } from "react-icons/bs";

export default function Row({ date, time, firstArg, secondArg, className }) {
  return (
    <div className={`${styles.row} ${className}`}>
      <div className={styles.row_DateAndTimeContainer}>
        <h1 className={styles.row_date}>March 23, 2023</h1>
        <h2 className={styles.row_time}>Morning</h2>
      </div>
      <span className={styles.row_firstArg}>135</span>
      <span className={styles.row_secondArg}>87</span>
      <button className={styles.row_trashBtn}>
        <BsFillTrashFill className={styles.row_trashIcon} />
      </button>
    </div>
  );
}
