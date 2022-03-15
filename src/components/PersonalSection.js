import React, { Component } from "react";
import InputField from "./InputField";

class PersonalSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: [
        { label: "Name", id: "name-input" },
        { label: "Email", id: "email-input" },
        { label: "Phone Number", id: "phone-input" },
        { label: "Address", id: "address-input" },
      ],
    };
  }

  handleChange = (id, value) => {
    this.setState({
      fields: this.state.fields.map(field => 
        field.id === id ? { ...field, value: value }: field)
    })
  }

  getInputElement(index, type = "text") {
    const field = this.state.fields[index];
    if (this.props.save) {
      return <div>{field.value}</div>
    }
    return (
      <InputField 
        key={field.id} 
        type={type} 
        label={field.label} 
        id={field.id} 
        value={field.value}
        onChange={this.handleChange}
      />
    );
  }

  render() {
    return (
      <div className="section-container">
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