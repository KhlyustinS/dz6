let first = parseInt(+prompt('Введите первое число'), 10);
let second = parseInt(+prompt('Введите второе число'), 10);
first > second ? alert(first) : alert(second);

//--------------------------------------------------------------------------

let a = +prompt('Введите кратное число');

alert((a % 5 === 0) ? "Кратно" : "Нет");

//-------------------------------------------------------------------------------------
let planet = prompt('Введите название планеты');

alert((((planet === "Земля") || (planet === "земля")) ? "Привет землянин" : "Привет иноплонитянен"));