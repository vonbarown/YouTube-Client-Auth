import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import { Navbar } from './Components/NavBar';
import AuthContainer from './containers/authContainer'
import VideoPage from './Pages/VideoPage/VideoPage'
import Search from './Pages/Search/SearchPage'
import { Home } from './Pages/Home/Homepage'
import About from './Pages/About'
import axios from 'axios'
import './App.css';

class App extends Component {

  state = {
    user: null,
    isUserLoggedIn: false
  }

  setUser = (user) => {
    this.setState({
      user: user,
      isUserLoggedIn: true
    })
  }
  logoutUser = async () => {
    try {
      await axios.get('/auth/logout')
      this.setState({
        user: null,
        isUserLoggedIn: false
      })
      this.props.history.push('/')
    } catch (error) {
      console.log('error', error);
    }
  }

  checkUserIsLoggedIn = async () => {
    try {
      const { data } = await axios.get('/auth/isUserLoggedIn')
      this.setUser(data.payload)
    } catch (error) {

    }
  }

  renderAuthContainer = (routeProps) => <AuthContainer setUser={this.setUser}{...routeProps} isUserLoggedIn={this.state.isUserLoggedIn} />

  render() {
    return (
      <div className="App">
        <Navbar logoutUser={this.logoutUser}
          isUserLoggedIn={this.state.isUserLoggedIn}
        />

        <Switch>
          <Route path='/login' render={this.renderAuthContainer} />
          <Route path='/signup' render={this.renderAuthContainer} />
          <Route path='/video/:id' component={VideoPage} />
          <Route path='/about' component={About} />
          <Route path='/search' component={Search} />
          <Route path='/' component={Home} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App)