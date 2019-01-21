import React, { Component } from 'react';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.css';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            toDoItemValue: '',
        }
    }

    handleChange = e => {
        if(this.state.toDoItemValue === ''){
        }
        this.setState({ toDoItemValue: e.target.value})
    }

    handleAddButonClick = () => {
        const { toDoItemValue } = this.state;
        if(toDoItemValue.trim()){
            this.props.handleAddItem(toDoItemValue);
            this.setState({
                toDoItemValue: ''
            })
        }
    }

    render() {
        return (
            <div className="navbar row navbar-dark bg-danger align-items-center">
            <p className='h1 text-warning col-lg-4'>My To Do List</p>
            <input className='form-control ds-input col-lg-4' placeholder="What do I need to do..." type='text' value={this.state.toDoItemValue} onChange={this.handleChange} />
              <div className='col-lg-4'><button type="button" className="btn btn-info float-left"  onClick={this.handleAddButonClick}>Add</button></div>
            </div>
        );
    }
}

export default Header;
