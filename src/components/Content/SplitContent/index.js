import styles from './split-content.module.scss';
import mediaStyles from '@/styles/utilities/media.module.scss';
import Image from 'next/image';

export const SplitContent = ({ children ,imageSrc = '' }) => {
    return (
        <div className={styles.splitContent}>
            <div class={styles.content}>
                {children}
            </div>
            {imageSrc &&
                <div className={mediaStyles.mediaContainer__aspect169}>
                    <Image src={imageSrc} fill={true} />
                </div>
            }
        </div>
    )
}