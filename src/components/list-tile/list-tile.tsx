import { NextPage } from 'next';
import 'bootstrap/dist/css/bootstrap.css';

const TodoListTile = ({ title }) => {
  return (
    <div className="d-flex w-75 p-2 my-auto border border-dark">
      <div className="p-2 my-auto">
        <input type="checkbox" />
      </div>
      <div className="p-2 my-auto fs-5">{title}</div>
      <div className="ms-auto p-2">
        <button className="btn btn-success mx-2" type="submit">
          Edytuj
        </button>
        <button className="btn btn-outline-danger mx-2" type="submit">
          Usuń
        </button>
      </div>
    </div>
  );
};

export default TodoListTile;
