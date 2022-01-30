import { Form, FormControl, Button } from "react-bootstrap";

function SearchBar({ setQuery }) {
  return (
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        onChange={(event) => setQuery(event.target.value)}
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  );
}

export default SearchBar;
