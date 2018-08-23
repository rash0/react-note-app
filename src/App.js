import React from "react";
import { saveAs } from "file-saver";

export default class App extends React.Component {
  state = {
    area: undefined
  };

  bkk = () => {
    var str = this.state.area;

    if (str === undefined || str === "") {
      alert("Dude, you can't do this, write first, then save!!");
    } else {
      var res = str.substr(0, 10);
      var file = new File([str], res + ".txt", {
        type: "text/plain;charset=utf-8"
      });
      saveAs(file);
    }
    console.log(str)
  };

  change = e => {
    this.setState({ area: e.target.value });
  };

  render() {
    return (
      <div>
        <textarea
          autoFocus
          placeholder="Start writing nowwwww........"
          value={this.state.area}
          onChange={this.change}
        />
        <button onClick={this.bkk}>save</button>
      </div>
    );
  }
}
