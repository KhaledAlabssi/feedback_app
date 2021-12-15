import React, {useState} from 'react'
// import PropTypes from 'prop-types'


function FeedbackItem({item}) {

    return (
        <div className='card'>
            <div className='num-display'>{item.rating}</div>
            <div className='text-display'>{item.text}</div>
            
        </div>
    )
}

// FeedbackItem.defaultProps = {

// }

// FeedbackItem.propTypes = {

// }

export default FeedbackItem
