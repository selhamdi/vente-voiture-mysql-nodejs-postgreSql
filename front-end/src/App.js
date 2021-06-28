import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
        this.state = { apiResponse2: "" };
        this.state = { apiResponse3: "" };
        this.state = { apiResponse4: "" };
        this.state = { apiResponse5: "" };
        this.state = { apiResponse6: "" };

    }

    callAPI() {
        fetch("http://localhost:5000/voiture")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
         fetch("http://localhost:5000/2")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse2: res }))
            .catch(err => err);
            fetch("http://localhost:5000/3")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse3: res }))
            .catch(err => err);
            fetch("http://localhost:5000/4")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse4: res }))
            .catch(err => err);
            fetch("http://localhost:5000/5")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse5: res }))
            .catch(err => err);
            fetch("http://localhost:5000/6")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse6: res }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
            <div className="App">
                <p className="App-intro">{this.state.apiResponse}</p>
                <p className="App-intro">{this.state.apiResponse2}</p>
                <p className="App-intro">{this.state.apiResponse3}</p>
                <p className="App-intro">{this.state.apiResponse4}</p>
                <p className="App-intro">{this.state.apiResponse5}</p>   
                <p className="App-intro">{this.state.apiResponse6}</p>       
             </div>
        );
    }
}

export default App;