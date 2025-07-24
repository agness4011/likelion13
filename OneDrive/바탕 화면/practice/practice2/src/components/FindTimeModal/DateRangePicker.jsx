// src/components/FindTimeModal/DateRangePicker.jsx
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./FindTimeModal.module.scss";

export default function DateRangePicker({ dateRange, onChange }) {
  const { start, end } = dateRange;
  return (
    <div className={styles.dateRange}>
      <DatePicker
        selected={start}
        onChange={(d) => onChange({ ...dateRange, start: d })}
        dateFormat="yy.MM.dd"
        placeholderText="YY.MM.DD"
        className={styles.input}
      />
      <span className={styles.rangeSep}>—</span>
      <DatePicker
        selected={end}
        onChange={(d) => onChange({ ...dateRange, end: d })}
        dateFormat="yy.MM.dd"
        placeholderText="YY.MM.DD"
        className={styles.input}
      />
    </div>
  );
}
