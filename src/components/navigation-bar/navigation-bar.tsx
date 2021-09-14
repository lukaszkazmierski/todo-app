import { NextPage } from 'next';
import 'bootstrap/dist/css/bootstrap.css';

const NavigationBar: NextPage = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <a className="navbar-brand text-light px-3" href="">
        Todo App
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link text-light" href="">
              Todos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="">
              Random Todos
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
