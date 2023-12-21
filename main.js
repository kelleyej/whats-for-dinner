var sides = [
"Miso Glazed Carrots",
"Coleslaw",
"Garden Salad",
"Crispy Potatoes",
"Sweet Potato Tots",
"Coconut Rice",
"Caeser Salad",
"Shrimp Summer Rolls",
"Garlic Butter Mushrooms",
"Hush Puppies"
]

var mains = [
"Spaghetti and Meatballs",
"Pineapple Chicken",
"Shakshuka",
"Thai Yellow Curry",
"Bibimbap",
"Chicken Parmesean",
"Butternut Squash Soup",
"BBQ Chicken Burgers",
"Ramen",
"Empanadas",
"Chicken Fried Rice",
"Sheet Pan Fajitas",
"Margarita Pizza",
]

var desserts = [
"Apple Pie",
"Lemon Meringue Pie",
"Black Forest Cake",
"Banana Bread",
"Peach Cobbler",
"Cheesecake",
"Funfetti Cake",
"Baklava",
"Flan",
"Macarons",
"Macaroons",
"Chocolate Cupcakes",
"Pavlova",
"Pumpkin Pie",
"Key Lime Pie",
"Tart Tatin",
"Croissants",
"Eclairs"
]

var letsCookButton = document.querySelector('.cook')
var radioButtonSelected = document.getElementsByName('same')
var foodBox = document.querySelector(".foodbox")
var cookpot = document.querySelector(".cookpot")
var h1 = document.querySelector('h1')
var footer = document.querySelector('.footer')
var addRecipeButton = document.querySelector('.add')
var recipeTypeInput = document.querySelector('#typetext');
var recipeNameInput = document.querySelector('#nametext')
var addNewButton = document.querySelector('.new')
var cookPotImage = document.querySelector('.potimage')
var removeParagraph = document.querySelector('p')
var clearButton = document.querySelector('.clear')

letsCookButton.addEventListener('click', showRandomSides)
addRecipeButton.addEventListener('click', showRecipeForm)
addNewButton.addEventListener('click', updateDataModel)


function showRecipeForm(){
footer.classList.remove('hidden');
}

function getRandomFoodIndex(foodArray) {
       return Math.floor(Math.random() * foodArray.length);
}

var sidesIndex = getRandomFoodIndex(sides)
var mainsIndex = getRandomFoodIndex(mains)
var dessertsIndex = getRandomFoodIndex(desserts)
var randomSides = sides[sidesIndex];
var randomMains = mains[mainsIndex];
var randomDesserts = desserts[dessertsIndex]

function showRandomSides(){
    foodBox.classList.remove('hidden')
    cookpot.classList.add('hidden')
    for(var i = 0; i < radioButtonSelected.length; i++){
    if(radioButtonSelected[i].checked && radioButtonSelected[i].value === 'Side'){
        h1.innerHTML = `${randomSides}!`; 
    } else if (radioButtonSelected[i].checked && radioButtonSelected[i].value === 'Main-dish'){
        h1.innerHTML = `${randomMains}!`; 
    } else if(radioButtonSelected[i].checked && radioButtonSelected[i].value === 'Dessert'){
        h1.innerHTML = `${randomDesserts}!`; 
    }
}
}
function updateDataModel(event){
cookpot.classList.add('hidden')
foodBox.classList.remove('hidden')

if(recipeTypeInput.value === "Side"){
    sides.push(recipeNameInput.value)
    h1.innerHTML = recipeNameInput.value
  } else if (recipeTypeInput.value === "Main dish"){
    mains.push(recipeNameInput.value)
    h1.innerHTML = recipeNameInput.value
  } else if (recipeTypeInput.value === "Dessert"){
    desserts.push(recipeNameInput.value)
    h1.innerHTML = recipeNameInput.value
  } else {
    h1.innerText = "ERROR: this recipe type does not exist..."
  removeParagraph.remove();
  clearButton.remove()

}
    
event.preventDefault();

}

