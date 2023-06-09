import { Fragment } from "react";
import ReactDOM from 'react-dom';
import classes from "./Modal.module.css";
const ModalOverlay = () => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Backdrop = () => {
  return <div className={classes.backdrop}></div>;
};
const Modal = (props) => {
  return <Fragment>

    {ReactDOM.createPortal(<Backdrop></Backdrop>)}
    {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>)}
  </Fragment>;
};

export default Modal;
