import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import Desktop from '../components/Chat/Desktop/Desktop';
import Mobile from '../components/Chat/Mobile/Mobile';
import Styles from './../styles/Chat/main.module.css';

export default function GC({ page }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('user')) navigate('/join');
  }, [navigate]);

  return (
    <div className={Styles.Chat}>
      <Desktop page={page} />
      <Mobile />
    </div>
  );
}
