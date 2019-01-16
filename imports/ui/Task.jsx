import React, { Component } from 'react';
import { Tasks } from '../api/tasks.js';
import ReactDOM from 'react-dom';
import { App } from './App';

//import Task from './Task.jsx';

// Task component - represents a single todo item
export default class Task extends Component {

  deleteThisTask() {
    Tasks.remove(this.props.task._id);
  }
  updateThisTask() {
    console.log(this.props.task.nom)
  }

  render() {
    
    return (
      <div>
        <li>{this.props.task.prenom}, {this.props.task.nom}, 
        &nbsp;
        <a target="_blank" href={this.props.task.lien}>{this.props.task.lien}</a>
        &nbsp;
        <button type="button" className="delete" onClick={this.deleteThisTask.bind(this)}>Supprimer</button> 
        {/* &nbsp;
        <button type="button" className="update" onClick={this.updateThisTask.bind(this)}>Mettre à jour</button>  */}

        </li>
      </div>
    );
  }
}