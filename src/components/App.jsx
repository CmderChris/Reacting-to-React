import React from "react";
// only works because of WEBPACK
import "./pizza.css";

// const App = (props) => {
//     return (
//         <h1>{props.text}</h1>
//     )
// }

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "World",
            value: "",
            isLoaded: false
        };
    }

    componentDidMount() {
        this.setState({
            value: "stuff",
            isLoaded: true
        })
    }

    inputChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    handleToggleChange() {
        this.setState({
            isLoaded: !this.state.isLoaded
        })
    }

    // conditional render
    render() {
        if (this.state.isLoaded) {
            return (
                <>
                    <h1>{this.props.text} {this.state.text}</h1>
                    <input value={this.state.value} onChange={(e) => this.inputChange(e)} />
                    <h1 style={styles.h1Style}>{this.state.value}</h1>
                    <button style={styles.buttonStyle} onClick={() => this.handleToggleChange()}>TOGGLE IS LOADED</button>

                </>
            )
        } else {
            return (
                <button onClick={() => this.handleToggleChange()}>TOGGLE IS LOADED</button>
            )
        }

    }
}

// vanilla React/JS styling solution
const styles = {
    h1Style: {
        backgroundColor: 'red'
    },
    buttonStyle: {
        padding: '5em'
    }
};
export default App;