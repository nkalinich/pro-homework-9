// Рисуем колоду карт, которая состоит из:
// карт номиналом 2-10 всех мастей
// карт jack, queen, king всех мастей
// карт тузов всех мастей
// Все теги рендерим с помощью js. Внешний вид задания НЕ важен, важен только JS-код

// debugger;

trs = [];
number = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "T"];
cards = ["clubs", "spades", "diamonds", "hearts"];
person = ["jack", "king", "queen"];

cards = cards.concat(cards);

for(str = 1; str <= 7; str++) {                  /// строки

    if (str <= 6) {                      
        tds = [];
        for (j = 1; j <= 8; j++) {        /// ячейки
            tds.push(`<td 
            <div class="card">
                <div class="card__info">${number[j - 1]}<img src="images/${cards[j - 1]}.svg" alt="${cards[j - 1]}"></div>
                <div class="card__info">${number[j - 1]}<img src="images/${cards[j - 1]}.svg" alt="${cards[j - 1]}"></div>
            </div></td>`)
        }
        trs.push(`<tr>${tds.join("")}</tr>`);
    }




    else {                             /// тузы
        tds = [];    
        for (j = 1; j <= 4; j++) {
            tds.push(`<td 
            <div class="card">
                <div class="card__info">${number[number.length-1]}<img src="images/${cards[j - 1]}.svg" alt="${cards[j - 1]}"></div>
                <img class="person" src="images/${cards[j - 1]}.svg" alt="${cards[j - 1]}">
                <div class="card__info">${number[number.length-1]}<img src="images/${cards[j - 1]}.svg" alt="${cards[j - 1]}"></div>
            </di></td>`)
        }
        trs.push(`<tr>${tds.join("")}</tr>`);
    }  
}

document.write(`<table class="wrapper">${trs.join("")}</table>`);


// 
// }






