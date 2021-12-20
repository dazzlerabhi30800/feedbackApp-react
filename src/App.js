import React, {useState} from 'react';
// import FeedbackItem from './components/FeedbackItem';
// import {v4 as uuidv4} from 'uuid'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
// import FeedbackData  from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackForm from './components/FeedbackForm';
import FeedbackStats from './components/FeedbackStats';
import AboutPage from './pages/AboutPage'
// import { Fragment } from 'react/cjs/react.production.min';
import AboutIcon from './components/AboutIcon';
import { FeedbackProvider } from './context/FeedbackContext';



function App() {  
    return (
        <FeedbackProvider>

        <Router>
   
        <Header/>

        <div className='container'>  
        <Routes>
       
         <Route exact path='/' element={
             <>
             <FeedbackForm  />
             <FeedbackStats />
             <FeedbackList />
             </>
         }>

         </Route>

            <Route exact path='/about' element={<AboutPage />} /> 
            </Routes>
            <AboutIcon />      
       
            
        </div>
        </Router>
    </FeedbackProvider>
    )
}
export default App