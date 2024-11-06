var herName = prompt("Есіміңіз кім ?");
var isOrder = prompt("Бургер тапсырыс беріңіз" + "\n" + "А)Куринный" + "\n" + "Б)Говяжий" + "\n" + "С)Етсіз");
var meet = ""

if (isOrder == "а" || isOrder == "А") {
    var meet = "Куринный";
} else if (isOrder == "б" || isOrder == "Б") {
    var meet = "Говяжий";
} else if (isOrder == "с" || isOrder == "С") {
    var meet = "Етсіз";
}

var isOrder2 = prompt("Сусын тапсырыс беріңіз" + "\n" + "А)Кола" + "\n" + "Б)Спрайт" + "\n" + "С)Фанта");
var water = ""

if (isOrder2 == "а" || isOrder == "А") {
    var water = "Кола";
} else if (isOrder == "б" || isOrder == "Б") {
    var water = "Спрайт";
} else if (isOrder == "с" || isOrder == "С") {
    var water = "Фанта";
}

var isOrder3 = prompt("Фри тапсырыс беріңіз" + "\n" + "А)Кіш" + "\n" + "Б)Орт" + "\n" + "С)Үлк");
var fri = ""

if (isOrder3 == "а" || isOrder == "А") {
    var fri = "Кіш";
} else if (isOrder == "б" || isOrder == "Б") {
    var fri = "Орт";
} else if (isOrder == "с" || isOrder == "С") {
    var fri = "Үлк";
}

var isOrder = prompt("Соус таңдаңыз" + "\n" + "А)BBQ" + "\n" + "Б)Cheese" + "\n" + "С)Ketchup");
var souce = ""

if (isOrder == "а" || isOrder == "А") {
    var souce = "BBQ";
} else if (isOrder == "б" || isOrder == "Б") {
    var souce = "Cheese";
} else if (isOrder == "с" || isOrder == "С") {
    var souce = "Ketchup";
}

alert("Бургер " + meet + "\n" + "Напиток " + water + "\n" + "Фри " + fri + "\n" + "Соус " + souce + "\n" + "Клиент аты " + herName)
