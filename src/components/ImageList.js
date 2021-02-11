import React, { Component } from 'react'
import ImageItem from './ImageItem.js';


export default class ImageList extends Component {


    render() {
        const { filteredImages } = this.props;


        return (
            <ul className='ImageList'>
                {filteredImages.map(image =>
                    <ImageItem
                        key={image.title}
                        imageProp={image} />)}
            </ul>
        )
    }
}
