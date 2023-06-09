import Image from 'next/image';
import styles from './projects.module.scss';

export const Slide = ({ slideSrc }) => {
    return (
        <div className={`keen-slider__slide ${styles.slide}`}>
            <Image src={slideSrc} fill={true} />
        </div>
    )
}