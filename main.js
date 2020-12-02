// Reminds user to provide input in google search.

const text = document.querySelector("#search");
const msg = document.querySelector(".msg");

document.querySelector(".google-form").addEventListener('submit', onclick)

// Providing error message
function onclick(e) {
    if (text.value === '' || text.value === null) {
        e.preventDefault();
        msg.classList.add('error');
        msg.innerHTML = 'Please enter a proper search query';
        setTimeout(clear, 3000);
    }
}

// When called, removes error message
function clear(){
    msg.classList.remove('error');
    msg.innerHTML = "";
}
