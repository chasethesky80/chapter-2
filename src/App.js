import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile'
import Projects from './components/Projects';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header logo={logo}/>
        <Routes>
          <Route path = "/" element={<Profile userName={'octocat'}/>}/>
          <Route path="/projects" element={<Projects userName={'octocat'}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
