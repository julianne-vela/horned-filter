import React, { Component } from 'react'
import ImageItem from './ImageItem.js';

export default class ImageList extends Component {
    render() {
        const imageList = this.props.images.map(image =>
            <ImageItem image={image} />
        );
        return (
            <>
                <ul className='imageList'>
                    {imageList}
                </ul>
                <form>

                </form>
            </>
        )
    }
}
