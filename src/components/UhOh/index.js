import { Container } from '@/components';
import Link from 'next/link';
import styles from './404.module.scss';

export const UhOh = () => {
  return (
    <Container variant='standard'>
      <div className={styles.uhOh}>
        <div className={styles.uhOh__content}>
          <h1 className='margin--24'>Uh-oh!</h1>
          <p>Looks like you've hit a wall...</p>
          <Link href={'/'}>Back to safety</Link>
        </div>
      </div>
    </Container>
  )
}
