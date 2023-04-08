import PropTypes from 'prop-types';
import styles from './button.module.scss';
const {
  buttonPrimary,
  buttonSecondary,
  buttonTertiary,
  buttonOutlineWhite,
  navButton,
  smallButton,
  disabledButton,
  unStyledButton,
} = styles;

export const Button = ({
  small = false,
  disabled = false,
  variant = 'primary',
  label,
  href,
  minWidth = '0px',
  onClick,
  ...props // allows for other custom props
}) => {
  const Comp = href ? 'a' : 'button';
  const variants = {
    primary: buttonPrimary,
    secondary: buttonSecondary,
    tertiary: buttonTertiary,
    outlineWhite: buttonOutlineWhite,
    navButton: navButton,
    small: small,
    disabled: disabled,
    unStyled: unStyledButton,
  };

  return (
    <Comp
      // className={`button--${variant} ${small && 'small'} ${
      //     href && 'navButton'
      // }`}
      className={`
      ${variants[variant]} 
      ${small && smallButton}
      ${disabled && disabledButton} 
      `}
      href={href || null}
      onClick={onClick}
      {...props}
      style={{ marginRight: '10px', minWidth: minWidth }}
    >
      {label}
    </Comp>
  );
};

// .propTypes is React specific
// documents the component and enables others to see data type for each prop - IDE will likely shout at you if you pass a wrong data type in when calling the component
Button.propTypes = {
  /**
   * Display a more compact version of the button.
   */
  small: PropTypes.bool, // PropTypes is a library
  /**
   * Display different styles of button depending on the hierarchy of the action.
   */
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
    'outlineWhite',
    'navButton',
    'disabled',
    'unStyled',
  ]),
  /**
   * Button text.
   */
  label: PropTypes.string.isRequired,
  /**
   * onClick function.
   */
  onClick: PropTypes.func,
  /**
   * href link for button.
   */
  href: PropTypes.string,
  /**
   * Minimum width of the button
   */
  minWidth: PropTypes.string,
};
