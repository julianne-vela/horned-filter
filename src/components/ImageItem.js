import React, { Component } from 'react'

export default class ImageItem extends Component {
    render() {
        const {
            imageProp: {
                title,
                url,
                description,
            }
        } = this.props;

        return (
            <li className='ImageItem'>
                {title}
                <img alt={description} src={url} />
            </li>
        )
    }
}
