import React, {Component} from 'react'

export default class GifSearch extends Component {
    render() {
        return(
           <div>
            <form onSubmit={event => this.props.handleSubmit(event)}>

            <input type="text" name="search"></input>
            </form>
           </div>
        )
    }
} 
