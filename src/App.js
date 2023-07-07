import React from "react";
import Example from "./components/Example";

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            country: "Ukraine"
        }
    }

    changeNameHandler = () => {
        if(this.state.country === 'Ukraine') {
            this.setState({country: "Ukraine is the best country"})
        } else {
            this.setState({country: "Ukraine"})
        }
    }

    render(){
        return (
            <div className="App">
                <Example country={this.state.country} changeNameHandler={this.changeNameHandler}/>
            </div>
        )
    }
}

export default App;
