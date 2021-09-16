import type { NextPage } from 'next';
<<<<<<< HEAD
const Home: NextPage = () => {
  return (
    <h1>TODO-APP</h1>
  );
};

export default Home;
=======
import NavigationBar from '../components/navigation-bar/navigation-bar';
import HomePage from './home-page/home-page';
const MainPage: NextPage = () => {
  return <HomePage/>;
};

export default MainPage;
>>>>>>> feat/basic-todo-functionality
