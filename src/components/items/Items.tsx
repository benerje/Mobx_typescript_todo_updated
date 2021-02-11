import React, { Component } from 'react'
import { inject, observer } from "mobx-react";
import { TodoStore } from '../../stores/TodoStore'
import Item from '../item/Item';

interface Props {
    todoStore?:TodoStore,
    value:string
}

@inject("todoStore")
@observer
export default class Items extends Component<Props> {
    render() {
        const {todoStore,value} = this.props
        console.log(todoStore?.todos)
        return (
            <>
            { (value==="notCompleted") ?
            <div>
                {todoStore?.info.notCompleted.map((todo)=>(<Item key={todo.id} currentItem={todo}  />))}
            </div>
            :
          (value==="Completed")?
          
            <div>
            {todoStore?.info.Completed.map((todo)=>(<Item key={todo.id} currentItem={todo}  />))}
            </div> 
            :
            <div>
            {todoStore?.info.total.map((todo)=>(<Item key={todo.id} currentItem={todo}  />))}
            </div>  
            }  
            </>
        )
    }
}
