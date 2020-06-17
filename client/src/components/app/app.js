import React from 'react';
//import ExpenseTracker from '../ExpenseTracker';
import Showcase from '../Template/Showcase';
import HomeContent from '../Template/HomeContent';
import Footer from '../Template/Footer';

import './app.css';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header>
                    <div class="container">
                        <div id="branding">
                            <h1><span class="highlight">React</span> Apps</h1>
                        </div>
                        <nav>
                            <ul>
                                <li class="current"><a href="index.html">Home</a></li>
                                <li><a href="index.html">About</a></li>
                                <li><a href="index.html">Services</a></li>
                            </ul>
                        </nav>
                    </div>
                </header>
                <Showcase/>
                <HomeContent/>
                <Footer/>
            </div>
        );
    }
}

export default App;