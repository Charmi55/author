import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';

function App() {
  return (
   <>
   <Header/>
   <Body name={['the shining','abc','pqr','xyz']}/>
    <Footer/>
   </>
  );
}

export default App;
