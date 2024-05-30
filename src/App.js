
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Drafts from './Drafts';
import CardDisplay from './CardDisplay';
import Navigation from './Navigation';
import Login from './Login';
import NewItem from './NewItem';


function App() {
  return (
    <Router basename='https://witty-coast-0d35ec910.5.azurestaticapps.net/index.html'>
      <Navigation/>
      <Routes>
        <Route exact path="/" element={<CardDisplay/>} />
        <Route path="/drafts" element={<Drafts/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/newItem" element={<NewItem/>} />
      </Routes>
    </Router>
  );
}

export default App;
