import type { NextPage } from 'next';
import TodoListView from '../../components/list-view/list-view';
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
