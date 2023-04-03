import styles from "./add-btn.module.scss";
import { AiOutlinePlusCircle } from "react-icons/ai";

export default function AddBtn({ className, onClick }) {
  return (
    <button
      className={`${styles.btn} ${className}`}
      onClick={onClick}>
      <AiOutlinePlusCircle className={styles.btn_icon} />
    </button>
  );
}
