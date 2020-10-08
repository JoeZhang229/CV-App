import React, { Component } from 'react'

class GenInfo extends Component {
    constructor() {
        super()
        this.state = {
            // display: true,
        }
    }

    // toggleDisplay = () => {
    //     this.setState(prevState => {
    //         prevState.display = !prevState.display
    //         return {
    //             display: prevState.display
    //         }
    //     })
    //     console.log(this.state.display);
    // }

    displayForm = () => {
        return (
            <div>
                <form>
                    <label>Name: </label>
                    <input 
                    type="text" 
                    name="name" 
                    onChange={this.props.handleChange.bind(this)}    
                    />
                    <label>Email: </label>
                    <input type="email" 
                    name="email" 
                    onChange={this.props.handleChange.bind(this)}/>
                    <label>Phone: </label>
                    <input 
                        type="tel" 
                        name="phone" 
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
                </div>
            </div>
        )
    }
}

export default GenInfo