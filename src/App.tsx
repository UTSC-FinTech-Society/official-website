import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Team from './pages/Team';
import Events from './pages/Events';
import News from './pages/News';
import PageNotFound from './pages/PageNotFound';

const App = () => {
    return (
      <>
        <Router basename='/'>
          <div className="container">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/team' element={<Team />} />
              <Route path='/events' element={<Events />} />
              <Route path='/news' element={<News />} />
              <Route path='*' element={<PageNotFound />} />
            </Routes>
          </div>
        </Router>
      </>
    )
};

export default App;
