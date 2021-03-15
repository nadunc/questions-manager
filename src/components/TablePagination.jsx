import React from 'react';
import { Col, Form, Pagination, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function TablePagination({
  total,
  pagination,
  updatePagination
}) {
  const { currentPage = 1, perPage = 5 } = pagination;
  const options = [5, 10, 15, 20, 25];
  const maxPages = 5;
  const totalPages = Math.max(Math.ceil(total / perPage), 1);

  const onItemClick = (targetPage) => {
    updatePagination(targetPage, perPage);
  };

  const onPrevClick = () => {
    onItemClick(currentPage - 1);
  };

  const onNextClick = () => {
    onItemClick(currentPage + 1);
  };

  const onPerPageChange = (targetPerPage) => {
    updatePagination(1, targetPerPage);
  };

  const getItem = (i) => {
    return (
      <Pagination.Item
        onClick={() => onItemClick(i)}
        active={currentPage === i}
        key={Math.random()}
      >
        {i}
      </Pagination.Item>
    );
  };

  const getPages = () => {
    const items = [];

    items.push(getItem(currentPage));

    for (let i = 1; i < maxPages; i += 1) {
      if (items.length === maxPages) {
        break;
      }
      if (currentPage + i <= totalPages && items.length < maxPages) {
        items.push(getItem(currentPage + i));
      }
      if (currentPage - i > 0 && items.length < maxPages) {
        items.unshift(getItem(currentPage - i));
      }
    }

    return items;
  };

  if (total) {
    return (
      <Row className="pagination">
        <Col className="pages">
          <Pagination>
            <Pagination.Item onClick={onPrevClick} disabled={currentPage === 1}>
              {'<'} Back
            </Pagination.Item>
            {getPages()}
            <Pagination.Item
              onClick={onNextClick}
              disabled={currentPage === totalPages}
            >
              Next {'>'}
            </Pagination.Item>
          </Pagination>
        </Col>
        <Col className="per-page">
          <div className="float-right text-right" style={{ width: '200px' }}>
            <span className="d-inline">Show </span>
            <Form.Control
              as="select"
              className="d-inline"
              onChange={(e) => onPerPageChange(e.target.value)}
              style={{ width: '70px' }}
            >
              {options.map((option) => {
                return (
                  <option value={option} key={option}>
                    {option}
                  </option>
                );
              })}
            </Form.Control>
            <span className="d-inline"> items</span>
          </div>
        </Col>
      </Row>
    );
  }

  return <></>;
}

TablePagination.propTypes = {
  total: PropTypes.number.isRequired,
  pagination: PropTypes.shape({
    currentPage: PropTypes.number.isRequired,
    perPage: PropTypes.number.isRequired
  }).isRequired,
  updatePagination: PropTypes.func.isRequired
};
