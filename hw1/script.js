let appData = {
  budget : 0,
  timeData : 0,
  expenses : {},
  optionalExpenses : {},
  income : [],
  savings : true,
  setDayBudget: () => appData.budgetPerDay = appData.budget/30,
  calcBudgetLevel: () => {
    if(appData.budgetPerDay < 100) {
      console.log("Fuck! Are you still alive?" );
    } else if(appData.budgetPerDay > 100 && appData.budgetPerDay < 2000) {
      console.log("Wow! You are cool bro!");
    } else if(appData.budgetPerDay > 2000) {
      console.log("Godlevel! I want to have children from you!");
    } else {
      console.log("something is wrong!");
    }
  },
  setOptionalExpenses: function() {
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
  },
  setRequiredExpenses: function() {
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
  },
  setSaving: function() {
    if (appData.savings == true) {
      let savingstmp = +prompt("How much savings do you have?"); 
      let interest = +prompt("How high is an interest?");
      appData.monthIncome = savingstmp/100/12*interest;
    }
  },
  chooseIncome: function() {

  }
};


function main () {
  let tmpBudget;
  do {
    appData.budget = +prompt("Your budget for a month?");
  } while(isNaN(appData.budget) || appData.budget == null || 
  appData.budget == "");

  appData.time = prompt("Enter the date in the format YYYY-MM-DD");

  appData.setRequiredExpenses();
  appData.setOptionalExpenses();
  appData.setSaving();
  appData.setDayBudget();
  appData.calcBudgetLevel();

  alert(`Your savings equal ${Math.round(appData.monthIncome)}`);
  alert("Your budget for a month - " + Math.round(appData.budgetPerDay));
}

main();


  