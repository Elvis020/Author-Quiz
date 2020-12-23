import React, { useState } from "react";
import "./App.css";
import { Hero, Turn, Continue, Footer } from "./components";
import { authors } from "./data";
import { sample, shuffle, reduce } from "underscore";

function App() {
  const getTurnData = (authors) => {
    // Reducing and concatinating to the large set
    const allBooks = authors.reduce(function (p, c, i) {
      return p.concat(c.books);
    }, []);

    // Shuffling list using shuffle from underscore
    const fourRandomBooks = shuffle(allBooks).slice(0, 4); //Selecting four random ...
    const correctAnswer = sample(fourRandomBooks);

    return {
      books: fourRandomBooks,
      author: authors.find((author) =>
        author.books.some((title) => title === correctAnswer)
      ),
    };
  };

  const [turnData, setTurnData] = useState(getTurnData(authors));
  // const [numberOfClicks, setNumberOfClicks] = useState(0);

  // const handleClick = () => {
  //   setNumberOfClicks(prevC => prevC += 1)
  // }

  return (
    <div>
      {/* <ClickCounter handleClick={handleClick} numberOfClicks={numberOfClicks}  /> */}
      <div className="container-fluid">
        <Hero />
        <Turn {...turnData} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
