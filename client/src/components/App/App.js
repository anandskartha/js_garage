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

import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <header>
                        <div className="container">
                            <div id="branding">
                            <Link to="/"><h1><span className="highlight">React</span> Apps</h1></Link>
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
                                <Showcase/>
                                <HomeContent/>
                            </Route>
                            <Route exact path='/helloWorld'>
                                <div className="main-content">
                                    <HelloWorld />
                                    <Sidebar title="Hello World App" content="A simple Hellow World Application using class components and props. Add the name to whow you want to say hello to" />
                                </div>
                            </Route>
                            <Route exact path='/todoApp'>
                                <div className="main-content">
                                    <TodoListApp/>
                                    <Sidebar title="Todo App" content="Manage a list of TODO activities that can be striked out by selecting the check after it is completed." />
                                </div>
                            </Route>
                            <Route exact path='/expenseTracker'>
                                <div className="main-content">
                                    <ExpenseTracker />
                                    <Sidebar title="Expense Tracker" content="A simple react app using Context API to manage all the incomes and expenses. React Context and Hooks is a combination which gives developers ability to manage and share application level states among components like the way Redux work. Thus, we can manage a shared state among components without being passed it to child components as props. Passing states as props will also work, but often become a lot messy when the component tree grows bigger. While using class components, a context can be accessed using static contextType (and this.context) OR using a consumer (<MyContext.Consumer>)x" />
                                </div>
                            </Route>
                        </Switch>
                    <Footer/>
                </Router>
            </div>
        );
    }
}

export default App;