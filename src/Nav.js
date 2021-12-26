import { NavLink } from "react-router-dom";
import './Nav.css'

function Nav({ dogs }) {
    const dogLinks = dogs.map(dog => (
        <NavLink key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`}>
            {dog.name}
        </NavLink>
    ))
    return (
        <nav>
            <NavLink exact to="/dogs">Home</NavLink>
            {dogLinks}
        </nav>
    )
}

export default Nav;