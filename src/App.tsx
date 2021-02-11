import React, { Component } from 'react'
import AddTodo from './components/addtodo/AddTodo'

interface Props{
}


class App extends Component<Props, {}> {
  render() {
    return (
      <div>
        <AddTodo />
      </div>
    )
  }
} 

export default App;
