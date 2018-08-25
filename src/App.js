import React from "react";
import { saveAs } from "file-saver";
import RichEditor from "./editor";
import { stateToHTML } from "draft-js-export-html";

export default class App extends React.Component {
  state = {
    content: ""
  };

  finalSave = () => {
    var str = this.state.content;
    if ((str === "") | (str === "<p><br></p>")) {
      alert("Dude, you cant do this, write first and then save!!");
    } else {
      var res = Math.floor(Math.random() * 100 + 1);
      var file = new File([str], res + ".html", {
        type: "text/plain;charset=utf-8"
      });
      saveAs(file);
    }
  };

  onChange = editorState => {
    var prsd = stateToHTML(editorState.getCurrentContent());
    this.setState({ content: prsd });
    console.log(prsd);
  };

  render() {
    return (
      <div>
        <RichEditor save={this.finalSave} statetoParent={this.onChange} />
      </div>
    );
  }
}
