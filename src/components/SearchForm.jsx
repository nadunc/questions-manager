import React, { useRef } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { QuestionActions } from '../redux/actions';
import { getDropdownValues } from '../mocks';

const { categories, licenses, states, statuses, display } = getDropdownValues();

export default function SearchForm() {
  const dispatch = useDispatch();

  const questionEl = useRef(null);
  const categoryEl = useRef(null);
  const groupEl = useRef(null);
  const licenseEl = useRef(null);
  const statesEl = useRef(null);
  const statusEl = useRef(null);
  const displayEl = useRef(null);

  const getOptions = (data) => {
    return data.map((item) => {
      return (
        <option value={item} key={item}>
          {item}
        </option>
      );
    });
  };

  const getValue = (elemRef) => {
    return elemRef.current.value;
  };
  const onSearchClick = () => {
    dispatch(
      QuestionActions.updateSearchParams({
        question: getValue(questionEl),
        category: getValue(categoryEl),
        group: getValue(groupEl),
        license: getValue(licenseEl),
        state: getValue(statesEl),
        status: getValue(statusEl),
        display: getValue(displayEl)
      })
    );
  };

  return (
    <Row className="search-form">
      <Col xs={7}>
        <Row>
          <Col xs={12}>
            <Form.Control
              ref={questionEl}
              type="text"
              className="search-field"
              placeholder="Search by Question"
            />
          </Col>
          <Col xs={5}>
            <Form.Control
              ref={categoryEl}
              as="select"
              className="search-field"
              custom
            >
              <option value="">All Categories</option>
              {getOptions(categories)}
            </Form.Control>
          </Col>
          <Col xs={7}>
            <Form.Control
              ref={groupEl}
              type="text"
              className="search-field"
              placeholder="Search by Question Group"
              disabled
            />
          </Col>
        </Row>
      </Col>
      <Col xs={5}>
        <Row>
          <Col xs={7}>
            <Form.Control
              ref={licenseEl}
              as="select"
              className="search-field"
              custom
            >
              <option value="">License</option>
              {getOptions(licenses)}
            </Form.Control>
          </Col>
          <Col xs={5}>
            <Form.Control
              ref={statesEl}
              as="select"
              className="search-field"
              custom
            >
              <option value="">All States</option>
              {getOptions(states)}
            </Form.Control>
          </Col>
          <Col xs={4}>
            <Form.Control
              ref={statusEl}
              as="select"
              className="search-field"
              custom
            >
              <option value="">Status</option>
              {getOptions(statuses)}
            </Form.Control>
          </Col>
          <Col xs={4}>
            <Form.Control
              ref={displayEl}
              as="select"
              className="search-field"
              custom
            >
              <option value="">Display</option>
              {getOptions(display)}
            </Form.Control>
          </Col>
          <Col xs={4}>
            <Button variant="primary" onClick={onSearchClick} block>
              Search
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
