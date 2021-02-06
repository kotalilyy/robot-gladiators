var playerName = window.prompt("What is your robot's name?")
var playerHealth = 100;
var playerAttack = 50;

//You can also log multiple values at once like this 
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto" ;
var enemyHealth = 10;
var enemyAttack = 12;

var fight = function() {
  // alert players that they are starting the round
  window.alert("Welcome to Robot Gladiators!");

  //subtract the value of playerAttack from the value of enemyHealth nd use that result to update the value in the `enemyHealth` variable
  enemyHealth = enemyHealth - playerAttack;

  // log a resulting message to the console so we know that it worked.
  console.log(
  playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining. "
  );

  // subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
  playerHealth = playerHealth - enemyAttack;

  // log a resulting message to the console so we know that it worked.
  console.log(
  enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."

  //check player's health
  if (playerHealth <= 0) {
    window.alert(playerName + " hasdied!");
  }
  else {
    window.alert(playerName + " still has " + playerHealth + " health left");
  }
  );
  // check enemy's health
  if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
  }
  else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }
};
  
fight ();