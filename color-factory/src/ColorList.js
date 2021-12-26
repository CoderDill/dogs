import { NavLink } from 'react-router-dom'
import {useState} from 'react'




function ColorList({colors}) {
    const colorsList = Object.keys(colors).map(color => (
        <NavLink to={`colors/${color}`}>{color}</NavLink>
    ))
    return (
        <>
            <h1>Welcome to the color factory</h1>
            <NavLink to="/colors/new">Add a color</NavLink>
            <h4>Please select a color: </h4>
            {colorsList}
        </>
    )
}

export default ColorList