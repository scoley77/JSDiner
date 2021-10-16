import * as home from './bootstrap';
import * as menu from './menus';
import * as _ from 'lodash';

let toUser = document.getElementById('message-space');
let runningTotal = [];
let choices = [];


export const whatMeal = function() {
  toUser.innerText = 'Hello! Welcome to the JS Diner!\nMy name is Sara; I\'ll be your server today.';
  document.getElementById('response-btn').style.visibility = 'hidden';
  setTimeout(function() {
    const mealPrompt = window.prompt('What are you wanting to eat today?\n1. Breakfast\n2. Lunch\n3. Dinner', 'Enter the number of your choice');
    if (mealPrompt == '1') {
      orderBreakfast();
    } else if (mealPrompt == '2') {
      orderLunch();
    } else if (mealPrompt == '3') {
      orderDinner();
    } else {
      toUser.innerText = 'I\'m sorry, I didn\'t get that. We\'d better try again...';
      setTimeout(function() {
        whatMeal()
      }, 2000);
    }
  }, 2000);
}

const orderBreakfast = function() {

  toUser.innerText = 'What are you craving?';
  const breakfastChoice = _.reduceRight(home.breakfastOptions, function(boxContent, entree) {
    return `${home.breakfastOptions.indexOf(entree)+1}. ${entree.name} - ${entree.details}. $${entree.price.toFixed(2)}\n`.concat(boxContent);
  }, '');
  setTimeout(function () {
    let entreePrompt = window.prompt(breakfastChoice,"Enter the number of your choice");
    if (entreePrompt == "1" || entreePrompt == "2" || entreePrompt == "3") {
      setTimeout(function() {
        const entree = home.breakfastOptions[parseInt(entreePrompt) - 1];
        toUser.innerText = entree.comments;
        choices.push(entree.name);
        runningTotal.push(entree.price);
        pickTwo(home.breakfastSides);
      }, 1000);
    } else {
      toUser.innerText = 'I\'m sorry, I didn\'t get that. We\'d better try again...';
      setTimeout(function() {
        whatMeal()
      }, 2000);
    }
  }, 1000);

}

const orderLunch = function() {
  toUser.innerText = 'What are you craving?';
  const lunchChoice = _.reduceRight(home.lunchOptions, function(boxContent, entree) {
    return `${home.lunchOptions.indexOf(entree)+1}. ${entree.name} - ${entree.details}. $${entree.price.toFixed(2)}\n`.concat(boxContent);
  }, '');
  setTimeout(function () {
    let entreePrompt = window.prompt(lunchChoice,"Enter the number of your choice");
    if (entreePrompt == "1" || entreePrompt == "2" || entreePrompt == "3") {
      const entree = home.lunchOptions[parseInt(entreePrompt) - 1];
      setTimeout(function() {
        toUser.innerText = entree.comments;
        choices.push(entree.name);
        runningTotal.push(entree.price);
        sideForLunch();
      }, 1000);
    } else {
      toUser.innerText = 'I\'m sorry, I didn\'t get that. We\'d better try again...';
      setTimeout(function() {
        whatMeal()
      }, 2000);
    }
  }, 1000);
}

const orderDinner = function() {
  toUser.innerText = 'What are you craving?';
  const dinnerChoice = _.reduceRight(home.dinnerOptions, function(boxContent, entree) {
    return `${home.dinnerOptions.indexOf(entree)+1}. ${entree.name} - ${entree.details}. $${entree.price.toFixed(2)}\n`.concat(boxContent);
  }, '');
  setTimeout(function () {
    let entreePrompt = window.prompt(dinnerChoice,"Enter the number of your choice");
    if (entreePrompt == "3") {
      const entree = home.dinnerOptions[2];
      toUser.innerText = entree.comments;
      setTimeout(function() {
        choices.push(entree.name);
        runningTotal.push(entree.price);
        crabLegs();
      }, 1000);
    } else if (entreePrompt == "1" || entreePrompt == "2") {
      const entree = home.dinnerOptions[parseInt(entreePrompt) - 1];
      toUser.innerText = entree.comments;
      setTimeout(function() {
        choices.push(entree.name);
        runningTotal.push(entree.price);
        pickTwo(home.dinnerSides);
      }, 1000);
    } else {
      toUser.innerText = 'I\'m sorry, I didn\'t get that. We\'d better try again...';
      setTimeout(function() {
        whatMeal()
      }, 2000);
    }
  }, 1000);
}

