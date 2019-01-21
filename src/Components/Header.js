import React, { Component } from 'react';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Button from '@material-ui/core/Button';
import {withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import green from '@material-ui/core/colors/green';
const styles = theme => ({
    margin: {
        margin: theme.spacing.unit,
    }
})


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
        const theme = createMuiTheme({
            palette: {
                primary: green,
            },
            typography: { useNextVariants: true },
        });
        const { classes } = this.props;

        return (
            <div className="navbar row navbar-dark bg-info align-items-center">
            <p className='h1 text-warning col-lg-4'>My To Do List</p>
                <div className='col-lg-4'><MuiThemeProvider theme={theme}>
                    <TextField
                        className={classes.margin}
                        label="What do I need to do..."
                        variant="outlined"
                        id="mui-theme-provider-outlined-input"
                        value={this.state.toDoItemValue} onChange={this.handleChange}
                    />
                </MuiThemeProvider></div>
              <div className='col-lg-4'><Button variant="contained" color="primary" className='float-left col-lg-4'  onClick={this.handleAddButonClick}>Add</Button></div>
            </div>
        );
    }
}

export default withStyles(styles)(Header);
