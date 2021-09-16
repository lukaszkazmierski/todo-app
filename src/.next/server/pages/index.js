(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/navigation-bar/navigation-bar.tsx":
/*!******************************************************!*\
  !*** ./components/navigation-bar/navigation-bar.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "../node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\Praca\\PtakWarsawExpo\\todo-app\\src\\components\\navigation-bar\\navigation-bar.tsx";




const NavigationBar = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Box, {
    sx: {
      flexGrow: 1
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.AppBar, {
      className: "bg-primary",
      position: "static",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Toolbar, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Typography, {
          className: "ms-2",
          variant: "h6",
          component: "div",
          children: "Todo App"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavigationBar);

/***/ }),

/***/ "./components/todo-list-tile/todo-list-tile.tsx":
/*!******************************************************!*\
  !*** ./components/todo-list-tile/todo-list-tile.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "../node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\Praca\\PtakWarsawExpo\\todo-app\\src\\components\\todo-list-tile\\todo-list-tile.tsx";





const TodoListTile = ({
  todo,
  onDelete,
  onUpdate
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: `d-flex p-2 my-auto ${todo.isDone ? '' : 'border border-dark'} mt-3`,
    style: {
      background: todo.isDone ? 'rgba(209, 212, 211, .5)' : null
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "p-2 my-auto",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Checkbox, {
        id: todo._id,
        defaultChecked: todo.isDone,
        onChange: onUpdate
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "p-2 fs-4",
      children: todo.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "ms-auto p-2",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Button, {
        className: "border border-danger text-danger mx-2 mt-1",
        onClick: onDelete,
        id: todo._id,
        variant: "outlined",
        children: "Usu\u0144"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoListTile);

/***/ }),

/***/ "./components/todo-list-view/todo-list-view.tsx":
/*!******************************************************!*\
  !*** ./components/todo-list-view/todo-list-view.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TodoListView)
/* harmony export */ });
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "../node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _todo_list_tile_todo_list_tile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../todo-list-tile/todo-list-tile */ "./components/todo-list-tile/todo-list-tile.tsx");
/* harmony import */ var _data_repositories_todo_repository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/repositories/todo-repository */ "./data/repositories/todo-repository.tsx");
/* harmony import */ var _models_todo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/todo */ "./models/todo.tsx");
/* harmony import */ var bson__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bson */ "bson");
/* harmony import */ var bson__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bson__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _models_server_response__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/server-response */ "./models/server-response.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "D:\\Praca\\PtakWarsawExpo\\todo-app\\src\\components\\todo-list-view\\todo-list-view.tsx";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var SortTodosType;

(function (SortTodosType) {
  SortTodosType[SortTodosType["byFinished"] = 0] = "byFinished";
  SortTodosType[SortTodosType["byUnfinished"] = 1] = "byUnfinished";
})(SortTodosType || (SortTodosType = {}));

class TodoListView extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(props) {
    super(props);

    _defineProperty(this, "todoRepository", void 0);

