var isHoliday = prompt("Бүгін демалсыпа?" );

if (isHoliday == 'Иә' || isHoliday == 'иә') {
    var hour = prompt("Қазір қай уақыт? " + "\n" + "Таң" + "\n" + "Түс" + "\n" + "Кеш");
    
    if (hour == "Таң" || hour == "таң") {
        alert("Таңғы асыңды іш");
    } else if (hour == "Түс" || hour == "түс") {
        alert("Түскі асыңды ішіп хоббимен айналыс");
    } else if (hour == "Кеш" || hour == "кеш") {
        alert("Сабағыңды оқы");
    }
} else if (isHoliday == "Жоқ" || isHoliday == "жоқ") {
    var hour = prompt("Қазір қай уақыт? " + "\n" + "Таң" + "\n" + "Түс" + "\n" + "Кеш");
    
    if (hour == "Таң" || hour == "таң") {
        alert("Сабағыңа бар");
    } else if (hour == "Түс" || hour == "түс") {
        alert("Түскі асыңды ішіп Сабағыңды оқы");
    } else if (hour == "Кеш" || hour == "кеш") {
        alert("Ұйықта ертең сабақ");
    }
} 