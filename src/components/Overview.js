import { render } from '@testing-library/react';
import React, { Component } from 'react';

class Overview extends Component {

    render() {
        const { name, email, phone, school, degree, gradDate, company, jobTitle, jobDescription, startDate, endDate, display } = this.props.info;
        return (
            <div>
                <ul>
                <label>Name: </label>
                <h4>{name} </h4>
                <label>Email: </label>
                <h4>{email}</h4>
                <label>Phone: </label>
                <h4>{phone}</h4>
                <label>School: </label>
                <div>{school}</div>
                <label>Degree: </label>
                <div>{degree}</div>
                <label>Graduation Date: </label>
                <div>{gradDate}</div>
                <label>Company: </label>
                <div>{company}</div>
                <label>Position: </label>
                <div>{jobTitle}</div>
                <label>Responsibilities: </label>
                <div>{jobDescription}</div>
                <label>Start Date: </label>
                <div>{startDate}</div>
                <label>End Date: </label>
                <div>{endDate}</div>
                </ul>
                <button 
                        onClick={this.props.toggleDisplay}
                    >
                        {display ? "Submit": "Edit"}
                    </button>
            </div>
        )
    }
}

export default Overview
