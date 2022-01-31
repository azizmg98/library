import { Card, Button } from "react-bootstrap";
import MemberDetail from "./MemberDetail";
import { useState } from "react";

const MemberItem = ({ member }) => {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <Card
      bg="light"
      border="secondary"
      className="mx-4 my-3"
      style={{ width: "18rem" }}
    >
      <Card.Body>
        <Card.Title>{`${member.firstName} ${member.lastName}`}</Card.Title>
        <Button onClick={() => setIsOpen(true)} variant="primary">
          View member PH
        </Button>
        <MemberDetail member={member} isOpen={isOpen} setIsOpen={setIsOpen} />
      </Card.Body>
    </Card>
  );
};

export default MemberItem;
