// Write a factory function that creates an object that represents a pet.
// The function should accept two arguments.
// Pet name
// Pet breed
// Invoke the factory function 3 times and place each animal in an array stored
// in a variable named BowWowKennels

const pet = function(petName, petBreed) {
  let petObject = {}
  petObject.Name = petName
  petObject.Breed = petBreed
  return petObject
}


let BowWowKennels = []
let firstPet = pet("Furry", "Husky")
BowWowKennels.push(firstPet)
let secondPet = pet("Castor", "Pitbull")
BowWowKennels.push(secondPet)
let thirdPet = pet("Athena", "Border Collie/ German Shepard")
BowWowKennels.push(thirdPet)
console.log(BowWowKennels)