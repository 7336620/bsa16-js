'use strict';

// http://www.es6fiddle.net/iqmfpzia/
// main class  Fighter (using classes + inheritance + super )
class Fighter {
  // constructor of class(using default settings )
  constructor(name = "",power = 1,health = 50){ 
    this.name = name;
    this.power = power;
    this.health = health;
  }
  // method setDamage of class(using default settings , string interpolation )
  setDamage(damage = 0){
    this.health = (this.health < damage) ? 0 : (this.health - damage) ;
  	console.log(`Health of ${this.name} after damage(${damage}) is: ${this.health}`);
  }
  // method hit of class(using default settings , string interpolation )
  hit(enemy, point=1){
    let damage = point*this.power;
    console.log(`${this.name} try to bring damage to ${enemy.name} by damage(${damage})`);
    enemy.setDamage( damage );
  }
}

//
// child class ImprovedFighter (using classes + inheritance + super)
class ImprovedFighter extends Fighter{
  doubleHit(enemy,point=1){
    super.hit( enemy, point*2 );
  }
}


//
// function fight with variable number of parameters (using of spread / rest operator, block scoping (let))
function fight(fighter,improvedFighter,...points){

  for( let i = 0; (i < points.length) ; i++){
    fighter.hit(improvedFighter,points[i]);
    if(improvedFighter.health == 0){
      return fighter;
    }else{
    	if(  (++i) < points.length ){
      		improvedFighter.hit(fighter,points[i]);
    	}
    }
    if(fighter.health == 0){
      return improvedFighter;
    }    
  }
  return (null);
}


//
// function outputResult  (using of arrow functions)
let outputResult = (winnerResult) => {  
  if(winnerResult == null){
    console.log("End of fight. There is no winner.")
  }else{
    console.log(`Winner is ${winnerResult.name} `);
  }
  console.log(" ========= ")
};


//
// variables initializing, calling functions (using of spread / rest operator, block scoping (let, const))
{
	const fighter = new Fighter("Van Damme",10);
	const improvedFighter = new ImprovedFighter("Chuck Norris",5,80);
	let pointsForWinnerImprovedFighter = [5,3,2,10];
	let winner = fight(fighter,improvedFighter, ...pointsForWinnerImprovedFighter);
	outputResult(winner);
}
{
	let fighter = new Fighter("Van Damme",10);
	let improvedFighter = new ImprovedFighter("Chuck Norris",5,80);
	let pointsForWinnerFighter = [5,3,10,2];
	let winner = fight(fighter,improvedFighter, ...pointsForWinnerFighter);
	outputResult(winner);
}

{
	let fighter = new Fighter("Van Damme",10);
	let improvedFighter = new ImprovedFighter("Chuck Norris",5,80);
	let pointsForNoWinner = [5,3,2];
	let winner = fight(fighter,improvedFighter, ...pointsForNoWinner);
	outputResult(winner);
}