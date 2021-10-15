import { whatMeal } from "./functions";

export class menuItem {
  constructor(name, price, details, comments) {
    this.name = name;
    this.price = price;
    this.details = details;
    this.comments = comments;
  }
  
}

export class side {
  constructor(name, price = 0) {
    this.name = name;
    this.price = price;
  }

}

export class dinerError extends Error {
  constructor(msg = 'Oops! Something\'s wrong...', ...params) {
    super(...params);
    this.msg = msg;
  }
  errorOccurs() {
    toUser.innerText = 'I\'m sorry, I didn\'t get that. We\'d better try again...';
    setTimeout(func.whatMeal(), 1000);
  }
}