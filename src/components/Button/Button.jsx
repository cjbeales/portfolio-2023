import styles from './button.module.scss';

export const Button = ({
  label,
  href = '#',
  hasExternalLink = false,
  onClick,
  ...props
}) => {
  return (
    <a
      className={styles.button}
      href={href}
      onClick={onClick}
      target={hasExternalLink ? '_blank' : '_self'}
      rel={hasExternalLink ? 'noopener noreferer' : ''}
      {...props}
    >
      <span className='fs--18'>{label}</span>
    </a>
  );
};