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
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core';

enum SortTodosType {
  byFinished,
  byUnfinished,
}

type TodoListViewProps = { newTodo?: Promise<void> };
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
    this.sortTodos = this.sortTodos.bind(this);
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
      todo.toJson(),
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
      (todo: Todo) => todo._id === e.target.id,
    );
    const updatedTodos = this.state.todos;
    updatedTodos[index].isDone = e.target.checked;
    const serverResponse: ServerResponse = await this.todoRepository.updateTodo(
      updatedTodos[index],
    );

    console.log(this.state.todos.filter(todo => todo.isDone))

    this.setState({
      todos: updatedTodos,
    });
  }

  async deleteTodo(e) {
    e.preventDefault();
    const serverResponse: ServerResponse = await this.todoRepository.deleteTodo(
      e.target.id,
    );

    if (ServerResponse.isOK(serverResponse.statusCode)) {
      const updatedTodoList = this.state.todos;
      const index = updatedTodoList.findIndex(
        (todo: Todo) => todo._id === e.target.id,
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

  sortTodos(e) {
    const sortedTodos = this.state.todos.sort((l, r) => {
      if (l.isDone && !r.isDone) {
        return 1;
      }
      return -1;
    });
    switch (e.target.value) {
      case SortTodosType.byFinished:
        this.setState({
          todos: sortedTodos.reverse(),
        });
        break;
      case SortTodosType.byUnfinished:
        this.setState({
          todos: sortedTodos,
        });
        break;
    }
  }

  render() {
    return (
      <>
        <div style={{ width: '75%', margin: '0 auto' }} className="todo-list">
          <form onSubmit={this.newTodo} className="d-flex mt-4">
            <input
              type="text"
              className="form-control w-75"
              placeholder="Nazwij nowe zadanie"
              value={this.state.newTodoName}
              onChange={this.updateInputValue}
            />
            <Button
              className="bg-primary text-light w-25"
              type="submit"
              variant="contained"
            >
              Dodaj
            </Button>
          </form>

          <FormControl className="w-25 mt-2">
            <InputLabel id="select-label">Sortuj po</InputLabel>
            <Select
              labelId="select-label"
              id="select"
              onChange={this.sortTodos}
            >
              <MenuItem value={SortTodosType.byFinished}>ukończonych</MenuItem>
              <MenuItem value={SortTodosType.byUnfinished}>
                nieukończonych
              </MenuItem>
            </Select>
          </FormControl>

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
