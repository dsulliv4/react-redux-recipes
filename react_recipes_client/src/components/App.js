import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { connect } from 'react-redux'

import './App.css'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer.js'
import Home from './components/HomePage/Home.js'
import RecipeListContainer from './containers/RecipeListContainer.js'
import RecipeContainer from './containers/RecipeListContainer.js'
import RecipeContainer from './containers/RecipeContainer.js'
import { fetchRecipes } from './actions/RecipeActions';

class App extends Component {

    componentDidMount(){
      this.props.fetchRecipes();
    }

    render() {
      return (
        <Router >
          <Navbar />
          <Switch>
            <Route exact path='/'component={Home}/>
            <Route exact path='/recipes' component={RecipeListContainer}/>
            <Route exact path='/recipes/new' component={RecipeFormContainer}/>
            <Route exact path='/recipes/planner' component={RecipePlannerContainer}/>
          </Switch>
          <Footer />
        </Router> 
      );
    } 
}

export default connect(null, { fetchRecipes })(App);