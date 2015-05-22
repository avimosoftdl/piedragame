var Game = (function(){
	function Game(params){
		this.options = [
			new Rock(),
			new Paper(),
			new Scissors(),
		];
		this.playerOne = new Player({fullName: params.playerOneName});
		this.playerTwo = new Player({fullName: params.playerTwoName });
		this.winner = undefined;
	}

	//Public interface

	Game.prototype.play = function(){
		this._askPlayers();
		this._evalGame();
		this._printResults();
	}

	//Private interface

	Game.prototype._askPlayers = function(){
		[this.playerOne, this.playerTwo].forEach(function(player){
			player.choose(this.options);
		});
	}

	Game.prototype._evalGame = function(){
		if(this._isATie()){
			this.winner = undefined;
		} else if(this._playerOneWins()){
			this.winner = this.playerOne;
		} else {
			this.winner = this.playerTwo;
		}
	}

	Game.prototype._isATie = function(){
		return this.playerOne.chosenOption == this.playerTwo.chosenOption;
	}

	Game.prototype._playerOneWins = function(){
		return this.playerOne.beats(this.playerTwo);
	}

	return Game;
})();