const breakfastMenu = ['Pancakes- $12', 'Eggs Benedict- $22.99', 'Oatmeal- $20.99', 'Frittata- $15'];
const mainCourseMenu = ['Steak- $25.99', 'Pasta- $22.99', 'Burger- $19.99', 'Salmon- $29.99'];
const dessertMenu = ['Cake- $12.99', 'Ice Cream- $9.99 ', 'Pudding- $10.99', 'Fruit Salad- $10.99'];

// Breakfast
const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
    document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

// Main Course
let mainCourseItem = '';
    mainCourseMenu.forEach((item, index) => {
    mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
    document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

// Dessert
let dessertItem = '';
    for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
    document.getElementById('dessertMenuItems').innerHTML = dessertItem;