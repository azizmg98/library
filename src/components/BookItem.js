import { Card, Button } from "react-bootstrap";
import BookDetail from "./BookDetail";
import { useState } from "react";

const BookItem = ({ book }) => {
  const [isOpen, setIsOpen] = useState(false);
  //   function handleClick() {
  //     setIsOpen(!isOpen);
  //   }
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
        <Card.Text>{book.available ? "available" : " Unavailable "}</Card.Text>
        <Button onClick={() => setIsOpen(true)} variant="primary">
          View book
        </Button>
        <BookDetail book={book} isOpen={isOpen} setIsOpen={setIsOpen} />
      </Card.Body>
    </Card>
  );
};

export default BookItem;
