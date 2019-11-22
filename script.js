var money = prompt("Ваш бюджет на месяц?", ''),
    time =  prompt("Введите дату в формате YYYY-MM-DD", '');

var appData = {
	budget: money,
	timeData: time,
  expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false
}
var quest1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
		quest2 = prompt("Во сколько обойдется?", ''),
		quest3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
		quest4 = prompt("Во сколько обойдется?", '');

appDate.expenses.quest1 = quest2;
appDate.expenses.quest3 = quest4;

alert(appData.budget / 30);