    this.state = {
      todos: [],
      newTodoName: ''
    };
    this.todoRepository = new _data_repositories_todo_repository__WEBPACK_IMPORTED_MODULE_3__.TodoRepository();
    this.newTodo = this.newTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.sortTodos = this.sortTodos.bind(this);
  }

  async componentDidMount() {
    const serverResponse = await this.todoRepository.getTodos();

    if (_models_server_response__WEBPACK_IMPORTED_MODULE_6__.default.isOK(serverResponse.statusCode)) {
      this.setState({
        todos: serverResponse.data.map(todo => _models_todo__WEBPACK_IMPORTED_MODULE_4__.default.fromJson(todo))
      });
    }
  }

  async newTodo(e) {
    e.preventDefault();
    const todo = new _models_todo__WEBPACK_IMPORTED_MODULE_4__.default({
      _id: new bson__WEBPACK_IMPORTED_MODULE_5__.ObjectID().toString(),
      name: this.state.newTodoName,
      isDone: false
    });
    const serverResponse = await this.todoRepository.newTodo(todo.toJson());

    if (_models_server_response__WEBPACK_IMPORTED_MODULE_6__.default.isOK(serverResponse.statusCode)) {
      const updatedTodoList = this.state.todos;
      updatedTodoList.push(todo);
      this.setState({
        todos: updatedTodoList,
        newTodoName: ''
      });
    }
  }

  async updateTodo(e) {
    const index = this.state.todos.findIndex(todo => todo._id === e.target.id);
    const updatedTodos = this.state.todos;
    updatedTodos[index].isDone = e.target.checked;
    const serverResponse = await this.todoRepository.updateTodo(updatedTodos[index]);
    this.setState({
      todos: updatedTodos
    });
  }

  async deleteTodo(e) {
    e.preventDefault();
    const serverResponse = await this.todoRepository.deleteTodo(e.target.id);

    if (_models_server_response__WEBPACK_IMPORTED_MODULE_6__.default.isOK(serverResponse.statusCode)) {
      const updatedTodoList = this.state.todos;
      const index = updatedTodoList.findIndex(todo => todo._id === e.target.id);
      updatedTodoList.splice(index, 1);
      this.setState({
        todos: updatedTodoList
      });
    }
  }

  updateInputValue(e) {
    e.preventDefault();
    this.setState({
      newTodoName: e.target.value
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
          todos: sortedTodos.reverse()
        });
        break;

      case SortTodosType.byUnfinished:
        this.setState({
          todos: sortedTodos
        });
        break;
    }
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        style: {
          width: '75%',
          margin: '0 auto'
        },
        className: "todo-list",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("form", {
          onSubmit: this.newTodo,
          className: "d-flex mt-4",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("input", {
            type: "text",
            className: "form-control w-75",
            placeholder: "Nazwij nowe zadanie",
            value: this.state.newTodoName,
            onChange: this.updateInputValue
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Button, {
            className: "bg-primary text-light w-25",
            type: "submit",
            variant: "contained",
            children: "Dodaj"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.FormControl, {
          className: "w-25 mt-2",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.InputLabel, {
            id: "select-label",
            children: "Sortuj po"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Select, {
            labelId: "select-label",
            id: "select",
            onChange: this.sortTodos,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.MenuItem, {
              value: SortTodosType.byFinished,
              children: "uko\u0144czonych"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.MenuItem, {
              value: SortTodosType.byUnfinished,
              children: "nieuko\u0144czonych"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
          className: "d-flex flex-column  mt-3",
          children: this.state.todos.map(todo => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_todo_list_tile_todo_list_tile__WEBPACK_IMPORTED_MODULE_2__.default, {
            todo: todo,
            onDelete: this.deleteTodo,
            onUpdate: this.updateTodo
          }, todo._id, false, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 15
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 9
      }, this)
    }, void 0, false);
  }

}

/***/ }),

/***/ "./data/repositories/todo-repository.tsx":
/*!***********************************************!*\
  !*** ./data/repositories/todo-repository.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoRepository": () => (/* binding */ TodoRepository)
/* harmony export */ });
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/api-service */ "./services/api-service.tsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class TodoRepository {
  constructor() {
    _defineProperty(this, "mainApiUrl", 'https://api-todo-app-recruitment-task.herokuapp.com/todos');

    _defineProperty(this, "createTodoUrl", '/create');

    _defineProperty(this, "getTodosUrl", '/get');

    _defineProperty(this, "getRandomTodosUrl", '/getRand');

    _defineProperty(this, "updateTodoUrl", '/update');

    _defineProperty(this, "apiService", void 0);

    this.apiService = new _services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService();
  }

  async newTodo(todoObject) {
    const response = await this.apiService.post(`${this.mainApiUrl}${this.createTodoUrl}`, todoObject);
    return response.json();
  }

  async getTodos() {
    const response = await this.apiService.get(`${this.mainApiUrl}${this.getTodosUrl}`);
    return await response.json();
  }

  async getRandomTodos(amount) {
    const response = await this.apiService.get(`${this.mainApiUrl}${this.getRandomTodosUrl}/${amount}`);
    return await response.json();
  }

  async updateTodo(todo) {
    const response = await this.apiService.put(`${this.mainApiUrl}${this.updateTodoUrl}/${todo._id}`, todo.toJson());
    return await response.json();
  }

  async deleteTodo(_id) {
    const response = await this.apiService.delete(`${this.mainApiUrl}/${_id}`);
    return response.json();
  }

}

/***/ }),

/***/ "./models/server-response.tsx":
/*!************************************!*\
  !*** ./models/server-response.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ServerResponse)
/* harmony export */ });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class ServerResponse {
  constructor({
    statusCode,
    message,
    data
  }) {
    _defineProperty(this, "statusCode", void 0);

    _defineProperty(this, "message", void 0);

    _defineProperty(this, "data", void 0);

    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }

}

_defineProperty(ServerResponse, "isOK", statusCode => statusCode === 200);

/***/ }),

/***/ "./models/todo.tsx":
/*!*************************!*\
  !*** ./models/todo.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Todo {
  constructor({
    _id,
    name,
    isDone
  }) {
    _defineProperty(this, "_id", void 0);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "isDone", void 0);

    this._id = _id;
    this.name = name;
    this.isDone = isDone;
  }

  toJson() {
    return {
      _id: this._id,
      name: this.name,
      isDone: this.isDone
    };
  }

  static fromJson(obj) {
    return new Todo({
      _id: obj._id,
      name: obj.name,
      isDone: obj.isDone
    });
  }

}

/***/ }),

