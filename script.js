
var money, time;

function start() {
	money = +prompt("Ваш бюджет на месяц?", '');
	time = prompt("Введите дату в формате YYYY-MM-DD", '');

	while (isNaN(money) || money == '' || money == null) {
		money = +prompt("Ваш бюджет на месяц?", '');
	}
}



start();

var appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: true
};

function chooseExpenses() {
	for (var i = 0; i < 2; i++) {
		var a = prompt("Введите обязательную статью расходов в этом месяце", ''),
				b = prompt("Во сколько обойдется?", '');

		if ((typeof (a)) === 'string' &&
			(typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
			appData.expenses[a] = b;
		} else {
			i--;
		}
	}
}
chooseExpenses();

function detectDayBudget() {
	appData.moneyPerDay = (appData.budget / 30).toFixed();
	alert('Ежедневный бюджет : ' + appData.moneyPerDay);
}
detectDayBudget();


function detectLevel() {
	if (appData.moneyPerDay < 100) {
		console.log('Минимальный уровень дохода');
	} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
		console.log('Средний уровень дохода');
	} else if (appData.moneyPerDay > 2000) {
		console.log('Высокий уровень дохода');
	} else {
		console.log('Произошла ошибка');
	}
}
detectLevel();


function checkSavings() {
	if(appData.savings == true) {
		var save = +prompt('Какова сумма накоплений?'),
				precent = +prompt('Под какой процент?');

		appData.monthIncome = save/100/12*precent;
		alert('Доход с вашего депозита в месяц: ' + appData.monthIncome);
	}
}
checkSavings();

function chooseOptExpenses() {
	for(var i = 1; i <= 3; i++) {
		var questionOptExpenses = prompt('Статья необязательных расходов?');
		appData.optionalExpenses[i] = questionOptExpenses;
		console.log(appData.optionalExpenses);
	}
}

chooseOptExpenses();