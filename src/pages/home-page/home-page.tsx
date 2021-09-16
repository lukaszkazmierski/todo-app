import type { NextPage } from 'next';
import TodoListView from '../../components/todo-list-view/todo-list-view';
import NavigationBar from '../../components/navigation-bar/navigation-bar';
import React from 'react';

export default class HomePage extends React.Component {

  render() {
    return (
      <>
        <NavigationBar />
        <TodoListView/>
      </>
    );
  }
}
