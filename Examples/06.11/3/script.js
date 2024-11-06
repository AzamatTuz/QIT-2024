var herName = prompt("Есіміңіз кім ?");
var isOrder = prompt("Бургер тапсырыс беріңіз" + "\n" + "А)Куринный" + "\n" + "Б)Говяжий" + "\n" + "С)Етсіз");
var meet = ""

if (isOrder == "а" || isOrder == "А") {
    meet += "Куринный";
} else if (isOrder == "б" || isOrder == "Б") {
    meet += "Говяжий";
} else if (isOrder == "с" || isOrder == "С") {
    meet += "Етсіз";
}

var isOrder2 = prompt("Сусын тапсырыс беріңіз" + "\n" + "А)Кола" + "\n" + "Б)Спрайт" + "\n" + "С)Фанта");
var water = ""

if (isOrder2 == "а" || isOrder == "А") {
    water += "Кола";
} else if (isOrder == "б" || isOrder == "Б") {
    water += "Спрайт";
} else if (isOrder == "с" || isOrder == "С") {
    water += "Фанта";
}

var isOrder3 = prompt("Фри тапсырыс беріңіз" + "\n" + "А)Кіш" + "\n" + "Б)Орт" + "\n" + "С)Үлк");
var fri = ""

if (isOrder3 == "а" || isOrder == "А") {
    fri += "Кіш";
} else if (isOrder == "б" || isOrder == "Б") {
    fri += "Орт";
} else if (isOrder == "с" || isOrder == "С") {
    fri += "Үлк";
}

var isOrder = prompt("Соус таңдаңыз" + "\n" + "А)BBQ" + "\n" + "Б)Cheese" + "\n" + "С)Ketchup");
var souce = ""

if (isOrder == "а" || isOrder == "А") {
    souce += "BBQ";
} else if (isOrder == "б" || isOrder == "Б") {
    souce += "Cheese";
} else if (isOrder == "с" || isOrder == "С") {
    souce += "Ketchup";
}

alert("Бургер " + meet + "\n" + "Напиток " + water + "\n" + "Фри " + fri + "\n" + "Соус " + souce + "\n" + "Клиент аты " + herName)
