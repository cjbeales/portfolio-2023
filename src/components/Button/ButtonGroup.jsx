import PropTypes from 'prop-types';
import { Container } from '@components';
import { Button } from './Button';
import {
  buttonGroup,
  centered,
  left,
  right,
  fullWidth,
} from './button.module.scss';
export const ButtonGroup = ({ align = left, isFullWidth, buttons }) => {
  let alignmentClass;

  switch (align) {
    case 'left': {
      alignmentClass = left;
      break;
    }
    case 'right': {
      alignmentClass = right;
      break;
    }
    case 'center': {
      alignmentClass = centered;
      break;
    }
  }

  const fullWidthClass = isFullWidth ? fullWidth : '';

  return (
    <Container
      variant={'copy'}
      className={`${buttonGroup} ${alignmentClass} ${fullWidthClass}`}
    >
      {buttons.map(function (button, i) {
        const fields = button.fields;
        return (
          <Button
            key={fields.linkUrl}
            label={fields.linkText}
            variant={fields.colour}
            href={fields.linkUrl}
            minWidth={fields.minWidth}
          />
        );
      })}
    </Container>
  );
};

ButtonGroup.propTypes = {
  isCentered: PropTypes.bool,
  isFullWidth: PropTypes.bool,
  buttons: PropTypes.array,
};
