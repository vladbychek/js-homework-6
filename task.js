let tamagochiList = [];

class Tamagochi {
  constructor(name) {
    this.name = name;
    this.health = 100;
  }

  feeding() {
    if (this.health <= 80) {
      this.health += 20;
    } else {
      this.health = 100;
    }
    this.updateHealth();
  }

  healthDecreasing() {
    this.intervalID = setInterval(() => {
      this.health -= 1;
      this.updateHealth();
      if(this.health === 0){
         clearInterval(this.intervalID);
         const container = document.getElementById(`tamagochi-${this.id}`)
         container.querySelector(".back").style.display = "block";
         container.style.border = "none";
      }
    }, 1000);
  }

  updateHealth() {
    if (!this.healthEl) {  
      return;
    }
    this.healthEl.innerHTML = this.health;              
  }
}

function addTamagochi(name) {
  let newTamagochi = new Tamagochi(
    document.getElementById("choose-name").value,
    this.health = 100
  );

  tamagochiList.push(newTamagochi);

  name = document.getElementById("choose-name").value;

  let newDude = document.createElement("div");
  newDude.className = "tamagochi";
  newDude.id = `tamagochi-${tamagochiList.length}`;
  show.append(newDude);
  newTamagochi.id = tamagochiList.length;
  newDude.innerHTML =`
    <div class="back">DEAD</div>
    <img class="tamagochi_img" src="tamagochi.jpg"> <div class="tamagochi_info"> 
    <div class="tamagochi_name">Name: ${name}<br> </div> 
    <div class="tamagochi_health">Health: <span class="health">${this.health}</span><br></div> 
    </div> <button class="feed-btn">Feed</button>`;
  newTamagochi.healthDecreasing();
  
  const feedButton = document.querySelectorAll(".feed-btn")[tamagochiList.length - 1];

  newTamagochi.healthEl = document.querySelectorAll(".health")[tamagochiList.length - 1];

  function feed() {
    newTamagochi.feeding(newTamagochi)()
  }
  feedButton.addEventListener('click', feed)
}

document.querySelector('#create-btn').addEventListener('click', addTamagochi)


const choose_inut = document.querySelector('#choose-name')
const create_btn = document.querySelector('#create-btn')

choose_inut.oninput = function() {
  if(choose_inut.value != ''){
    create_btn.removeAttribute('disabled')
  } else {
    create_btn.setAttribute('disabled', true)
  }
}
