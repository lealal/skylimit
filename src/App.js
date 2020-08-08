import React from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom'

import Home from './pages/Home'
import Vincet from './pages/Vincent'
import Liberty from './pages/Liberty'
import Sunset from './pages/Sunset'
import Contact from './pages/Contact'
import SunsetFloor from './pages/SunsetFloor'
import LibertyFloor from './pages/LibertyFloor'
import VincentFloor from './pages/VincentFloor'
import FormSubmit from './pages/FormSubmit'
import SunsetAmenities from './pages/SunsetAmenities'
import LibertyAmenities from './pages/LibertyAmenities'
import VincentAmenities from './pages/VincentAmenities'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/sunset" component={Sunset}/>
      <Route exact path="/vincent" component={Vincet}/>
      <Route exact path="/liberty" component={Liberty}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/sunset/floorplans" component={SunsetFloor}/>
      <Route exact path="/liberty/floorplans" component={LibertyFloor}/>
      <Route exact path="/vincent/floorplans" component={VincentFloor}/>
      <Route exact path="/contact/submit" component={FormSubmit}/>
      <Route exact path="/sunset/amenities" component={SunsetAmenities}/>
      <Route exact path="/liberty/amenities" component={LibertyAmenities}/>
      <Route exact path="/vincent/amenities" component={VincentAmenities}/>
    </Switch>
  );
}

export default App;
