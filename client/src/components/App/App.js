import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Showcase from '../Template/Showcase';
import HomeContent from '../Template/HomeContent';
import Footer from '../Template/Footer';
import NavLink from '../Template/NavLink';
import Sidebar from '../Template/Sidebar';
import Spinner from '../Template/Spinner'
import Dialog from '../Template/Dialog'

import TodoListApp from '../TodoListApp';
import ExpenseTracker from '../ExpenseTracker';
import About from '../Template/About';

import { GlobalProvider } from '../../context'

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
    render() {
        return (
            <GlobalProvider>
                    <Router>
                        <header>
                            <div className="container">
                                <div id="branding">
                                <Link to="/" className=" unlink"><h1><span className="highlight">JS</span>penser</h1></Link>
                                </div>
                                <nav>
                                    <ul>
                                        <li><NavLink to="/todoApp" label="TodoR" /></li>
                                        <li><NavLink to="/expenseTracker" label="Expenser"/></li>
                                        <li><NavLink to="/about" label="About"/></li>
                                    </ul>
                                </nav>
                            </div>
                        </header>
                            <Switch>
                                <Route exact path='/'>
                                    <Showcase header="Javascript Applications" content="Checkout a few sample applications and utilities I developed using some of the most popular web development frameworks. These are not my best, but I just want to show off my work to the world. Have fun and tell me what you think!"/>
                                    <HomeContent/>
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
                                <Route exact path='/about'>
                                    <div className="main-content">
                                        <About />
                                    </div>
                                </Route>
                            </Switch>
                        <Footer/>
                        <Spinner />
                        <Dialog />
                    </Router>
            </GlobalProvider>
        );
    }
}

export default App;