import React, { Component } from 'react'

export default class DropDown extends Component {
    render() {
        const { currentValue, handleChange, options, label } = this.props

        return (
            <div>
                <fieldset>
                    <legend>{label}</legend>
                    <select value={currentValue}
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
