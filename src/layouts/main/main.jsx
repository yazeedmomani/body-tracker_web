import Row from "../row";
import AddBtn from "../../components/add-btn";
import styles from "./main.module.scss";

export default function Main({ isWeight, data }) {
  return (
    <main className={styles.main}>
      <AddBtn className={styles.main_item} />
      {data.map((current) => (
        <Row
          className={styles.main_item}
          firstArg={current.high || current.weight}
          secondArg={current.low}
          date={current.date}
          time={current.time}
          key={current.id}
        />
      ))}
    </main>
  );
}
