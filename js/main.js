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
    messageBlockText.messageBlockText = "";
});

function counts(count) {
    if (count == "10") {
        messageText("Молодец! 👍");
    }

    if (count == "20") {
        messageText("Так держать! 😎");
    }

    if (count == "40") {
        messageText("Красава! 😈");
    }

    if (count == "60") {
        messageText("Уфф, чё за тяги такие бархатные... 👡");
    }

    if (count == "70") {
        messageText("Кефтемеее 👞");
    }

    if (count == "100") {
        messageText("Скибиди доп доп доп ес ес ес ес 🕺");
    }
}

function messageText(message) {
    messageBlockText.innerText = message;
};