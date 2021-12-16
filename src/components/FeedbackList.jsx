import React, {useContext} from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext'


function FeedbackList({deleteHandler}) {
    const {feedback} = useContext(FeedbackContext)
    if(!feedback || feedback.length === 0) {
        return <p>No Feedback Yet!</p>
    }
    return (
        <div className='feedback-list'>
            <AnimatePresence>
                
                {feedback.map(item => (
                    <motion.div key={item.id} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                    <FeedbackItem key={item.id} item={item} deleteHandler={deleteHandler} />
                    </motion.div>
                ))}
                
            </AnimatePresence>
        </div>
    )
}


export default FeedbackList
