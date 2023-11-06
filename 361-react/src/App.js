import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



import Nav from './components/nav.js';
import HomePage from './pages/HomePage.js';
import FAQ from './pages/faq.js';
import Plans from './pages/plans.js';
import MyLocker from './pages/MyLocker.js';

import './App.css';


function App() {
  return (
    <>
    <BrowserRouter>
      <header className="">
        <h1>Fit Locker</h1>
      </header>

      <Nav />
      <main>
        <section>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/plans" element={<Plans/>}/>
            <Route path="/faq" element={<FAQ/>}/>
            <Route path="/MyLocker" element={<MyLocker/>}/>
          </Routes>
        </section>
      </main>
      <footer>
      <p>&copy;2023 Daksh Pandit.</p>
            <p class="copyright"><font size="-2"><strong>*All rights reserved</strong></font></p>
      </footer>


    </BrowserRouter>
    </>
  );
}

export default App;
