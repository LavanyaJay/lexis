import React from "react";
import { Field, reduxForm } from "redux-form";

function AddCustomForm(props) {
  return (
    <div class="part4">
      <form onSubmit={props.addFlashCard}>
        <div>
          <label>Question</label>
          <div>
            <Field
              name="word"
              component="textarea"
              type="text"
              placeholder="Enter the word"
            />
          </div>
        </div>
        <div>
          <label>Answer </label>
          <div>
            <Field
              name="lastName"
              component="textarea"
              type="text"
              placeholder="Meaning of the word"
            />
          </div>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
export default reduxForm({
  form: "simple" // a unique identifier for this form
})(AddCustomForm);
