import styles from './Header.module.css';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

export function Header() {

  return (
    <div className={styles.header}>
      <div className={styles.icons}>
        <a href='https://github.com/igormtt' target='_blank'>
          <BsGithub />
        </a>
        <a href='https://www.linkedin.com/in/igor-motta-9588b4215/' target='_blank'>
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
}