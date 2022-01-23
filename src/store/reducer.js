import {
  ADD_TODO_ERROR,
  ADD_TODO_LOADING,
  ADD_TODO_SUCCESS,
  GET_TODO_ERROR,
  GET_TODO_LOADING,
  GET_TODO_SUCCESS,
} from "./actionTypes";

const init = { loading: false, error: false, todos: [] };
export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADD_TODO_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_TODO_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case ADD_TODO_SUCCESS: {
      return {
        ...state,
        todos: [...state.todos, payload],
        loading: false,
        error: false,
      };
    }
    case GET_TODO_SUCCESS: {
      return {
        ...state,
        todos: payload,
        loading: false,
        error: false,
      };
    }
    case GET_TODO_ERROR: {
      return {
        ...state,
        error: true,
        loading: false,
      };
    }
    case ADD_TODO_ERROR: {
      return {
        ...state,
        error: true,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};
