import React, { useEffect, useState } from "react";

const SingleTodo = ({ todo, handleDelete, handleCheckSort }) => {
  return (
    <div>
      <span style={todo.checked ? { textDecoration: "line-through" } : null}>
        {todo.todo}
      </span>
      <button onClick={(e) => handleCheckSort(e, todo)}>Complete</button>
      <button onClick={(e) => handleDelete(e, todo)}>Delete</button>
    </div>
  );
};

export default SingleTodo;
