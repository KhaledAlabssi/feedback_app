import React, {useState} from "react";
import {v4 as uuidv4} from 'uuid'
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData"
import About from "./pages/About";
import AboutIcon from "./components/AboutIcon";
import {FeedbackProvider} from './context/FeedbackContext' 

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter(item => item.id !== id))
    }
  }
  return (
    <FeedbackProvider>
    <Router>
      <Header />
      <div className="container">
        <Routes>
        <Route exact path='/' element={
          <>
            <FeedbackForm addHandler={addFeedback} />
        <FeedbackStats feedback={feedback}/>
        <FeedbackList feedback={feedback} deleteHandler={deleteFeedback} />
          </>
        }>
        
        </Route>
        <Route path='/about'element={<About />} />
        </Routes>
        {/* <Card>
          <NavLink to='/' activeClassName='active'>Home</NavLink>
          <NavLink to='/about' activeClassName='active'>About</NavLink>
        </Card> */}
        <AboutIcon />
      </div>
    </Router>
    </FeedbackProvider>
  );
}

export default App;
