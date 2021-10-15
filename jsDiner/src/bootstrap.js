import * as menu from './menus';
import * as func from './functions';


export const omelette = new menu.menuItem('Bacon cheese omelette', 11.30, 'Crispy bacon, wrapped in melted cheese and a steaming pillow of eggs', 'Great choice! This goes great with pancakes!');
export const crepes = new menu.menuItem('Nutella crepes', 10.50, 'Four delicate crepes, filled with creamy Nutella, and topped with fresh strawberries and whipped cream', 'Crepes are my favorite, too!');
export const waffle = new menu.menuItem('Belgian Waffle', 10.30, 'Jumbo, fluffy waffle, topped with glazed strawberries and powdered sugar', 'You\'ve got it!');
export const breakfastOptions = [omelette, crepes, waffle];

export const bbq = new menu.menuItem('BBQ pork sandwich', 11.40, 'Fresh-smoked pork, smothered in sweet BBQ sauce and served on a homemade sesame bun', 'That sounds mouthwatering!');
export const wrap = new menu.menuItem('Chicken bacon wrap', 8.70, 'Grilled chicken breast and bacon tossed in house ranch dressing and wrapped with lettuce and tomato inside a soft tortilla', 'Great choice!');
export const blt = new menu.menuItem('BLT sandwich', 8.95, 'The classic of the classics. Juicy bacon, crunchy lettuce, and tender tomato: together again', 'How can anyone resist?');
export const lunchOptions = [bbq, wrap, blt];

export const meatloaf = new menu.menuItem('Mom\'s meatloaf', 12.35, 'Tender, juicy meatloaf, covered in our classic worchestershire-base sauce', 'You won\'t regret that!');
export const burger = new menu.menuItem('Classic cheeseburger', 10.50, '100% American beef, accompanied by tomato, lettuce, ketchup, mayo, cheddar cheese, and a homemade sesame bun', 'Great choice! What a classic!');
export const crab = new menu.menuItem('King Crab Legs', 23.85, 'Feast off the ruler of Alaska\'s sea bottom', 'Yes, your Highness!');
export const dinnerOptions = [meatloaf, burger, crab];

export const pancakes = new menu.side('Short stack');
export const eggs = new menu.side('Two eggs');
export const bacon = new menu.side('Four bacon strips');
export const hashbrowns = new menu.side('Hashbrowns');
export const oatmeal = new menu.side('Oatmeal', 1.50);
export const french = new menu.side('Two slices of french toast', 2.50);
export const breakfastSides = [pancakes, eggs, bacon, hashbrowns, oatmeal, french];

export const fries = new menu.side('French fries');
export const cookie = new menu.side('Chocolate chip cookie');
export const fruit = new menu.side('Seasonal fruit cup');
export const lunchSides = [fries, cookie, fruit];

export const mashed = new menu.side('Mashed potatoes with brown gravy');
export const steakfries = new menu.side('Seasoned steak fries');
export const broccoli = new menu.side('Steamed broccoli');
export const corn = new menu.side('Buttered sweet corn');
export const baked = new menu.side('Loaded baked potato', 2.50);
export const salad = new menu.side('Side salad', 2.50);
export const dinnerSides = [mashed, steakfries, broccoli, corn, baked, salad];

export const pie = new menu.menuItem('Apple Pie', 5.95, 'Crisp apple filling, wrapped in a flaky butter crust and topped with vanilla icing and caramel');
export const split = new menu.menuItem('Banana split', 9.30, 'Neopolitan scoops over two banana halves, topped with chocolate syrup and crushed peanuts');
export const sundae = new menu.menuItem('Cookie sundae', 4.85, 'Fresh baked cookie crumbles on top of creamy vanilla ice cream');
export const dessertOptions = [pie, split, sundae];

document.getElementById('response-btn').addEventListener("click", func.whatMeal);