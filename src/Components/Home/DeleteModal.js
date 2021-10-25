import React from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

export default function DeleteModal(props) {
  const { showModal, closeModal, deleteUser } = props;

  const onYesDelete = () => {
    deleteUser();
  };
  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Delete?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Are you sure want to delete</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onYesDelete}>
          Yes
        </Button>
        <Button variant="secondary">No</Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
}
