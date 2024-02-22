function mealDataLoadById(id) {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealsDetails(data.meals[0]))
}
// show modal 
function displayMealsDetails(data) {
    console.log(data);
    const modalSection = document.getElementById('modal-section');
    modalSection.innerHTML ="";
    modalSection.style.display = 'flex';
    const modatContainer = document.createElement('div');
    modatContainer.classList.add('modal-container');
    modatContainer.innerHTML = `
    <div class="modal-head">
            <h4>${data.strMeal}</h4>
            <i onclick="hideModal()" class="fa-solid fa-xmark"></i>
        </div>
        <hr>
        <div class="modal-img">
            <img src="${data.strMealThumb}" alt="">
            </div>
            <div class="modal-info">
            <p><span class="m-info">Catagory:</span><span id="Catagory">${data.strCategory}</span></p>
            <p><span class="m-info">Area:</span><span id="Area">${data.strArea}</span></p>
            <p><span class="m-info">Needs:</span><span id="intruction">${data.strIngredient1}, ${data.strIngredient1}, ${data.strIngredient2}, ${data.strIngredient3}, and ${data.strMeasure1}, ${data.strMeasure2}, ${data.strMeasure3}, more.. </span></p>
            <p><a href="${data.strYoutube}" class="m-info source" target="_blank">YouTube</a></p>
            <p><a href="${data.strSource}" class="m-info source" target="_blank">Source</a></p>
             
            </div>
        <button class="d-e-btn x-btn" onclick="hideModal()" >Close</button>
        `;
    modalSection.appendChild(modatContainer);
}
// close modal 
function hideModal() {
    const modalSection = document.getElementById('modal-section');
    modalSection.style.display = 'none';
}

