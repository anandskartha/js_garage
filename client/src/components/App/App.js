import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Showcase from '../Template/Showcase';
import HomeContent from '../Template/HomeContent';
import Footer from '../Template/Footer';
import NavLink from '../Template/NavLink';

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
                            <HelloWorld />
                        </Route>
                        <Route exact path='/todoApp' component={TodoListApp} />
                        <Route exact path='/expenseTracker'>
                            <ExpenseTracker />
                        </Route>
                    </Switch>
                    <Footer/>
                </Router>
            </div>
        );
    }
}

export default App;