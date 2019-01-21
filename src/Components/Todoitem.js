import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default class Todoitem extends Component {

    state = {
        done: false
    }

    onRemoveButtonClick = (e) => {
        const { todoItemName} = this.props;
        const { handleRemoveItem} = this.props;
        handleRemoveItem(todoItemName);
    }

    done = () => {
        this.setState({
            done: !this.state.done
        })
    }



    render(){
        const backgrounColor = this.props.index % 2 === 0 ? 'bg-light' : 'bg-secondary text-white';
        let todoItemTextClass = "text-uppercase";
        let xColor = this.props.index % 2 !== 0 || this.state.done ? 'white' : '#290033';
        let todoItemName = this.state.done ? <del className={todoItemTextClass}>{this.props.todoItemName}</del> : <span className={todoItemTextClass}>{this.props.todoItemName}</span>;
        let className = this.state.done ? "navbar row navbar-dark bg-dark align-items-center text-white" : ` navbar row navbar-light ${backgrounColor} align-items-center`;
        let check = this.state.done ? <FontAwesomeIcon className='float-left' icon="check-circle"/> : ''; // eslint-disable-next-line
        return <a onClick={this.done} className={className}>
            <div className='col-lg-4'>{check}</div>
            <div className='col-lg-4'>{todoItemName}</div>
            <div className='col-lg-4'><button type="button" className="close" aria-label="Close" onClick={this.onRemoveButtonClick}><span style={{color: xColor}}><FontAwesomeIcon icon='times'  /></span></button></div></a>
    }

}

library.add(faCheckCircle)
library.add(faTimes)