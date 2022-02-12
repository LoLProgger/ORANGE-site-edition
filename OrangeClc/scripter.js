/* перменные */
let oranges = JSON.parse(localStorage.getItem("oranges_saved"));
let level = JSON.parse(localStorage.getItem("level_saved"));
let curs = JSON.parse(localStorage.getItem("curs_saved"));
var randomshik = 0;
var plus_minus = 0;
var money = JSON.parse(localStorage.getItem("money_saved"));
var oranges_for_sale = 0;
var oranges_for_buy = 0;
var sum = 0;
var upgradee = 0;
/* функции */
/* округление */
var rounded = function(number){
    return +number.toFixed(2);
}

/* при старте сайта */
function start(){
	document.getElementById("downn").setAttribute("hidden","");
	document.getElementById("downnn").setAttribute("hidden","");
	document.getElementById("upp").setAttribute("hidden","");
	document.getElementById("uppp").setAttribute("hidden","");
	document.getElementById('money_text').innerHTML = money;
	document.getElementById('oranges_texttt').innerHTML = oranges;
}

/* главный клик */
function clicks() {
	if (level == null){
		level = 1;
		localStorage.setItem("level_saved",JSON.stringify(level));
	} else {
		level = level;
		localStorage.setItem("level_saved",JSON.stringify(level));
	}
  oranges = oranges + level;
  console.log(level);
  localStorage.setItem("oranges_saved",JSON.stringify(oranges));
  document.getElementById('oranges').innerHTML = oranges;
}

/* кнопка теста */
function test() {
  localStorage.clear();
  console.clear()
}



/* транс */
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function cursss() {
	setTimeout(random_up_or_down, 1500);
}
function random_up_or_down(){
	plus_minus = getRandomInt(2);
	random_curs();
}
function random_curs(){
	if (plus_minus == 1) {
	  randomshik = Math.floor(Math.random() * 2) + 1;
		randomshik = randomshik / 10;
		rounded(randomshik);
		curs = curs  + randomshik;
		document.getElementById("upp").removeAttribute("hidden");
		document.getElementById("uppp").removeAttribute("hidden");
		document.getElementById("downn").setAttribute("hidden","");
		document.getElementById("downnn").setAttribute("hidden","");
		localStorage.setItem("curs_saved",JSON.stringify(curs));
		update_curs()
	} else {
	  randomshik = Math.floor(Math.random() * 2) + 1;
		randomshik = randomshik / 10;
		rounded(randomshik);
		curs = curs  - randomshik;
		document.getElementById("downn").removeAttribute("hidden");
		document.getElementById("downnn").removeAttribute("hidden");
		document.getElementById("upp").setAttribute("hidden","");
		document.getElementById("uppp").setAttribute("hidden","");
		localStorage.setItem("curs_saved",JSON.stringify(curs));
		update_curs()
	}
}
function update_curs(){
	if (curs < 0.5){
		curs = curs * 0 + 0.6;
		document.getElementById("upp").removeAttribute("hidden");
		document.getElementById("uppp").removeAttribute("hidden");
		document.getElementById("downn").setAttribute("hidden","");
		document.getElementById("downnn").setAttribute("hidden","");
		localStorage.setItem("curs_saved",JSON.stringify(curs));
	} else if(curs > 5){
		curs = curs * 0 + 4.9;
		document.getElementById("downn").removeAttribute("hidden");
		document.getElementById("downnn").removeAttribute("hidden");
		document.getElementById("upp").setAttribute("hidden","");
		document.getElementById("uppp").setAttribute("hidden","");
		localStorage.setItem("curs_saved",JSON.stringify(curs));
	}
	document.getElementById('curs_text').innerHTML = rounded(curs);
	money = rounded(money);
	localStorage.setItem("money_saved",JSON.stringify(money));
	cursss();
}



/* покупка апельсинов */
function buy_oranges(){
	oranges_for_buy = +prompt("Сколько апельсинов вы хотите приобрести:");
	sum = oranges_for_buy * curs;
	if (money >= sum){
			money = money - sum;
			oranges = oranges + oranges_for_buy;
			localStorage.setItem("oranges_saved",JSON.stringify(oranges));
			localStorage.setItem("money_saved",JSON.stringify(money));
			document.getElementById('money_text').innerHTML = money;
			document.getElementById('oranges_texttt').innerHTML = oranges;
			alert("Транзакция прошла успешно!")
	} else{
		alert("Ошибка")
	}
}

/* покупка */
function buy_money(){
	oranges_for_sale = +prompt("Сколько апельсинов вы хотите продать:");
	sum = oranges_for_sale * curs;
	if (oranges >= oranges_for_sale){
			money = money + sum;
			oranges = oranges - oranges_for_sale;
			localStorage.setItem("oranges_saved",JSON.stringify(oranges));
			localStorage.setItem("money_saved",JSON.stringify(money));
			document.getElementById('money_text').innerHTML = money;
			document.getElementById('oranges_texttt').innerHTML = oranges;
			alert("Транзакция прошла успешно!")
	} else{
		alert("Ошибка")
	}
}

