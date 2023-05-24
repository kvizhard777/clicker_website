const btn = document.querySelector('#btn');
const btnCount = document.querySelector('#btn-count');
const btnClear = document.querySelector('#btn-clear');
const messageBlock = document.querySelector('#message-block');
const messageBlockText = document.querySelector('#message-text');

// Увеличить количество кликов
btn.addEventListener('click', () => {
    let count = btnCount.innerText++ + 1;
    counts(count);
});

// Очистить количество кликов
btnClear.addEventListener('click', () => {
    btnCount.innerText = "0";
    messageBlockText.innerText = "";
});

function counts(count) {
    switch (count) {
        case 10:
            messageText("Молодец! 👍");
            break;
        case 20:
            messageText("Так держать! 😎");
            break;
        case 40:
            messageText("Красава! 😈");
            break;
        case 60:
            messageText("Уфф, чё за тяги такие бархатные... 👡");
            break;
        case 70:
            messageText("Кефтемеее 👞");
            break;
        case 100:
            messageText("Скибиди доп доп доп ес ес ес ес 🕺");
            break;
        default:
            console.log("Error");
            break;
    }
}

function messageText(message) {
    messageBlockText.innerText = message;
};