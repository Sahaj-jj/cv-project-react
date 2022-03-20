import React, { Component } from 'react';
import './App.css';
import Section from './components/Section';
import { RiEditBoxFill } from "react-icons/ri";
import { RiSaveFill } from "react-icons/ri";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { RiAddCircleFill } from "react-icons/ri";

class App extends Component {
  constructor(props) {
    super(props);

    this.fields = {
      personal: [
        { label: "Name", id: "name", value: '' },
        { label: "Role", id: "role", value: '' },
        { label: "Email", id: "email", value: '' },
        { label: "Phone Number", id: "phone", value: '' },
      ],
      education: [
        { label: "School Name", id: "school", value: '' },
        { label: "Field of study", id: "field", value: '' },
        { label: "From", id: "from", value: '', type: "date" },
        { label: "To", id: "to", value: '',type: "date" },
      ],
      experience: [
        { label: "Position", id: "position", value: '' },
        { label: "Company", id: "company", value: '' },
        { label: "From", id: "from", value: '', type: "date" },
        { label: "To", id: "to", value: '', type: "date" },
        { label: "Description", id: "description", value: '' },
      ]
    }

    this.state = {
      personal: [
        { id: crypto.randomUUID(), save: false, fields: [...this.fields.personal] },
      ],
      education: [
        { id: crypto.randomUUID(), save: false, fields: [...this.fields.education] },
      ],
      experience: [
        { id: crypto.randomUUID(), save: false, fields: [...this.fields.experience] },
      ]
    };
  }

  getField = (fields, fieldId, value) => {
    return fields.map(field => {
      return fieldId.includes(field.id) ?
      { ...field, value: value } :
      field
    })
  }

  handleChange = (sectionName, sectionId, fieldId, value) => {
    this.setState({
      [sectionName]: this.state[sectionName]
        .map(section => {
           return section.id === sectionId ? 
          { ...section, fields: this.getField(section.fields, fieldId, value) } : 
          section
        }),
    })
  }

  handleEdit = (sectionName, id) => {
    this.setState({
      [sectionName]: this.state[sectionName]
        .map(section => {
           return section.id === id ? 
          { ...section, save: !section.save } : 
          section
        }),
    })
  }

  handleAdd = (sectionName) => {
    this.setState({
      [sectionName]: this.state[sectionName]
        .concat({ id: crypto.randomUUID(), save: false, fields: [...this.fields[sectionName]] }),
    })
  }

  handleDelete = (sectionName, id) => {
    this.setState({
      [sectionName]: this.state[sectionName]
        .filter(section => section.id !== id),
    })
  }
  
  renderSections = (sectionName) => {
    return this.state[sectionName].map(section => {
      return (
        <div key={section.id} className="section-container">
          <Section
            name={sectionName}
            id={section.id}
            save={section.save}
            fields={section.fields}
            onChange={this.handleChange}
          />
          <button 
            className="edit-section" 
            onClick={() => this.handleEdit(sectionName, section.id)}>
              {section.save ? < RiEditBoxFill /> : <RiSaveFill />}
          </button>
          { sectionName !== "personal" && 
            <button 
            className="delete-section"
            onClick={() => this.handleDelete(sectionName, section.id)}>
              <RiDeleteBin2Fill />
          </button>
          }
        </div>
      )
    });
  }


  render() {
    return (
      <div>
        <div className="header">
          <h1>CV Maker</h1>
        </div>
        <div className="cv-main">
          {this.renderSections("personal")}
          <div className="section-heading">Education</div>
          {this.renderSections("education")}
          <button
            className='add-section'
            onClick={() => this.handleAdd("education")}>
              <RiAddCircleFill /> Add Section
          </button>
          <div className="section-heading">Experience</div>
          {this.renderSections("experience")}
          <button
            className='add-section'
            onClick={() => this.handleAdd("experience")}>
              <RiAddCircleFill /> Add Section
          </button>
        </div>
      </div>
    )
  }
}

export default App;
