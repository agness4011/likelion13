// src/App.jsx
import React, { useState } from "react";
import FindTimeModal from "./components/FindTimeModal/FindTimeModal";

function App() {
  const [open, setOpen] = useState(false);

  const handleSearch = (data) => {
    console.log("탐색 파라미터:", data);
    setOpen(false);
  };

  return (
    <>
      <button onClick={() => setOpen(true)}>약속시간 탐색 열기</button>
      {open && (
        <FindTimeModal onClose={() => setOpen(false)} onSearch={handleSearch} />
      )}
    </>
  );
}

export default App;
