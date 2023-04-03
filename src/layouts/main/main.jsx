import Row from "../../components/row";
import AddBtn from "../../components/add-btn/";
import Modal from "../modal/";
import styles from "./main.module.scss";
import { useState } from "react";

export default function Main({ isWeight, data }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <main className={styles.main}>
      <AddBtn
        className={styles.main_item}
        onClick={setShowModal.bind(null, true)}
      />
      {data.map((current) => (
        <Row
          className={styles.main_item}
          firstArg={current.high || current.weight}
          secondArg={current.low}
          date={current.date}
          time={current.time}
          key={current.id}
          id={current.id}
        />
      ))}
      {showModal && (
        <Modal
          closeModal={setShowModal.bind(null, false)}
          isWeight={isWeight}
        />
      )}
    </main>
  );
}
