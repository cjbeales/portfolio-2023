import PropTypes from 'prop-types';
import styles from './containers.module.scss';

export const Container = ({ variant = 'small', children, className = '' }) => {
    const variants = {
        'full-width': styles.fullWidth,
        'large': styles.large,
        'standard': styles.standard,
        'narrow': styles.narrow,
        'copy': styles.copy,
    };

    return <div className={`${variants[variant]} ${className}`}>{children}</div>;
};

Container.propTypes = {
    variant: PropTypes.oneOf([
        'full-width',
        'large',
        'standard',
        'narrow',
        'copy',
    ]),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};