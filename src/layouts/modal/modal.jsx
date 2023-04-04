import { createPortal } from "react-dom";
import styles from "./modal.module.scss";
import WeightForm from "../../components/weight-form";
import BPForm from "../../components/bp-form";

export default function Modal({ closeModal, isWeight, setDataChanged }) {
  function handleBackdropClick(e) {
    if (e.target.className !== styles.modal) return;
    closeModal();
  }

  return createPortal(
    <>
      <div
        className={styles.modal}
        onClick={handleBackdropClick}>
        <div className={styles.modal_card}>
          {isWeight ? (
            <WeightForm setDataChanged={setDataChanged} />
          ) : (
            <BPForm setDataChanged={setDataChanged} />
          )}
        </div>
      </div>
    </>,
    document.getElementById("modal-root")
  );
}
