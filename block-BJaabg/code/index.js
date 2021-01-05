/*
🎖 Write a program to calculate the total price of your phone purchase. With these conditions
 * [ ] You will keep purchasing phones (hint: loop!) until you run out of bank balance.
 * [ ] You'll also buy accessories for each phone as long as your purchase amount is below your spending threshold.
 * [ ] After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted like ($334.76).
 * [ ] Finally, check the amount against your bank account balance to see if you can afford it or not.
*/

const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

var bank_balance = 303.91;
var amount = 0;
// your code goes here
// while(bank_balance >= 0) {
//     console.log(amount)
//     amount += PHONE_PRICE;
//     bank_balance -= amount;
//     while(amount <= SPENDING_THRESHOLD) {
//         console.log(amount)
//         amount += ACCESSORY_PRICE;
//         console.log(amount)
//     }

// }
// console.log(amount);
// amount = amount + (TAX_RATE *100);
// alert(amount);
// ⛑ Answer of the above will `$334.76`.


// for(let i = PHONE_PRICE;  amount <= bank_balance ;){
//     for(let j = ACCESSORY_PRICE; amount<= SPENDING_THRESHOLD;) {
//         amount += (j + i);
//         // bank_balance -=amount;
//     }
//     amount += i;
//     // bank_balance -= amount;
// }
// console.log(amount);
// amount = amount + (TAX_RATE * 100);
// alert(amount);


for(let i = PHONE_PRICE; amount<=bank_balance;) {
    amount += PHONE_PRICE;

    
    if(amount <= SPENDING_THRESHOLD) {
        amount += (PHONE_PRICE + ACCESSORY_PRICE);
    }
}
console.log(amount);
amount = amount + (TAX_RATE *100);
alert(amount);
