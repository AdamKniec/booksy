import React from "react";
import "../styles/action-box.scss";

const ActionBox = props => {
  return (
    <div className={props.activated ? "action-box visible" : "action-box"}>
      <a href="#">
        <img
          src="../img/checked.svg"
          alt="mark-checked"
          className={props.activated ? "show" : null}
          onClick={props.markBookCompleted}
        />
      </a>
      <a href="#">
        <img
          src="../img/delete.svg"
          alt="mark-delete"
          className={props.activated ? "show" : null}
          onClick={function() {
            props.removeClickedItem();
            props.toggleRemoveNotification();
          }}
        />
      </a>
    </div>
  );
};
export default ActionBox;
