import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function MyLayout() {
  const [name, setName] = useState('');

  useEffect(() => {
    const storedName = localStorage.getItem('name');
    if (storedName) setName(storedName);
  }, []);

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-4">내 계정</h1>
      <img src="/profile.png" alt="profile" className="w-32 h-32 rounded-full mb-4" />
      <p className="text-xl mb-2">이름: {name || '김현수'}</p>
      <Link to="/edit" className="text-blue-400 underline">이름 변경하기</Link>
    </div>
  );
}

export default MyLayout;
