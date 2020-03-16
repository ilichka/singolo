let On1 = true;
let On2 = true

function turner1(n) {
    console.log(1)
    if (On1) {
        document.querySelector('.img.first').classList.add('off')
        On1 = false;
    }
    else {
        document.querySelector('.img.first').classList.remove('off')
        On1 = true;
    }
}

function turner2(n) {
    console.log(1)
    if (On2) {
        document.querySelector('.img.second').classList.add('off')
        On2 = false;
    }
    else {
        document.querySelector('.img.second').classList.remove('off')
        On2 = true;
    }
}

document.querySelector('.ButCircle.first').addEventListener('click', turner1);
document.querySelector('.ButCircle.second').addEventListener('click', turner2);