const pickTwo = function(sidesMenu) {
  toUser.innerText = 'What would you like for your first side?';
  const sides = _.reduceRight(sidesMenu, function(boxContent, sideOp) {
    if (sideOp.price == 0) {
      return `${sidesMenu.indexOf(sideOp)+1}. ${sideOp.name}\n`.concat(boxContent);
    } else {
      return `${sidesMenu.indexOf(sideOp)+1}. ${sideOp.name} (+$${sideOp.price.toFixed(2)})\n`.concat(boxContent);
    }
  }, '');
  setTimeout(function() {
    let side1Prompt = window.prompt(sides,"Enter the number of your choice");
    if (side1Prompt != '1' && side1Prompt != '2' && side1Prompt != '3' && side1Prompt != '4' && side1Prompt != '5' && side1Prompt != '6') {
      toUser.innerText = 'I\'m sorry, I didn\'t get that. We\'d better try again...';
      setTimeout(function() {
        whatMeal()
      }, 2000);
    } else {
      const side1 = sidesMenu[parseInt(side1Prompt) - 1];
      choices.push(side1.name);
      runningTotal.push(side1.price);
      toUser.innerText = 'What would you like for your second side?';
      setTimeout(function() {
        let side2Prompt = window.prompt(sides,"Enter the number of your choice");
        if (side2Prompt != '1' && side2Prompt != '2' && side2Prompt != '3' && side2Prompt != '4' && side2Prompt != '5' && side2Prompt != '6') {
          toUser.innerText = 'I\'m sorry, I didn\'t get that. We\'d better try again...';
          setTimeout(function() {
            whatMeal()
          }, 2000);
        } else {
          const side2 = sidesMenu[parseInt(side2Prompt) - 1];
          choices.push(side2.name);
          runningTotal.push(side2.price);
          toUser.innerText = 'Are you wanting to order dessert today?';
          setTimeout(function() {
            if (confirm('Would you like to see the dessert menu?')) {
              toUser.innerText = 'Awesome! Let me get you that menu:';
              doYouWantDessert();
            } else {
              toUser.innerText = 'Not feelin\' it? No problem!';
              isThatRight(choices);
            }
          }, 1000);
        }
      }, 1000);
    }
  }, 1000);
}

const sideForLunch = function() {
  toUser.innerText = 'Your lunch comes with one side; which would you like?';
  const lunchSideChoice = _.reduceRight(home.lunchSides, function(boxContent, sideOp) {
    return `${home.lunchSides.indexOf(sideOp)+1}. ${sideOp.name}\n`.concat(boxContent);
  }, '');
  setTimeout(function() {
    let sidePrompt = window.prompt(lunchSideChoice,"Enter the number of your choice");
    if (sidePrompt != '1' && sidePrompt != '2' && sidePrompt != '3') {
      toUser.innerText = 'I\'m sorry, I didn\'t get that. We\'d better try again...';
      setTimeout(function() {
        whatMeal()
      }, 2000);
    }
    const sideChoice = home.lunchSides[parseInt(sidePrompt) - 1];
    choices.push(sideChoice.name);
    toUser.innerText = 'Are you wanting to order dessert today?';
    setTimeout(function() {
      if (confirm('Would you like to see the dessert menu?')) {
        toUser.innerText = 'Awesome! Let me get you that menu:';
        doYouWantDessert();
      } else {
        toUser.innerText = 'Not feelin\' it? No problem!';
        isThatRight(choices);
      }
    }, 1000);
  }, 1000);
}

const crabLegs = function() {
  const crabSoup = ['Homestyle chicken noodle', 'Tomato bisque', 'Corn chowder'];
  const soupChoice = _.reduceRight(crabSoup, function(boxContent, soup) {
    return `${crabSoup.indexOf(soup)+1}. ${soup}\n`.concat(boxContent);
  }, '');
  toUser.innerText = 'This option comes with soup and a salad; What kind of soup would you like?';
  setTimeout(function() {
    let soupPrompt = window.prompt(soupChoice,"Enter the number of your choice");
    if (soupPrompt != '1' && soupPrompt != '2' && soupPrompt != '3') {
      toUser.innerText = 'I\'m sorry, I didn\'t get that. We\'d better try again...';
      setTimeout(function() {
        whatMeal()
      }, 2000);
    }
    const soupSide = crabSoup[parseInt(soupPrompt) - 1];
    choices.push(soupSide);
    toUser.innerText = 'Are you wanting to order dessert today?';
    setTimeout(function() {
      if (confirm('Would you like to see the dessert menu?')) {
        toUser.innerText = 'Awesome! Let me get you that menu:';
        setTimeout(function() {
          doYouWantDessert();
        }, 500);
      } else {
        toUser.innerText = 'Not feelin\' it? No problem!';
        setTimeout(function() {
          isThatRight(choices);
        }, 500);
      }
    }, 1000);
  }, 1000);
}

const doYouWantDessert = function() {
  const dessertChoice = _.reduceRight(home.dessertOptions, function(boxContent, dessert) {
    return `${home.dessertOptions.indexOf(dessert)+1}. ${dessert.name} - ${dessert.details}. $${dessert.price.toFixed(2)}\n`.concat(boxContent);
  }, '');
  let dessertPrompt = window.prompt(dessertChoice,"Enter the number of your choice");
  if (dessertPrompt != '1' && dessertPrompt != '2' && dessertPrompt != '3') {
    toUser.innerText = 'Not feelin\' it? No problem!';
    isThatRight(choices);
  }
  const dessert = home.dessertOptions[parseInt(dessertPrompt) - 1];
  choices.push(dessert.name);
  runningTotal.push(dessert.price);
  setTimeout(function() {
    isThatRight(choices);
  }, 500);
}

const isThatRight = function(items) {
  if (confirm(`So that's ${items.join(', ')}. Is that right?`)) {
    toUser.innerText = 'Great!';
    hereIsYourCheck(runningTotal);
  } else {
    toUser.innerText = 'Oh, I must have made a mistake! Let\'s try again...';
    setTimeout(function() {
      whatMeal()
    }, 2000);
  };
}

const hereIsYourCheck = function(fn) {
  const subTotal = _.reduce(fn, function(total, item) {
    return total + item;
  }, 0);
  const totalTotal = subTotal * 1.06;
  toUser.innerText = `Your total is $${totalTotal.toFixed(2)}. Thank you for coming!`;
}