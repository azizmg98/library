import members from "../data/members";
import MemberItem from "./MemberItem";
import { Container, Row } from "react-bootstrap";

const MembersList = () => {
  const member = members.map((member) => <MemberItem member={member} />);

  return (
    <div>
      <Container className="mt-5 " fluid="md">
        <Row>{member}</Row>
      </Container>
    </div>
  );
};

export default MembersList;
