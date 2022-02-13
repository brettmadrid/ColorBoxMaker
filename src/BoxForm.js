import React, { Component } from 'react';
import './BoxForm.css';
import { v4 as uuidv4 } from 'uuid';

class BoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: '',
      width: '',
      color: '',
    };
    this.submitForm = this.submitForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  submitForm(e) {
    e.preventDefault();
    const newBox = { ...this.state, id: uuidv4() };
    this.props.updateBoxes(newBox);
    this.setState({ height: '', width: '', color: '' });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <div className='BoxForm-field-container'>
          <label htmlFor='height'>Height </label>
          <input
            type='text'
            name='height'
            value={this.state.height}
            id='height'
            onChange={this.handleChange}
          />
        </div>
        <div className='BoxForm-field-container'>
          <label htmlFor='width'>Width </label>
          <input
            type='text'
            name='width'
            value={this.state.width}
            id='width'
            onChange={this.handleChange}
          />
        </div>
        <div className='BoxForm-field-container'>
          <label htmlFor='color'>Color </label>
          <input
            type='text'
            name='color'
            value={this.state.color}
            id='color'
            onChange={this.handleChange}
          />
        </div>
        <button>Add Box</button>
      </form>
    );
  }
}

export default BoxForm;
