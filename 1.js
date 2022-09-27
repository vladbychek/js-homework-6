class Tamagochi{
   constructor(name,health){
      this.name = name;
      this.health = health;
   }
}


function addTamagochi() {
  
   let str = '<div id="tamagochi"><div id="back">DEAD</div><img id="tamagochi_img" src="/tamagochi.jpg"><div id="tamagochi_info"><div id="tamagochi_name">Name: <br> <span id="chosen_name"></span> </div><div  id="tamagochi_health">Health: <br> <span id="health_span"></span> %</div></div><button id="feed-btn">Feed</button></div>';
   document.getElementById('show').innerHTML = str;
 



   let name = document.getElementById('choose-name').value;
   document.getElementById('chosen_name').innerHTML = name;
}
document.querySelector('#create-btn').addEventListener('click', addTamagochi)




let health = 101
function minusHP() {
   if(health < 2){
      clearInterval(p);
      document.getElementById("back").style.display = "block";
      document.getElementById("tamagochi").style.border = "none";
   }
   health = health - 1
   
   document.getElementById('health_span').innerHTML = health;
   tamagochi_health_input.append(health)
}
let p = setInterval(minusHP, 50)



function feed() {
   health = health + 20
   if(health > 100){
      health = 101
   }
}
document.querySelector('#feed-btn').addEventListener('click', feed)





