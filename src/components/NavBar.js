import { Nav, Navbar, Container, Button } from "react-bootstrap";

function NavBar() {
  return (
    <>
      <Navbar className="position-relative" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>مكتبة الصفوة</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Member PL</Nav.Link>
            <Nav.Link href="#features">Books PL</Nav.Link>
          </Nav>
          <Button className="position-relative end-0">Add member PL</Button>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
