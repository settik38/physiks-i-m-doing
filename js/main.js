let score = 0;
let money = 0;
const Button = document.getElementById('button')

const bomb = document.getElementById('bomb');

const scoreDisplay = document.getElementById('score');

const moneyDisplay = document.getElementById('money')

bomb.addEventListener("click", () => {
score++;

scoreDisplay.textContent= `счет: ${score}`;

});
Button.addEventListener('click', () => {
if(score >= 100){
money=money+100;
score=score-100;
moneyDisplay.textContent = `КРИПТОКОШЕЛЕК: ${money} дублей`;
scoreDisplay.textContent = `Счет: ${score}` ;

}else {alert("Не хватает монет. Иди дальше тапай!!!")}
})