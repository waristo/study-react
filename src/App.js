import React , {Component} from "react";
import ScrollBox from "./ScrollBox";

class App extends Component {
  render(){
    return (
      <div>
        <ScrollBox ref={(ref)=> this.scrollBox=ref} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>BLAH BLAH</button>
      </div>
    )
  }
};

export default App;
