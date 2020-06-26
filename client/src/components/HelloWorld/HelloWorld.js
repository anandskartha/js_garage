import React, {Component} from 'react';
import './HelloWorld.css';

// const HelloWorld = props => {
// return (<div className="HelloWorld">Hello {props.name}!</div>);
// };
class HelloWorld extends Component {
    constructor(props) {
        super(props);
        this.state = { greeting: 'Hello' };
        this.frenchify = this.frenchify.bind(this);
        this.removeGreeting = this.removeGreeting.bind(this);
    }
    removeGreeting() {
        this.props.removeGreeting(this.props.name);
    }
    frenchify() {
        this.setState({ greeting: 'Bonjour' });
    }
    render() {
        return(
            <div className="round-edge-box">
                <span className="box-close" id="boxclose" onClick={this.removeGreeting} />
                <h3>Information</h3>
                {this.state.greeting} {this.props.name}!
                <br/>
                <button onClick={this.frenchify}>Frenchify!</button>
            </div>
        );
    }
}

export default HelloWorld;