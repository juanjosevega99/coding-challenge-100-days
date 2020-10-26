class DicesGame {
  constructor() {
    this.player1_score = this.throwDices();
    this.player2_score = this.throwDices();
    this.player3_score = this.throwDices();
  }
  throwDices() {
    let score = 0;
    for (let i = 0; i < 2; i++) {
      score += Math.ceil(Math.random() * 6);
    }
    return score;
  }
  getResults() {
    let gameResult = "";
    if (this.player1_score === this.player2_score) {
      if (this.player1_score === this.player3_score) {
        gameResult = "Tie: Pveryone";
      } else if (this.player1_score > this.player3_score) {
        gameResult = "Tie: Players 1 y 2";
      } else if (this.player1_score < this.player3_score) {
        gameResult = "Win: Player 3";
      }
    } else if (this.player1_score > this.player2_score) {
      if (this.player1_score === this.player3_score) {
        gameResult = "Tie: Players 1 y 3";
      } else if (this.player1_score > this.player3_score) {
        gameResult = "Win: Player 1";
      } else if (this.player1_score < this.player3_score) {
        gameResult = "Win: Player 3";
      }
    } else if (this.player1_score < this.player2_score) {
      if (this.player2_score === this.player3_score) {
        gameResult = "Tie: Players 2 y 3";
      } else if (this.player2_score > this.player3_score) {
        gameResult = "Win: Player 2";
      } else if (this.player2_score < this.player3_score) {
        gameResult = "Win: Player 3";
      }
    }
    console.log(`
        Scores:
        Player 1: ${this.player1_score},
        Player 2: ${this.player2_score},
        Player 3: ${this.player3_score},
        ${gameResult}
    `);
  }
}
