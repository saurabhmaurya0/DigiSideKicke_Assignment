import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
   <nav className="NavBar-Wrapper">
     <div>
       <h1 className="NavBar-Title"><b>MERN DIGISIDEKICK ASSIGNMENT
</b></h1>
     </div>
     <div className="NavBar-Links">
      <Link to="/" className="NavBar-Link">Home</Link>
      <Link to="/add" className="NavBar-Link">Add</Link>
     </div>
   </nav>
  );
};

export default Home;
