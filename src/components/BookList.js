import books from "../data/books";
import BookItem from "./BookItem";
import { Container, Row } from "react-bootstrap";
import NavBar from "./NavBar";
import { useState } from "react";
import SearchBar from "./SearchBar";

const BookList = () => {
  const [query, setQuery] = useState("");
  const book = books
    .filter(
      (book) =>
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.genre.some((genre) =>
          genre.toLowerCase().includes(query.toLowerCase())
        )
    )
    .map((book) => <BookItem book={book} />);

  return (
    <div>
      <NavBar />
      <SearchBar setQuery={setQuery} />
      <Container className="mt-5 " fluid="md">
        <Row>{book}</Row>
      </Container>
    </div>
  );
};

export default BookList;
