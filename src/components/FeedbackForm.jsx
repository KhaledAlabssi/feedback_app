import React, {useState} from 'react'
import Button from './shared/Button'
import Card from './shared/Card'

function FeedbackForm() {
    const [text, setText] = useState('')
    const textHandler = (e) => {
        setText(e.target.value)
    }

    return (
        <Card>
            <form>
                <h2>How would you rate your service with us?</h2>
                {/* todo = rating select component */}
                <div className='input-group'>
                    <input onChange={textHandler} type='text' placeholder='leave a review' value={text} />
                    <Button type='submit'>Send</Button>
                </div>
            </form>
        </Card>
    )
}

export default FeedbackForm
