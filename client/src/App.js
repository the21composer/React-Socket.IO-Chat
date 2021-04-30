import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Container, Navbar} from 'react-bootstrap'
import {Login, ChatRoom} from 'components'

import './App.css'

const routes = [
    {path:'/', name:'Home', Component:Login},
    {path:'/:roomId', name:'ChatRoom', Component:ChatRoom}
]

export const App = () => {
    return (
        <Router>
            <Container className='col-12 p-0 m-0 h-100vh'>
                <Navbar className='custom-nav'>
                    <Navbar.Brand> React + Socket.IO Chat </Navbar.Brand>
                </Navbar>
                <Switch>
                    {routes.map(({path, Component}) => (
                        <Route key={path} path={path} exact>
                            <Component/>
                        </Route>
                    ))}
                </Switch>
            </Container>
        </Router>
    )
}
