// src/components/FindTimeModal/ParticipantSearch.jsx
import React, { useState } from "react";
import { Search } from "lucide-react";
import styles from "./FindTimeModal.module.scss";

export default function ParticipantSearch({ participants, onChange }) {
  const [query, setQuery] = useState("");

  const handleAdd = () => {
    if (query.trim() && !participants.includes(query.trim())) {
      onChange([...participants, query.trim()]);
      setQuery("");
    }
  };

  return (
    <div className={styles.partSearch}>
      <input
        type="text"
        placeholder="친구의 플랜팔 닉네임을 입력해주세요"
        value={query}
        size={40}
        onChange={(e) => setQuery(e.target.value)}
        className={styles.input}
      />
      <button type="button" onClick={handleAdd} className={styles.iconBtn}>
        <Search size={18} />
      </button>
      <ul className={styles.partList}>
        {participants.map((p, i) => (
          <li key={i} className={styles.partItem}>
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}
