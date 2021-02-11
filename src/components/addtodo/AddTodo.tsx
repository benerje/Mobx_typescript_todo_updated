import React, { PureComponent } from 'react'
import { inject, observer } from "mobx-react";
import { TodoStore } from '../../stores/TodoStore'
import './AddTodo.css'
import Items from '../items/Items';



interface Props {
  todoStore?:TodoStore
}

interface State{
    value:string
}

@inject("todoStore")
@observer
class AddTodo extends PureComponent<Props,State> {
    constructor(props:any) {
        super(props)
    
        this.state = {
             value:'',
        }
    }
    submitHandler =(e:any)=>{
        const {todoStore} = this.props
        e.preventDefault()
        if(e.target.input.value.trim().length>1){
        todoStore?.addTodo({title:e.target.input.value,completed:false,isedit:false})
        }
        e.target.input.value = ''
        console.log(todoStore?.todos)
      }
    
      handleChange = (e:any) =>{
       e.preventDefault()
       this.setState({value:e.target.value})
      }

    render() {
      
        return (
            <div className="App">
            <div className='appContainer'>
            <select onChange={this.handleChange} className="dropdown" id="cars" name="cars">
                <option >All</option>
                <option value="Completed">Completed</option>
                <option value="notCompleted">Not Completed</option>
            </select>
            <h1 className='appTitle'>ToDo Application</h1>
                <form onSubmit={this.submitHandler}>
                    <input className='inputField'  name="input" type='text'   placeholder='Add Item' />
                    <button type="submit" className='btn add'>+</button>
                </form>
                <Items value={this.state.value} />
        </div>
     </div>  
        )
    }
}

export default AddTodo