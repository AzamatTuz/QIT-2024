var herName = prompt("Есіміңіз кім ?");
var isOrder = prompt("Бургер тапсырыс беріңіз" + "\n" + "А)Куринный" + "\n" + "Б)Говяжий" + "\n" + "С)Етсіз");
var meet = ""

switch (isOrder) {
    case 'A', 'а':
        meet = "Куринный"
        break;
    case 'Б', 'б' :
        meet = "Говяжий"
        break;
    case 'С', 'с':
        meet = "Етсіз"
        break;
    default:
        alert("Дұрыс вариант таңда");
        break;
}

var isOrder2 = prompt("Сусын тапсырыс беріңіз" + "\n" + "А)Кола" + "\n" + "Б)Спрайт" + "\n" + "С)Фанта");
var water = ""

switch (isOrder2) {
    case 'A', 'а':
        water = 'Кола'
        break;
    case 'Б', 'б' :
        water = 'Спрайт'
        break;
    case 'С', 'с':
        water = 'Фанта'
        break;
    default:
        alert("Дұрыс вариант таңда");
        break;
}

var isOrder3 = prompt("Фри тапсырыс беріңіз" + "\n" + "А)Кіш" + "\n" + "Б)Орт" + "\n" + "С)Үлк");
var fri = ""

switch (isOrder2) {
    case 'A', 'а':
        fri = 'Кола'
        break;
    case 'Б', 'б' :
        fri = 'Спрайт'
        break;
    case 'С', 'с':
        fri = 'Фанта'
        break;
    default:
        alert("Дұрыс вариант таңда");
        break;
}

var isOrder = prompt("Соус таңдаңыз" + "\n" + "А)BBQ" + "\n" + "Б)Cheese" + "\n" + "С)Ketchup");
var souce = ""

switch (isOrder2) {
    case 'A', 'а':
        souce = "BBQ"
        break;
    case 'Б', 'б' :
        souce = "Cheese"
        break;
    case 'С', 'с':
        souce = "Ketchup"
        break;
    default:
        alert("Дұрыс вариант таңда");
        break;
}

alert("Бургер " + meet + "\n" + "Напиток " + water + "\n" + "Фри " + fri + "\n" + "Соус " + souce + "\n" + "Клиент аты " + herName)
