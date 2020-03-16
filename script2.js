let get = document.querySelector('.selected').getAttribute('col')

function select(event) {
    document.querySelectorAll('.border').forEach(border => border.classList.remove('selected'))
    event.target.closest('.border').classList.add('selected');
    if(get === 'All'){
        get = document.querySelector('.selected').getAttribute('col');
        console.log('1');
        hide()
    }
    else {
        if(get === 'col1'){
            get = document.querySelector('.selected').getAttribute('col');
            console.log('2')
            hide()
        }
        else {
            if(get === 'col2') {
                get = document.querySelector('.selected').getAttribute('col');
                console.log('3')
                hide()
            }
            else {
                if(get === 'col3') {
                    get = document.querySelector('.selected').getAttribute('col');
                    console.log('4')
                    hide()
                }
            }
        }
    }
}

function hide(n) {
    document.querySelectorAll('.pic').forEach(pic => pic.classList.remove('hide'))
    document.querySelectorAll(`.${get}`).forEach(get => get.classList.add('hide'))
}

function border(event) {
    document.querySelectorAll('.pic').forEach(pic => pic.classList.remove('BORDER'))
    event.target.closest('.pic').classList.add('BORDER');
}

document.querySelector('.navigation').addEventListener('click', select)
document.querySelector('.secondContainer').addEventListener('click', hide)
document.querySelector('.secondContainer').addEventListener('click', border)
