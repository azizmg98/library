import { Button, Modal } from "react-bootstrap";

const MemberDetail = ({ member, isOpen, setIsOpen }) => {
  return (
    <Modal
      show={isOpen}
      onHide={() => setIsOpen(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{`${member.firstName} ${member.lastName}`}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{`${member.firstName} has a ${member.membership} membership`}</h4>
        <p>{`${member.firstName} is currently borrowing ${member.currentlyBorrowedBooks.length} book(s)`}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setIsOpen(false)}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MemberDetail;
