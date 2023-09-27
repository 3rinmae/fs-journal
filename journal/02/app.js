console.log('javascript is working!')

let firstName = 'Erin'

// SECTION global variables
const secretMessage = `🧀`
// !SECTION global variables end

// SECTION functions

// NOTE definition of the function
function selectCheese() {
  console.log('Selected Cheese!')
}
// NOTE calls the function, tells the function to run
selectCheese()

// const weirdFunction = () => {

// } this is another option to write a function

function selectFoodItem(foodItem) {
  console.log(`Selected Food Item!`, foodItem)
}

// !SECTION functions end  


// Animal Murder Mystery Notes

const person = {
  name: 'Jeremy',
  age: 32,
  likesCats: true,
  favoriteFoods: ['sushi', 'broccoli', 'croissant sandwich']
}

function drawAnimals() {
  let stringOfEmojis = ''
  animals.forEach(animal => {
    stringOfEmojis += animal.emoji
  })
  console.log('string of emojis', stringOfEmojis);
}
