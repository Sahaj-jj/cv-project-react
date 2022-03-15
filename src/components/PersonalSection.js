import React, { Component } from "react";
import InputField from "./InputField";

class PersonalSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: [
        { label: "Name", id: "name", value: '' },
        { label: "Email", id: "email", value: '' },
        { label: "Phone Number", id: "phone", value: '' },
        { label: "Address", id: "address", value: '' },
      ],
    };
  }

  handleChange = (id, value) => {
    this.setState({
      fields: this.state.fields.map(field => 
        id.includes(field.id) ? { ...field, value: value }: field)
    })
  }

  getInputElement(index, type = "text") {
    const field = this.state.fields[index];
    if (this.props.save) {
      return <div className={field.id}>{field.value}</div>
    }
    return (
      <InputField 
        key={`${field.id}-input`} 
        type={type} 
        label={field.label} 
        id={`${field.id}-input`}
        value={field.value}
        onChange={this.handleChange}
      />
    );
  }

  render() {
    return (
      <div className="personal section-container">
        <h3 className="section-heading">{this.props.name}</h3>
         <div className="section-content">
          {this.getInputElement(0)}
          {this.getInputElement(1)}
          {this.getInputElement(2)}
          {this.getInputElement(3)}
         </div>
      </div>
    )
  }
}

export default PersonalSection;