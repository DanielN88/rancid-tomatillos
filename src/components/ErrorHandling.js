import React from "react";
import error_message from "../assets/error_message.png";

const ErrorHandling = (props) => {
  return (
    <div className="error-handling">
      <img className="error-handling-img" src={error_message} alt='A child with a camera for a head stands over two dead parents with movie reels for heads, intended to be a batman parody' />
      <div className="error-message-box">
        <p className="error-apology">
          Sorry something went wrong, please try again later
        </p>
        <h2 className="error-message">Error Message: {props.errorText}</h2>
      </div>
    </div>
  );
};

export default ErrorHandling;
