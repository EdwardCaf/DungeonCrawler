let remainingPoints = 15;
let buttonVanish2 = document.getElementById('attack');
let buttonVanish3 = document.getElementById('flee');
const defaultMusic = document.getElementById('default-music');
const battleMusic = document.getElementById('battle-music');
const finishMusic = document.getElementById('finish-music');
defaultMusic.volume = 0.3;
battleMusic.volume = 0.3;
finishMusic.volume = 0.3;


let player = {
  "name": "",
  "health": 0,
  "strength": 0,
  "speed": 0,
  "exp": 0,
  attack: function () {
    let speedRollPlayer = this.speed + (Math.floor(Math.random() * 6) + 1);
    let speedRollEnemy = enemy.speed + (Math.floor(Math.random() * 6) + 1);
    let damageRoll = this.strength + (Math.floor(Math.random() * 6) + 1);
    if (speedRollPlayer < speedRollEnemy / 2) {
      consoleText.innerHTML += "<br/>" + this.name + " attacks and missed the " + enemy.name + ".";
    } else {
      consoleText.innerHTML += "<br/>" + this.name + " attacks and does " + damageRoll + " damage.";
      enemy.health = enemy.health - damageRoll;
      consoleText.innerHTML += "<br/>" + enemy.name + " has " + enemy.health + " health.";
    }
  }
}

player.name = document.getElementById('user-name').value;
player.health = document.getElementById('health').innerHTML;
player.strength = document.getElementById('strength').innerHTML;
player.speed = document.getElementById('speed').innerHTML;
let consoleText = document.getElementById('console');
let enterStatsCheck = true;



window.onload = function () {
  roomLimit();
  consoleText.innerHTML = "Greetings Adventurer! You must make your way out of the dungeon! Please assign your stats and keep in mind that your health stat will be multiplied by a factor of 2.5. You will level up after each floor and gain stat points at random. If your health reaches 0 then you lose the game. Strength is for damage and speed is for evading and fleeing.";
}

function raiseHealth() {
  if (remainingPoints === 0) {
    checkPointsRemaining();
    adjustScroll();
  } else {
    // Add points
    player.health++;
    remainingPoints--;
    document.getElementById('remaining-points').innerHTML = remainingPoints;
    document.getElementById('health').innerHTML = player.health;
  }
}

function raiseStrength() {
  if (remainingPoints === 0) {
    checkPointsRemaining();
    adjustScroll();
  } else {
    // Add points
    player.strength++;
    remainingPoints--;
    document.getElementById('remaining-points').innerHTML = remainingPoints;
    document.getElementById('strength').innerHTML = player.strength;
  }
}

function raiseSpeed() {
  if (remainingPoints === 0) {
    checkPointsRemaining();
    adjustScroll();
  } else {
    // Add points
    player.speed++;
    remainingPoints--;
    document.getElementById('remaining-points').innerHTML = remainingPoints;
    document.getElementById('speed').innerHTML = player.speed;
  }
}

function checkPointsRemaining() {
  // Stop points alert
  let p = document.createElement('P');
  let pNode = document.createTextNode('No more points to spend!');
  p.appendChild(pNode);
  consoleText.appendChild(p);
}

function adjustScroll() {
  // Adjust to bottom of scroll
  consoleText.scrollTop = consoleText.scrollHeight;
}

function resetStats() {
  remainingPoints = document.getElementById('remaining-points').innerHTML = 15;
  health = document.getElementById('health').innerHTML = 0;
  strength = document.getElementById('strength').innerHTML = 0;
  speed = document.getElementById('speed').innerHTML = 0;
  player.health = 0;
  player.strength = 0;
  player.speed = 0;
}

function removeElements() {
  // Remove elements
  let buttonVanish1 = document.getElementById('increment-health');
  buttonVanish1.parentNode.removeChild(buttonVanish1);
  let buttonVanish2 = document.getElementById('increment-strength');
  buttonVanish2.parentNode.removeChild(buttonVanish2);
  let buttonVanish3 = document.getElementById('increment-speed');
  buttonVanish3.parentNode.removeChild(buttonVanish3);
  let buttonVanish4 = document.getElementById('enter-stat');
  buttonVanish4.parentNode.removeChild(buttonVanish4);
  let buttonVanish5 = document.getElementById('reset-stat');
  buttonVanish5.parentNode.removeChild(buttonVanish5);
  let buttonVanish6 = document.getElementById('remaining-points-parent');
  buttonVanish6.parentNode.removeChild(buttonVanish6);
  let buttonVanish7 = document.getElementById('user-name');
  buttonVanish7.parentNode.removeChild(buttonVanish7);
  let buttonVanish8 = document.getElementById('user-name-pre');
  buttonVanish8.parentNode.removeChild(buttonVanish8);
}

function enterStats() {
  if (remainingPoints === 0 && enterStatsCheck) {
    player.health = player.health + 2;
    player.health = player.health * 2.5;
    player.strength++;
    player.speed++;

    document.getElementById('health').innerHTML = Math.floor(player.health);
    document.getElementById('strength').innerHTML = player.strength;
    document.getElementById('speed').innerHTML = player.speed;

    enterStatsCheck = false;
    removeElements();
    document.getElementById('enter-dungeon').style.display = 'block';
    console.log(player.health);
  } else {
    // Stop points alert
    let p = document.createElement('P');
    let pNode = document.createTextNode('Add remaining points first');
    p.appendChild(pNode);
    // Adjust to bottom of scroll
    consoleText.appendChild(p);
    consoleText.scrollTop = consoleText.scrollHeight;
  }
}

