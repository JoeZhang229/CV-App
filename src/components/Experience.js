import React, { Component } from 'react'

class Experience extends Component {

    displayForm = () => {
        return (
            <div>
                <form>
                    <label>Company Name: </label>

                    <input 
                        type="text" 
                        name="company"
                        onChange={this.props.handleChange.bind(this)}  
                        />

                    <label>Position Title: </label>

                    <input 
                        type="text" 
                        name="jobTitle"
                        onChange={this.props.handleChange.bind(this)}
                    />

                    <label>Work Description: </label>

                    <textarea 
                        name="jobDescription" 
                        cols="30" 
                        rows="4"
                        onChange={this.props.handleChange.bind(this)}
                    ></textarea>

                    <label>Start Date(MM/YYYY): </label>

                    <input 
                        type="text" 
                        name="startDate"
                        onChange={this.props.handleChange.bind(this)}  
                    />

                    <label>End Date(MM/YYYY): </label>

                    <input 
                        type="text" 
                        name="endDate"
                        onChange={this.props.handleChange.bind(this)}
                    />
                </form>
            </div>
        )
    }

    render() {
        const { display } = this.props.info
        return (
            <div>
                <div className="GenInfo">
                    {display ? this.displayForm() : null}
                    <button 
                        onClick={this.props.toggleDisplay}
                    >
                        {display ? "Submit": "Edit"}
                    </button>
                </div>
            </div>
        )
    }
}

export default Experience