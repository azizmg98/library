import { Card, Button } from "react-bootstrap";
import BookDetail from "./BookDetail";
import { useState } from "react";

const BookItem = ({ book }) => {
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
        <Card.Title>{book.title}</Card.Title>
        <Card.Subtitle className="my-3">{`By ${book.author}`}</Card.Subtitle>
        <Card.Text>
          {book.available ? "Book is available" : "Book is not available "}
        </Card.Text>
        <Button onClick={<BookDetail />} variant="primary">
          View Book PH
        </Button>
      </Card.Body>
    </Card>
  );
};

export default BookItem;
