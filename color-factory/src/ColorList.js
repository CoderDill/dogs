import {NavLink} from 'react-router-dom'




function ColorList() {
    let colors = ['blue', 'red']
    const colorsList = colors.map(color => (
        <NavLink to="colors/{color}">{color}</NavLink>
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