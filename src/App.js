import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile'

function App() {
  return (
    <div className="App">
      <Header logo={logo}/>
      <Profile userName="octocat"/>
    </div>
  );
}

export default App;
