import Row from "../../components/row";
import AddBtn from "../../components/add-btn/";
import Modal from "../modal/";
import styles from "./main.module.scss";
import { useState } from "react";

export default function Main({ isWeight, data, isLoading, setDataChanged }) {
  const [showModal, setShowModal] = useState(false);

  const reversedData = data?.slice().reverse();
  console.log(reversedData);

  return (
    <main className={styles.main}>
      <AddBtn
        className={styles.main_item}
        onClick={setShowModal.bind(null, true)}
      />
      {isLoading ? (
        <p>loading...</p>
      ) : (
        reversedData.map((current) => (
          <Row
            isWeight={isWeight}
            setDataChanged={setDataChanged}
            className={styles.main_item}
            firstArg={current.high || current.weight}
            secondArg={current.low}
            date={current.date}
            time={current.time}
            key={current._id}
            id={current._id}
          />
        ))
      )}
      {showModal && (
        <Modal
          isWeight={isWeight}
          setDataChanged={setDataChanged}
          closeModal={setShowModal.bind(null, false)}
        />
      )}
    </main>
  );
}
