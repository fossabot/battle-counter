import React from 'react';
import { Button, UncontrolledTooltip } from 'reactstrap';

type Props = {
  id: string,
  text: string,
  icon: string,
  tooltip: string,
  placement: string,
  active: boolean,
  disabled: boolean,
  className: string,
  onClick: () => void
};

export default class TooltipItem extends React.Component {
  props: Props;

  render() {
    const {
      id,
      text,
      icon,
      tooltip,
      placement,
      active,
      className,
      onClick,
      disabled
    } = this.props;
    return (
      <Button
        className={className}
        color="primary"
        onClick={onClick}
        id={`Tooltip-${id}`}
        active={active}
        disabled={disabled}
      >
        <i className={icon} /> {text}
        <UncontrolledTooltip placement={placement} target={`Tooltip-${id}`}>
          {tooltip}
        </UncontrolledTooltip>
      </Button>
    );
  }
}
