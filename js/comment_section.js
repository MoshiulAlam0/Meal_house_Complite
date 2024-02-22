
// send btn 
document.getElementById('send-btn').addEventListener('click', function () {
    // console.log('hfsdlflsdk');
    fetch(`https://randomuser.me/api/?gender=male`)
        .then(res => res.json())
        .then(data => {
            setData(data.results[0])
        })
        .catch(e => console.log(e));

})
// set comment 
function setData(data) {
    const fieldValue = document.getElementById('cm-textarea').value;
    if (fieldValue !== '') {
        const commentContainer = document.getElementById('comment-container');
        const commentBody = document.createElement('div');
        commentBody.classList.add('comment-body');
        commentBody.innerHTML = `
                        <div class="cm-con-header">
                        <div class="cm-img-con">
                            <img src="${data.picture.medium}">
                            <div class="">
                                <p class="name">${data.name.title} ${data.name.first} ${data.name.last}</p>
                                <p class="time">${data.location.country}</p>
                            </div>
                        </div>
                            <pclass="like"><i onclick="makelike(event)"  class="fa-solid fa-heart love" id="like"></i> <span class="like-quntity">31</span></pclass=>
                        </div>
                        <div class="cm-con-p">
                            <p>${fieldValue}</p>
                        </div>
                        <div class="cm-con-btn">
                            <button onclick="hide(event)" class="d-e-btn" id="delete-btn">Delete</button>
                            <button onclick="edit(event)" class="d-e-btn" id="edit-btn">Edit</button>
                        </div>
    `;
        commentContainer.appendChild(commentBody);
        document.getElementById('cm-textarea').value = ''
    }

}


// // like btn 
function makelike(event) {
    const loveElement = event.target;
    console.log(event.target.style.color = "red" === true);
// console.log();
if(event.target.style.color = "red" !== true){
    loveElement.style.color = "red";
}
else{
    loveElement.style.color = "gray";
}
}



// delete btn 
function hide(event) {
    console.log(event.target.parentNode.parentNode.parentNode);
    const commentContainer = event.target.parentNode.parentNode.parentNode;
    const commentBody = event.target.parentNode.parentNode;
    commentContainer.removeChild(commentBody);
}

// edit btn 
function edit(event) {
    const commentBody = event.target.parentNode.parentNode;
    commentBody.style.border = "1px solid #23e20a";

    const textarea = document.getElementById('cm-textarea');
    textarea.focus();

    const pElement = commentBody.childNodes[3].childNodes[1].innerText;
    console.log(pElement);

    const resetBtn = document.getElementById('resend-btn')
    resetBtn.style.display = 'inline'
    resetBtn.addEventListener('click', function () {
        if (textarea.value !== '') {
            // console.log(commentBody.childNodes[3].childNodes[1].innerText);
            commentBody.childNodes[3].childNodes[1].innerText = document.getElementById('cm-textarea').value;
            commentBody.style.border = 'none';
            resetBtn.style.display = 'none'
            document.getElementById('cm-textarea').value = '';     
        }
    })

}
