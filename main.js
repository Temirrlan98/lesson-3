// ! условные оператор
// ! тернальные оператор
// ! условия ? () : ()
// let currentUser = false;
// currentUser
// ? alert("добро пожаловать")
// : alert("зарегист");

// 2
// let password = prompt ("tryrtrtyr");
// let passwordConfirm = prompt ("tryrtrtyr");
// password === passwordConfirm ? alert("впртотеплре") : alert("ккекекекеееее");

// 3
// let age = prompt("сколка тебе лет?");
// age >= 18 ? console.log("добро полрортр") : console.log("запрет");

// 4
// let role = "user";
// role === "admin"
//   ? alert("вы можете редактировать")
//   : alert("у вас нет прав для редактирование");

// 5
// let productsCont = 0;
// productsCont > 0
//   ? alert(`в карзине  ${productsCont} товаров`)
//   : alert("карзина пуста");

// ! if / if...else / if...else if...else if...else
// let name = prompt("введите имя");
// if (name === "John") {
//   alert(`привет ${name}`);
// }

// 2
// let age = 20;
// let canDrive = null;
// if (age > 17) {
//   canDrive = true;
// } else {
//   canDrive = false;
// }
// console.log(canDrive);

// 3
// let startTime = 9;
// let arrive = 10;
// if (arrive >= startTime) {
//   console.log("можем зайти");
// } else {
//   console.log("закрыто");
// }

// 4
// let num1 = prompt("первое число");
// let operator = prompt("матем оператор");
// let num2 = +prompt("второе число");
// if (operator === "+") {
//   alert(num1 + num2);
// } else if (operator === "-") {
//   alert(num1 - num2);
// } else if (operator === "*") {
//   alert(num1 * num2);
// } else if (operator === "/") {
//   alert(num1 / num2);
// } else {
//   alert("Ошибка!");
// }

// ! switch case
// let seanson = +prompt("выберите сезоны");
// switch (seanson) {
//   // seanson1
//   case 1:
//     console.log("зима");
//     break;
//   case 2:
//     console.log("весна");
//     break;
//   case 3:
//     console.log("лето");
//     break;
//   case 4:
//     console.log("осень");
//     break;
//   default:
//     console.log(sgtgdsrgtdf);
// }
// CREATE, UPDATE, READ, DELETE ->CRUD - operations
// let action = "CREATE";
// switch (action) {
//   case "CREATE":
//     alert("создать профил");
//     break;
//   case "READ":
//     alert("отображат профил");
//     break;
//   case "UPDATE":
//     alert("редактировать профил");
//     break;
//   case "DELETE":
//     alert("удалит профил");
//     break;
//   default:
//     alert("действие не относится к CRUD!");
// }

// let day = prompt("выберите день недели");
// switch (day) {
//   case "1":
//     alert("пн");
//     break;
//   case "2":
//     alert("вт");
//     break;
//   case "3":
//     alert("ср");
//     break;
//   case "4":
//     alert("чт");
//     break;
//   case "5":
//     alert("пт");
//     break;
//   case "6":
//     alert("сб");
//     break;
//   case "7":
//     alert("вс");
//     break;
//   default:
//     console.log("эта не ден недели");
// }

// логическое И -&&
// let bread = "baton";
// let product1 = "молоко";
// if (bread === "baton" && product1 === "молоко") {
//   alert("взяли нужное!");
// } else {
//   alert("не то что нужно!");
// }

// логическое ИЛИ - ||
// let product = "лепешка";
// if (product === "лепешка" || product === "батон") {
//   alert("правилно");
// } else {
//   alert("неправильно!");
// }

//! 10
//! 22
// let arrive = prompt("во сколько вы пришли?");
// if (arrive >= 10 && arrive <= 22) {
//   alert("Офис открыт");
// } else {
//   alert("офис закрыт");
// }

// данные из БД
// email: user123
// password: ps123

// const email = prompt("ведите эл.почту");
// const password = prompt("ведите пароль");
// if (email === "user123" && password === "ps123") {
//   alert("вы успешно вошли в свой аккаунт");
// } else {
//   alert("email или пароль не правильно");
// }

// const email = prompt("ведите эл.почту");
// const password = prompt("ведите пароль");
// console.log(email, password);
// console.log(Boolean(email));
// if (email === null || password === null || email === "" || password === "") {
//   alert("запольните поля");
// } else {
//   // alert("есть данные");

// if (email === "user123" && password === "ps123") {
//     alert("вы успешно вошли в свой аккаунт");
//   } else {
//     alert("email или пароль не правильно");
//   }
// }

// let password = prompt("ведите пароль");
// const tries = 1;
// if (password === "ps123") {
//   alert("пароль введен правилно");
// } else {
//   password = prompt("попробуйте заново ввести пароль");
//   console.log(password);
//   if (password === "ps123") {
//     alert("пароль введен правилно");
//   } else {
//     alert("ваш аккаунт заблокирован");
//   }
// }

// const email = prompt("ведите эл.почту");
// if (email === "user123") {
//   let password = prompt("ведите пароль");
//   if (password === "ps123") {
//     alert("loggin in!");
//   }
// }

// let answer = confirm("вы хотите покинуть игру?");
// console.log(answer);
// if (answer) {
//   alert("вы покинули игру");
// } else {
//   alert("ура! ура! ура! мы поиграем еще!");
// }

// инкремент - увеличить на 1 (++)
// дикремент - уменшить на 1 (--)
// let likes = 5;
// let answer = confirm("поставить лайк?");
// if (answer) {
//   likes++;
//   console.log(likes);
//   alert(`вы поставили лайк, всего:${likes}`);
// }
// answer = confirm("поставить лайк?");
// if (answer) {
//   likes++;
//   console.log(likes);
//   alert(`вы поставили лайк, всего:${likes}`);
// }
// answer = confirm("поставить лайк?");
// if (answer) {
//   likes++;
//   console.log(likes);
//   alert(`вы поставили лайк, всего:${likes}`);
// }

// let tasksInClassroom = confirm("вы выполнилит задание из классрум?");
// let tasksOnClassroom = confirm("вы выполнилит задание из mecers. courses?");
// if (tasksInClassroom && tasksOnClassroom) {
//   alert("у вас будет высокий KPI");
// } else {
//   alert("y вас будет низкий KPI");
// }

// MOMENTUM, TEAMFLOW

// let homework = "teamflow";
// if (homework === "momentum" || homework === "teamflow") {
//   alert("100 баллов");
// } else {
//   alert("0 баллов");
// }
