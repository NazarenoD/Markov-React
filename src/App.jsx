import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css'

import Landing from "./components/landing";
import MarkovNav from "./components/nav";
import CardGroup from "./components/cardGroup";
import Curse from "./components/curse";
import CurseIndex from "./components/curseIndex";
import Articles from './components/articles';




function App() {
  return (
    <div className="App">
      
      <Router>
        <MarkovNav></MarkovNav>
        <Routes>articles
        <Route exact path="articles/" element={<Articles/>}/>

          <Route exact path="exercises/:Curse/:Theme" element={<Curse/>}/>

          <Route exact path="exercises/:Curse" element={<CurseIndex/>}/>
          
          <Route exact path="exercises" element={<CardGroup/>}/>

          <Route exact path="/" element={<Landing/>}/>

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
