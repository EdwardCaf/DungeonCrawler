let enemy = {
  "name": "",
  "health": 0,
  "strength": 0,
  "speed": 0,
}
let Goblin = {
  "name": "Goblin",
  "health": 10,
  "strength": 2,
  "speed": 4,
  appear: function () {
    enemy.name = this.name;
    enemy.health = this.health;
    enemy.strength = this.strength;
    enemy.speed = this.speed;
    enemy.attack = this.attack;
    consoleText.innerHTML = "A goblin appears in front of you! It's face looks as if you caught it off guard. It's disturbed by your presence and comes forth to attack!";
    consoleText.innerHTML += "<br/>" + "The " + this.name + " has " + this.health + " health, " + this.strength + " strength, and " + this.speed + " speed.";
  },
  attack: function () {
    let speedRollPlayer = player.speed + (Math.floor(Math.random() * 6) + 1);
    let speedRollEnemy = this.speed + (Math.floor(Math.random() * 6) + 1);
    let damageRoll = this.strength + (Math.floor(Math.random() * 6) + 1);
    if (speedRollEnemy < speedRollPlayer / 2) {
      consoleText.innerHTML += "<br/>" + "The " + this.name + " attacks and missed you.";
    } else {
      consoleText.innerHTML += "<br/>" + "The " + this.name + " attacks and does " + damageRoll + " damage.";
      player.health = player.health - damageRoll;
      document.getElementById('health').innerHTML = Math.floor(player.health);
    }
  }
}
let Jose = {
  "name": "Jose",
  "health": 20,
  "strength": 4,
  "speed": 7,
  appear: function () {
    enemy.name = this.name;
    enemy.health = this.health;
    enemy.strength = this.strength;
    enemy.speed = this.speed;
    enemy.attack = this.attack;
    consoleText.innerHTML = "A flying beaver comes down from above you and attempts to bite your head off!! Fighting is futile.";
    consoleText.innerHTML += "<br/>" + this.name + " has " + this.health + " health, " + this.strength + " strength, and " + this.speed + " speed.";
  },
  attack: function () {
    let speedRollPlayer = player.speed + (Math.floor(Math.random() * 6) + 1);
    let speedRollEnemy = this.speed + (Math.floor(Math.random() * 6) + 1);
    let damageRoll = this.strength + (Math.floor(Math.random() * 6) + 1);
    if (speedRollEnemy < speedRollPlayer / 2) {
      consoleText.innerHTML += "<br/>" + "The " + this.name + " attacks and missed you.";
    } else {
      consoleText.innerHTML += "<br/>" + "The " + this.name + " attacks and does " + damageRoll + " damage.";
      player.health = player.health - damageRoll;
      document.getElementById('health').innerHTML = Math.floor(player.health);
    }
  }
}
let GiantRat = {
  "name": "Giant Rat",
  "health": 12,
  "strength": 4,
  "speed": 2,
  appear: function () {
    enemy.name = this.name;
    enemy.health = this.health;
    enemy.strength = this.strength;
    enemy.speed = this.speed;
    enemy.attack = this.attack;
    consoleText.innerHTML = "You hear a faint squeaking from the other side of the room and two piercing red eyes. As you stare closer a giant rat approaches you with hunger in it's eyes!";
    consoleText.innerHTML += "<br/>" + "The " + this.name + " has " + this.health + " health, " + this.strength + " strength, and " + this.speed + " speed.";
  },
  attack: function () {
    let damage = this.strength + (Math.floor(Math.random() * 6) + 1);
    if (damage < player.speed / 2) {
      consoleText.innerHTML += "<br/>" + "The " + this.name + " attacks and missed you.";
    } else {
      consoleText.innerHTML += "<br/>" + "The " + this.name + " attacks and does " + damage + " damage.";
    }
  }
}