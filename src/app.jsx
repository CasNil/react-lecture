import React from "react";
import AlertMessage from "./components/AlertMessage";
import Card from "./components/Card";
import { BsCheckCircleFill, BsFillXCircleFill } from "react-icons/bs";
import Pricing from "./components/Pricing";
import Counter from "./components/Counter";
import Person from "./components/Person";

const App = () => {
  const apiResponse = {
    status: 200,
    message: "Valid Inputs",
  };

  const handleClick = (msg) => {
    alert(msg);
  };
  return (
    <>
      <Person />
      <Counter />
      {apiResponse && apiResponse.status === 200 && (
        <AlertMessage
          icon={<BsCheckCircleFill />}
          type="success"
          message={apiResponse.message}
        />
      )}
      {apiResponse && apiResponse.status === 400 && (
        <AlertMessage
          icon={<BsFillXCircleFill />}
          type="danger"
          message={apiResponse.message}
        />
      )}

      <Pricing />
    </>
  );
};

export default App;
