import { useState } from "react";
import styles from "./styles.module.css";

export const Datepicker = () => {
  const [date, setDate] = useState<Date | null>(new Date("2022-04-17"));

  return (
    <div className={styles.datepickerContainer}>
      <input
        type="date"
        value={date?.toISOString().slice(0, 10)}
        onChange={(e) => setDate(new Date(e.target.value))}
        className={styles.datepicker}
      />
    </div>
  );
};
