import React, { Component } from 'react'

export default class ImageItem extends Component {
    render() {
        return (
            <li>
                {this.props.image.title}
                <img alt='horned beast' src={this.props.image.url} />
            </li>
        )
    }
}
