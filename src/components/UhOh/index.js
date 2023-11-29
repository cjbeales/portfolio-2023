import { Container } from '@/components';
import Link from 'next/link';
import styles from './404.module.scss';
import buttonStyles from '@/components/Button/button.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export const UhOh = () => {
  return (
    <Container variant='standard'>
      <div className={styles.uhOh}>
        <div className={styles.uhOh__content}>
          <img src='/lost.webp' alt='lost?' />
          <h1 className='margin--8 white'>Uh-oh!</h1>
          <p className='margin--48'>Looks like you're a little lost...</p>
          <Link href={'/'} className={buttonStyles.backButton}>
          <FontAwesomeIcon icon={faArrowLeft} color={'white'} fixedWidth={true} width={18} />
            <span className='white fs--18'>Back to safety</span>
          </Link>
        </div>
      </div>
    </Container>
  )
}
