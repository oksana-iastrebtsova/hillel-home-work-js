const GUESTION_TYPE_PROMPT = 'prompt';
const GUESTION_TYPE_CONFIRM = 'confirm';
const ANSWER_YES = 'Y';
const ANSWER_NO = 'N';
const NUMBER_POINTS_FOR_CORRECT_ANSWER = 10;

// Массив с вопросами считаем корректно заполненным.
// Принимаем что типов вопросов существует только два чтобы в коде красиво применимить
// тернарный оператор и не возиться с оператором switch и не усложнять решение.
const GUESTIONS = [
    {
        type: GUESTION_TYPE_PROMPT,
        text: 'Сколько будет 2+2?',
        correctAnswer: '4'
    },
    {
        type: GUESTION_TYPE_CONFIRM,
        text: 'Солнце встает на востоке?',
        correctAnswer: ANSWER_YES
    },
    {
        type: GUESTION_TYPE_PROMPT,
        text: 'Сколько будет 5/0 ?',
        correctAnswer: 'Infinity'
    },
    {
        type: GUESTION_TYPE_PROMPT,
        text: 'Какого цвета небо?',
        correctAnswer: 'Голубое'
    },
    {
        type: GUESTION_TYPE_PROMPT,
        text: 'Как правильный ответ на главный вопрос жизни, вселенной и всего такого?',
        correctAnswer: '42'
    }
]

showResult(runQuiz(GUESTIONS));

// Запускает викторину по полученным вопросам
// Возвращает набранное количество баллов
function runQuiz(guestions) {
    let rezult = 0;
    guestions.forEach(guestion => {
        if (askQuestion(guestion)) {
            rezult += NUMBER_POINTS_FOR_CORRECT_ANSWER;
        }
    });
    return rezult;
}

// Возвращает true/false - верно ли пользователь ответил на вопрос
function askQuestion({type, text, correctAnswer}) {
    let response = (GUESTION_TYPE_PROMPT === type) ? askQuestionPrompt(text) : askQuestionConfirm(text);
    return isValidResponse(response, correctAnswer);
}

function askQuestionPrompt(text) {
    return prompt(text);
}

// OK считаем ДА, Cancel - НЕТ
function askQuestionConfirm(text) {
    return confirm(text) ? ANSWER_YES : ANSWER_NO;
}

// Значение correctAnswer на null не проверяем
// т.к. массив с вопросами считаем корректно заполненным.
// А вот response может быть null.
function isValidResponse(response, correctAnswer) {
    return (response !== null) && (response.toUpperCase() === correctAnswer.toUpperCase());
}

function showResult(rezult) {
    alert('Набрано ' + rezult + ' баллов');
}