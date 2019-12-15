
// GREETING

alert("System: Hello and welcome to Tamagochi World!")
let chooseDifficulty = confirm("System: Choose your difficulty ( OK - Easy, Cancel - Hard)")
if (chooseDifficulty == true) {
  document.getElementById('difficulty').innerHTML = ("Difficulty: Easy")
  easyLvl()
} else {
  document.getElementById('difficulty').innerHTML = ("Difficulty: Hard")
  hardLvl()
}

alert("System: All info you find in menu. Good luck)")



// ACTION ANIMATION

function eat() {
  let life = document.getElementById('pet'),
    style = life.style;
  life.classList.add('eat-action');
  function timeAnim() {
  life.classList.remove('eat-action');
  }
  setTimeout(timeAnim, 1000)
}

function washUp() {
  let life = document.getElementById('pet'),
    style = life.style;
  life.classList.add('wash-action');
  function timeAnim() {
  life.classList.remove('wash-action');
  }
  setTimeout(timeAnim, 1000)
}

function dance() {
  let life = document.getElementById('pet'),
    style = life.style;
  life.classList.add('dance-action');
  function timeAnim() {
  life.classList.remove('dance-action');
  }
  setTimeout(timeAnim, 1000)
}


/////////////// EASY LEVEL

function easyLvl() {

  function death() {
    let life = document.getElementById('pet'),
      style = life.style;
    life.classList.remove('pet-normal');
    life.classList.remove('eat-action');
    life.classList.remove('wash-action');
    life.classList.remove('dance-action');
    life.classList.add('pet-death');
  }

  function lvlDisplayer() {
    document.getElementById('food').innerHTML = (pet.foodLvl + "%");
    document.getElementById('clean').innerHTML = (pet.cleanLvl + "%");
    document.getElementById('happy').innerHTML = (pet.happyLvl + "%");
  }

  // STATS

  let pet = {

    foodLvl: Math.ceil(Math.random() * (100 - 50) + 50),
    cleanLvl: Math.ceil(Math.random() * (100 - 50) + 50),
    happyLvl: Math.ceil(Math.random() * (100 - 50) + 50),

  }

  lvlDisplayer()

  function stats() {

    if (pet.foodLvl - 3 < 0 || pet.cleanLvl - 3 < 0 || pet.happyLvl - 3 < 0) {
      death()
      lvlDisplayer()
      alert("System: Your pet is dead! Your time: " + lifeTime.minutes + " m " + lifeTime.seconds + " s.")
      location.reload()
    } else {
      pet.foodLvl -= 3
      pet.cleanLvl -= 3
      pet.happyLvl -= 3
      lvlDisplayer()
    }
  }
  setInterval(stats, 5000);

  // ACTION BUTTONS

  function feed() {
    eat()
    pet.foodLvl += 30
    pet.cleanLvl -= 20
    lvlDisplayer()
    if (pet.foodLvl >= 100) {
      pet.foodLvl = 100
      lvlDisplayer()
    }
    if (pet.cleanLvl <= 0) {
      death()
      pet.cleanLvl = 0
      lvlDisplayer()
      clearInterval()
      alert("System: Your pet is dead! Your time: " + lifeTime.minutes + " m " + lifeTime.seconds + " s.")
      location.reload()
    }
  }
  document.getElementById('food-btn').onclick = function () {
    feed()
  }

  function wash() {
    washUp()
    pet.cleanLvl += 40
    pet.happyLvl -= 20
    lvlDisplayer()
    if (pet.cleanLvl >= 100) {
      pet.cleanLvl = 100
      lvlDisplayer()
    }
    if (pet.happyLvl <= 0) {
      death()
      pet.happyLvl = 0
      lvlDisplayer()
      clearInterval()
      alert("System: Your pet is dead! Your time: " + lifeTime.minutes + " m " + lifeTime.seconds + " s.")
      location.reload()
    }
  }

  document.getElementById('clean-btn').onclick = function () {
    wash()
  }

  function run() {
    dance()
    pet.happyLvl += 15
    pet.foodLvl -= 10
    lvlDisplayer()
    if (pet.happyLvl >= 100) {
      pet.happyLvl = 100
      lvlDisplayer()
    }
    if (pet.foodLvl <= 0) {
      death()
      pet.foodLvl = 0
      lvlDisplayer()
      clearInterval()
      alert("System: Your pet is dead! Your time: " + lifeTime.minutes + " m " + lifeTime.seconds + " s.")
      location.reload()
    }
  }

  document.getElementById('happy-btn').onclick = function () {
    run()
  }
}

