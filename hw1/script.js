var appData = {
  budget : +prompt("Your budget for a month?"),
  timeData : prompt("Enter the date in the format YYYY-MM-DD"),
  expenses : {},
  optionalExpenses : {},
  income : [],
  savings : false 
};

let findDayBudget = (budget) => budget/30;
let detectLevel = (budgetPerDay) => {
  if(appData.budgetPerDay < 100) {
    console.log("Fuck! Are you still alive?" );
  } else if(appData.budgetPerDay > 100 && appData.budgetPerDay < 2000) {
    console.log("Wow! You are cool bro!");
  } else if(appData.budgetPerDay > 2000) {
    console.log("Godlevel! I want to have children from you!");
  } else {
    console.log("something is wrong!");
  }
};

function setOptionalExpenses() {
  let counter = 0;
  while(counter < 3) {
    let expenditure = prompt("Enter the optional expenditure" +
    "item for this month");
    let costs = +prompt("how much does it costs?");
    if(expenditure != "" && expenditure.length < 50 && 
      costs != "" && !isNaN(costs)) {
        appData.optionalExpenses[expenditure] = costs;
        console.log("Done");
        counter++;
    } else {
      console.log("Continue");
      continue; 
    } 
  }
}

let counter = 0;
while(counter < 2) {
  let expenditure = prompt("Enter the required expenditure" + 
  "item for this month");
  let costs = +prompt("how much does it costs?");

  if(expenditure != "" && expenditure.length < 50 &&
    costs != "" && !isNaN(costs)) {
      appData.expenses[expenditure] = costs;
      console.log("Done");
      counter++;
  } else {
    console.log("Continue");
    continue; 
  }        
}

setOptionalExpenses();
appData.budgetPerDay = findDayBudget(appData.budget);
detectLevel(appData.budgetPerDay);
alert("Your budget for a month - " + appData.budgetPerDay);
  