/* апгрейд */
function upgrade1(){
	upgradee = +prompt("Вы хотите приобрести апгрейд первого уровня: доход увлечен до 5 апельсинов за клик, стоимость 150 монет. Чтобы подтвердить покупку введите 1, отменить 2: ");
	if (upgradee == 1){
		if (money > 150){
			if (level == 1){
				money = money - 150;
				localStorage.setItem("money_saved",JSON.stringify(money));
				level = 5;
				localStorage.setItem("level_saved",JSON.stringify(level));
				console.log(level)
				alert("Успешно!")
				document.getElementById("simple_unactivatedd").setAttribute("hidden","");		
			}
		} else{
			alert("Ошибка!")}
	}
}
function upgrade2(){
	upgradee = +prompt("Вы хотите приобрести апгрейд первого уровня: доход увлечен до 15 апельсинов за клик, стоимость 750 монет. Чтобы подтвердить покупку введите 1, отменить 2: ");
	if (upgradee == 1){
		if (money > 750){
			if (level == 5){
				money = money - 750;
				localStorage.setItem("money_saved",JSON.stringify(money));
				level = 15;
				localStorage.setItem("level_saved",JSON.stringify(level));
				console.log(level)
				alert("Успешно!")
				document.getElementById("grandma_unactivatedd").setAttribute("hidden","");				
			}
		} else{
			alert("Ошибка!")}
	}
}

function upgrade3(){
	upgradee = +prompt("Вы хотите приобрести апгрейд первого уровня: доход увлечен до 75 апельсинов за клик, стоимость 3750 монет. Чтобы подтвердить покупку введите 1, отменить 2: ");
	if (upgradee == 1){
		if (money > 3750){
			if (level == 15){
			money = money - 3750;
			localStorage.setItem("money_saved",JSON.stringify(money));
			level = 75;
			localStorage.setItem("level_saved",JSON.stringify(level));
			console.log(level)
			alert("Успешно!")
			document.getElementById("farmer_unactivatedd").setAttribute("hidden","");				
			}
		} else{
			alert("Ошибка!")} 
	}
}

function upgrade4(){
	upgradee = +prompt("Вы хотите приобрести апгрейд первого уровня: доход увлечен до 300 апельсинов за клик, стоимость 18750 монет. Чтобы подтвердить покупку введите 1, отменить 2: ");
	if (upgradee == 1){
		if (money > 18750){
			if (level == 75){
				money = money - 18750;
				localStorage.setItem("money_saved",JSON.stringify(money));
				level = 300;
				localStorage.setItem("level_saved",JSON.stringify(level));
				console.log(level)
				alert("Успешно!")
				document.getElementById("pro_unactivatedd").setAttribute("hidden","");
			}
		} else{
			alert("Ошибка!")}
	}
}
function upgrade5(){
	upgradee = +prompt("Вы хотите приобрести апгрейд первого уровня: доход увлечен до 750 апельсинов за клик, стоимость 95000 монет. Чтобы подтвердить покупку введите 1, отменить 2: ");
	if (upgradee == 1){
		if (money > 95000){
			if (level == 300){
				money = money - 95000;
				localStorage.setItem("money_saved",JSON.stringify(money));
				level = 750;
				localStorage.setItem("level_saved",JSON.stringify(level));
				console.log(level)
				alert("Успешно!")
				document.getElementById("negr_unactivatedd").setAttribute("hidden","");
			}
		} else{
			alert("Ошибка!")} 
	}
}

function upgrade6(){
	upgradee = +prompt("Вы хотите приобрести апгрейд первого уровня: доход увлечен до 3500 апельсинов за клик, стоимость 475000 монет. Чтобы подтвердить покупку введите 1, отменить 2: ");
	if (upgradee == 1){
		if (money > 475000){
			if (level == 750){
				money = money - 475000;
				localStorage.setItem("money_saved",JSON.stringify(money));
				level = 3500;
				localStorage.setItem("level_saved",JSON.stringify(level));
				console.log(level)
				alert("Успешно!")
				document.getElementById("boss_unactivatedd").setAttribute("hidden","");				
			}
		} else{
			alert("Ошибка!")} 
	}
}

function upgrade7(){
	upgradee = +prompt("Вы хотите приобрести апгрейд первого уровня: доход увлечен до 17500 апельсинов за клик, стоимость 2375000 монет. Чтобы подтвердить покупку введите 1, отменить 2: ");
	if (upgradee == 1){
		if (money > 2375000){
			if (level == 3500){
				money = money - 2375000;
				localStorage.setItem("money_saved",JSON.stringify(money));
				level = 17500;
				localStorage.setItem("level_saved",JSON.stringify(level));
				console.log(level)
				alert("Успешно!")
				document.getElementById("cheat_unactivatedd").setAttribute("hidden","");
			}
		} else{
			alert("Ошибка!")} 
	}
}

function upgrade8(){
	upgradee = +prompt("Вы хотите приобрести апгрейд первого уровня: доход увлечен до 87500 апельсинов за клик, стоимость 11875000 монет. Чтобы подтвердить покупку введите 1, отменить 2: ");
	if (upgradee == 1){
		if (money > 11875000){
			if (level == 17500){
				money = money - 11875000;
				localStorage.setItem("money_saved",JSON.stringify(money));
				level = 87500;
				localStorage.setItem("level_saved",JSON.stringify(level));
				console.log(level)
				alert("Успешно!")
				document.getElementById("god_unactivatedd").setAttribute("hidden","");			
			}
		} else{
			alert("Ошибка!")} 
	}
}

function upgrade9(){
	upgradee = +prompt("Вы хотите приобрести апгрейд первого уровня: доход увлечен до 437500 апельсинов за клик, стоимость 59375000 монет. Чтобы подтвердить покупку введите 1, отменить 2: ");
	if (upgradee == 1){
		if (money > 59375000){
			if (level == 87500){
				money = money - 59375000;
				localStorage.setItem("money_saved",JSON.stringify(money));
				level = 437500;
				localStorage.setItem("level_saved",JSON.stringify(level));
				console.log(level)
				alert("Успешно!")
				document.getElementById("orange_unactivatedd").setAttribute("hidden","");
			}
		} else{
			alert("Ошибка!")} 
	}
}

/* нетрогай */
start();
cursss();