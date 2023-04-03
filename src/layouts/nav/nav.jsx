import styles from "./nav.module.scss";

export default function Nav({ setIsWeight }) {
  function handleWeight(e) {
    e.preventDefault();
    setIsWeight(true);
  }

  function handleBP(e) {
    e.preventDefault();
    setIsWeight(false);
  }

  return (
    <nav className={styles.nav}>
      <button
        className={styles.nav_btn}
        onClick={handleBP}>
        BP
      </button>
      <button
        className={styles.nav_btn}
        onClick={handleWeight}>
        Weight
      </button>
    </nav>
  );
}
