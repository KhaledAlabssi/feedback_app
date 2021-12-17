import React, {createContext, useState, useEffect} from 'react'

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
            `/feedback?_sort=id&_order=desc`
        )
        const data = await response.json()
        setFeedback(data)
        setLoading(false)
    }
    const addFeedback = async (newFeedback) => {
        const response = await fetch('/feedback', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback)
        })
        const data = await response.json()
        setFeedback([data, ...feedback])
    }
    // Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }
      // Delete feedback
  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      await fetch(`/feedback/${id}`, { method: 'DELETE' })

      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  // Update feedback item
  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updItem),
    })

    const data = await response.json()

    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
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
