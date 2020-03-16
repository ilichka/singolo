let value = document.getElementById('Name').value;

function submit(event) {
    console.log('1')
    document.querySelector('.output').classList.remove('hide')
    document.querySelector('.form').classList.add('hide')
    name();
}

function name() {
    document.getElementById('pname').innerText = value;
}

document.querySelector('.button').addEventListener('click', submit);



