// RemoveConfirmDialog.jsx
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const RemoveConfirmDialog = ({ show, onHide, onConfirm, itemName }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Removal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Are you sure you want to remove {itemName}?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="danger" onClick={onConfirm}>
          Remove
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RemoveConfirmDialog;