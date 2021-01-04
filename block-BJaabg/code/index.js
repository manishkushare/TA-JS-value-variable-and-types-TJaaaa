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
// for(let i= PHONE_PRICE; i<= bank_balance; i*2) {
//     for(j= ACCESSORY_PRICE; j<= SPENDING_THRESHOLD; j*2) {
//         if(amount <= bank_balance){
//             amount = PHONE_PRICE + ACCESSORY_PRICE;
//             console.log(amount);

//         }
        
//     }
// }
let i = PHONE_PRICE;
while(i < bank_balance) {
    amount += PHONE_PRICE;
    // console.log(amount);
    let j= ACCESSORY_PRICE;
    while(j < SPENDING_THRESHOLD) { 
        amount += ACCESSORY_PRICE;
    }
    console.log(amount);

}
console.log(amount);

// ⛑ Answer of the above will `$334.76`.
