import { NextPage } from 'next';
import 'bootstrap/dist/css/bootstrap.css';

import TodoListTile from '../list-tile/list-tile';

const TodoListView: NextPage = () => {
  return (
    <div className="d-flex justify-content-center mt-5">
        <TodoListTile title="List"/>
    </div>
  );
};

export default TodoListView;
