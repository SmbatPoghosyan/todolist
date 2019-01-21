import React, {Component} from 'react'
import Todoitem from "./Todoitem";

export default class Todolist extends Component {


    render(){
        const { handleRemoveItem } = this.props;
        const { todoList } = this.props;
        return (<div>
                {todoList.map((todoItem,index) => <Todoitem index={index} handleRemoveItem={handleRemoveItem} key={todoItem} todoItemName={todoItem}/>)}
            </div>

        )
    }
}

