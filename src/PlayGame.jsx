import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import EndGame from "./EndGame";
import Timer from "./Timer";

const PlayGame = ({ setShowGame }) => {
  const [counter, setCounter] = useState(1);
  const [endTime, setEndTime] = useState(0);
  const timerRef = useRef();
  const [seconds , setSeconds] = useState(0);

  const sayilar = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ];
  const randomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  let sorted = [...sayilar].sort(() => Math.random() - 0.5);

  const game = (e) => {
    if (Number(e.target.innerHTML) === counter) {
      setCounter((prev) => prev + 1);
    }
  };
   


  return (
    <>
      {counter === 26 ? (
        <EndGame
          setShowGame={setShowGame}
          endTime={timerRef.current?.innerText}
        />
      ) : (
        <Container>
          <div className="d-flex alig-items-center justify-content-between my-3">
            <Timer finishedTime={setEndTime} counter={counter} ref={timerRef} />
            <div className="counter">Next: {counter}</div>
          </div>
          <Row className="row-cols-5">
            {sorted.map((item, index) => (
              <Col
                key={item}
                style={{ backgroundColor: randomColor() }}
                onClick={(e) => game(e)}
              >
                {item}
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </>
  );
};

export default PlayGame;
