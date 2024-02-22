const searchField = document.getElementById('search-field')
searchField.addEventListener('keyup', function(event){
    const ex = new RegExp(`${event.target.value}`, "gi");
    if(event.target.value !== ''){
        const mealNames = document.getElementsByClassName('meals-name')
        for(const name of mealNames){
            const nameText = name.innerText;
            const repleace = nameText.replace(ex, char => `<span id="heiliigt">${char}</span>`);
            name.innerHTML = repleace
        }
    }
})

// for searchBtn 
document.getElementById('search-btn'),addEventListener('click', function(){
    const fieldValue = document.getElementById('search-field').value
        const ex = new RegExp(`${fieldValue}`, "gi");
        if(fieldValue !== ''){
            const mealNames = document.getElementsByClassName('meals-name')
            // console.log(mealNames[2]);
            for(const name of mealNames){
                const nameText = name.innerText;
                const repleace = nameText.replace(ex, char => `<span id="heiliigt">${char}</span>`);
                name.innerHTML = repleace
            }
        }
})
