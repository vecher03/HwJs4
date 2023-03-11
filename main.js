
let a = +prompt('Число a');
let b = +prompt('Число b');

let c = +prompt('Число c');

if ((a > b && a < c)  || (a < b && a > c)) {
    alert('Среднее число  ' + a);
} else if ((b > a && b < c) || (b < a && b > c)) {
    alert('Среднее число  ' + b);
} else if ((c > b && c < a) || (c < b && c > a)) {
    alert('Среднее число  ' + c);
} else {
    alert('Что-то пошло не так');
}

