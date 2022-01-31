import { Button, Modal } from "react-bootstrap";

const BookDetail = ({ book, isOpen, setIsOpen }) => {
  return (
    <Modal
      show={isOpen}
      onHide={() => setIsOpen(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {book.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{`By: ${book.author}`}</h4>
        <p>{`genre(s): ${book.genre}`}</p>
        <p>{book.available ? "Available" : "Unavailable"}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setIsOpen(false)}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BookDetail;
