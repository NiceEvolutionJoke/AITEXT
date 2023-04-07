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

const selectSingle2 = document.querySelector('.profile-generate-text__select2');
const selectSingle_title2 = selectSingle2.querySelector('.profile-generate-text__select__title2');
const selectSingle_labels2 = selectSingle2.querySelectorAll('.profile-generate-text__select__label2');

// Toggle menu
selectSingle_title2.addEventListener('click', () => {
    if ('active' === selectSingle2.getAttribute('data-state')) {
        selectSingle2.setAttribute('data-state', '');
    } else {
        selectSingle2.setAttribute('data-state', 'active');
    }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels2.length; i++) {
    selectSingle_labels2[i].addEventListener('click', (evt) => {
        selectSingle_title2.textContent = evt.target.textContent;
        selectSingle2.setAttribute('data-state', '');
    });
}



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