/////////////// HARD LEVEL

function hardLvl() {

  function death() {
    let life = document.getElementById('pet'),
      style = life.style;
    life.classList.remove('pet-normal');
    life.classList.remove('eat-action');
    life.classList.remove('wash-action');
    life.classList.remove('dance-action');
    life.classList.add('pet-death');
  }

  function lvlDisplayer() {
    document.getElementById('food').innerHTML = (pet.foodLvl + "%");
    document.getElementById('clean').innerHTML = (pet.cleanLvl + "%");
    document.getElementById('happy').innerHTML = (pet.happyLvl + "%");
  }
  // STATS

  let pet = {

    foodLvl: Math.ceil(Math.random() * (100 - 50) + 50),
    cleanLvl: Math.ceil(Math.random() * (100 - 50) + 50),
    happyLvl: Math.ceil(Math.random() * (100 - 50) + 50),

  }

  lvlDisplayer()
  function stats() {
    if (pet.foodLvl - 5 < 0 || pet.cleanLvl - 5 < 0 || pet.happyLvl - 5 < 0) {
      death()
      lvlDisplayer()
      clearInterval()
      alert("System: Your pet is dead! Your time: " + lifeTime.minutes + " m " + lifeTime.seconds + " s.")
      location.reload()
    } else {
      pet.foodLvl -= 5
      pet.cleanLvl -= 5
      pet.happyLvl -= 5
      lvlDisplayer()
    }
  }
  setInterval(stats, 5000);

  // ACTION BUTTONS

  function feed() {
    eat()
    pet.foodLvl += 30
    pet.cleanLvl -= 20
    lvlDisplayer()
    if (pet.foodLvl >= 70) {
      pet.foodLvl = 70
      lvlDisplayer()
    }
    if (pet.cleanLvl <= 0) {
      death()
      pet.cleanLvl = 0
      lvlDisplayer()
      clearInterval()
      alert("System: Your pet is dead! Your time: " + lifeTime.minutes + " m " + lifeTime.seconds + " s.")
      location.reload()
    }
  }

  document.getElementById('food-btn').onclick = function () {
    feed()
  }

  function wash() {
    washUp()
    pet.cleanLvl += 40
    pet.happyLvl -= 20
    lvlDisplayer()
    if (pet.cleanLvl >= 70) {
      pet.cleanLvl = 70
      lvlDisplayer()
    }
    if (pet.happyLvl <= 0) {
      death()
      pet.happyLvl = 0
      lvlDisplayer()
      clearInterval()
      alert("System: Your pet is dead! Your time: " + lifeTime.minutes + " m " + lifeTime.seconds + " s.")
      location.reload()
    }
  }

  document.getElementById('clean-btn').onclick = function () {
    wash()
  }

  function run() {
    dance()
    pet.happyLvl += 15
    pet.foodLvl -= 10
    lvlDisplayer()
    if (pet.happyLvl >= 70) {
      pet.happyLvl = 70
      lvlDisplayer()
    }
    if (pet.foodLvl <= 0) {
      death()
      pet.foodLvl = 0
      lvlDisplayer()
      clearInterval()
      alert("System: Your pet is dead! Your time: " + lifeTime.minutes + " m " + lifeTime.seconds + " s.")
      location.reload()
    }
  }

  document.getElementById('happy-btn').onclick = function () {
    run()
  }
}




