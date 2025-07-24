// src/components/FindTimeModal/TimeRangePicker.jsx
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./FindTimeModal.module.scss";

export default function TimeRangePicker({ timeRange, onChange }) {
  const { start, end } = timeRange;
  return (
    <div className={styles.timeRange}>
      <DatePicker
        selected={start}
        onChange={(t) => onChange({ ...timeRange, start: t })}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={30}
        timeCaption="Time"
        dateFormat="aa hh:mm"
        placeholderText="AM 00:00"
        className={styles.input}
      />
      <span className={styles.rangeSep}>—</span>
      <DatePicker
        selected={end}
        onChange={(t) => onChange({ ...timeRange, end: t })}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={30}
        timeCaption="Time"
        dateFormat="aa hh:mm"
        placeholderText="AM 00:00"
        className={styles.input}
      />
    </div>
  );
}
