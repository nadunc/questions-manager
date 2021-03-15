import { QuestionTypes } from '../action-types';

const initialState = {
  questions: [],
  total: 0,
  searchParams: {
    question: '',
    category: '',
    group: '',
    license: '',
    state: '',
    status: '',
    display: ''
  },
  pagination: {
    currentPage: 1,
    perPage: 5
  },
  sort: {
    column: 'id',
    order: 'ASC'
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case QuestionTypes.GET_QUESTIONS: {
      return {
        ...state,
        questions: action.payload.questions,
        total: action.payload.total
      };
    }

    case QuestionTypes.UPDATE_PAGINATION: {
      return {
        ...state,
        pagination: { ...state.pagination, ...action.payload }
      };
    }

    case QuestionTypes.UPDATE_SEARCH_PARAMS: {
      return {
        ...state,
        searchParams: { ...state.searchParams, ...action.payload }
      };
    }

    case QuestionTypes.UPDATE_SORT: {
      return {
        ...state,
        sort: { ...state.sort, ...action.payload }
      };
    }

    default:
      return state;
  }
};
