import React, {useState} from 'react'
import Button from './shared/Button'
import Card from './shared/Card'

function FeedbackForm() {
    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const textHandler = (e) => {
        if (e.target.value === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if (e.target.value !== '' && e.target.value.trim().length <= 10) {
            setMessage('Text must be at least 10 characters')
            setBtnDisabled(true)
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }

        setText(e.target.value)
    }

    return (
        <Card>
            <form>
                <h2>How would you rate your service with us?</h2>
                {/* todo = rating select component */}
                <div className='input-group'>
                    <input onChange={textHandler} type='text' placeholder='leave a review' value={text} />
                    <Button type='submit' isDisabled={btnDisabled}>Send</Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm
