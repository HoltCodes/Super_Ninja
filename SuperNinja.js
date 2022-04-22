class ninja {
  user (Rogan, Fit, speed = 3, strength = 3) {
    this.name = Rogan;
    this.health = Fit;
    this.speed = speed;
    this.strength = strength; 
  }

  sayName(){
    console.log("Ninjas name is: " + this.name);
  }
  
  showStats(){
    console.log("Stats for: " + this.name);
    console.log("Health: " + this.health);
    console.log("Speed: " + this.speed);
    console.log("Strength: " + this.strength);
  }

  drinkSake(){
    this.health += 10;
    console.log(this.name + " drank sake and users health is now: " + this.health);
  }
}  

  class Sensei extends ninja {
    master(MasterC, health = 200, speed = 10, strength = 10, wisdom = 10) {
      super(MasterC, health, speed, strength);
      this.wisdom = wisdom;
    }

    speakWisdom() {
      console.log("Speak Wisdom...");
      this.drinkSake();
      console.log("Keep up the hard work!")
    }
  }

