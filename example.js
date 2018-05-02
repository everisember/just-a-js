
function championsWinner(team){
	if(team.name === 'Real Madrid'){
		return true;
	}

	return false;
}

const team = {
	nombre: 'Bayer de Munich';
};

// Whats the result?
championsWinner(team);