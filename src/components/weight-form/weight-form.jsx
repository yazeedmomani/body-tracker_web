import { useState } from "react";
import styles from "./weight-form.module.scss";

export default function WeightForm() {
  const [date, setDate] = useState();
  const [weight, setWeight] = useState();

  function handleSubmit(e) {
    e.preventDefault();

    if (!date || !weight) return;

    const newDate = new Date(date);
    const dateString = newDate.toString();

    console.log(dateString, +weight);

    // Reset
    setDate("");
    setWeight("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={styles.form}>
      <input
        className={styles.form_input}
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        className={styles.form_input}
        type="number"
        placeholder="Enter Weight"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <button
        type="submit"
        className={styles.form_btn}>
        Submit
      </button>
    </form>
  );
}
