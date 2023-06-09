import Image from 'next/image';
import styles from './carousel.module.scss';
import mediaStyles from '@/styles/utilities/media.module.scss';

export const Slide = ({ slideSrc }) => {
    return (
        <div className={`keen-slider__slide ${styles.slide}`}>
            <div className={mediaStyles.mediaContainer__aspect1x1}>
                <Image src={slideSrc} fill={true} />
            </div>
        </div>
    )
}