// import logo from './logo.svg';
import "./App.css";
import React from "react";
import Game from "./components/game";
import player from "./components/playerInfo";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numOfPlayers:2,
      players:[player(),player()] ,
    };
    // for (let i=0;i<this.state.numOfPlayers;i++){
    //   this.state.players.push(player())
    // }
    // this.setPlayers()
    // console.log(this.state);
    this.changeScore = this.changeScore.bind(this);
    this.incrementSteps = this.incrementSteps.bind(this);
    this.checkForWin = this.checkForWin.bind(this);
    this.newGame = this.newGame.bind(this);
    // this.setPlayers = this.setPlayers.bind(this);
    // this.print = this.print.bind(this)
    // setTimeout(console.log(this.state),500);
    // this.exitGame = this.exitGame.bind(this);
  }

  // setPlayers(){
  //   for (let i=0;i<this.state.numOfPlayers;i++){
  //     console.log("ASdf")
  //     this.setState(prev=>{
  //       let newPlayers = [...prev.players]
  //       newPlayers.push(player())
  //       return {players : newPlayers}
  //     })
  //   }
  //   }
  //   print (){
  //   console.log("this.state.players",this.state)
  // }
  
  changeScore(num) {
    let score;
    let test = this.state.players[0].playerScore;
    console.log([test]);
    if (num === 1 || num === -1) {
      // score = this.state.players[0].playerScore + num
      this.setState(()=>({playerScore: this.state.players[0].playerScore + num}));
    } else {
      score = Math.round(this.state.players[0].playerScore * num)
      // this.setState(()=>({playerScore: Math.round(this.state.playerScore * num)}));
      
    }
    this.setState({[test] : score})
    this.incrementSteps();
    this.checkForWin();
  }
  checkForWin(){
    if(this.state.players[0].playerScore === 100){
      if(window.confirm("Do you want to play again?")){
        this.newGame()
        console.log('fsd')
      }else {
        console.log('ddwds')
    }
  }
  }
  newGame(){
    console.log()
  }

  incrementSteps() {
    let test = this.state.players[0].playerSteps
    this.setState(() => ({
      [test]: this.state.players[0].playerSteps + 1,
    }));
  }

  render() {
    return (
      <>
        <div>
        {/* <button onClick={this.setPlayers()}>set</button>
        <button onClick={this.print}>print</button> */}

          <h1> get to 100</h1>
          {/* <button onClick={Play}>Click to play</button> */}
          {/* {this.state.players.length === 0 && */}
          <Game
            key={1}
            playerInfo={this.state.players[0]}
            changeScore={this.changeScore}
          />
          <hr></hr>
        </div>
      </>
    );
  }
}

export default App;
