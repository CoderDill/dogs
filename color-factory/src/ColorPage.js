import {NavLink, useParams} from 'react-router-dom'
 
function ColorPage() {
    const {color} = useParams()
    return (
        <div style={{backgroundColor: color}}>
            <h1>This is {color}</h1>
            <NavLink exact to="/colors">Go Back</NavLink>
        </div>
    )
}

export default ColorPage