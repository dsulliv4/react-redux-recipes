import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { connect } from 'react-redux'

import './App.css'
import Nav from './components/Nav/Navbar.js'
import Footer from './components/Footer/Footer.js'
import Main from './components/MainPage/Main.js'
import RecipeListContainer from './containers/RecipeListContainer.js'
import RecipePlannerContainer from './containers/RecipePlannerContainer.js'
import RecipeFormContainer from './containers/RecipeFormContainer.js'
import { fetchRecipes } from './actions/recipeActions';

class App extends Component {

    componentDidMount(){
      this.props.fetchRecipes();
    }

    render() {
      return (
        <Router >
          <Nav />
          <Switch>
            <Route exact path='/'component={Main}/>
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