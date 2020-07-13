import React, { useState } from 'react';
import { Card, CardBody, Button } from 'reactstrap';
import Icon from '../Icon';
import './CardList.css';
import { toast } from 'react-toastify';

// For the 9 Items or the 9 Blocks for TicTacToe
const itemArray = new Array(9).fill('empty');

const CardList = () => {
  
  // For the array to fill with State
  const [isValue, setIsValue] = useState(false);

  // For the winner message
  const [resultMsg, setResultMsg] = useState("");

  // To reload the game
  const reloadGame = () => {
    setIsValue(false);
    setResultMsg("");
    itemArray.fill("empty", 0, 9);
  };

  // Check Winner
  const checkIsWinner = () => {
    if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[1] &&
      itemArray[1] === itemArray[2]
    ) {
      setResultMsg(`${itemArray[0]} wins`);
    } else if (
      itemArray[3] !== "empty" &&
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5]
    ) {
      setResultMsg(`${itemArray[3]} wins`);
    } else if (
      itemArray[6] !== "empty" &&
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8]
    ) {
      setResultMsg(`${itemArray[6]} wins`);
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6]
    ) {
      setResultMsg(`${itemArray[0]} wins`);
    } else if (
      itemArray[1] !== "empty" &&
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7]
    ) {
      setResultMsg(`${itemArray[1]} wins`);
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8]
    ) {
      setResultMsg(`${itemArray[2]} wins`);
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8]
    ) {
      setResultMsg(`${itemArray[0]} wins`);
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6]
    ) {
      setResultMsg(`${itemArray[2]} wins`);
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[1] !== "empty" &&
      itemArray[2] !== "empty" &&
      itemArray[3] !== "empty" &&
      itemArray[4] !== "empty" &&
      itemArray[5] !== "empty" &&
      itemArray[6] !== "empty" &&
      itemArray[7] !== "empty" &&
      itemArray[8] !== "empty") {
        setResultMsg('Game is Tie');
    }
  };

  //Change Item
  const changeItem = itemNumber => {
    // Result Message
    if(resultMsg) {
      return toast(resultMsg, { type: 'success' });
    }
    // Item fill validation
    if(itemArray[itemNumber] === 'empty') {
      itemArray[itemNumber] = isValue ? 'cross' : 'circle';
      setIsValue(!isValue);
    } else {
      return toast('Already Filled', { type: 'error' })
    }

    return checkIsWinner();
  };

  return (
    <React.Fragment>
      <div className="infoBlock">
        <h4>Player 1: <Icon className="icons circleIcon" name="circle" /> </h4>
        <h4>Player 2: <Icon className="icons crossIcon" name="cross" /> </h4>
        <h4>Empty: <Icon className="icons emptyIcon" /> </h4>
      </div>
      {resultMsg ?
        (
          <div className="mb-2 mt-2">
            <h3 className="h3 text-success text-uppercase text-center">
              {resultMsg}
            </h3>
            <Button
              color="success"
              block
              onClick={reloadGame}
            >Reload the game
            </Button>
          </div>
        )
      :
        (
          <h3 className="h3 text-center text-primary">
            {isValue ? "Cross" : "Circle"} turn
          </h3>
        )
      }
      <div className="grid">
        {itemArray.map((item, index) => (
            <Card onClick={() => changeItem(index)}>
              <CardBody className="box">
                <Icon className="icons" name={item} />
              </CardBody>
            </Card>
        ))}
      </div>
    </React.Fragment>
  )
}

export default CardList;
