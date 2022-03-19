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

  handleFocusOut = (e) => {
    const label = e.target.nextSibling;
    if (e.target.value || e.target.type === "date") label.classList.add("filled");
    else label.classList.remove("filled");
  }

  render() {
    const { type, label, id, value, onChange } = this.props;
    let className = value || type === "date" ? "filled": null;
    return (
      <div className='input-container'>
        <input 
          type={type}
          id={id}
          value={value}
          onChange={this.handleChange}
          onBlur={this.handleFocusOut}
        />
        <label htmlFor={id} className={className}>{label}</label>
      </div>
    )
  }
}

export default InputField;