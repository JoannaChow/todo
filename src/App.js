import React, {Component} from 'react';
import Todos from './Todos';
import Addform from './Addform';

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "Buy some flowers" },
      { id: 2, content: "Do laundry" },
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter( todo => todo.id !== id );
    this.setState({ todos });
  }

  addTodo = (content) => {
    const newTodo = { id: Math.random(), content: content };
    const todos = [ ...this.state.todos, newTodo ];
    this.setState({ todos });
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">Todo</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <Addform addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