/***/ "./pages/home-page/home-page.tsx":
/*!***************************************!*\
  !*** ./pages/home-page/home-page.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var _components_todo_list_view_todo_list_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/todo-list-view/todo-list-view */ "./components/todo-list-view/todo-list-view.tsx");
/* harmony import */ var _components_navigation_bar_navigation_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/navigation-bar/navigation-bar */ "./components/navigation-bar/navigation-bar.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\Praca\\PtakWarsawExpo\\todo-app\\src\\pages\\home-page\\home-page.tsx";





class HomePage extends (react__WEBPACK_IMPORTED_MODULE_2___default().Component) {
  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_navigation_bar_navigation_bar__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_todo_list_view_todo_list_view__WEBPACK_IMPORTED_MODULE_0__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this)]
    }, void 0, true);
  }

}

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home_page_home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page/home-page */ "./pages/home-page/home-page.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Praca\\PtakWarsawExpo\\todo-app\\src\\pages\\index.tsx";



const MainPage = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_home_page_home_page__WEBPACK_IMPORTED_MODULE_0__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainPage);

/***/ }),

/***/ "./services/api-service.tsx":
/*!**********************************!*\
  !*** ./services/api-service.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class ApiService {
  constructor() {
    _defineProperty(this, "headers", {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    });
  }

  post(url, body) {
    return fetch(url, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(body)
    });
  }

  get(url) {
    return fetch(url, {
      method: 'GET',
      headers: this.headers
    });
  }

  put(url, body) {
    return fetch(url, {
      method: 'PUT',
      headers: this.headers,
      body: JSON.stringify(body)
    });
  }

  delete(url) {
    return fetch(url, {
      method: 'DELETE',
      headers: this.headers
    });
  }

}

/***/ }),

/***/ "../node_modules/bootstrap/dist/css/bootstrap.css":
/*!********************************************************!*\
  !*** ../node_modules/bootstrap/dist/css/bootstrap.css ***!
  \********************************************************/
/***/ (() => {



/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core");

/***/ }),

