// src/components/FindTimeModal/FindTimeModal.jsx
import React, { useState } from "react";
import styles from "./FindTimeModal.module.scss";
import { X } from "lucide-react";
import ParticipantSearch from "./ParticipantSearch";
import DateRangePicker from "./DateRangePicker";
import TimeRangePicker from "./TimeRangePicker";
import DurationPicker from "./DurationPicker";

export default function FindTimeModal({ onClose, onSearch }) {
  const [title, setTitle] = useState("");
  const [participants, setParticipants] = useState([]);
  const [dateRange, setDateRange] = useState({ start: null, end: null });
  const [timeRange, setTimeRange] = useState({ start: null, end: null });
  const [duration, setDuration] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ title, participants, dateRange, timeRange, duration });
  };

  return (
    <div className={styles.backdrop}>
      <form className={styles.modal} onSubmit={handleSubmit}>
        <header className={styles.header}>
          <div className={styles.badge}>약속시간 탐색</div>
          <h2>약속시간을 탐색해보세요</h2>
          <button type="button" onClick={onClose} className={styles.closeBtn}>
            <X size={20} />
          </button>
        </header>

        <label className={styles.label}>
          약속명
          <input
            type="text"
            placeholder="약속명을 입력해주세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={styles.input}
            required
          />
        </label>

        <label className={styles.label}>
          참여자
          <ParticipantSearch
            participants={participants}
            onChange={setParticipants}
          />
        </label>

        <div className={styles.pickers}>
          <DateRangePicker dateRange={dateRange} onChange={setDateRange} />
          <TimeRangePicker timeRange={timeRange} onChange={setTimeRange} />
        </div>

        <label className={styles.label}>
          약속 길이
          <DurationPicker duration={duration} onChange={setDuration} />
        </label>

        <button type="submit" className={styles.searchBtn}>
          약속시간 탐색하기
        </button>
      </form>
    </div>
  );
}
