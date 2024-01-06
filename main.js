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
var cookpot = document.querySelector(".cookpot")
var footer = document.querySelector('.footer')
var addRecipeButton = document.querySelector('.add')
var recipeTypeInput = document.querySelector('#typetext');
var recipeNameInput = document.querySelector('#nametext')
var addNewButton = document.querySelector('.new')
var cookPotImage = document.querySelector('.potimage')

cookpot.addEventListener('click', deleteRecipe)
letsCookButton.addEventListener('click', showRandomSides) 
addRecipeButton.addEventListener('click', showRecipeForm)
addNewButton.addEventListener('click', rendorAddRecipe)

function deleteRecipe(){
  cookpot.innerHTML = '';
  cookpot.innerHTML +=
`<center><img class="potimage" src="assets/cookpot.svg" alt="Cookpot"></center>`
}


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
cookPotImage.classList.remove();
cookpot.innerHTML = '';
    for(var i = 0; i < radioButtonSelected.length; i++){
    if(radioButtonSelected[i].checked && radioButtonSelected[i].value === 'Side'){
        cookpot.innerHTML +=
        `<p>You should make:</p>
        <h1>${randomSides}!</h1>
        <button class='clear'>CLEAR</button>`
    } else if (radioButtonSelected[i].checked && radioButtonSelected[i].value === 'Main-dish'){
    cookpot.innerHTML +=
    `<p>You should make:</p>
    <h1>${randomMains}!</h1>
    <button class='clear'>CLEAR</button>`
} else if(radioButtonSelected[i].checked && radioButtonSelected[i].value === 'Dessert'){
    cookpot.innerHTML +=
    `<p>You should make:</p>
    <h1>${randomDesserts}!</h1>
    <button class='clear'>CLEAR</button>`


}
    }
  }

function rendorAddRecipe(event){
    cookPotImage.classList.remove();
    var input = capitalizeFirstLetter(recipeTypeInput.value)
    cookpot.innerHTML = '';
    if(input === "Side" || input === "Main dish" || input == "Dessert"){
        cookpot.innerHTML +=
        `<h1>${recipeNameInput.value}</h1>`
    } else {
        cookpot.innerHTML +=
        `<h1>ERROR: this recipe type does not exist...</h1>`
    }
   addFoodItems();
    event.preventDefault();
}



  function addFoodItems(){
    var recipe = {
        type: capitalizeFirstLetter(recipeTypeInput.value), 
        name: recipeNameInput.value
    }
  if(recipe.type === "Side"){
    sides.push(recipe.name)
  } else if(recipe.type === "Main dish"){
    mains.push(recipe.name)
  } else if(recipe.type === "Dessert"){
    desserts.push(recipe.name)
  }

}

function capitalizeFirstLetter(input) {
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}