/***/ "bson":
/*!***********************!*\
  !*** external "bson" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("bson");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdmlnYXRpb24tYmFyL25hdmlnYXRpb24tYmFyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RvZG8tbGlzdC10aWxlL3RvZG8tbGlzdC10aWxlLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RvZG8tbGlzdC12aWV3L3RvZG8tbGlzdC12aWV3LnRzeCIsIndlYnBhY2s6Ly8vLi9kYXRhL3JlcG9zaXRvcmllcy90b2RvLXJlcG9zaXRvcnkudHN4Iiwid2VicGFjazovLy8uL21vZGVscy9zZXJ2ZXItcmVzcG9uc2UudHN4Iiwid2VicGFjazovLy8uL21vZGVscy90b2RvLnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9ob21lLXBhZ2UvaG9tZS1wYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvYXBpLXNlcnZpY2UudHN4Iiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5jc3MiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJic29uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzJztcclxuaW1wb3J0IHsgQXBwQmFyLCBCb3gsIEljb25CdXR0b24sIFRvb2xiYXIgLCBUeXBvZ3JhcGh5LCBCdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5jb25zdCBOYXZpZ2F0aW9uQmFyOiBOZXh0UGFnZSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBzeD17eyBmbGV4R3JvdzogMSB9fT5cclxuICAgICAgPEFwcEJhciBjbGFzc05hbWU9XCJiZy1wcmltYXJ5XCIgcG9zaXRpb249XCJzdGF0aWNcIj5cclxuICAgICAgICA8VG9vbGJhcj5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT1cIm1zLTJcIiB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJkaXZcIiA+XHJcbiAgICAgICAgICAgIFRvZG8gQXBwXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICA8L0FwcEJhcj5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uQmFyO1xyXG4iLCJpbXBvcnQgeyBCdXR0b24sIENoZWNrYm94IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFRvZG9MaXN0VGlsZSA9ICh7IHRvZG8sIG9uRGVsZXRlLCBvblVwZGF0ZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtgZC1mbGV4IHAtMiBteS1hdXRvICR7XHJcbiAgICAgICAgdG9kby5pc0RvbmUgPyAnJyA6ICdib3JkZXIgYm9yZGVyLWRhcmsnXHJcbiAgICAgIH0gbXQtM2B9XHJcbiAgICAgIHN0eWxlPXt7IGJhY2tncm91bmQ6IHRvZG8uaXNEb25lID8gJ3JnYmEoMjA5LCAyMTIsIDIxMSwgLjUpJyA6IG51bGwgfX1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIgbXktYXV0b1wiPlxyXG4gICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgaWQ9e3RvZG8uX2lkfVxyXG4gICAgICAgICAgZGVmYXVsdENoZWNrZWQ9e3RvZG8uaXNEb25lfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uVXBkYXRlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMiBmcy00XCI+e3RvZG8ubmFtZX08L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtcy1hdXRvIHAtMlwiPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItZGFuZ2VyIHRleHQtZGFuZ2VyIG14LTIgbXQtMVwiXHJcbiAgICAgICAgICBvbkNsaWNrPXtvbkRlbGV0ZX1cclxuICAgICAgICAgIGlkPXt0b2RvLl9pZH1cclxuICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgVXN1xYRcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9kb0xpc3RUaWxlO1xyXG4iLCJpbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFRvZG9MaXN0VGlsZSBmcm9tICcuLi90b2RvLWxpc3QtdGlsZS90b2RvLWxpc3QtdGlsZSc7XHJcbmltcG9ydCB7XHJcbiAgSVRvZG9SZXBvc2l0b3J5LFxyXG4gIFRvZG9SZXBvc2l0b3J5LFxyXG59IGZyb20gJy4uLy4uL2RhdGEvcmVwb3NpdG9yaWVzL3RvZG8tcmVwb3NpdG9yeSc7XHJcbmltcG9ydCBUb2RvIGZyb20gJy4uLy4uL21vZGVscy90b2RvJztcclxuaW1wb3J0IHsgT2JqZWN0SUQgfSBmcm9tICdic29uJztcclxuaW1wb3J0IFNlcnZlclJlc3BvbnNlIGZyb20gJy4uLy4uL21vZGVscy9zZXJ2ZXItcmVzcG9uc2UnO1xyXG5pbXBvcnQge1xyXG4gIEJ1dHRvbixcclxuICBGb3JtQ29udHJvbCxcclxuICBJbnB1dExhYmVsLFxyXG4gIE1lbnVJdGVtLFxyXG4gIFNlbGVjdCxcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5lbnVtIFNvcnRUb2Rvc1R5cGUge1xyXG4gIGJ5RmluaXNoZWQsXHJcbiAgYnlVbmZpbmlzaGVkLFxyXG59XHJcblxyXG50eXBlIFRvZG9MaXN0Vmlld1Byb3BzID0geyBuZXdUb2RvPzogUHJvbWlzZTx2b2lkPiB9O1xyXG50eXBlIFRvZG9MaXN0Vmlld1N0YXRlID0geyB0b2RvczogVG9kb1tdOyBuZXdUb2RvTmFtZTogc3RyaW5nIH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvTGlzdFZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XHJcbiAgVG9kb0xpc3RWaWV3UHJvcHMsXHJcbiAgVG9kb0xpc3RWaWV3U3RhdGVcclxuPiB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSB0b2RvUmVwb3NpdG9yeTogSVRvZG9SZXBvc2l0b3J5O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgdG9kb3M6IFtdLFxyXG4gICAgICBuZXdUb2RvTmFtZTogJycsXHJcbiAgICB9O1xyXG4gICAgdGhpcy50b2RvUmVwb3NpdG9yeSA9IG5ldyBUb2RvUmVwb3NpdG9yeSgpO1xyXG5cclxuICAgIHRoaXMubmV3VG9kbyA9IHRoaXMubmV3VG9kby5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy51cGRhdGVUb2RvID0gdGhpcy51cGRhdGVUb2RvLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnVwZGF0ZUlucHV0VmFsdWUgPSB0aGlzLnVwZGF0ZUlucHV0VmFsdWUuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZGVsZXRlVG9kbyA9IHRoaXMuZGVsZXRlVG9kby5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zb3J0VG9kb3MgPSB0aGlzLnNvcnRUb2Rvcy5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBjb25zdCBzZXJ2ZXJSZXNwb25zZTogU2VydmVyUmVzcG9uc2UgPSBhd2FpdCB0aGlzLnRvZG9SZXBvc2l0b3J5LmdldFRvZG9zKCk7XHJcbiAgICBpZiAoU2VydmVyUmVzcG9uc2UuaXNPSyhzZXJ2ZXJSZXNwb25zZS5zdGF0dXNDb2RlKSkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICB0b2Rvczogc2VydmVyUmVzcG9uc2UuZGF0YS5tYXAoKHRvZG86IGFueSkgPT4gVG9kby5mcm9tSnNvbih0b2RvKSksXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgbmV3VG9kbyhlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCB0b2RvOiBUb2RvID0gbmV3IFRvZG8oe1xyXG4gICAgICBfaWQ6IG5ldyBPYmplY3RJRCgpLnRvU3RyaW5nKCksXHJcbiAgICAgIG5hbWU6IHRoaXMuc3RhdGUubmV3VG9kb05hbWUsXHJcbiAgICAgIGlzRG9uZTogZmFsc2UsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHNlcnZlclJlc3BvbnNlOiBTZXJ2ZXJSZXNwb25zZSA9IGF3YWl0IHRoaXMudG9kb1JlcG9zaXRvcnkubmV3VG9kbyhcclxuICAgICAgdG9kby50b0pzb24oKSxcclxuICAgICk7XHJcblxyXG4gICAgaWYgKFNlcnZlclJlc3BvbnNlLmlzT0soc2VydmVyUmVzcG9uc2Uuc3RhdHVzQ29kZSkpIHtcclxuICAgICAgY29uc3QgdXBkYXRlZFRvZG9MaXN0ID0gdGhpcy5zdGF0ZS50b2RvcztcclxuICAgICAgdXBkYXRlZFRvZG9MaXN0LnB1c2godG9kbyk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHRvZG9zOiB1cGRhdGVkVG9kb0xpc3QsXHJcbiAgICAgICAgbmV3VG9kb05hbWU6ICcnLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIHVwZGF0ZVRvZG8oZSkge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnN0YXRlLnRvZG9zLmZpbmRJbmRleChcclxuICAgICAgKHRvZG86IFRvZG8pID0+IHRvZG8uX2lkID09PSBlLnRhcmdldC5pZCxcclxuICAgICk7XHJcbiAgICBjb25zdCB1cGRhdGVkVG9kb3MgPSB0aGlzLnN0YXRlLnRvZG9zO1xyXG4gICAgdXBkYXRlZFRvZG9zW2luZGV4XS5pc0RvbmUgPSBlLnRhcmdldC5jaGVja2VkO1xyXG4gICAgY29uc3Qgc2VydmVyUmVzcG9uc2U6IFNlcnZlclJlc3BvbnNlID0gYXdhaXQgdGhpcy50b2RvUmVwb3NpdG9yeS51cGRhdGVUb2RvKFxyXG4gICAgICB1cGRhdGVkVG9kb3NbaW5kZXhdLFxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgdG9kb3M6IHVwZGF0ZWRUb2RvcyxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZGVsZXRlVG9kbyhlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBzZXJ2ZXJSZXNwb25zZTogU2VydmVyUmVzcG9uc2UgPSBhd2FpdCB0aGlzLnRvZG9SZXBvc2l0b3J5LmRlbGV0ZVRvZG8oXHJcbiAgICAgIGUudGFyZ2V0LmlkLFxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAoU2VydmVyUmVzcG9uc2UuaXNPSyhzZXJ2ZXJSZXNwb25zZS5zdGF0dXNDb2RlKSkge1xyXG4gICAgICBjb25zdCB1cGRhdGVkVG9kb0xpc3QgPSB0aGlzLnN0YXRlLnRvZG9zO1xyXG4gICAgICBjb25zdCBpbmRleCA9IHVwZGF0ZWRUb2RvTGlzdC5maW5kSW5kZXgoXHJcbiAgICAgICAgKHRvZG86IFRvZG8pID0+IHRvZG8uX2lkID09PSBlLnRhcmdldC5pZCxcclxuICAgICAgKTtcclxuICAgICAgdXBkYXRlZFRvZG9MaXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHRvZG9zOiB1cGRhdGVkVG9kb0xpc3QsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlSW5wdXRWYWx1ZShlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgbmV3VG9kb05hbWU6IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzb3J0VG9kb3MoZSkge1xyXG4gICAgY29uc3Qgc29ydGVkVG9kb3MgPSB0aGlzLnN0YXRlLnRvZG9zLnNvcnQoKGwsIHIpID0+IHtcclxuICAgICAgaWYgKGwuaXNEb25lICYmICFyLmlzRG9uZSkge1xyXG4gICAgICAgIHJldHVybiAxO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiAtMTtcclxuICAgIH0pO1xyXG4gICAgc3dpdGNoIChlLnRhcmdldC52YWx1ZSkge1xyXG4gICAgICBjYXNlIFNvcnRUb2Rvc1R5cGUuYnlGaW5pc2hlZDpcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIHRvZG9zOiBzb3J0ZWRUb2Rvcy5yZXZlcnNlKCksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgU29ydFRvZG9zVHlwZS5ieVVuZmluaXNoZWQ6XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICB0b2Rvczogc29ydGVkVG9kb3MsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICc3NSUnLCBtYXJnaW46ICcwIGF1dG8nIH19IGNsYXNzTmFtZT1cInRvZG8tbGlzdFwiPlxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMubmV3VG9kb30gY2xhc3NOYW1lPVwiZC1mbGV4IG10LTRcIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCB3LTc1XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hendpaiBub3dlIHphZGFuaWVcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5ld1RvZG9OYW1lfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZUlucHV0VmFsdWV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1wcmltYXJ5IHRleHQtbGlnaHQgdy0yNVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBEb2RhalxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICA8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPVwidy0yNSBtdC0yXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwic2VsZWN0LWxhYmVsXCI+U29ydHVqIHBvPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgbGFiZWxJZD1cInNlbGVjdC1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJzZWxlY3RcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnNvcnRUb2Rvc31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17U29ydFRvZG9zVHlwZS5ieUZpbmlzaGVkfT51a2/FhGN6b255Y2g8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17U29ydFRvZG9zVHlwZS5ieVVuZmluaXNoZWR9PlxyXG4gICAgICAgICAgICAgICAgbmlldWtvxYRjem9ueWNoXHJcbiAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uICBtdC0zXCI+XHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRvZG9zLm1hcCgodG9kbzogVG9kbykgPT4gKFxyXG4gICAgICAgICAgICAgIDxUb2RvTGlzdFRpbGVcclxuICAgICAgICAgICAgICAgIGtleT17dG9kby5faWR9XHJcbiAgICAgICAgICAgICAgICB0b2RvPXt0b2RvfVxyXG4gICAgICAgICAgICAgICAgb25EZWxldGU9e3RoaXMuZGVsZXRlVG9kb31cclxuICAgICAgICAgICAgICAgIG9uVXBkYXRlPXt0aGlzLnVwZGF0ZVRvZG99XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgU2VydmVyUmVzcG9uc2UgZnJvbSAnLi4vLi4vbW9kZWxzL3NlcnZlci1yZXNwb25zZSc7XHJcbmltcG9ydCBUb2RvIGZyb20gJy4uLy4uL21vZGVscy90b2RvJztcclxuaW1wb3J0IHsgQXBpU2VydmljZSwgSUFwaVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGktc2VydmljZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElUb2RvUmVwb3NpdG9yeSB7XHJcbiAgbmV3VG9kbyh0b2RvT2JqZWN0OiBvYmplY3QpOiBQcm9taXNlPFNlcnZlclJlc3BvbnNlPjtcclxuICBnZXRUb2RvcygpOiBQcm9taXNlPFNlcnZlclJlc3BvbnNlPjtcclxuICBnZXRSYW5kb21Ub2RvcyhhbW91bnQ6IG51bWJlcik6IFByb21pc2U8U2VydmVyUmVzcG9uc2U+O1xyXG4gIHVwZGF0ZVRvZG8odG9kbzogVG9kbyk6IFByb21pc2U8U2VydmVyUmVzcG9uc2U+O1xyXG4gIGRlbGV0ZVRvZG8oX2lkOiBudW1iZXIpOiBQcm9taXNlPFNlcnZlclJlc3BvbnNlPjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRvZG9SZXBvc2l0b3J5IGltcGxlbWVudHMgSVRvZG9SZXBvc2l0b3J5IHtcclxuICBwcml2YXRlIHJlYWRvbmx5IG1haW5BcGlVcmw6IHN0cmluZyA9XHJcbiAgICAnaHR0cHM6Ly9hcGktdG9kby1hcHAtcmVjcnVpdG1lbnQtdGFzay5oZXJva3VhcHAuY29tL3RvZG9zJztcclxuICBwcml2YXRlIHJlYWRvbmx5IGNyZWF0ZVRvZG9Vcmw6IHN0cmluZyA9ICcvY3JlYXRlJztcclxuICBwcml2YXRlIHJlYWRvbmx5IGdldFRvZG9zVXJsOiBzdHJpbmcgPSAnL2dldCc7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBnZXRSYW5kb21Ub2Rvc1VybDogc3RyaW5nID0gJy9nZXRSYW5kJztcclxuICBwcml2YXRlIHJlYWRvbmx5IHVwZGF0ZVRvZG9Vcmw6IHN0cmluZyA9ICcvdXBkYXRlJztcclxuICBwcml2YXRlIHJlYWRvbmx5IGFwaVNlcnZpY2U6IElBcGlTZXJ2aWNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuYXBpU2VydmljZSA9IG5ldyBBcGlTZXJ2aWNlKCk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBuZXdUb2RvKHRvZG9PYmplY3Q6IG9iamVjdCk6IFByb21pc2U8U2VydmVyUmVzcG9uc2U+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5hcGlTZXJ2aWNlLnBvc3QoXHJcbiAgICAgIGAke3RoaXMubWFpbkFwaVVybH0ke3RoaXMuY3JlYXRlVG9kb1VybH1gLFxyXG4gICAgICB0b2RvT2JqZWN0LFxyXG4gICAgKTtcclxuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXRUb2RvcygpOiBQcm9taXNlPFNlcnZlclJlc3BvbnNlPiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuYXBpU2VydmljZS5nZXQoXHJcbiAgICAgIGAke3RoaXMubWFpbkFwaVVybH0ke3RoaXMuZ2V0VG9kb3NVcmx9YCxcclxuICAgICk7XHJcbiAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0UmFuZG9tVG9kb3MoYW1vdW50OiBudW1iZXIpOiBQcm9taXNlPFNlcnZlclJlc3BvbnNlPiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuYXBpU2VydmljZS5nZXQoXHJcbiAgICAgIGAke3RoaXMubWFpbkFwaVVybH0ke3RoaXMuZ2V0UmFuZG9tVG9kb3NVcmx9LyR7YW1vdW50fWAsXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIHVwZGF0ZVRvZG8odG9kbzogVG9kbyk6IFByb21pc2U8U2VydmVyUmVzcG9uc2U+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5hcGlTZXJ2aWNlLnB1dChcclxuICAgICAgYCR7dGhpcy5tYWluQXBpVXJsfSR7dGhpcy51cGRhdGVUb2RvVXJsfS8ke3RvZG8uX2lkfWAsXHJcbiAgICAgIHRvZG8udG9Kc29uKCksXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGRlbGV0ZVRvZG8oX2lkOiBudW1iZXIpOiBQcm9taXNlPFNlcnZlclJlc3BvbnNlPiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuYXBpU2VydmljZS5kZWxldGUoYCR7dGhpcy5tYWluQXBpVXJsfS8ke19pZH1gKTtcclxuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgfVxyXG59XHJcbiIsImludGVyZmFjZSBTZXJ2ZXJSZXNwb25zZVBhcmFtcyB7XHJcbiAgc3RhdHVzQ29kZTogbnVtYmVyO1xyXG4gIG1lc3NhZ2U6IHN0cmluZztcclxuICBkYXRhPzogYW55O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXJ2ZXJSZXNwb25zZSB7XHJcbiAgc3RhdHVzQ29kZTogbnVtYmVyO1xyXG4gIG1lc3NhZ2U6IHN0cmluZztcclxuICBkYXRhPzogYW55O1xyXG5cclxuICBjb25zdHJ1Y3Rvcih7IHN0YXR1c0NvZGUsIG1lc3NhZ2UsIGRhdGEgfTogU2VydmVyUmVzcG9uc2VQYXJhbXMpIHtcclxuICAgIHRoaXMuc3RhdHVzQ29kZSA9IHN0YXR1c0NvZGU7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xyXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBpc09LID0gKHN0YXR1c0NvZGU6IG51bWJlcik6IGJvb2xlYW4gPT4gc3RhdHVzQ29kZSA9PT0gMjAwO1xyXG59XHJcbiIsImludGVyZmFjZSBUb2RvUGFyYW1ldGVycyB7XHJcbiAgX2lkOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGlzRG9uZTogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kbyB7XHJcbiAgX2lkOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGlzRG9uZTogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoeyBfaWQsIG5hbWUsIGlzRG9uZSB9OiBUb2RvUGFyYW1ldGVycykge1xyXG4gICAgdGhpcy5faWQgPSBfaWQ7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5pc0RvbmUgPSBpc0RvbmU7XHJcbiAgfVxyXG5cclxuICB0b0pzb24oKTogb2JqZWN0IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIF9pZDogdGhpcy5faWQsXHJcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgaXNEb25lOiB0aGlzLmlzRG9uZSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZnJvbUpzb24ob2JqKSB7XHJcbiAgICByZXR1cm4gbmV3IFRvZG8oe1xyXG4gICAgICBfaWQ6IG9iai5faWQsXHJcbiAgICAgIG5hbWU6IG9iai5uYW1lLFxyXG4gICAgICBpc0RvbmU6IG9iai5pc0RvbmUsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFRvZG9MaXN0VmlldyBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RvZG8tbGlzdC12aWV3L3RvZG8tbGlzdC12aWV3JztcclxuaW1wb3J0IE5hdmlnYXRpb25CYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9uYXZpZ2F0aW9uLWJhci9uYXZpZ2F0aW9uLWJhcic7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPE5hdmlnYXRpb25CYXIgLz5cclxuICAgICAgICA8VG9kb0xpc3RWaWV3Lz5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgTmF2aWdhdGlvbkJhciBmcm9tICcuLi9jb21wb25lbnRzL25hdmlnYXRpb24tYmFyL25hdmlnYXRpb24tYmFyJztcbmltcG9ydCBIb21lUGFnZSBmcm9tICcuL2hvbWUtcGFnZS9ob21lLXBhZ2UnO1xuY29uc3QgTWFpblBhZ2U6IE5leHRQYWdlID0gKCkgPT4ge1xuICByZXR1cm4gPEhvbWVQYWdlLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYWluUGFnZTtcbiIsImV4cG9ydCBpbnRlcmZhY2UgSUFwaVNlcnZpY2Uge1xyXG4gIHBvc3QodXJsOiBzdHJpbmcsIGJvZHk6IGFueSk7XHJcbiAgZ2V0KHVybDogc3RyaW5nKTtcclxuICBwdXQodXJsOiBzdHJpbmcsIGJvZHk6IGFueSk7XHJcbiAgZGVsZXRlKHVybDogc3RyaW5nKTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwaVNlcnZpY2UgaW1wbGVtZW50cyBJQXBpU2VydmljZSB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBoZWFkZXJzID0ge1xyXG4gICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gIH07XHJcblxyXG4gIHBvc3QodXJsOiBzdHJpbmcsIGJvZHk6IGFueSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gZmV0Y2godXJsLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXQodXJsOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIGZldGNoKHVybCwge1xyXG4gICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1dCh1cmw6IHN0cmluZywgYm9keTogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiBmZXRjaCh1cmwsIHtcclxuICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlKHVybDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiBmZXRjaCh1cmwsIHtcclxuICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsIiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJzb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJBcHBCYXIiLCJCb3giLCJUb29sYmFyIiwiVHlwb2dyYXBoeSIsIk5hdmlnYXRpb25CYXIiLCJmbGV4R3JvdyIsIkJ1dHRvbiIsIkNoZWNrYm94IiwiUmVhY3QiLCJUb2RvTGlzdFRpbGUiLCJ0b2RvIiwib25EZWxldGUiLCJvblVwZGF0ZSIsImlzRG9uZSIsImJhY2tncm91bmQiLCJfaWQiLCJuYW1lIiwiVG9kb1JlcG9zaXRvcnkiLCJUb2RvIiwiT2JqZWN0SUQiLCJTZXJ2ZXJSZXNwb25zZSIsIkZvcm1Db250cm9sIiwiSW5wdXRMYWJlbCIsIk1lbnVJdGVtIiwiU2VsZWN0IiwiU29ydFRvZG9zVHlwZSIsIlRvZG9MaXN0VmlldyIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsInRvZG9zIiwibmV3VG9kb05hbWUiLCJ0b2RvUmVwb3NpdG9yeSIsIm5ld1RvZG8iLCJiaW5kIiwidXBkYXRlVG9kbyIsInVwZGF0ZUlucHV0VmFsdWUiLCJkZWxldGVUb2RvIiwic29ydFRvZG9zIiwiY29tcG9uZW50RGlkTW91bnQiLCJzZXJ2ZXJSZXNwb25zZSIsImdldFRvZG9zIiwiaXNPSyIsInN0YXR1c0NvZGUiLCJzZXRTdGF0ZSIsImRhdGEiLCJtYXAiLCJmcm9tSnNvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRvU3RyaW5nIiwidG9Kc29uIiwidXBkYXRlZFRvZG9MaXN0IiwicHVzaCIsImluZGV4IiwiZmluZEluZGV4IiwidGFyZ2V0IiwiaWQiLCJ1cGRhdGVkVG9kb3MiLCJjaGVja2VkIiwic3BsaWNlIiwidmFsdWUiLCJzb3J0ZWRUb2RvcyIsInNvcnQiLCJsIiwiciIsImJ5RmluaXNoZWQiLCJyZXZlcnNlIiwiYnlVbmZpbmlzaGVkIiwicmVuZGVyIiwid2lkdGgiLCJtYXJnaW4iLCJBcGlTZXJ2aWNlIiwiYXBpU2VydmljZSIsInRvZG9PYmplY3QiLCJyZXNwb25zZSIsInBvc3QiLCJtYWluQXBpVXJsIiwiY3JlYXRlVG9kb1VybCIsImpzb24iLCJnZXQiLCJnZXRUb2Rvc1VybCIsImdldFJhbmRvbVRvZG9zIiwiYW1vdW50IiwiZ2V0UmFuZG9tVG9kb3NVcmwiLCJwdXQiLCJ1cGRhdGVUb2RvVXJsIiwiZGVsZXRlIiwibWVzc2FnZSIsIm9iaiIsIkhvbWVQYWdlIiwiTWFpblBhZ2UiLCJBY2NlcHQiLCJ1cmwiLCJib2R5IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=