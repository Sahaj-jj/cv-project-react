import React, { Component } from 'react';

class InputField extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = (e) => {
    const id = this.props.id;
    const value = e.target.value;
    this.props.onChange(id, value);
  }

  render() {
    return (
      <div>
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <input 
          type={this.props.type} 
          id={this.props.id} 
          placeholder={this.props.label} 
          onChange={this.handleChange} />
      </div>
    )
  }
}

export default InputField;