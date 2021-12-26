
import { Switch, Route } from 'react-router-dom'
import DogList from './DogList'
import DogDetail from './DogDetail'



function Routes({dogs}) {
    return (
        <>
            <Switch>
                <Route exact path="/dogs">
                    <DogList dogs={dogs}/>
                </Route>
                <Route exact path="/dogs/:name">
                    <DogDetail dogs={dogs}/>
                </Route>
            </Switch>
        </>
    )
}

export default Routes