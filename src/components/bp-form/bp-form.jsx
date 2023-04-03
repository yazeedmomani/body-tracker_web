import { useState } from "react";
import styles from "./bp-form.module.scss";

export default function BPForm() {
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [high, setHigh] = useState();
  const [low, setLow] = useState();

  function handleSubmit(e) {
    e.preventDefault();

    if (!date || !high || !time || !low) return;

    if (time !== "Morning" && time !== "Evening") return;

    const newDate = new Date(date);
    const dateString = newDate.toString();

    console.log(dateString, +high, time, +low);

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
