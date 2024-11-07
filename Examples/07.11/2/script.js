var herName = prompt("Есіміңіз кім ?");
var isOrder = prompt("Бургер тапсырыс беріңіз" + "\n" + "А)Куринный 1200" + "\n" + "Б)Говяжий 1300" + "\n" + "С)Етсіз 1000");
var total = 0;
var meet = ""

switch (isOrder) {
    case 'A', 'а':
        meet = "Куринный"
        total += 1200;
        break;
    case 'Б', 'б' :
        meet = "Говяжий"
        total += 1300;
        break;
    case 'С', 'с':
        meet = "Етсіз"
        total += 1000;
        break;
    default:
        alert("Дұрыс вариант таңда");
        break;
}

var isOrder2 = prompt("Сусын тапсырыс беріңіз" + "\n" + "А)Кола 500" + "\n" + "Б)Спрайт 450" + "\n" + "С)Фанта 450");
var water = ""

switch (isOrder2) {
    case 'A', 'а':
        water = 'Кола'
        total += 500;
        break;
    case 'Б', 'б' :
        water = 'Спрайт'
        total += 450;
        break;
    case 'С', 'с':
        water = 'Фанта'
        total += 450;
        break;
    default:
        alert("Дұрыс вариант таңда");
        break;
}

var isOrder3 = prompt("Фри тапсырыс беріңіз" + "\n" + "А)Кіш 300" + "\n" + "Б)Орт 400" + "\n" + "С)Үлк 500");
var fri = ""

switch (isOrder2) {
    case 'A', 'а':
        fri = 'Кіш'
        total += 300;
        break;
    case 'Б', 'б' :
        fri = 'Орт'
        total += 400;
        break;
    case 'С', 'с':
        fri = 'Үлк'
        total += 500;
        break;
    default:
        alert("Дұрыс вариант таңда");
        break;
} 

var isOrder = prompt("Соус таңдаңыз" + "\n" + "А)BBQ 100" + "\n" + "Б)Cheese 100" + "\n" + "С)Ketchup 100");
var souce = ""

switch (isOrder2) {
    case 'A', 'а':
        souce = "BBQ"
        total += 100;
        break;
    case 'Б', 'б' :
        souce = "Cheese"
        total += 100;
        break;
    case 'С', 'с':
        souce = "Ketchup"
        total += 100;
        break;
    default:
        alert("Дұрыс вариант таңда");
        break;
}

alert("Бургер " + meet + "\n" + "Напиток " + water + "\n" + "Фри " + fri + "\n" + "Соус " + souce + "\n" + "Клиент аты " + herName + "\n" + "Бағасы " + total)
