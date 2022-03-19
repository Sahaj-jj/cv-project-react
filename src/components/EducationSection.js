import React, { Component } from "react";
import InputField from "./InputField";

class EducationSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: [
        { label: "School Name", id: "school", value: '' },
        { label: "From", id: "from", value: '' },
        { label: "To", id: "to", value: '' },
        { label: "Field of study", id: "field", value: '' },
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
      <div>
        <h3 className="section-heading">{this.props.name}</h3>
        <div className="section-content">
        {this.getInputElement(0)}
        {this.getInputElement(1, "date")}
        {this.getInputElement(2, "date")}
        {this.getInputElement(3)}
       </div>
      </div>
    )
  }
}

export default EducationSection;