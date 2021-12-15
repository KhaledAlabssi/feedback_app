import React from 'react'
import PropTypes from 'prop-types'

function Header({text, bgColor, textcolor}) {
    const headerStyle = {
        backgroundColor: bgColor,
        color: textcolor,
    }
    return (
        <header style={headerStyle}>
            <div className='container'>
                <h2>{text}</h2>
            </div>

            
        </header>
    )
}

Header.defaultProps = {
    text: 'Feedback App',
    bgColor: 'rgba(0,0,0,0.4)',
    textcolor: '#ff6a95',
}

Header.prototype = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textcolor: PropTypes.string
}

export default Header
