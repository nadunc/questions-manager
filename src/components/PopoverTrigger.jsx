import React from 'react';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function PopoverTrigger({ id, text }) {
  return (
    <OverlayTrigger
      trigger="click"
      placement="bottom"
      overlay={
        <Popover id={`popover-positioned-${id}`}>
          <Popover.Content>{text}</Popover.Content>
        </Popover>
      }
    >
      <Button variant="link">View</Button>
    </OverlayTrigger>
  );
}

PopoverTrigger.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};
