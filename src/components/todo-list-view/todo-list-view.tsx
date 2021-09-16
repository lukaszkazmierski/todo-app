import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import TodoListTile from '../todo-list-tile/todo-list-tile';
import {
  ITodoRepository,
  TodoRepository,
} from '../../data/repositories/todo-repository';
import Todo from '../../models/todo';
import { ObjectID } from 'bson';
import ServerResponse from '../../models/server-response';

type TodoListViewProps = { newTodo: Promise<void> };
type TodoListViewState = { todos: Todo[]; newTodoName: string };
export default class TodoListView extends React.Component<
  TodoListViewProps,
  TodoListViewState
> {
  private readonly todoRepository: ITodoRepository;

  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodoName: '',
    };
    this.todoRepository = new TodoRepository();

    this.newTodo = this.newTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  async componentDidMount() {
    const serverResponse: ServerResponse = await this.todoRepository.getTodos();
    if (ServerResponse.isOK(serverResponse.statusCode)) {
      this.setState({
        todos: serverResponse.data.map((todo: any) => Todo.fromJson(todo)),
      });
    }
  }

  async newTodo(e) {
    e.preventDefault();
    const todo: Todo = new Todo({
      _id: new ObjectID().toString(),
      name: this.state.newTodoName,
      isDone: false,
    });
    const serverResponse: ServerResponse = await this.todoRepository.newTodo(
      todo.toJson()
    );

    if (ServerResponse.isOK(serverResponse.statusCode)) {
      const updatedTodoList = this.state.todos;
      updatedTodoList.push(todo);
      this.setState({
        todos: updatedTodoList,
        newTodoName: '',
      });
    }
  }

  async updateTodo(e) {
    const index = this.state.todos.findIndex(
      (todo: Todo) => todo._id === e.target.id
    );
    const updatedTodos = this.state.todos;
    updatedTodos[index].isDone = e.target.checked;
    const serverResponse: ServerResponse = await this.todoRepository.updateTodo(
      updatedTodos[index],
    );

    this.setState({
      todos: updatedTodos,
    });
  }

  async deleteTodo(e) {
    e.preventDefault();
    const serverResponse: ServerResponse = await this.todoRepository.deleteTodo(
      e.target.id
    );

    if (ServerResponse.isOK(serverResponse.statusCode)) {
      const updatedTodoList = this.state.todos;
      const index = updatedTodoList.findIndex(
        (todo: Todo) => todo._id === e.target.id
      );
      updatedTodoList.splice(index, 1);
      this.setState({
        todos: updatedTodoList,
      });
    }
  }

  updateInputValue(e) {
    e.preventDefault();
    this.setState({
      newTodoName: e.target.value,
    });
  }

  render() {
    return (
      <>
        <div className="flex-column text-center justify-content-center">
          <form onSubmit={this.newTodo} className="d-flex w-75 mt-4">
            <input
              type="text"
              className="form-control w-75"
              placeholder="Nazwij nowe zadanie"
              value={this.state.newTodoName}
              onChange={this.updateInputValue}
            />
            <button className="btn btn-primary w-25" type="submit">
              Dodaj
            </button>
          </form>
          

          <div className="d-flex flex-column  mt-3">
            {this.state.todos.map((todo: Todo) => (
              <TodoListTile
                key={todo._id}
                todo={todo}
                onDelete={this.deleteTodo}
                onUpdate={this.updateTodo}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}
