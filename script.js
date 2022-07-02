// Рисуем колоду карт, которая состоит из:
// карт номиналом 2-10 всех мастей
// карт jack, queen, king всех мастей
// карт тузов всех мастей

suit =["clubs","spades","diamonds","hearts"];
person = ["jack","queen","king","t"];
cards = [];

for(i = 2; i <= 10; i++) {
    for(j = 0; j < suit.length; j++) {
        cardInfo = (`<div class="card__info">
            ${i}
            <img src="images/${suit[j]}.svg" alt="${suit[j]}">
        </div>`);

        cards.push(`<div class="card">
            ${cardInfo}
            ${cardInfo}
        </div>`);
    }
}

for(i = 0; i < person.length; i++) {
    for(j = 0; j < suit.length; j++) {
        cardInfo = (`<div class="card__info">
            ${person[i][0].toUpperCase()}
            <img src="images/${suit[j]}.svg" alt="${suit[j]}">
        </div>`);

        picture = person[i] !== "t" ? person[i] : suit[j];

        cards.push(`<div class="card card--person">
            ${cardInfo}
            <img class="person" src="images/${picture}.svg" alt="${picture}">
            ${cardInfo}
        </div>`);
    }
}

document.write(`<div class="wrapper">${cards.join(``)}</div>`);