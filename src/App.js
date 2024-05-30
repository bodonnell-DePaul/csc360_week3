
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Drafts from './Drafts';
import CardDisplay from './CardDisplay';
import Navigation from './Navigation';
import Login from './Login';
import NewItem from './NewItem';


function App() {
  return (
    <Router basename="https://csc360-backend.azurewebsites.net">
      <Navigation/>
      <Routes>
        <Route path="/" element={<CardDisplay/>} />
        <Route path="/drafts" element={<Drafts/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/newItem" element={<NewItem/>} />
      </Routes>
    </Router>
  );
}

export default App;
