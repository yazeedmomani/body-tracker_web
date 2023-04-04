import { useState } from "react";
import styles from "./bp-form.module.scss";

export default function BPForm({ setDataChanged }) {
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [high, setHigh] = useState();
  const [low, setLow] = useState();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!date || !high || !time || !low) return;

    if (time !== "Morning" && time !== "Evening") return;

    const newDate = new Date(date);
    const dateString = newDate.toString();

    const endpoint = `https://dry-shelf-19816.herokuapp.com/api/v1/bp`;
    await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        date: dateString,
        time: time,
        high: high,
        low: low,
      }),
    });

    setDataChanged((prev) => !prev);

    // Reset
    setDate("");
    setTime("");
    setHigh("");
    setLow("");
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
        type="text"
        placeholder="Enter Time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <input
        className={styles.form_input}
        type="number"
        placeholder="Enter High"
        value={high}
        onChange={(e) => setHigh(e.target.value)}
      />
      <input
        className={styles.form_input}
        type="number"
        placeholder="Enter Low"
        value={low}
        onChange={(e) => setLow(e.target.value)}
      />
      <button
        type="submit"
        className={styles.form_btn}>
        Submit
      </button>
    </form>
  );
}
