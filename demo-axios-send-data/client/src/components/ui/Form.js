import React, { Component } from 'react';
import {Link} from 'react-router';
import Radium from 'radium';
import {browserHistory} from "react-router"
import TextField from 'material-ui/TextField';

class Form extends Component {
  getStyles() {
    return {
      form: {
        padding: '20px 40px',
      },
      div: {
        marginBottom: '10px'
      },
      label: {
        display: 'block',
        fontSize: '.9em',
        color: 'rgba(0,0,0,.6)',
        paddingBottom: '10px'
      },
      input: {
        width: '100%',
        height: '48px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        fontSize: '1em',
        padding: '10px',
        boxSizing: 'border-box',
        ':focus': {
          border: '1px solid #00bcd4',
          outline: 'none'
        }
      },
      actions: {
        textAlign: 'center'
      },
      button: {
          color:"white",
          border:" 10px",
          boxSizing:" border-box",
          display:" inline-block",
          fontFamily:" Roboto, sans-serif",
          cursor:" pointer",
          textDecoration:" none",
          margin:" 20px auto 0px",
          padding:" 0px",
          outline:" none",
          fontSize:" inherit",
          fontWeight:" inherit",
          transform:" translate(0px, 0px)",
          position:" relative",
          height:" 36px",
          lineHeight:" 36px",
          width:" 120px",
          borderRadius:" 10px",
          transition:" all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",
          textAlign:" center",
          backgroundColor:" rgb(255, 64, 129)",
      },
      link: {
        display: 'inline-block',
        marginLeft: '15px',
        fontSize: '1em',
        color: '#00bcd4',
        opacity: '.8',
        textDecoration: 'none'
      }
    };
  }
  handleSubmit(e){
    e.preventDefault();
    let data={
      title:this.refs.title.getValue(),
      type : this.refs.type.getValue(),
      content : this.refs.content.getValue()
    }
    // let title = this.refs.title.value;
    // let type = this.refs.type.value;
    // let content = this.refs.content.value;
    // console.log(title);
    // if (title && title != "") {
      this.props.goPost(data);
    // }
    // else{
    //   alert('输入有误');
    // }
  }
  render() {
    const styles = this.getStyles();
    return (
      <form style={styles.form}>
        <div style={styles.div}>
          <TextField hintText="输入标题"  ref='title'/>
          <TextField hintText="输入标题"  ref='content'/>
          <TextField hintText="输入标题"  ref='type'/>
        </div>
        <div style={styles.actions}>
          <button type='submit' style={styles.button} onClick={this.handleSubmit.bind(this)}>Submit</button>
          <Link to='/' style={styles.link}>取消</Link>
        </div>
      </form>
    );
  }
}

Form.contextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default Radium(Form);
