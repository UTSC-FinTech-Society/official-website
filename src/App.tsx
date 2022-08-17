import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Team from './pages/Team';
import Events from './pages/Events';
import EventDetails from './pages/EventDetails';
import News from './pages/News';
import NewsDetails from './pages/NewsDetails';
import MembershipForm from './pages/MembershipForm';
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
              <Route path='/events/:event_id' element={<EventDetails />} />
              <Route path='/news' element={<News />} />
              <Route path='/news/:news_id' element={<NewsDetails />} />
              <Route path='/membership-form' element={<MembershipForm />} /> 
              <Route path='*' element={<PageNotFound />} />
            </Routes>
          </div>
        </Router>
      </>
    )
};

export default App;
