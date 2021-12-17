import React, {createContext, useState, useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'


const FeedbackContext = createContext()
export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([])
    const [loading, setLoading] = useState(true)
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    useEffect(() => {
        fetchFeedback()
        
    }, [])

    const fetchFeedback = async() => {
        const response = await fetch(
            `http://localhost:4999/feedback?_sort=id&_order=desc`
        )
        const data = await response.json()
        setFeedback(data)
        setLoading(false)
    }
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

    const updateFeedback = (id, updItem) => {
        setFeedback(
            feedback.map(item => (item.id === id ? {...item, ...updItem} : item))
        )
    }

    return <FeedbackContext.Provider value={
        {
            feedback, 
            deleteFeedback, 
            addFeedback, 
            editFeedback,
            feedbackEdit,
            updateFeedback,
            loading,

        }}>
        {children}
    </FeedbackContext.Provider>

}

export default FeedbackContext;
