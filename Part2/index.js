const setId = document.querySelector('#setId');
const setColor = document.querySelector('#setColor');

function setCard() {
    console.log(setId.value);
    const card = document.querySelector(`.${setId.value}`);
    card.style.color = setColor.value;
}

document.querySelector('#editCard').addEventListener('click', setCard);