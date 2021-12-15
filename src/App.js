import React, {useState} from "react";
import {v4 as uuidv4} from 'uuid'
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData"

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
    <>
      <Header />
      <div className="container">
        <FeedbackForm addHandler={addFeedback} />
        <FeedbackStats feedback={feedback}/>
        <FeedbackList feedback={feedback} deleteHandler={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
