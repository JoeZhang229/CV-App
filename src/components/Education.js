import React, { Component } from 'react'

class Education extends Component {

    displayForm = () => {
        return (
            <div>
                <form>
                    <label>Education: </label>
                    <input 
                        type="text" 
                        name="school"
                        onChange={this.props.handleChange.bind(this)}
                    />
                    <label>Degree: </label>
                    <input 
                        type="text" 
                        name="degree"
                        onChange={this.props.handleChange.bind(this)}                        
                    />
                    <label>Graduation Date(MM/YYYY): </label>
                    <input 
                        type="text" 
                        name="gradDate" 
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
                <div className="Education">
                    {display ? this.displayForm() : null}
                </div>
            </div>
        )
    }
}

export default Education
