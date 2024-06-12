const answersList = document.querySelectorAll('ol.answers li');

answersList.forEach(li => li.addEventListener('click', checkClickedAnswer))

// 正しい答え
const correctAnswers = {
    question1: 'C',
    question2: 'B',
    question3: 'C',
    question4: 'D',
}
correctAnswers[questionId];

function checkClickedAnswer(event) {
    //クリックされた要素の取得(liタグ)
    const clickedAnswerElement = event.currentTarget;
    //選択した答え
    const selectedAnswer = clickedAnswerElement.dataset.answer;
    
    const questionId = clickedAnswerElement.closest('ol.answers').dataset.id;
    //正解
    const correctAnswer = correctAnswers[questionId];

    // メッセージを入れる変数を用意
    let message;

    //　カラーコードを入れる変数を用意
    let answerColorCode;

    if (selectedAnswer === correctAnswer) {
        //　正解
        message = '正解です!さすが！'
        answerColorCode = '';
    } else {
        //　間違った答え
        message = '不正解です。解説をぜひ読んでみてください。'
        answerColorCode = 'red';
    }
    
    alert(message);

    //不正解のみ赤色の変更
    document.querySelector('span#correct-answer').style.color = answerColorCode;
    //答え全体の表示
    document.querySelector('div#section-correct-answer').style.display = 'block';
}