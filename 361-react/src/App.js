import React from 'react';
import { BrowserRouter, Routes, Route, Router, Switch } from 'react-router-dom';



import Nav from './components/nav.js';
import HomePage from './pages/HomePage.js';
import FAQ from './pages/faq.js';
import Plans from './pages/plans.js';
import MyLocker from './pages/MyLocker.js';
import FindExercises from './pages/FindExercises.js';
import CreateRoutines from './pages/CreateRoutines.js';
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
            <Route path="/FindExercises" element={<FindExercises/>}/>
            <Route path="/CreateRoutines" element={<CreateRoutines/>}/>
          </Routes>
        </section>
        
      </main>
      <footer>
      <p>&copy;2023 Daksh Pandit.</p>
            <p class="copyright"><font size="-3">*All rights reserved</font></p>
      </footer>


    </BrowserRouter>
    </>
  );
}

export default App;
