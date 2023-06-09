import styles from './split-content.module.scss';
import Image from 'next/image';

export const SplitContent = ({ children, imageSrc = '', aspectClass = '', customAspect = '' }) => {
    return (
        <div className={styles.splitContent}>
            <div class={styles.content}>
                {children}
            </div>
            {imageSrc &&
                <div className={styles.image}>
                    <div className={aspectClass} style={{ paddingTop: `${customAspect}%` }}>
                        <Image src={imageSrc} fill={true} />
                    </div>
                </div>
            }
        </div>
    )
}