import React, { PropTypes } from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import axios from 'axios'
import TextField from 'material-ui/TextField';

class App extends React.Component {
  getChildContext() {
    return { muiTheme: getMuiTheme() };
  }
  handleClick(e){
    e.preventDefault();
    let minger = this.refs.minger.value;// 获取不能
    let minger2 = this.refs.minger.getValue();
    let title = this.refs.title.value;
    let content = this.refs.content.value;
    console.log({"title":title,"content":content,"minger":minger,"minger2":minger2 });
    axios.post('http://localhost:3000/posts', {
      title:minger2,
      content:content
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error){
      console.log(error);
    })

  }
  render () {
    return(
      <form>
        <TextField hintText="给娃起个好名儿" floatingLabelText="标题" ref="minger"/><br />
        <label>标题<input type="text" ref="title"/></label>
        <label>内容<input type="text" ref="content"/></label>
        <button onClick={this.handleClick.bind(this)}>
          提交
        </button>
      </form>
    )
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};
export default App;
