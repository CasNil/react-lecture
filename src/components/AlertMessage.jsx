import React from "react";

const AlertMessage = (props) => {
  return (
    <div className={`alert alert-${props.type}`}>
      {props.icon && <span>{props.icon}</span>}
      {props.message}
    </div>
  );
};

export default AlertMessage;
