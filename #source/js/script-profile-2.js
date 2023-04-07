const selectSingle = document.querySelector('.profile-generate-text__select');
const selectSingle_title = selectSingle.querySelector('.profile-generate-text__select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.profile-generate-text__select__label');

// Toggle menu
selectSingle_title.addEventListener('click', () => {
    if ('active' === selectSingle.getAttribute('data-state')) {
        selectSingle.setAttribute('data-state', '');
    } else {
        selectSingle.setAttribute('data-state', 'active');
    }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
    selectSingle_labels[i].addEventListener('click', (evt) => {
        selectSingle_title.textContent = evt.target.textContent;
        selectSingle.setAttribute('data-state', '');
    });
}


let inputWords = document.querySelector('.profile-generate-text__subinput-num');
let inputWordPlus = document.querySelector('.profile-generate-text__subinput-num-plus');
let inputWordMinus = document.querySelector('.profile-generate-text__subinput-num-minus');
let firstNumInputWords = 0;
let lastNumInputWords = 1500;
function inputWordPlusF() {
    if (lastNumInputWords < 100000) {
        firstNumInputWords += 1500;
        lastNumInputWords += 1500;
        inputWords.value = `${firstNumInputWords}-${lastNumInputWords}`;
        inputWordMinus.classList.remove('lock');
    } else {
        inputWordPlus.classList.add('lock');
    }
};
function inputWordMinusF() {
    if (firstNumInputWords > 0) {
        firstNumInputWords -= 1500;
        lastNumInputWords -= 1500;
        inputWords.value = `${firstNumInputWords}-${lastNumInputWords}`;
        inputWordPlus.classList.remove('lock');
        if (firstNumInputWords == 0) {
            inputWordMinus.classList.add('lock');
        }
    } else {
        inputWordMinus.classList.add('lock');
    };
};
inputWordPlus.addEventListener('click', () => { inputWordPlusF() });
inputWordMinus.addEventListener('click', () => { inputWordMinusF() });

document.querySelector('.profile-generate-text__copy').onclick = function () {
    var text = document.getElementById("text-profile-2").value;
    copyTextToClipboard(text);
}

async function copyTextToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        console.log('Text copied to clipboard');
    } catch (err) {
        console.error('Error in copying text: ', err);
    }
}