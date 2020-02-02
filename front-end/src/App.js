import React from 'react';
import { Switch, Route } from 'react-router-dom'
import HomePage from './Pages/Home/Homepage'
// import { NavBar } from './Components/NavBar'
import './App.css';
import { NavBar } from './Components/NavBar';
import VideoPage from './Pages/VideoPage/VideoPage'
import About from './Pages/About'

function App() {
  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route path='/video/:id' component={VideoPage} />
        <Route path='/about' component={About} />
        <Route path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App