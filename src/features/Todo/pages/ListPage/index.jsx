import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import TodoForm from '../../components/TodoForm';
import TodoList from '../../components/TodoList';

ListPage.propTypes = {};

function ListPage(props) {
  const initTodoList = [
    {
      id: 1,
      title: 'Eat',
      status: 'new',
    },
    {
      id: 2,
      title: 'Sleep',
      status: 'completed',
    },
    {
      id: 3,
      title: 'Code',
      status: 'new',
    },
  ];

  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();
  const [todoList, setTodoList] = useState(initTodoList);
  const [filterStatus, setFilterStatus] = useState(() => {
    const param = queryString.parse(location.search);
    return param.status || 'all';
  });

  const handleTodoClick = (todo, idx) => {
    const newTodoList = [...todoList];
    newTodoList[idx] = {
      ...todoList[idx],
      status: todoList[idx].status === 'new' ? 'completed' : 'new',
    };
    setTodoList(newTodoList);
  };

  const handleShowAllClick = () => {
    // setFilterStatus('all');
    const queryParams = { status: 'all' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  const handleShowCompletedClick = () => {
    // setFilterStatus('completed');
    const queryParams = { status: 'completed' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  useEffect(() => {
    const param = queryString.parse(location.search);
    setFilterStatus(param.status || 'all');
  }, [location.search]);
  const handleShowNewClick = () => {
    // setFilterStatus('new');
    const queryParams = { status: 'new' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  const renderTodoList = todoList.filter(
    (todo) => filterStatus === 'all' || filterStatus === todo.status
  );

  const handleTodoFormSubmit = (value) => {
    const newTodo = {
      id: todoList.length + 1,
      title: value.title,
      status: 'new',
    };

    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
  };

  return (
    <div>
      <h3>What to do</h3>
      <TodoForm onSubmit={handleTodoFormSubmit} />

      <h3>Todo List</h3>
      <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick} />

      <button onClick={handleShowAllClick}>Show ALl</button>
      <button onClick={handleShowCompletedClick}>Show Completed</button>
      <button onClick={handleShowNewClick}>Show New</button>
    </div>
  );
}

export default ListPage;
