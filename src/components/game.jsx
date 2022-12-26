import React from 'react';



function Game(props){
    console.log(props)
    return (
     <>
      <div>
        <h1>player :{props.playerInfo.playerName}</h1>
        <p>score :{props.playerInfo.playerScore}</p>
        <p>steps :{props.playerInfo.playerSteps}</p>
        <div>
            <button onClick={() =>props.changeScore(1)}>+1</button>
            <button onClick={() =>props.changeScore(-1)}>-1</button>
            <button onClick={() =>props.changeScore(2)}>*2</button>
            <button onClick={() =>props.changeScore(.5)}>/2</button>
        </div>
        <p>{props.playerInfo.totalScores}</p>
      </div>
    </>
    )
  
}
  
  export default Game;