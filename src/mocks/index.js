/**
 * Mock data fetching functions
 */
import _ from 'lodash';
import { questions } from './data';

const getQuestionsMock = (searchParams, pagination, sort) => {
  const {
    question,
    category,
    group,
    license,
    state,
    status,
    display
  } = searchParams;
  const { currentPage, perPage } = pagination;
  const { column, order } = sort;

  const start = (currentPage - 1) * perPage;
  const end = start + perPage;

  const filtered = questions.filter((item) => {
    let matched = true;

    if (question || question !== '') {
      if (item.question.indexOf(question) === -1) {
        matched = false;
      }
    }

    if (category || category !== '') {
      if (item.category !== category) {
        matched = false;
      }
    }

    if (group || group !== '') {
      if (item.group !== group) {
        matched = false;
      }
    }

    if (license || license !== '') {
      if (item.license !== license) {
        matched = false;
      }
    }

    if (state || state !== '') {
      if (item.state !== state) {
        matched = false;
      }
    }

    if (status || status !== '') {
      if (item.status !== status) {
        matched = false;
      }
    }

    if (display || display !== '') {
      if (item.display !== display) {
        matched = false;
      }
    }

    return matched;
  });

  let sorted = _.sortBy(filtered, [column]);
  if (order === 'DESC') {
    sorted = sorted.reverse();
  }

  return { questions: sorted.slice(start, end), total: filtered.length };
};

const getUniqueValuesByProperty = (property) => {
  return questions
    .map((question) => question[property])
    .filter((value, index, self) => {
      return self.indexOf(value) === index;
    });
};

const getDropdownValues = () => {
  return {
    categories: getUniqueValuesByProperty('category'),
    licenses: getUniqueValuesByProperty('license'),
    states: getUniqueValuesByProperty('state'),
    statuses: getUniqueValuesByProperty('status'),
    display: getUniqueValuesByProperty('display')
  };
};

export { getQuestionsMock, getDropdownValues };
