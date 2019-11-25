import React from "react";
import "./GenericPopup.scss";

const GenericPopup = props => {
  return (
    <section className="generic-popup">
      <div className="container">
        <div className="modal-content animate">{props.children}</div>
      </div>
    </section>
  );
};

export default GenericPopup;
