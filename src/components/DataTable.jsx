import React, { useEffect } from 'react';
import { Badge, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { QuestionActions } from '../redux/actions';
import PopoverTrigger from './PopoverTrigger';
import TablePagination from './TablePagination';

export default function DataTable() {
  const { questions, total, pagination, searchParams, sort } = useSelector(
    (state) => state.questions
  );

  const columns = [
    {
      text: '#',
      key: 'id',
      sortable: true
    },
    {
      text: 'Question',
      key: 'question',
      sortable: true
    },
    {
      text: 'Category',
      key: 'category',
      sortable: true
    },
    {
      text: 'State',
      key: 'state',
      sortable: true
    },
    {
      text: 'Question Group',
      key: 'group',
      sortable: true
    },
    {
      text: 'Licence',
      key: 'license',
      sortable: true
    },
    {
      text: 'Status',
      key: 'status',
      sortable: true
    },
    {
      text: 'Display',
      key: 'display',
      sortable: true
    },
    {
      text: 'Action',
      key: 'action',
      sortable: true
    }
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(QuestionActions.getQuestions());
  }, [pagination, searchParams, sort]);

  const updatePagination = (targetPage, perPage) => {
    dispatch(QuestionActions.updatePagination(targetPage, perPage));
  };

  const updateSort = (column) => {
    const order =
      sort.column === column && sort.order === 'ASC' ? 'DESC' : 'ASC';
    dispatch(QuestionActions.updateSort(column, order));
  };

  const getHeadings = () => {
    return columns.map((column) => {
      let icon = null;
      if (column.sortable) {
        if (column.key === sort.column) {
          icon = (
            <span className="sorted">
              <FontAwesomeIcon
                icon={sort.order === 'ASC' ? faCaretDown : faCaretUp}
              />
            </span>
          );
        } else {
          icon = (
            <>
              <FontAwesomeIcon icon={faCaretDown} />
              <FontAwesomeIcon icon={faCaretUp} />
            </>
          );
        }
      }

      return (
        <th
          className="data-table-heading"
          key={column.text}
          onClick={() => {
            updateSort(column.key);
          }}
        >
          {column.text}
          <span className="sort-icon">{icon}</span>
        </th>
      );
    });
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>{getHeadings()}</tr>
        </thead>
        <tbody>
          {questions.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.question}</td>
                <td>{item.category}</td>
                <td>{item.state}</td>
                <td>
                  <PopoverTrigger id={`group-${item.id}`} text={item.group} />
                </td>
                <td>
                  <PopoverTrigger
                    id={`license-${item.id}`}
                    text={item.license}
                  />
                </td>
                <td>{item.status}</td>
                <td>
                  <Badge
                    variant={`${
                      item.display === 'Published' ? 'success' : 'secondary'
                    }`}
                  >
                    {item.display}
                  </Badge>
                </td>
                <td>{item.action}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <TablePagination
        total={total}
        pagination={pagination}
        updatePagination={updatePagination}
      />
    </>
  );
}
