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
	savings: true,
	chooseExpenses: function () {
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

	},
	detectDayBudget: function () {
		appData.moneyPerDay = (appData.budget / 30).toFixed();
		alert('Ежедневный бюджет : ' + appData.moneyPerDay);
	},
	detectLevel: function () {
		if (appData.moneyPerDay < 100) {
			console.log('Минимальный уровень дохода');
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			console.log('Средний уровень дохода');
		} else if (appData.moneyPerDay > 2000) {
			console.log('Высокий уровень дохода');
		} else {
			console.log('Произошла ошибка');
		}
	},
	checkSavings: function () {
		if (appData.savings == true) {
			var save = +prompt('Какова сумма накоплений?'),
				precent = +prompt('Под какой процент?');
	
			appData.monthIncome = save / 100 / 12 * precent;
			alert('Доход с вашего депозита в месяц: ' + appData.monthIncome);
		}
	},
	chooseOptExpenses: function () {
		for (var i = 1; i <= 3; i++) {
			var questionOptExpenses = prompt('Статья необязательных расходов?');
			appData.optionalExpenses[i] = questionOptExpenses;
			console.log(appData.optionalExpenses);
		}
	},
	chooseIncome: function () {
		var items =  prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
		appData.income = items.split(', ');
		appData.income.push(prompt('Может что то еще ?'));
		appData.income.sort();
	}



};