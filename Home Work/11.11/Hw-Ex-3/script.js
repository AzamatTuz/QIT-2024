var grade = Number(prompt("0-100 ге дейінгі баллды енгізіңіз"));

if (grade >= 90 && grade <= 100) {
    alert('Бағаңыз A')
} else if (grade >= 80 && grade <= 89) {
    alert('Бағаңыз B')
} else if (grade >= 70 && grade <= 79) {
    alert('Бағаңыз C')
} else if (grade >= 60 && grade <= 69) {
    alert('Бағаңыз D')
} else if (grade >= 0 && grade <= 59) {
    alert('Бағаңыз F')
} 