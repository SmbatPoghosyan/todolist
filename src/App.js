import React, { Component } from 'react';
import './App.css';
import Header from "./Components/Header";
import Todolist from "./Components/Todolist";

class App extends Component {
  state = {
      todoList: ['Do homework', 'Do exersices', 'Go shop']
  };

  handleAddItem = (todoItemName) => {
    const { todoList } = this.state;
    if(todoList.indexOf(todoItemName) === -1 ) {
        todoList.push(todoItemName);
        this.setState({todoList: todoList})
    }
  };

  handleRemoveItem = (todoItemName) => {
      const { todoList } = this.state;
      todoList.splice(todoList.indexOf(todoItemName), 1);
      this.setState ({todoList});
  }

  render() {

      return (
      <div className="App">
        <Header handleAddItem={this.handleAddItem}/>
        <Todolist handleRemoveItem={this.handleRemoveItem} todoList={ this.state.todoList }/>
      </div>
    );
  }
}


export default App;
