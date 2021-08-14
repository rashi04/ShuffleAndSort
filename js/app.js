const cardNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
let  card = document.getElementById('card-container');

cardNumbers.forEach((item, index) => {
  card.innerHTML += '<li data-card-value=' + item + '>' + item + '</li>'
})

let shuffleNumbers = (numArray) => {
  for (var i = numArray.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));   
    var temp = numArray[i];
    numArray[i] = numArray[j];
    numArray[j] = temp;
  }
  return numArray;
}

let decorateCards = (cards) =>{
  let index = 0;
  card.innerHTML = ''
  while (index < cards.length) {
    let cardItem = document.createElement("li");
    cardItem.innerHTML = cards[index]
    cardItem.setAttribute('data-card-value', cards[index])
    card.appendChild(cardItem)
    ++index;
  }
}

let shuffleCards = () => {
  let cards = shuffleNumbers(cardNumbers);
  decorateCards(cards);
}

let sortCards = () => {
  let cards = cardNumbers.sort();
  decorateCards(cards);
}
