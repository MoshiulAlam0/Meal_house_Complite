// for data load form the api (it's fiend by the meal name) 
let mealdata;
function dataLoad (name = 'e') {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeal6(data.meals))
        .catch(err => console.log(err))
}
// make meals div and set 
function setMeals(meals6) {
    const mealsSection = document.getElementById('meals-section');
    for (const meal of meals6) {
        const element = document.createElement('div');
        element.classList.add('meal-container');
        element.innerHTML = `
                <div class="meal-img">
                    <img src="${meal.strMealThumb}" alt="">
                </div>
                <div class="meals-info">
                    <h4 class="meals-name">${meal.strMeal}</h4>
                    <p>${meal.strInstructions}</p>
                    <h5 onclick="mealDataLoadById(${meal.idMeal})">View Details</h5>
                </div>`;
        mealsSection.appendChild(element);
    }
}
// for show data on the card 
function displayMeal6  (meals) {
    if (meals !== null) {
        if (meals.length >= 6) {
            const meals6 = meals.splice(0, 6);
            mealdata = meals;
            setMeals(meals6);
        }
        else {
            setMeals(meals);
            genaretAutoMeal();
        }

    }
}

// for search input btn 
const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', function () {
    const fieldValue = document.getElementById('search-field').value;
    const mealsSection = document.getElementById('meals-section');
    mealsSection.innerHTML = '';
    dataLoad(fieldValue);
})


// for seeMore btn 
document.getElementById('see-btn').addEventListener('click', function () {
    if (mealdata !== undefined) {
        displayMeal6(mealdata);
    }
    else {
        console.log('i have goten undefined');
    }

})

dataLoad();



// lead mealData with letter
function loadData(letter) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
    .then(res => res.json())
    .then(data => displayMeal6(data.meals))
}

// for auto genaret meals 
function genaretAutoMeal() {
    let letter = (Math.round(Math.random(2) * 10) + 10).toString(36);
    loadData(letter);
    console.log(letter);
}






