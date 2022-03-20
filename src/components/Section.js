import React, { Component } from "react";
import InputField from "./InputField";

class Section extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = (id, value) => {
    this.props.onChange(this.props.name, this.props.id, id, value);
  }

  renderInputElements() {
    return this.props.fields.map(field => {
      return (
        <InputField 
          key={`${field.id}-input`} 
          type={field.type || "text"}
          label={field.label} 
          id={`${field.id}-input`}
          value={field.value}
          onChange={this.handleChange}
        />
      );
    })
  }

  render() {
    return (
      <div>
        <div className="section-content">
        {this.renderInputElements()}
       </div>
      </div>
    )
  }
}

export default Section;