import { useState } from "react";
import styles from "./weight-form.module.scss";

export default function WeightForm({ setDataChanged }) {
  const [date, setDate] = useState();
  const [weight, setWeight] = useState();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!date || !weight) return;

    const newDate = new Date(date);
    const dateString = newDate.toString();

    const endpoint = `https://dry-shelf-19816.herokuapp.com/api/v1/weight`;
    await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        date: dateString,
        weight: weight,
      }),
    });

    setDataChanged((prev) => !prev);

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
