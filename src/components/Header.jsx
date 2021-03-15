import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <Row>
      <Col>
        <h1 className="page-title">Custom Questions Manager</h1>
      </Col>
      <Col>
        <Button className="float-right">
          <FontAwesomeIcon icon={faPlus} />
          Add New Question
        </Button>
      </Col>
    </Row>
  );
}
