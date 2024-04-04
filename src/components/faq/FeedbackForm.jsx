import React from "react";
import "./scss/feedbackfrom.css";
const FeedbackForm = () => {
  return (
    <form className="feedback-form" id={"feedbackForm"}>
      <div className="container aboutus-page">
        <div>
          <p>have a question for us ?</p>
          <span>let's hear it</span>
        </div>
        <label htmlFor="Title">
          <input type="text" id="Title" placeholder="Title"/>
        </label>
        <label htmlFor="Description">
          <textarea id="Description" cols="30" rows="10" placeholder="Type Your Message Here..."></textarea>
        </label>
        <button>Send Feedback</button>
      </div>
    </form>
  );
};

export default FeedbackForm;
