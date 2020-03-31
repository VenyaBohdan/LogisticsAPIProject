import React from 'react';
import logo from './logo.svg';
import './App.css';
import ApiService from './ApiService';

const api = {
  url: "http://localhost:3000/users",
  method: "GET"
}

function App() {
  return (
    <div className="App">
      <ApiService api = { api } />
    </div>
  );
}

export default App;
