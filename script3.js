let value = document.getElementById('Name').value;
document.querySelector('#apply-btn').addEventListener('click', applyForm);

function showPopup() {
    document.querySelector('.output').classList.remove('hide');
    document.querySelector('.form').classList.add('hide');
    values();
}

function checkForm(name, email) {
    const checkValue = (val) => /^[a-zA-Z]+$/.test(val);
    if (checkValue(name) && checkValue(email)) {
        console.log(1);
        showPopup()
    } else {
        if (checkValue(name) && checkValue(email) === false) {
            document.querySelector('#Email').style.background = 'red';
            notSubmit();
        } else {
            if (checkValue(name) === false && checkValue(email)) {
                document.querySelector('#Name').style.background = 'red';
                notSubmit();
            } else {
                document.querySelector('#Name').style.background = 'red';
                document.querySelector('#Email').style.background = 'red';
                notSubmit();
            }
        }
    }
}

function notSubmit() {
    alert('Enter correct required data')
}

let name = document.querySelector('#Name');
let email = document.querySelector('#Email').value;
let firstname = document.querySelector('.pname').innerText;
let firstemail = document.querySelector('.pemail').innerText;
let firstsubject = document.querySelector('.psubject').innerText;
let firsttextarea = document.querySelector('.ptextarea').innerText;

function values() {
    let name = document.getElementById('Name').value;

    document.getElementById('pname').innerText = firstname + ' ' + name;
    let email = document.getElementById('Email').value;

    document.getElementById('pemail').innerText = firstemail + ' ' + email;
    let subject = document.getElementById('Subject').value;

    if (subject === '') {
        document.getElementById('psubject').innerText = 'no subject'
    } else {
        document.getElementById('psubject').innerText = firstsubject + ' ' + subject;
    }
    let textarea = document.getElementById('textarea').value;

    if (textarea === '') {
        document.getElementById('ptextarea').innerText = 'no description'
    } else {
        document.getElementById('ptextarea').innerText = firsttextarea + ' ' + textarea;
    }
}

function applyForm(event) {
    event.preventDefault();
    document.querySelector('#Name').style.background = '#d6564f';
    document.querySelector('#Email').style.background = '#d6564f';
    let name = document.querySelector('#Name').value;
    let email = document.querySelector('#Email').value;
    checkForm(name, email);
}

function ok() {
    document.querySelector('.form').classList.remove('hide');
    document.querySelector('.output').classList.add('hide');
    document.getElementById('Name').value = '';
    document.getElementById('Email').value = '';
    document.getElementById('Subject').value = '';
    document.getElementById('textarea').value = '';
    document.getElementById('pname').innerText = firstname;
    document.getElementById('pemail').innerText = firstemail;
    document.getElementById('psubjext').innerText = firstsubject;
    document.getElementById('ptextarea').innerText = firsttextarea;
}

document.querySelector('.button').addEventListener('click', ok);






