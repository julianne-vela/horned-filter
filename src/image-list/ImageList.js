import React, { Component } from 'react'
import ImageItem from './ImageItem.js';


export default class ImageList extends Component {
    state = {
        keyword: '',
        horns: '',
    }

    handleNameChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    render() {

        const filteredImages = this.props.images.filter((image) => {
            if (!this.state.keyword || this.state.keyword === image.keyword) return true
            return false;
        })

        const ImageNodes = filteredImages.map(image =>
            <ImageItem
                key={image.title}
                image={image} />);

        return (
            <>
                <form>

                    <select value={this.state.keyword}
                        onChange={(e) => {
                            e.preventDefault()
                            this.setState({
                                keyword: e.target.value
                            })
                        }}
                    >
                        <option value='narwhal'>Narwhal</option>
                        <option value='rhino'>Rhino</option>
                        <option value='unilego'>UniLego</option>
                        <option value='unicorn'>Unicorn</option>
                    </select>
                </form>
                <div>Name: {this.state.name}</div>
                <div>Keyword: {this.state.keyword}</div>
                <ul className='ImageList'>
                    {ImageNodes}
                </ul>
            </>
        )
    }
}
