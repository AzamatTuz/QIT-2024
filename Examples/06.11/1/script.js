var isRain = prompt("Қазір жаңбырма");

if (isRain == 'иә' || isRain == 'Иә') {
    alert("Онда автобуспен бар");
} else if (isRain == 'жоқ') {
    var isMorning = prompt("Қазір таңба");

    if (isMorning == 'иә') {
        alert('Велосипедпен бар');
    } else if (isMorning == 'жоқ') {
        alert('Көлікпен бар')
    }
}