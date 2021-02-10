import React, { Component } from 'react'
import ImageItem from './ImageItem.js';


export default class ImageList extends Component {
    state = {
        keyword: '',
        horns: 0,
    }

    render() {
        const filteredImages = this.props.images.filter((image) => {
            if (!this.state.keyword && !this.state.horns) return true;
            if (image.keyword === this.state.keyword || image.horns === this.state.horns) return true;

            console.log(image.horns)

            return false;
        }).map(image =>
            <ImageItem
                key={image.title}
                image={image} />);


        return (
            <>
                <form>
                    <fieldset>
                        <legend>Choose your beast</legend>
                        <label>Species: </label>
                        <select value={this.state.keyword}
                            onChange={(e) => {
                                e.preventDefault()
                                this.setState({
                                    keyword: e.target.value
                                })
                            }}
                        >
                            <option value=''></option>
                            <option value='narwhal'>Narwhal</option>
                            <option value='rhino'>Rhino</option>
                            <option value='unicorn'>Unicorn</option>
                            <option value='unilego'>UniLego</option>
                            <option value='triceratops'>Triceratops</option>
                            <option value='markhor'>Markhor</option>
                            <option value='mouflon'>Mouflon</option>
                            <option value='addax'>Addax</option>
                            <option value='chameleon'>Chameleon</option>
                            <option value='lizard'>Lizard</option>
                            <option value='dragon'>Dragon</option>
                        </select>
                        <label>Number of Horns: </label>
                        <select value={this.state.horns}
                            onChange={(e) => {
                                e.preventDefault()
                                this.setState({
                                    horns: e.target.value
                                })
                            }}
                        >
                            <option value=''></option>
                            <option value='1'>1 Horn</option>
                            <option value='2'>2 Horns</option>
                            <option value='3'>3 Horns</option>
                            <option value='100'>100 Horns</option>
                        </select>
                    </fieldset>
                </form >
                <div>Keyword: {this.state.keyword}</div>
                <div>Horns: {this.state.horns}</div>
                <ul className='ImageList'>
                    {filteredImages}
                </ul>
            </>
        )
    }
}
