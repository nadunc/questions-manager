import { QuestionTypes } from '../action-types';
import { getQuestionsMock } from '../../mocks';

export const getQuestions = () => {
  return (dispatch, getState) => {
    const state = getState().questions;

    const { questions, total } = getQuestionsMock(
      state.searchParams,
      state.pagination,
      state.sort
    );

    dispatch({
      type: QuestionTypes.GET_QUESTIONS,
      payload: { questions, total }
    });
  };
};

export const updatePagination = (currentPage, perPage) => {
  return (dispatch) => {
    dispatch({
      type: QuestionTypes.UPDATE_PAGINATION,
      payload: {
        currentPage: Number(currentPage),
        perPage: Number(perPage)
      }
    });
  };
};

export const updateSearchParams = (params) => {
  return (dispatch) => {
    dispatch({
      type: QuestionTypes.UPDATE_SEARCH_PARAMS,
      payload: { ...params }
    });
  };
};

export const updateSort = (column, order) => {
  return (dispatch) => {
    dispatch({
      type: QuestionTypes.UPDATE_SORT,
      payload: { column, order }
    });
  };
};
