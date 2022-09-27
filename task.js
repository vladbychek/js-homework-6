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
    }, 20);
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
    (this.health = 100)
  );

  tamagochiList.push(newTamagochi);

  name = document.getElementById("choose-name").value;

  let tamagochu = document.createElement("div");
  tamagochu.className = "tamagochi";
  tamagochu.id = `tamagochi-${tamagochiList.length}`;
  show.append(tamagochu);
  newTamagochi.id = tamagochiList.length;
  tamagochu.innerHTML =`
   <div class="back">DEAD</div>
    <img class="tamagochi_img" src="tamagochi.jpg"> <div class="tamagochi_info"> 
    <div class="tamagochi_name">Name: ${name}<br> </div> 
    <div class="tamagochi_health">Health: <span class="health">${this.health}</span><br></div> 
    </div> <button class="feed-btn">Feed</button>`;
  newTamagochi.healthDecreasing();
  
  const feedButton = document.querySelectorAll(".feed-btn")[tamagochiList.length - 1];

  newTamagochi.healthEl = document.querySelectorAll(".health")[tamagochiList.length - 1];

  feedButton.addEventListener("click", () => {
    newTamagochi.feeding.bind(newTamagochi)();  
  });
}