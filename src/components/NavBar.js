import { Nav, Navbar, Container, Button } from "react-bootstrap";

function NavBar({ setQuery }) {
  return (
    <>
      <Navbar className="position-relative" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>مكتبة الصفوة</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="./">Member</Nav.Link>
            <Nav.Link href="./books">Books</Nav.Link>
          </Nav>
          <Button className="position-relative end-0 mx-3">
            Add member PH
          </Button>
          <Button className="position-relative end-0 mx-3">Add book PH</Button>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
