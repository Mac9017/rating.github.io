const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    console.log('FORM SUBMITTED!!')
    e.preventDefault();
    changeOpacity();
    myRate();
})


function changeOpacity() {
    let container = document.querySelector('.container')
    container.style.opacity = 0;
}



function myRate() {
    const rate = document.querySelector('input[name="rate"]:checked').value
    let span = document.querySelector('span')
    span.innerText = rate
}