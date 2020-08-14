import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos'
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import About from './components/pages/About'


import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      }, 
      {
        id: 2,
        title: 'Dinner with a friend',
        completed: true
      },
      {
        id: 3,
        title: 'Meeting with James',
        completed: false
      }
    ]
  }

  //Toggle Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  };

  //Delete Todo
  delTodo = (id) => {
    this.setState ({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  }

  // Add Todo
  addTodo = (title) => {
    //console.log(title);
    const newTodo = {
      id: 4,
      title: title,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  render() {

    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route path="/about" component={ About }/>
            <Route exact path="/" render={ props => (
              <React.Fragment>
                <AddTodo addTodo={ this.addTodo }/>
                <Todos 
                  todos={ this.state.todos } 
                  markComplete= { this.markComplete }
                  delTodo = { this.delTodo }
                />
              </React.Fragment>
            )} 
            />
          </div>
        </div>
      </Router>
    );
  }
}
  
export default App;
