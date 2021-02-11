import React, { Component } from 'react'
import './stylesheets/DropDown.css';

export default class DropDown extends Component {
    render() {
        const { currentValue, handleChange, options, label } = this.props

        return (
            <div className='dropDown'>
                <fieldset>
                    <legend>{label}</legend>
                    <select className='options'
                        value={currentValue}
                        onChange={handleChange}
                    >
                        <option value=''>None</option>
                        {options.map(ListItem => <option value={ListItem} key={ListItem}>{ListItem}</option>)}
                    </select>
                </fieldset>
            </div>
        )
    }
}
