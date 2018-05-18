let actionBar = document.getElementById('action-bar');
let actionBarOptions = document.getElementById('action-bar-options');
let roomNumber = 0;


function enterDungeon() {
  let buttonVanish = document.getElementById('enter-dungeon');
  buttonVanish.parentNode.removeChild(buttonVanish);
  // Add Text
  consoleText.innerHTML = "You're in the dungeon. The floors are made of cobblestone and the air smells of mold. You are faced with two paths in front of you, which do you take?";
  // Add buttons
  addMovementButtons();
  defaultMusic.play();
}

function attack() {
  if (player.speed >= enemy.speed) {
    playerFirstCombat();
  } else {
    playerSecondCombat();
  }
}

function playerFirstCombat() {
  let speedRollPlayer = player.speed + (Math.floor(Math.random() * 6) + 1);
  let speedRollEnemy = enemy.speed + (Math.floor(Math.random() * 6) + 1);
  let damageRoll = player.strength + (Math.floor(Math.random() * 6) + 1);
  if (speedRollPlayer < speedRollEnemy / 2) {
    consoleText.innerHTML += "<br/>" + player.name + " attacks and missed the " + enemy.name + ".";
    consoleText.innerHTML += "<br/>" + enemy.name + " has " + enemy.health + " health.";
    let speedRollPlayer = player.speed + (Math.floor(Math.random() * 6) + 1);
    let speedRollEnemy = enemy.speed + (Math.floor(Math.random() * 6) + 1);
    let damageRoll = enemy.strength + (Math.floor(Math.random() * 6) + 1);
    if (speedRollEnemy < speedRollPlayer / 2) {
      consoleText.innerHTML += "<br/>" + "The " + enemy.name + " attacks and missed you.";
    } else {
      consoleText.innerHTML += "<br/>" + "The " + enemy.name + " attacks and does " + damageRoll + " damage.";
      player.health = player.health - damageRoll;
      if (player.health < 1) {
        let buttonVanish2 = document.getElementById('attack');
        buttonVanish2.parentNode.removeChild(buttonVanish2);
        let buttonVanish3 = document.getElementById('flee');
        buttonVanish3.parentNode.removeChild(buttonVanish3);
        consoleText.innerHTML += "<br/>" + player.name + " has died.";
        document.getElementById('health').innerHTML = 0;
        addGameOverButton();
      } else {
        document.getElementById('health').innerHTML = Math.floor(player.health);
      }
    }
  } else {
    consoleText.innerHTML += "<br/>" + player.name + " attacks and does " + damageRoll + " damage.";
    enemy.health = enemy.health - damageRoll;
    if (enemy.health <= 0) {
      let buttonVanish2 = document.getElementById('attack');
      buttonVanish2.parentNode.removeChild(buttonVanish2);
      let buttonVanish3 = document.getElementById('flee');
      buttonVanish3.parentNode.removeChild(buttonVanish3);
      consoleText.innerHTML += "<br/> You killed the " + enemy.name + "!";
      exp = true;
      addContinueButton();
    } else {
      consoleText.innerHTML += "<br/>" + enemy.name + " has " + enemy.health + " health.";
      let speedRollPlayer = player.speed + (Math.floor(Math.random() * 6) + 1);
      let speedRollEnemy = enemy.speed + (Math.floor(Math.random() * 6) + 1);
      let damageRoll = enemy.strength + (Math.floor(Math.random() * 6) + 1);
      if (speedRollEnemy < speedRollPlayer / 2) {
        consoleText.innerHTML += "<br/>" + "The " + enemy.name + " attacks and missed you.";
      } else {
        consoleText.innerHTML += "<br/>" + "The " + enemy.name + " attacks and does " + damageRoll + " damage.";
        player.health = player.health - damageRoll;
        if (player.health < 1) {
          let buttonVanish2 = document.getElementById('attack');
          buttonVanish2.parentNode.removeChild(buttonVanish2);
          let buttonVanish3 = document.getElementById('flee');
          buttonVanish3.parentNode.removeChild(buttonVanish3);
          consoleText.innerHTML += "<br/>" + player.name + " has died.";
          document.getElementById('health').innerHTML = 0;
          addGameOverButton();
        } else {
          document.getElementById('health').innerHTML = Math.floor(player.health);
        }
      }
    }
  }
  adjustScroll();
}

