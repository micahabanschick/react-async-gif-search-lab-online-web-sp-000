import React, {Component} from 'react'
import { render } from 'react-dom'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch.js'


const gifUrl = 'https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=kaReNTDkkNKcqSySCAbFbUb1bpti8gji&rating=g'
export default class GifListContainer extends Component {
    state = {
        gifs: [],
        searchUrl: ""
    }

    componentDidUpdate() {
        fetch(this.state.searchUrl)
        .then(res => res.json())
        .then(data => this.changeState(data))
    }


    changeState = (data) => {
        let newArr = data.data.slice(0,3)

        this.setState({gifs: newArr})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            searchUrl: `https://api.giphy.com/v1/gifs/search?q=${e.target[0].value}&api_key=kaReNTDkkNKcqSySCAbFbUb1bpti8gji&rating=g`
        })

    }

    render() {
        return(
            <div> 
            <GifList gifs={this.state.gifs} />
            <GifSearch handleSubmit={this.handleSubmit} />
            </div>
        )
    }
} 