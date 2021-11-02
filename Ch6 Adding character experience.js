const aurora = {
    name: "aurora",
    health: 210,
    strength: 66,
    xp: 0,
  
    describe() {
      return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points`;
    }
  };
  
  aurora.health -= 20; 
  aurora.strength += 10; 
  aurora.xp += 15;  
  console.log(aurora.describe());
