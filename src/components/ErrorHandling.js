import React from 'react';


const ErrorHandling = (props) => {
    return (
        <div className='error-handling'>
            <p>Sorry something went wrong, please try again later</p>
            <h2>Error Message: {props.errorText}</h2>
        </div>
    )
}

export default ErrorHandling