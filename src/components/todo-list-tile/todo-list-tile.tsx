import 'bootstrap/dist/css/bootstrap.css';

const TodoListTile = ({ todo, onDelete, onUpdate }) => {
  return (
    <div className="d-flex w-75 p-2 my-auto border border-dark mt-3">
      <div className="p-2 my-auto">
        <input id={todo._id} type="checkbox" checked={todo.isDone} onChange={onUpdate}/>
      </div>
      <div className="p-2 my-auto fs-5">{todo.name}</div>
      <div className="ms-auto p-2">
        <button className="btn btn-success mx-2" type="submit">
          Edytuj
        </button>
        <button
          onClick={onDelete}
          className="btn btn-outline-danger mx-2"
          id={todo._id}
          type="submit"
        >
          Usuń
        </button>
      </div>
    </div>
  );
};

export default TodoListTile;
