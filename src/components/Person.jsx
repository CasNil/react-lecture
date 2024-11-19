import React, { useState } from "react";
import AlertMessage from "./AlertMessage";
import { BsCheckCircleFill } from "react-icons/bs";

const Person = () => {
  const [email, setEmail] = useState("demo@test.se");
  const [showAlert, setShowAlert] = useState(false);

  const handleEmailChange = (event) => {
    console.log(">>>>>", event.target.value);
    setEmail(event.target.value);
  };

  const handleClick = () => {
    setShowAlert(true);
  };

  const handleResetForm = () => {
    setEmail("");
    setShowAlert(false);
  };

  return (
    <>
      <div className="container mt-3">
        {showAlert && (
          <AlertMessage
            icon={<BsCheckCircleFill />}
            type="success"
            message="Operation Done!"
          />
        )}

        <form>
          <div className="mb-3 mt-3">
            <label for="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleClick}
          >
            Click Me
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleResetForm}
          >
            Reset
          </button>
        </form>
      </div>
    </>
  );
};
export default Person;
