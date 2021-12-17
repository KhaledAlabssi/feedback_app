import React, {createContext, useState} from 'react'
import {v4 as uuidv4} from 'uuid'


const FeedbackContext = createContext()
export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'this is default from context',
            rating: 6
        }, {
            id: 3,
            text: 'this is default from context',
            rating: 10
        }, {
            id: 2,
            text: 'this is default from context',
            rating: 5
        }
    ])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter(item => item.id !== id))
        }
    }
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }
    // Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    return <FeedbackContext.Provider value={
        {
            feedback, 
            deleteFeedback, 
            addFeedback, 
            editFeedback,
            feedbackEdit
        }}>
        {children}
    </FeedbackContext.Provider>

}

export default FeedbackContext;
