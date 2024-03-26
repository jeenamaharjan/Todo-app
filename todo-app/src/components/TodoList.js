// src/TodoList.js

import React from 'react';
import TodoItem from './TodoItem.js';

const TodoList = ({ todos, onDeleteTodo, onToggleComplete }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={() => onDeleteTodo(todo.id)}
          onToggleComplete={() => onToggleComplete(todo.id)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
