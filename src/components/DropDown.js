import React, { Component } from 'react'

export default class DropDown extends Component {
    render() {
        const { currentValue, handleChange, options } = this.props

        return (
            <select value={currentValue}
                onChange={handleChange}
            >
                {options.map(ListItem => <option value={ListItem}>{ListItem}</option>)}
            </select>
        )
    }
}
