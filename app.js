// 1
let name = prompt("Введите ваше имя:");
let birthYear = Number(prompt("Введите ваш год рождения:"));
let currentYear = Number(prompt("Введите нынешний год:"));

let age = currentYear - birthYear;
let ageString = "Привет, " + name + "! Вам исполнилось " + age + " лет в этом году.";
alert(ageString);

// 2
function getRandomMathExamples(count) {
    let examples = [];
    const operators = ['+', '-', '*', '/'];
  
    for (let i = 0; i < count; i++) {
      let number1 = Math.floor(Math.random() * 10) + 1;
      let number2 = Math.floor(Math.random() * 10) + 1;
      let operator = operators[Math.floor(Math.random() * operators.length)];
  
      let example = number1 + ' ' + operator + ' ' + number2;
      examples.push(example);
    }
  
    return examples;
  }
  
  let count = prompt('Введите количество примеров:');
  let mathExamples = getRandomMathExamples(count);
  
  for (let i = 0; i < mathExamples.length; i++) {
    let answer = prompt('Решите пример: ' + mathExamples[i]);
    let correctAnswer;
  
    switch (mathExamples[i].split(' ')[1]) {
      case '+':
        correctAnswer = Number(mathExamples[i].split(' ')[0]) + Number(mathExamples[i].split(' ')[2]);
        break;
      case '-':
        correctAnswer = Number(mathExamples[i].split(' ')[0]) - Number(mathExamples[i].split(' ')[2]);
        break;
      case '*':
        correctAnswer = Number(mathExamples[i].split(' ')[0]) * Number(mathExamples[i].split(' ')[2]);
        break;
      case '/':
        correctAnswer = Number(mathExamples[i].split(' ')[0]) / Number(mathExamples[i].split(' ')[2]);
        break;
      default:
        break;
    }
  
    if (Number(answer) === correctAnswer) {
      alert('Ваш ответ верный!');
    } else {
      alert('Ваш ответ не верный -' + answer + 'Правильный ответ -' + correctAnswer);
    }
  }
  