// src/components/FindTimeModal/DurationPicker.jsx
import React from "react";
import styles from "./FindTimeModal.module.scss";

export default function DurationPicker({ duration, onChange }) {
  const inc = () => onChange(duration + 1);
  const dec = () => onChange(Math.max(0, duration - 1));
  return (
    <div className={styles.duration}>
      <button type="button" onClick={dec} className={styles.spinnerBtn}>
        ▴
      </button>
      <span className={styles.durationValue}>{duration}h</span>
      <button type="button" onClick={inc} className={styles.spinnerBtn}>
        ▾
      </button>
    </div>
  );
}