function playerSecondCombat() {
  let speedRollPlayer = player.speed + (Math.floor(Math.random() * 6) + 1);
  let speedRollEnemy = enemy.speed + (Math.floor(Math.random() * 6) + 1);
  let damageRoll = enemy.strength + (Math.floor(Math.random() * 6) + 1);
  if (speedRollEnemy < speedRollPlayer / 2) {
    consoleText.innerHTML += "<br/>" + "The " + enemy.name + " attacks and missed you.";
    let speedRollPlayer = player.speed + (Math.floor(Math.random() * 6) + 1);
    let speedRollEnemy = enemy.speed + (Math.floor(Math.random() * 6) + 1);
    let damageRoll = player.strength + (Math.floor(Math.random() * 6) + 1);
    if (speedRollPlayer < speedRollEnemy / 2) {
      consoleText.innerHTML += "<br/>" + player.name + " attacks and missed the " + enemy.name + ".";
    } else {
      consoleText.innerHTML += "<br/>" + player.name + " attacks and does " + damageRoll + " damage.";
      enemy.health = enemy.health - damageRoll;
      if (enemy.health <= 0) {
        let buttonVanish2 = document.getElementById('attack');
        buttonVanish2.parentNode.removeChild(buttonVanish2);
        let buttonVanish3 = document.getElementById('flee');
        buttonVanish3.parentNode.removeChild(buttonVanish3);
        consoleText.innerHTML += "<br/> You killed the " + enemy.name + "!";
        exp = true;
        addContinueButton();
      } else {
        consoleText.innerHTML += "<br/>" + enemy.name + " has " + enemy.health + " health.";
      }
    }
  } else {
    consoleText.innerHTML += "<br/>" + "The " + enemy.name + " attacks and does " + damageRoll + " damage.";
    player.health = player.health - damageRoll;
    if (player.health < 1) {
      let buttonVanish2 = document.getElementById('attack');
      buttonVanish2.parentNode.removeChild(buttonVanish2);
      let buttonVanish3 = document.getElementById('flee');
      buttonVanish3.parentNode.removeChild(buttonVanish3);
      consoleText.innerHTML += "<br/>" + player.name + " has died.";
      document.getElementById('health').innerHTML = 0;
      addGameOverButton();
    } else {
      document.getElementById('health').innerHTML = Math.floor(player.health);
      let speedRollPlayer = player.speed + (Math.floor(Math.random() * 6) + 1);
      let speedRollEnemy = enemy.speed + (Math.floor(Math.random() * 6) + 1);
      let damageRoll = player.strength + (Math.floor(Math.random() * 6) + 1);
      if (speedRollPlayer < speedRollEnemy / 2) {
        consoleText.innerHTML += "<br/>" + player.name + " attacks and missed the " + enemy.name + ".";
      } else {
        consoleText.innerHTML += "<br/>" + player.name + " attacks and does " + damageRoll + " damage.";
        enemy.health = enemy.health - damageRoll;
        if (enemy.health <= 0) {
          let buttonVanish2 = document.getElementById('attack');
          buttonVanish2.parentNode.removeChild(buttonVanish2);
          let buttonVanish3 = document.getElementById('flee');
          buttonVanish3.parentNode.removeChild(buttonVanish3);
          consoleText.innerHTML += "<br/> You killed the " + enemy.name + "!";
          exp = true;
          addContinueButton();
        } else {
          consoleText.innerHTML += "<br/>" + enemy.name + " has " + enemy.health + " health.";
        }
      }
    }
  }
  adjustScroll();
}

function flee() {
  let speedRollPlayer = player.speed + (Math.floor(Math.random() * 6) + 1);
  let speedRollEnemy = enemy.speed + (Math.floor(Math.random() * 6) + 1);
  if (speedRollEnemy > speedRollPlayer) {
    consoleText.innerHTML += "<br/>" + player.name + " can't escape!";
    let speedRollPlayer = player.speed + (Math.floor(Math.random() * 6) + 1);
    let speedRollEnemy = enemy.speed + (Math.floor(Math.random() * 6) + 1);
    let damageRoll = enemy.strength + (Math.floor(Math.random() * 6) + 1);
    if (speedRollEnemy < speedRollPlayer / 2) {
      consoleText.innerHTML += "<br/>" + "The " + enemy.name + " attacks and missed you.";
    } else {
      consoleText.innerHTML += "<br/>" + "The " + enemy.name + " attacks and does " + damageRoll + " damage.";
      player.health = player.health - damageRoll;
      if (player.health <= 0) {
        let buttonVanish2 = document.getElementById('attack');
        buttonVanish2.parentNode.removeChild(buttonVanish2);
        let buttonVanish3 = document.getElementById('flee');
        buttonVanish3.parentNode.removeChild(buttonVanish3);
        consoleText.innerHTML += "<br/>" + player.name + " has died.";
        document.getElementById('health').innerHTML = 0;
        addGameOverButton();
      } else {
        document.getElementById('health').innerHTML = Math.floor(player.health);
      }
    }
  } else {
    let buttonVanish2 = document.getElementById('attack');
    buttonVanish2.parentNode.removeChild(buttonVanish2);
    let buttonVanish3 = document.getElementById('flee');
    buttonVanish3.parentNode.removeChild(buttonVanish3);
    consoleText.innerHTML += "<br/>" + player.name + " has gotten away!";
    player.health += 4;
    document.getElementById('health').innerHTML = Math.floor(player.health);
    addContinueButton();
  }
  adjustScroll();
}

// function enemyAttack() {
//   let speedRollPlayer = player.speed + (Math.floor(Math.random() * 6) + 1);
//   let speedRollEnemy = enemy.speed + (Math.floor(Math.random() * 6) + 1);
//   let damageRoll = enemy.strength + (Math.floor(Math.random() * 6) + 1);
//   if (speedRollEnemy < speedRollPlayer / 2) {
//     consoleText.innerHTML += "<br/>" + "The " + enemy.name + " attacks and missed you.";
//   } else {
//     consoleText.innerHTML += "<br/>" + "The " + enemy.name + " attacks and does " + damageRoll + " damage.";
//     player.health = player.health - damageRoll;
//     if (player.health <= 0) {
//       let buttonVanish2 = document.getElementById('attack');
//       buttonVanish2.parentNode.removeChild(buttonVanish2);
//       let buttonVanish3 = document.getElementById('flee');
//       buttonVanish3.parentNode.removeChild(buttonVanish3);
//       consoleText.innerHTML += "<br/>" + player.name + " has died.";
//     }
//     document.getElementById('health').innerHTML = Math.floor(player.health);
//   }
// }