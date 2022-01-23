import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addData,
  addTodoError,
  addTodoLoading,
  addTodoSuccess,
  getData,
  getTodoError,
  getTodoLoading,
  getTodoSuccess,
} from "../store/actions";
export function Todos() {
  const { loading, error, todos } = useSelector((state) => ({
    todos: state.todos,
    loading: state.loading,
    error: state.error,
  }));
  useEffect(() => {
    getTodo();
  }, []);
  const addTodo = () => {
    // dispatch(addTodoLoading());
    // fetch(" http://localhost:3001/todos", {
    //   method: "POST",
    //   body: JSON.stringify({ status: false, title: text }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((res) => dispatch(addTodoSuccess(res)))
    //   .catch((e) => dispatch(addTodoError(e)));
    dispatch(addData(text));
    getTodo();
  };
  const getTodo = () => {
    // dispatch(getTodoLoading());
    // fetch("http://localhost:3001/todos")
    //   .then((res) => res.json())
    //   .then((res) => dispatch(getTodoSuccess(res)))
    //   .catch((e) => dispatch(getTodoError(e)));
    dispatch(getData());
  };
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  return loading ? (
    <div>...loading</div>
  ) : error ? (
    <div>Something went wrong</div>
  ) : (
    <div>
      <h1>Todo Application using Middleware</h1>
      <input onChange={(e) => setText(e.target.value)} />
      <button onClick={() => addTodo()}>Add</button>
      {todos.map((e) => (
        <div key={e.id}>
          {" "}
          <h3>
            {e.title} - {e.status ? "Done" : "Not Done"}{" "}
          </h3>{" "}
        </div>
      ))}
    </div>
  );
}
