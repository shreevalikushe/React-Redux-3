import {
  ADD_TODO_ERROR,
  ADD_TODO_LOADING,
  ADD_TODO_SUCCESS,
  GET_TODO_ERROR,
  GET_TODO_LOADING,
  GET_TODO_SUCCESS,
} from "./actionTypes";

export function addTodoLoading() {
  return {
    type: ADD_TODO_LOADING,
  };
}
export function addTodoSuccess(res) {
  return {
    type: ADD_TODO_SUCCESS,
    payload: res,
  };
}
export function addTodoError() {
  return {
    type: ADD_TODO_ERROR,
  };
}

export function getTodoLoading() {
  return {
    type: GET_TODO_LOADING,
  };
}

export function getTodoSuccess(res) {
  return {
    type: GET_TODO_SUCCESS,
    payload: res,
  };
}
export function getTodoError() {
  return {
    type: GET_TODO_ERROR,
  };
}

export const getData = () => (dispatch) => {
  dispatch(getTodoLoading());
  fetch("http://localhost:3001/todos")
    .then((res) => res.json())
    .then((res) => dispatch(getTodoSuccess(res)))
    .catch((e) => dispatch(getTodoError(e)));
};

export const addData = (text) => (dispatch) => {
  dispatch(addTodoLoading());
  fetch(" http://localhost:3001/todos", {
    method: "POST",
    body: JSON.stringify({ status: false, title: text }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => dispatch(addTodoSuccess(res)))
    .catch((e) => dispatch(addTodoError(e)));
};
