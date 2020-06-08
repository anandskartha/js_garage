import React from 'react';
import './todoListItem.css';

class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            completed: props.item.completed
        };
    }
    //https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1
    componentDidMount() { //Lifecycle method- 2
        //Like you were just born
        //Run when the component is mount
        //Run only once while the componet is showing up on the screen the first time. 
        //Re-render will not run this method because component will not unmount and remount while value change
        //Common usecase - API call to get the initial data
        console.log(`Inside componentDidMount() : ${this.props.item.id}`);
    }
    componentWillReceiveProps(nextProps) { //Lifecycle method- 3 Depreciated UNSAFE
        //Run while receiving props from a parent component
        //Also run everytime when a props is updated in the parent component
        //Common usecase - To check if the passed in props has updated values
        //Depricated method from 16.3
        console.log(`Inside componentWillReceiveProps() : ${this.props.item.id}`);
        if(nextProps.item.completed !== this.props.item.completed) {
            console.log(`Inside componentWillReceiveProps() Condition: ${this.props.item.id}`);
        }
    }
    shouldComponentUpdate(nextProps, nextState) { //Lifecycle method- 4
        //Can be used to optimize re0rendering a component if this has expensive operations while rendering
        //Return true to continue with update, return false to not to update
        console.log(`Inside shouldComponentUpdate() : ${this.props.item.id}`);
        return true;
    }
    componentWillUnmount() { //Lifecycle method- 5
        //Cleanup or teardown operations before unmounting a component.
        //Common usecase - To cleanup the code like releasing resources, unregistering event handlers
        console.log(`Inside componentWillUnmount() : ${this.props.item.id}`);
    }
    render() { //Lifecycle method- 1, often debated, but can be considered a lifecycle method
        return (
            <div className="todo-list-item">
                <input type="checkbox" checked={this.props.item.completed} onChange={() => this.props.changeHandler(this.props.item.id)}/>
                <p className={ this.props.item.completed? 'completed' : '' }>{this.props.item.text}</p>
            </div>
        );
    }
};

export default TodoListItem;