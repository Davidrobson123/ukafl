import React from 'react';
import './App.scss';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Main from './components/common/Main';

function App() {
  return (
    <body className="size-1280">
        <Header/>
        <Main/>
        <Footer/>
    </body>
  );
}

export default App;
