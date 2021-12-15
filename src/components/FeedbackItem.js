import React, {useState} from 'react'
// import PropTypes from 'prop-types'


function FeedbackItem() {
    const [rating, setRating] = useState(1)
    const [text, setText] = useState('Default rating text!')

    return (
        <div className='card'>
            <div className='num-display'>{rating}</div>
            <div className='text-display'>{text}</div>
            
        </div>
    )
}

// FeedbackItem.defaultProps = {

// }

// FeedbackItem.propTypes = {

// }

export default FeedbackItem
