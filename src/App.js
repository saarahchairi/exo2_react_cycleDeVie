import React from "react";

class App extends React.Component{
  state = {
    heureOjd : new Date()
  }
  componentDidMount(){
    setInterval(() => 
    this.setState({
      heureOjd : new Date()
    })
    ,1000)
  }
  render(){
    return(
      <div>
        <p>Il est {this.state.heureOjd.getHours()}:{this.state.heureOjd.getMinutes()}:{this.state.heureOjd.getSeconds()} sec</p>
      </div>
    );
  }
}

export default App;
