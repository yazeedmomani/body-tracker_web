import styles from "./row.module.scss";
import { BsFillTrashFill } from "react-icons/bs";

export default function Row({
  date,
  time,
  firstArg,
  secondArg,
  id,
  className,
}) {
  const newDate = new Date(date);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = newDate.toLocaleDateString("en-US", options);

  return (
    <div className={`${styles.row} ${className}`}>
      <div className={styles.row_DateAndTimeContainer}>
        <h1 className={styles.row_date}>{formattedDate}</h1>
        <h2 className={styles.row_time}>{time}</h2>
      </div>
      <span className={styles.row_firstArg}>{firstArg}</span>
      <span className={styles.row_secondArg}>{secondArg}</span>
      <button className={styles.row_trashBtn}>
        <BsFillTrashFill className={styles.row_trashIcon} />
      </button>
    </div>
  );
}
