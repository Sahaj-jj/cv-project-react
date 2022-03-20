import React, { Component } from 'react';
import './App.css';
import Section from './components/Section';

class App extends Component {
  constructor(props) {
    super(props);

    this.fields = {
      personal: [
        { label: "Name", id: "name", value: '' },
        { label: "Email", id: "email", value: '' },
        { label: "Phone Number", id: "phone", value: '' },
        { label: "Address", id: "address", value: '' },
      ],
      education: [
        { label: "School Name", id: "school", value: '' },
        { label: "From", id: "from", value: '', type: "date" },
        { label: "To", id: "to", value: '',type: "date" },
        { label: "Field of study", id: "field", value: '' },
      ],
      experience: [
        { label: "Position", id: "position", value: '' },
        { label: "Company", id: "company", value: '' },
        { label: "From", id: "from", value: '', type: "date" },
        { label: "To", id: "to", value: '', type: "date" },
        { label: "Description", id: "field", value: '' },
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
        <div className="section-container">
          <Section
            name={sectionName}
            key={section.id}
            id={section.id}
            save={section.save}
            fields={section.fields}
            onChange={this.handleChange}
          />
          <button 
            className="edit-section" 
            onClick={() => this.handleEdit(sectionName, section.id)}>
              Edit
          </button>
          <button 
            className="delete-section"
            onClick={() => this.handleDelete(sectionName, section.id)}>
              Delete
          </button>
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
          {this.renderSections("education")}
          <button
            className='add-section'
            onClick={() => this.handleAdd("education")}>
              Add
          </button>
          {this.renderSections("experience")}
          <button
            className='add-section'
            onClick={() => this.handleAdd("experience")}>
              Add
          </button>
        </div>
      </div>
    )
  }
}

export default App;
