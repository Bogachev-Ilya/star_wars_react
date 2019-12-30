import React, {Component} from 'react'

const ErrorIndicator = () =>{
    return(
        <div className="error-indicator">
            <span className="boom">Ups...</span>
            <span>
                something was going wrong
            </span>

        </div>
    )
}

export default ErrorIndicator;