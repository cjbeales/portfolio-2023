import styles from './contact-item.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ContactItem = ({ icon, title, linkText, linkHref }) => {
    return (
        <div className={styles.contactItem}>
            <div className={styles.icon}>
                <FontAwesomeIcon icon={icon} color={'#040d1c'} fixedWidth={true} width={26} />
            </div>
            <div className={styles.contactItem__content}>
                <p className='white margin--4 no-text-decoration'>{title}</p>
                <a
                    href={linkHref}
                    target='_blank'
                    rel='noopener noreferer'
                    className={styles.link}
                >
                    <p className='fs--16 col--primary no--margin bold'>{linkText}</p>
                </a>
            </div>
        </div>
    )
}
