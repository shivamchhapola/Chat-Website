import React, { useEffect, useState } from 'react';
import Desktop from './../components/Chat/Desktop/Desktop';
import Mobile from './../components/Chat/Mobile/Mobile';
import Styles from './../styles/Chat/main.module.css';

export default function Chat() {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
  }, []);

  return (
    <div className={Styles.Chat}>
      <Desktop user={user} />
      <Mobile user={user} />
    </div>
  );
}
