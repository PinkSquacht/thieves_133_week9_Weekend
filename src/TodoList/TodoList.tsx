import React, { useState } from "react";

const TodoList = () => {
  type Todo = {
    id: number;
    text: string;
  };
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      const newTodoItem: Todo = {
        id: todos.length + 1,
        text: newTodo,
      };
      setTodos([...todos, newTodoItem]);
      setNewTodo("");
    }
  };
  const removeTodo = (id: number) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
  };

  return (
    <>
      <h1>To Do list</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <div className="text-center">
        <input
          type="text"
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
    </>
  );
};
export default TodoList;
