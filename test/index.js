/* const quiz = [
  {
    question: "who is the most attractive person in the world?",
    answers: [
      "ちゃちゃまる",
      "しょい",
      "だな",
      "ちゃんぷくん"
    ],
    correct: "だな"
  }, {
    question: "who is your husband?",
    answers: [
      "けい つきしま",
      "くらま",
      "baka client",
      "しょいくん"
    ],
    correct: "しょいくん"
  }, {
    question: "who is my wife?",
    answers: [
      "ありむらだな",
      "ありむらだな",
      "ありむらだな",
      "ありむらだな"
    ],
    correct: "ありむらだな"
  }

];

const quizLength = quiz.length;
let quizIndex = 0;

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }

}
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent) {
    window.alert("right!!! pinaka siya maganda at mabait");
  } else {
    window.alert("false! gagooooo hindi ito hirappppppp");
  }

  quizIndex++;

  if(quizIndex < quizLength) {
    setupQuiz();
  } else {
    window.alert("おつかれさま、あなた♡")
  }
};

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener("click", (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}

*/
/*
const quiz = [
  {
    question: '好きな漫画は？',
    answers: [
      '暗殺教室',
      'NARUTO',
      'ONEPIECE',
      'ワールドトリガー',
    ],
    correct: '暗殺教室'
  },
  {
    question: '好きな食べ物は？',
    answers: [
      'りんご',
      'すし',
      'にく',
      'だな',
    ],
    correct: 'だな'
  },
  {
    question: '好きなひとは？',
    answers: [
      'ちゃちゃ',
      'だな',
      'ポテト',
      'ちゃんぷくん',
    ],
    correct: 'だな'
  },
  {
    question: '好きな色は？',
    answers: [
      'あか',
      'むらさき',
      'ピンク',
      'あお',
    ],
    correct: 'むらさき'
  }
];
const quizLength = quiz.length;
let quizIndex = 0;

const button = document.getElementTagName('button');
button[0].textContent = 'aaa';
button[1].textContent = 'bbb';
button[2].textContent = 'ccc';
button[3].textContent = 'ddd';

const question = document.getElementById('js-question');
question.innerHTML = quiz[quizIndex].
*/
const problem = [
  {
    quiz: 'when did we start to meet?♡',
    answers: [
      '１１がつ１にち',
      '１０がつ１６にち',
      '１１がつ１２にち',
      '１２がつ４にち',
    ],
    correct: '１１がつ１２にち',
  },
  {
    quiz: 'which anime did we watch together first?',
    answers: [
      'domestic girlfriend',
      'my dress-up darling',
      'horimiya',
      "scum's wish",
    ],
    correct: 'my dress-up darling',
  },
  {
    quiz: 'when will we marry?',
    answers: [
      'when we are 40',
      'after your boyfriend get bald',
      'in 2 years',
      'next year',
    ],
    correct: 'next year',
  },
  {
    quiz: 'do you know which your part does shoi love most',
    answers: [
      'your face',
      'sexy body',
      'hentai part',
      'you have different sugoi part which I do not have',
    ],
    correct: 'you have different sugoi part which I do not have',
  },
  {
    quiz: 'what food will we eat when your boyfriend visit pinas?',
    answers: [
      'pig blood🐖🩸',
      'what you cook💜',
      'baliu🥚',
      'my titi🍌',
    ],
    correct: 'what you cook💜',
  },
  {
    quiz: 'can we be together forever?',
    answers: [
      'YES!!!!!',
      'NO',
      "no, dana does't think so",
      'だめ',
    ],
    correct: 'YES!!!!!',
  },
  {
    quiz: 'what picture that you gave me did I post first?',
    answers: [
      'halo halo',
      'dana with champkun',
      'choykun',
      'rice cake',
    ],
    correct: 'rice cake',
  },
  {
    quiz: 'who will get my virgin??',
    answers: [
      'ちゃちゃまる',
      'ちゃんぷくん',
      'unknown',
      '有村雫那（だな）',
    ],
    correct: '有村雫那（だな）',
  },
  {
    quiz: "which champkun's part danachan love most?",
    answers: [
      'his teeth',
      'his ball',
      "he pee on oneesan's bed",
      'he stay up late',
    ],
    correct: 'his ball',
  },
  {
    quiz: 'do you think shoikun loves you more than anything?',
    answers: [
      'はいいいいいいいい',
      'いいえ',
      'やだ',
      'やだやだやだやだあああ',
    ],
    correct: 'はいいいいいいいい',
  },
];

const button = document.getElementsByTagName('button');
const buttonLength = button.length;
let problemnumber = 0;
const problemLength = problem.length;

const setUpQuiz = () => {
  let buttonIndex = 0;
  document.getElementById('js-question').textContent = problem[problemnumber].quiz;
  while (buttonIndex < buttonLength) {
    button[buttonIndex].textContent = problem[problemnumber].answers[buttonIndex];
    buttonIndex += 1;
  }
};

setUpQuiz();
let score = 0;

const clickHandler = (e) => {
  if (problem[problemnumber].correct === e.target.textContent) {
    window.alert('right sugoiiiii daidaidaiiisuki🥰💕❤️😍❤️‍🔥💘💌');
    score += 1;
  } else {
    window.alert('ehhhhhh false 😒😒😒😂🤣');
  }
  problemnumber += 1;
  if (problemnumber < problemLength) {
    setUpQuiz();
  } else {
    window.alert(`おしまい！your score is ${score}/${problemLength}   おつかれさま💜💜💜happy 5 monthes🥰🥰`);
    if (score >= 2) {
      document.write('<img src="./images/115411.jpg" alt="画像の解説文">');
    }
  }
};

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex += 1;
}
