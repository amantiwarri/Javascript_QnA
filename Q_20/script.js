/* In the following shopping cart add, remove, edit items
    => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    1- add 'Meat' in the beginning of your shopping cart if it has not been already added
    2- add 'Sugar' at the end of your shopping cart if it has not been already added
    3- remove 'Honey'
    4- modify Tea to 'Green Tea' 
*/

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

//add 'Meat' in the beginning of your shopping cart if it has not been already added
!shoppingCart.includes("Meat") ? shoppingCart.unshift("Meat") : "";

//add 'Sugar' at the end of your shopping cart if it has not been already added
!shoppingCart.includes("Sugar") ? shoppingCart.push("Sugar") : "";

//Point - 4, 1st Logic
const shoppingCartNew = shoppingCart.map(item => {
  if (item == "Tea") {
    return "Green Tea";
  }
  return item;
});
console.log(shoppingCartNew);

//Point 4, 2nd Logic
shoppingCart.map((item, index) => {
  if (item == "Tea") {
    shoppingCart[index] = "Green Tea";
  }
});
console.log(shoppingCart);
