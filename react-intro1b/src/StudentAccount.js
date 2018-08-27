import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class StudentAccount extends Component {
    render() {
        return (
            <div className="StudentAccount">
                <h1>{this.props.firstName}'s grade is {this.props.grade}</h1>
            </div>
        );
    }
}

export default StudentAccount;