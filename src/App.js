import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Header from "./Header";
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons'
import Chats from './Chats'
import ChatScreen from './ChatScreen'

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>

          <Route exact path='/'>
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>

          <Route exact path='/chat'>
            <Header backButton='/'/>
            <Chats />
          </Route>

          <Route exact path='/chat/:person'>
            <Header backButton='/chat'/>
            <ChatScreen />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
