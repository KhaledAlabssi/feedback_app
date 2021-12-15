import React, {useState} from 'react'
import { FaTimes } from 'react-icons/fa'
import Card from './shared/Card'
import PropTypes from 'prop-types'
function FeedbackItem({item, deleteHandler}) {

    return (
        <Card reverse={false}>
            <div className='num-display'>{item.rating}</div>
            <button className='close' onClick={() => deleteHandler(item.id)}>
                <FaTimes color='purple' />
            </button>
            <div className='text-display'>{item.text}</div>
            
        </Card>
    )
}

// FeedbackItem.defaultProps = {

// }

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired

}

export default FeedbackItem
