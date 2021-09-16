interface TodoParameters {
  _id: string;
  name: string;
  isDone: boolean;
}

export default class Todo {
  _id: string;
  name: string;
  isDone: boolean;

  constructor({ _id, name, isDone }: TodoParameters) {
    this._id = _id;
    this.name = name;
    this.isDone = isDone;
  }

  toJson(): object {
    return {
      _id: this._id,
      name: this.name,
      isDone: this.isDone,
    };
  }

  static fromJson(obj) {
    return new Todo({
      _id: obj._id,
      name: obj.name,
      isDone: obj.isDone,
    });
  }
}
