import "./App.css";
import Card from "../../components/Card/index";
import Board from "../../components/Board/index";
import { useState, useEffect } from "react";
import { boardsList } from "../../components/Board/constants";

function App() {
  const [boards, setBoards] = useState([]);
  console.log(boardsList);
  useEffect(() => {
    setBoards(boardsList);
  }, []);

  return (
    <div className="App">
      <main className="flexbox">
        {boards.map((board) => (
          <Board id={board.id} className={board.className}>
            {board.cards.map((card) => (
              <Card id={card.id} className={card.className} draggable="true">
                <p>{card.text}</p>
              </Card>
            ))}
          </Board>
        ))}
      </main>
    </div>
  );
}

export default App;
