import { Card, Button } from "react-bootstrap";
import MemberDetail from "./MemberDetail";

const MemberItem = ({ member }) => {
  return (
    <Card
      bg="light"
      border="secondary"
      className="mx-4 my-3"
      style={{ width: "18rem" }}
    >
      <Card.Body>
        <Card.Title>{`${member.firstName} ${member.lastName}`}</Card.Title>
        <Button onClick={<MemberDetail />} variant="primary">
          View member
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MemberItem;