function muteSound() {
  if (defaultMusic.muted === true && battleMusic.muted === true && finishMusic.muted === true) {
    defaultMusic.muted = false;
    battleMusic.muted = false;
    finishMusic.muted = false;
  } else {
    defaultMusic.muted = true;
    battleMusic.muted = true;
    finishMusic.muted = true;
  }
}

function clearConsole() {
  consoleText.innerHTML = "";
}

function roomDifficulty() {
  if (roomNumber >= 4) {
    randomMonster2();
  } else {
    randomMonster1();
  }
}

function randomMonster1() {
  let x = Math.floor(Math.random() * Math.floor(4)) + 1;
  if (x === 1) {
    Goblin.appear();
  }
  if (x === 2) {
    GiantRat.appear();
  }
  if (x === 3) {
    Imp.appear();
  }
  if (x === 4) {
    Bat.appear();
  }
}

function randomMonster2() {
  let x = Math.floor(Math.random() * Math.floor(2)) + 1;
  if (x === 1) {
    Troll.appear();
  }
  if (x === 2) {
    Orc.appear();
  }
}

function randomRoom() {
  roomDifficulty();
  removeMovementButtons();
  roomIncrement();
  addCombatButtons();
  defaultMusic.pause();
  defaultMusic.currentTime = 0;
  battleMusic.play();
}

function addMovementButtons() {
  let action1 = document.createElement('button');
  let actionNode1 = document.createTextNode('Left');
  action1.appendChild(actionNode1);
  actionBarOptions.appendChild(action1);
  action1.id = 'action-left';
  action1.classList.add('btn', 'btn-info', 'col-xs-2', 'ml-5');
  action1.setAttribute("onclick", "randomRoom();");

  let action2 = document.createElement('button');
  let actionNode2 = document.createTextNode('Right');
  action2.appendChild(actionNode2);
  actionBarOptions.appendChild(action2);
  action2.id = 'action-right';
  action2.classList.add('btn', 'btn-info', 'col-xs-2', 'mr-5');
  action2.setAttribute("onclick", "randomRoom();");
}

function addContinueButton() {
  let action1 = document.createElement('button');
  let actionNode1 = document.createTextNode('Continue');
  action1.appendChild(actionNode1);
  actionBarOptions.appendChild(action1);
  action1.id = 'action-continue';
  action1.classList.add('btn', 'btn-info', 'col-sm-2', 'ml-5', 'mx-auto');
  action1.setAttribute("onclick", "continueButton();");
}

function continueButton() {
  if (roomNumber === roomLimit) {
    removeContinueButton();
    addGameOverButton();
    consoleText.innerHTML = "Congratulations! You made it out of the dungeon!!";
    battleMusic.pause();
    finishMusic.play();
  } else {
    removeContinueButton();
    addMovementButtons();
    levelUp();
    consoleText.innerHTML = "Choose a path.";
    battleMusic.pause();
    battleMusic.currentTime = 0;
    defaultMusic.play();
  }
}

function addGameOverButton() {
  let action1 = document.createElement('button');
  let actionNode1 = document.createTextNode('Game Over');
  action1.appendChild(actionNode1);
  actionBarOptions.appendChild(action1);
  action1.id = 'action-game-over';
  action1.classList.add('btn', 'btn-info', 'col-sm-2', 'ml-5', 'mx-auto');
  action1.setAttribute("onclick", "location.reload();");
}

function addCombatButtons() {
  let action1 = document.createElement('button');
  let actionNode1 = document.createTextNode('Attack');
  action1.appendChild(actionNode1);
  actionBarOptions.appendChild(action1);
  action1.id = 'attack';
  action1.classList.add('btn', 'btn-danger', 'col-sm-2', 'ml-5');
  action1.setAttribute("onclick", "attack();");

  let action2 = document.createElement('button');
  let actionNode2 = document.createTextNode('Flee');
  action2.appendChild(actionNode2);
  actionBarOptions.appendChild(action2);
  action2.id = 'flee';
  action2.classList.add('btn', 'btn-success', 'col-sm-2', 'mr-5');
  action2.setAttribute("onclick", "flee();");
}

function roomIncrement() {
  roomNumber++;
  document.getElementById('room-number').innerHTML = "Room " + roomNumber;
}

function roomLimit() {
  roomLimit = (Math.floor(Math.random() * 8) + 6)
}

function levelUp() {
  let healthUp = (Math.floor(Math.random() * 4) + 1);
  let strengthUp = (Math.floor(Math.random() * 2) + 1);

  player.health += healthUp;
  player.strength += strengthUp;
  if (player.speed <= 13) {
    player.speed++;
  }

  document.getElementById('health').innerHTML = Math.floor(player.health);
  document.getElementById('strength').innerHTML = player.strength;
  document.getElementById('speed').innerHTML = player.speed;
}

function removeMovementButtons() {
  let buttonVanish2 = document.getElementById('action-left');
  buttonVanish2.parentNode.removeChild(buttonVanish2);
  let buttonVanish3 = document.getElementById('action-right');
  buttonVanish3.parentNode.removeChild(buttonVanish3);
}

function removeContinueButton() {
  let buttonVanish2 = document.getElementById('action-continue');
  buttonVanish2.parentNode.removeChild(buttonVanish2);
}