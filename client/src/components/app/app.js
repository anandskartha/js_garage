import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Showcase from '../Template/Showcase';
import HomeContent from '../Template/HomeContent';
import Footer from '../Template/Footer';

import HelloWorld from '../helloWorld';
import TodoListApp from '../todoListApp';
import ExpenseTracker from '../ExpenseTracker';

import './app.css';

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
                                    <li><Link to="/helloWorld">HelloW</Link></li>
                                    <li><Link to="/todoApp">TodoR</Link></li>
                                    <li><Link to="/expenseTracker">Expenser</Link></li>
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
                        <Route exact path='/todoApp'>
                            <TodoListApp />
                        </Route>
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