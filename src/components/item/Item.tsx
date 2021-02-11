import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit, faCheck } from '@fortawesome/free-solid-svg-icons'
import './Item.css'
import { inject, observer } from "mobx-react";
import { Todo, TodoList, TodoStore } from '../../stores/TodoStore'


interface Props {
    todoStore?:TodoStore,
    currentItem:any
  }
  
  
@inject("todoStore")
@observer
export default class Item extends Component<Props> {
    state = {name:this.props.currentItem.title}
     
    edit= () =>{
       this.props.todoStore?.editTodo(this.props.currentItem?.id)
    }

    save =() =>{
        this.props.todoStore?.saveTodo(this.props.currentItem?.id,this.state.name)
    }

    render() {
        const {todoStore} = this.props
        return (
            <div className='itemContainer'>
            <button onClick={()=>todoStore?.toggleTodo(this.props.currentItem.id)} className="complete-btn">
                    <i  className={this.props.currentItem.completed?"fas fa-check-square":"fas fa-square"}></i>
            </button>
               {this.props.currentItem.isedit? <input type="text" className='updateInputField' onChange={(e)=>this.setState({name:e.target.value})} value={this.state.name}
             />:<h3 className={this.props.currentItem.completed?"strike":""}>{this.props.currentItem.title}</h3>}
                
                
            <div className='actionButtons'>
                <FontAwesomeIcon className='btn edit'onClick={this.props.currentItem.isedit?this.save:this.edit} icon={this.props.currentItem.isedit ? faCheck : faEdit} />
                <FontAwesomeIcon onClick={()=>todoStore?.removeTodo(this.props.currentItem.id)}   className='btn delete' icon={faTrashAlt} />
                <span id='errUpdateMsg'></span>
            </div>
        </div>
        )
    }
}
