import ServerResponse from '../../models/server-response';
import Todo from '../../models/todo';
import { ApiService, IApiService } from '../../services/api-service';

export interface ITodoRepository {
  newTodo(todoObject: object): Promise<ServerResponse>;
  getTodos(): Promise<ServerResponse>;
  getRandomTodos(amount: number): Promise<ServerResponse>;
  updateTodo(todo: Todo): Promise<ServerResponse>;
  deleteTodo(_id: number): Promise<ServerResponse>;
}

export class TodoRepository implements ITodoRepository {
  private readonly mainApiUrl: string =
    'https://api-todo-app-recruitment-task.herokuapp.com/todos';
  private readonly createTodoUrl: string = '/create';
  private readonly getTodosUrl: string = '/get';
  private readonly getRandomTodosUrl: string = '/getRand';
  private readonly updateTodoUrl: string = '/update';
  private readonly apiService: IApiService;

  constructor() {
    this.apiService = new ApiService();
  }

  async newTodo(todoObject: object): Promise<ServerResponse> {
    const response = await this.apiService.post(
      `${this.mainApiUrl}${this.createTodoUrl}`,
      todoObject,
    );
    return response.json();
  }

  async getTodos(): Promise<ServerResponse> {
    const response = await this.apiService.get(
      `${this.mainApiUrl}${this.getTodosUrl}`,
    );
    return await response.json();
  }

  async getRandomTodos(amount: number): Promise<ServerResponse> {
    const response = await this.apiService.get(
      `${this.mainApiUrl}${this.getRandomTodosUrl}/${amount}`,
    );
    return await response.json();
  }

  async updateTodo(todo: Todo): Promise<ServerResponse> {
    const response = await this.apiService.put(
      `${this.mainApiUrl}${this.updateTodoUrl}/${todo._id}`,
      todo.toJson(),
    );
    return await response.json();
  }

  async deleteTodo(_id: number): Promise<ServerResponse> {
    const response = await this.apiService.delete(`${this.mainApiUrl}/${_id}`);
    return response.json();
  }
}
