import { Button, Checkbox } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';

const TodoListTile = ({ todo, onDelete, onUpdate }) => {
  return (
    <div
      className={`d-flex p-2 my-auto ${
        todo.isDone ? '' : 'border border-dark'
      } mt-3`}
      style={{ background: todo.isDone ? 'rgba(209, 212, 211, .5)' : null }}
    >
      <div className="p-2 my-auto">
        <Checkbox
          id={todo._id}
          defaultChecked={todo.isDone}
          onChange={onUpdate}
        />
      </div>
      <div className="p-2 fs-4">{todo.name}</div>
      <div className="ms-auto p-2">
        <Button
          className="border border-danger text-danger mx-2 mt-1"
          onClick={onDelete}
          id={todo._id}
          variant="outlined"
        >
          Usuń
        </Button>
      </div>
    </div>
  );
};

export default TodoListTile;
