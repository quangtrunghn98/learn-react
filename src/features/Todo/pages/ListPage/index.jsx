import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from '../../components/TodoList';

ListPage.propTypes = {

};

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

    const [todoList, setTodoList] = useState(initTodoList);

    const [filterStatus, setFilterStatus] = useState('all');

    const handleTodoClick = (todo, idx) => {
        const newTodoList = [...todoList];
        newTodoList[idx] = {
            ...todoList[idx],
            status: todoList[idx].status === 'new' ? 'completed' : 'new',
        };
        setTodoList(newTodoList);
    };

    const handleShowAllClick = () => {
        setFilterStatus('all');
    };

    const handleShowCompletedClick = () => {
        setFilterStatus('completed');
    };

    const handleShowNewClick = () => {
        setFilterStatus('new');
    };

    const renderTodoList = todoList.filter(todo => filterStatus === 'all' || filterStatus === todo.status);

    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick} />

            <button onClick={handleShowAllClick}>Show ALl</button>
            <button onClick={handleShowCompletedClick}>Show Completed</button>
            <button onClick={handleShowNewClick}>Show New</button>
        </div>
    );
}

export default ListPage;