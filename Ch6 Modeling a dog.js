const 
    dog = {
    name: "Fang",
    size: 75,
    species: "boarhound",
  
    bark() {
      return "Grrr! Grrr!";
    }
  };
  
  console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
  console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);