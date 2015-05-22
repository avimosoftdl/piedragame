var Player = (function(){
	function Player(params){
		this.fullName = params.fullName;
		this.chosenOption = undefined;
	}
	Player.prototype.choose = function(options){
		var chosenIndex = parseInt(prompt(this.fullName + "0: piedra, 1: papel, 2: tijera"));
		this.chosenOption = options[chosenIndex];
	}

	Player.prototype.beats = function(otherPlayer){
		return this.chosenOption.beats(other.Player.chosenOption);
	}
	return Player;
})();