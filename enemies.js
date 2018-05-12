let enemy = {
  "name": "",
  "health": 0,
  "strength": 0,
  "speed": 0,
}
let Goblin = {
  "name": "Goblin",
  "health": 14,
  "strength": 2,
  "speed": 7,
  appear: function () {
    enemy.name = this.name;
    enemy.health = this.health;
    enemy.strength = this.strength;
    enemy.speed = this.speed;
    enemy.attack = this.attack;
    consoleText.innerHTML = "A goblin appears in front of you! It's face looks as if you caught it off guard. It's disturbed by your presence and comes forth to attack!";
    consoleText.innerHTML += "<br/>" + "The " + this.name + " has " + this.health + " health, " + this.strength + " strength, and " + this.speed + " speed.";
  }
}
let GiantRat = {
  "name": "Giant Rat",
  "health": 19,
  "strength": 5,
  "speed": 4,
  appear: function () {
    enemy.name = this.name;
    enemy.health = this.health;
    enemy.strength = this.strength;
    enemy.speed = this.speed;
    enemy.attack = this.attack;
    consoleText.innerHTML = "You hear a faint squeaking from the other side of the room and notice two piercing red eyes. As you stare closer a giant rat approaches you looking hungry.";
    consoleText.innerHTML += "<br/>" + "The " + this.name + " has " + this.health + " health, " + this.strength + " strength, and " + this.speed + " speed.";
  }
}
let Bat = {
  "name": "Bat",
  "health": 17,
  "strength": 1,
  "speed": 9,
  appear: function () {
    enemy.name = this.name;
    enemy.health = this.health;
    enemy.strength = this.strength;
    enemy.speed = this.speed;
    enemy.attack = this.attack;
    consoleText.innerHTML = "You hear a flapping sound coming from behind and a bat flies all around you.";
    consoleText.innerHTML += "<br/>" + "The " + this.name + " has " + this.health + " health, " + this.strength + " strength, and " + this.speed + " speed.";
  }
}
let Imp = {
  "name": "Imp",
  "health": 14,
  "strength": 4,
  "speed": 8,
  appear: function () {
    enemy.name = this.name;
    enemy.health = this.health;
    enemy.strength = this.strength;
    enemy.speed = this.speed;
    enemy.attack = this.attack;
    consoleText.innerHTML = "A small, devilish creature approaches you with with it's sharp claws ready to attack.";
    consoleText.innerHTML += "<br/>" + "The " + this.name + " has " + this.health + " health, " + this.strength + " strength, and " + this.speed + " speed.";
  }
}



let Troll = {
  "name": "Troll",
  "health": 35,
  "strength": 9,
  "speed": 6,
  appear: function () {
    enemy.name = this.name;
    enemy.health = this.health;
    enemy.strength = this.strength;
    enemy.speed = this.speed;
    enemy.attack = this.attack;
    consoleText.innerHTML = "A troll stands in the center of the room. It has a hostile look on it's face and comes towards you.";
    consoleText.innerHTML += "<br/>" + "The " + this.name + " has " + this.health + " health, " + this.strength + " strength, and " + this.speed + " speed.";
  }
}
let Orc = {
  "name": "Orc",
  "health": 28,
  "strength": 7,
  "speed": 10,
  appear: function () {
    enemy.name = this.name;
    enemy.health = this.health;
    enemy.strength = this.strength;
    enemy.speed = this.speed;
    enemy.attack = this.attack;
    consoleText.innerHTML = "A green creature with sharp tusks lets out a roar and charges at you with a sword and shield.";
    consoleText.innerHTML += "<br/>" + "The " + this.name + " has " + this.health + " health, " + this.strength + " strength, and " + this.speed + " speed.";
  }
}







// let Jose = {
//   "name": "Jose",
//   "health": 20,
//   "strength": 4,
//   "speed": 7,
//   appear: function () {
//     enemy.name = this.name;
//     enemy.health = this.health;
//     enemy.strength = this.strength;
//     enemy.speed = this.speed;
//     enemy.attack = this.attack;
//     consoleText.innerHTML = "A flying beaver comes down from above you and attempts to bite your head off!! Fighting is futile.";
//     consoleText.innerHTML += "<br/>" + this.name + " has " + this.health + " health, " + this.strength + " strength, and " + this.speed + " speed.";
//   },
//   attack: function () {
//     let speedRollPlayer = player.speed + (Math.floor(Math.random() * 6) + 1);
//     let speedRollEnemy = this.speed + (Math.floor(Math.random() * 6) + 1);
//     let damageRoll = this.strength + (Math.floor(Math.random() * 6) + 1);
//     if (speedRollEnemy < speedRollPlayer / 2) {
//       consoleText.innerHTML += "<br/>" + "The " + this.name + " attacks and missed you.";
//     } else {
//       consoleText.innerHTML += "<br/>" + "The " + this.name + " attacks and does " + damageRoll + " damage.";
//       player.health = player.health - damageRoll;
//       document.getElementById('health').innerHTML = Math.floor(player.health);
//     }
//   }
// }