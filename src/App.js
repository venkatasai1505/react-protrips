import './App.css';
import React, { Component } from 'react';
import Header from './components/AddTrip.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Display.jsx';
import AddTrip from './components/Header.jsx';
import Display from './components/Home.jsx';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      trips: [
        //{ date: '2017-01-10', place: 'Manali', type: 'trek' },
        //{ date: '2017-04-05', place: 'Mumbai', type: 'club' },
        //{ date: '2017-02-09', place: 'Marina', type: 'tropic' },
        //{ date: '2020-10-21', place: 'Coimbatore', type: 'trek' },
      ],
    };
  }
  addTrip = (newTrips) => {
    this.setState({
      trips: [...newTrips],
    });
  };
  render() {
    return (
      <>
        <Router>
          <Header />
          <div className="workplace">
            <Routes>
              <Route
                exact
                path="/"
                element={<Home trips={this.state.trips} />}
              />
              <Route
                path="/addTrip"
                element={
                  <AddTrip addTrip={this.addTrip} trips={this.state.trips} />
                }
              />
              <Route
                path="/display"
                element={<Display trips={this.state.trips} />}
              />
            </Routes>
          </div>
        </Router>
      </>
    );
  }
}