let numbersContainer = document.querySelector('.card__buttons')
let selectedNumber = document.querySelector('.span')
let submit =document.querySelector('.submit')
let starContainer = document.querySelector('.star')
let thanksContainer = document.querySelector('.thanks')

numbersContainer.addEventListener ('click', e => {
    let numberSelected = e.target.innerText
    selectedNumber.innerText = numberSelected
    if(numberSelected >0 || numberSelected <=5){
        submit.addEventListener('click', () => {
            starContainer.style.display = 'none'
            thanksContainer.style.display = 'block'
        })
    }
})

