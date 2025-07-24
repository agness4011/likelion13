import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function EditNamePage() {
  const navigate = useNavigate();
  const [name, setName] = useState('');

  useEffect(() => {
    const storedName = localStorage.getItem('name');
    if (storedName) setName(storedName);
  }, []);

  const handleSave = () => {
    localStorage.setItem('name', name);
    navigate('/');
  };

  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl font-bold mb-4">이름 변경</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="text-black px-3 py-2 rounded border"
      />
      <button
        onClick={handleSave}
        className="ml-4 px-4 py-2 bg-blue-500 rounded hover:bg-blue-600"
      >
        저장하기
      </button>
    </div>
  );
}

export default EditNamePage;