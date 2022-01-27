import { Card, Button } from "react-bootstrap";

const MemberDetail = ({ member }) => {
  return (
    <Card className="mx-4 my-3" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{`${member.firstName} ${member.lastName}`}</Card.Title>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default MemberDetail;
