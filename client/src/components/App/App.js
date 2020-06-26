import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Showcase from '../Template/Showcase';
import HomeContent from '../Template/HomeContent';
import Footer from '../Template/Footer';
import NavLink from '../Template/NavLink';
import Sidebar from '../Template/Sidebar';

import HelloWorld from '../HelloWorld';
import TodoListApp from '../TodoListApp';
import ExpenseTracker from '../ExpenseTracker';

import { GlobalProvider } from '../../context'

import './App.css';

class App extends React.Component {
    render() {
        return (
            <GlobalProvider>
                    <Router>
                        <header>
                            <div className="container">
                                <div id="branding">
                                <Link to="/"><h1><span className="highlight">Javascript</span> Garage</h1></Link>
                                </div>
                                <nav>
                                    <ul>
                                        <li><NavLink to="/helloWorld" label="HelloW"/></li>
                                        <li><NavLink to="/todoApp" label="TodoR" /></li>
                                        <li><NavLink to="/expenseTracker" label="Expenser"/></li>
                                    </ul>
                                </nav>
                            </div>
                        </header>
                            <Switch>
                                <Route exact path='/'>
                                    <Showcase header="Amazing Garage Applications" content="Dive into some of the applications and utilities I developed using the most common web development frameworks. These are not my best, but I just want to show off my work to the world. Have fun!"/>
                                    <HomeContent/>
                                </Route>
                                <Route exact path='/helloWorld'>
                                    <div className="main-content">
                                        <HelloWorld />
                                        <Sidebar title="Hello World App" content="A simple Hello World Application using React class components and props. The component uses Express server with MongoDB." />
                                    </div>
                                </Route>
                                <Route exact path='/todoApp'>
                                    <div className="main-content">
                                        <TodoListApp/>
                                        <Sidebar title="Todo App" content="Manage a list of TODO activities that can be striked out after the task is completed. The React component uses component states and props along with Express server and MongoDB." />
                                    </div>
                                </Route>
                                <Route exact path='/expenseTracker'>
                                    <div className="main-content">
                                        <ExpenseTracker />
                                        <Sidebar title="Expense Tracker" content="Want to keep track of all your incomes and expenses? This utility uses React Context and Hooks which is a combination that gives developers ability to manage and share application level states among components like the way they do in Redux. We can manage a shared state among components without being passed it to child components as props." />
                                    </div>
                                </Route>
                            </Switch>
                        <Footer/>
                    </Router>
            </GlobalProvider>
        );
    }
}

export default App;