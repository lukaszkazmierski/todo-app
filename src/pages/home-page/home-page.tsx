import type { NextPage } from 'next';
import TodoListView from '../../components/todo-list-view/todo-list-view';
import NavigationBar from '../../components/navigation-bar/navigation-bar';

const HomePage: NextPage = () => {
  return (
    <>
    <NavigationBar/>
    <TodoListView/>
    </>
  );
};

export default HomePage;
