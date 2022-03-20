import React, { Component } from "react";
import InputField from "./InputField";

class Section extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = (fieldId, value) => {
    this.props.onChange(this.props.name, this.props.id, fieldId, value);
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

  renderElements = (sectionName) => {
    const fields = this.props.fields;
    switch(sectionName) {
      case "personal": 
        return this.props.fields.map(field => {
          return (
            <div className={field.id}>{field.value}</div>
          )
        })
      case "education":
        return (
          <div className="section-flex">
            <div className="date-container">
              {this.getFieldElement(fields, "from")}
              <div> - </div>
              {this.getFieldElement(fields, "to")}
            </div>
            <div className="content-container">
              {this.getFieldElement(fields, "field")}
              {this.getFieldElement(fields, "school")}
            </div>
          </div>
        )
      case "experience":
        return (
          <div className="section-flex">
            <div className="date-container">
              {this.getFieldElement(fields, "from")}
              <div> - </div>
              {this.getFieldElement(fields, "to")}
            </div>
            <div className="content-container">
              {this.getFieldElement(fields, "position")}
              {this.getFieldElement(fields, "company")}
              {this.getFieldElement(fields, "description")}
            </div>
          </div>
        )
    }
  }

  getFieldElement = (fields, id) => {
    let value = fields.find(field => field.id === id).value;
    value = id === "from" || id === "to" ? value.slice(0, -3): value;
    return (
      <div className={id}>
        {value}
      </div>
    )
  }


  render() {
    return (
      <div>
        { this.props.save ? 
          this.renderElements(this.props.name) :
          this.renderInputElements()
        }
      </div>
    )
  }
}

export default Section;