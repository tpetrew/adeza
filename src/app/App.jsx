import React from 'react'
import PuppiesScreen from './screens/PuppiesScreen'
import HomeScreen from './screens/HomeScreen'
import NewsScreen from './screens/NewsScreen'
import ProducersScreen from './screens/ProducersScreen'
import ReviewsScreen from './screens/ReviewsScreen'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './components/Header'
import Footter from './components/Footter'

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route path="/producers">
                        <ProducersScreen />
                    </Route>
                    <Route path="/reviews">
                        <ReviewsScreen />
                    </Route>
                    <Route path="/news">
                        <NewsScreen />
                    </Route>
                    <Route path="/puppies">
                        <PuppiesScreen />
                    </Route>
                    <Route path="/">
                        <HomeScreen />
                    </Route>
                </Switch>
                <Footter />
            </div>
        </Router>
    )
}

export default App;