import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.css';
import todoData from './TodoData';

class TodoList extends React.Component{
    constructor() {
        super();
        this.state = {
            todoList: todoData
        };
        this.listChange = this.listChange.bind(this);
    }
    listChange (id) {
        this.setState((prevState) => {
            const newState = prevState.todoList.map(todo => {
                if(todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            });
            return {todoList: newState};
        });
    }
    render() {
        const todoList = this.state.todoList.map((todo) => <TodoListItem key={todo.id} item={todo} changeHandler={this.listChange}/>)
        return (
            <div className="todo-list">
                {todoList}
            </div>
        );
    }
};

export default TodoList;