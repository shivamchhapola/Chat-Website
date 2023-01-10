import Desktop from '../components/Chat/Desktop/Desktop';
import Mobile from '../components/Chat/Mobile/Mobile';
import Styles from './../styles/Chat/main.module.css';

export default function GC({ page }) {
  return (
    <div className={Styles.Chat}>
      <Desktop page={page} />
      <Mobile />
    </div>
  );
}
