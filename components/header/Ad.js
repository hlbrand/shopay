import Link from 'next/link';
import styles from './styles.module.scss';

const Ad = () => {
  return (
    <Link href="/browse">
      <div className={styles.ad}>asdf</div>
    </Link>
  );
};

export default Ad;
