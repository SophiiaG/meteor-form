import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';

import { Tasks } from '../api/tasks.js';
 
import Task from './Task.jsx';
 
// App component - represents the whole app
 class App extends Component {
  
  handleSubmit(event) {
    event.preventDefault();
    
 
    // Find the text field via the React ref
    const prenom = ReactDOM.findDOMNode(this.refs.prenomInput).value.trim();
    const nom = ReactDOM.findDOMNode(this.refs.nomInput).value.trim();
    const lien = ReactDOM.findDOMNode(this.refs.lienInput).value.trim();
    Tasks.insert({
      prenom,
      nom,
      lien,
      createdAt: new Date(), // current time
    });
    // Clear form
    ReactDOM.findDOMNode(this.refs.prenomInput).value = '';
    ReactDOM.findDOMNode(this.refs.nomInput).value = '';
    ReactDOM.findDOMNode(this.refs.lienInput).value = '';
    var prenomInputField =  ReactDOM.findDOMNode(this.refs.prenomInput).value;
  }

  renderTasks() {
    return this.props.tasks.map((task) => (
      <Task key={task._id} task={task} />
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
          <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
            <input
              type="text"
              ref="prenomInput"
              placeholder="Prénom"
            />
            <input
              type="text"
              ref="nomInput"
              placeholder="Nom" 
            /> 
            <input
              type="url"
              ref="lienInput"
              placeholder="Lien Github/Gitlab"
            /> 
            <button type="submit" onClick={this.handleSubmit.bind(this)}>Valider</button>
          </form>
        </header>
       
        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
  };
})(App);