document.forms[0].onsubmit = function (e) {
    var regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    let inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
        if (input.value.length === 0) {
            input.parentElement.lastElementChild.style.display = 'block';
            input.nextElementSibling.style.display = 'block';
            input.parentElement.firstElementChild.style.borderColor = 'hsl(0, 100%, 74%) ';
        } else {
            input.parentElement.lastElementChild.style.display = 'none';
            input.nextElementSibling.style.display = 'none';
            input.parentElement.firstElementChild.style.borderColor = 'hsl(246, 25%, 77%)';
        }
    });
    
    if (regex.test(document.querySelector('#email').value) === false) {
        e.preventDefault();
        document.querySelector('#email').nextElementSibling.style.display = 'block';
        document.querySelector('#email').parentElement.lastElementChild.style.display = 'block';
        document.querySelector('#email').style.borderColor = 'hsl(0, 100%, 74%)';
    } else {
        document.querySelector('#email').nextElementSibling.style.display = 'none';
        document.querySelector('#email').parentElement.lastElementChild.style.display = 'none';
        document.querySelector('#email').style.borderColor = 'hsl(246, 25%, 77%)';
        return true;
    }
}
