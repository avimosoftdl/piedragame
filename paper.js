var Paper = (function(){
	function Paper(){
		this.name = "paper";
	}

	Paper.prototype.beats = function(otherOption){
		return otherOption.name == "rock";
	}

	return Paper;
})();