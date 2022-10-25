import React, { useEffect, useState } from 'react';

export default function Chat() {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
  }, []);

  return <div>{user ? user.name : 'Please Login!'}</div>;
}
