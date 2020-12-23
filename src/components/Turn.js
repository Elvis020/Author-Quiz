import React from "react";
import Book from "./Book";

const Turn = ({author,books}) => {
  // const {imageUrl,books,imageSource} = author;
  console.log(author)
  return (
    <div className="row turn" style={{ backgroundColor: "#fff" }}>
    <div className="col-4 offset-1">
        <img src={author.imageUrl} className="authorimage" alt="Author Image" />
    </div>
    <div className="col-6">
      {books.map((book, i) => (
        <Book key={i} title={book} />
      ))}
    </div>
  </div>
    
  );
};

export default Turn;
