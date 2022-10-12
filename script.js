'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

//Simple array methods
let arr = ['a', 'b', 'c', 'd', 'e'];

//SLICE
//it doesn't change the original array
console.log(arr.slice(1));
console.log(arr.slice(2, 4));
console.log(arr.slice(-4, -2));
console.log(arr.slice()); //can used to create a shallow copy of the array.
//console.log(arr);

//SPLICE
//it actually does mutate the original array
//console.log(arr.splice(-1));
console.log(arr);
//console.log(arr.splice(2, 3));
//in the splice method the 2nd argument is the deletecount for deleting the no. of elements we want to delete.
//console.log(arr);

//REVERSE
//it does mutate the original array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

//CONCAT --doesnt mutate
const letters = arr.concat(arr2);
console.log(letters);

//JOIN
console.log(letters.join('*'));

//--The new at method
const arr1 = [22, 56, 11];
console.log(arr1[0]);
console.log(arr1.at(0));

//getting last array element
console.log(arr1[arr1.length - 1]);
//console.log(arr1.splice(-1)[0])
console.log(arr1.at(-1));

//at method also works on string
console.log('sanjana'.at(0));
console.log('sanjana'.at(-1));

//**************************************************************************** */
//****************Looping Arrays: forEach****************** */
//**************************************************************************** */

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//with for of loop
//for (const movement of movements){
//suppose now we want to work with index too of the array, so
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    //console.log(`you deposited ${movement}`);
    console.log(`Movement ${i + 1}: you deposited ${movement}`);
  } else {
    //console.log(`you withdrew ${Math.abs(movement)}`);
    console.log(`Movement ${i + 1}: you withdrew ${Math.abs(movement)}`);
  }
}

//with forEach loop
//forEach method actually required a callback function in order to tell it whaat to do.
//so in each iteration it will execute the that callback function.

console.log('---forEach----');
// movements.forEach(function (movement) {
//   if(movement > 0){
//     console.log(`you deposited ${movement}`)
//   }
//   else {
//     console.log(`you withdrew ${Math.abs(movement)}`)
//   };
// });

// Now if we want to work with the index in forEach loop:

//infact, the forEach loop actually passes in the current element, the index and the entire array that we are looping
// on in the callback function.
//orders of arguments matters in forEach method(i.e elements, index, array)
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: you deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: you withdrew ${Math.abs(mov)}`);
  }
});

//the fundamental diff btwn for of and forEach is we cant breakout it (like continue and break). we cant do continue
//and break in forEach loop at all.

//**************************************************************************** */
//***************Data Transformation: map, filter, reduce****************** */
//**************************************************************************** */
//we use these methods to create new arrays based on transforming data from other arrays.

//map is used to loop over arrays.(same like the forEach loop). but the differnece is that map creates a brand new array
//based on the original array or containing the result of applying an operation on all original array elements.

//filter returns the new array containing the array elements that passed a specified  test condition.

//reduce boils("reduces") an array elements down to one single value (e.g adding all elements together).

//////----------Map method practice--------------
// const eurToUsd = 1.1;
// const movements1 = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const movementsUSD = movements1.map(function(mov1){
//   return mov1*eurToUsd;
// });
// console.log(movements1);
// console.log(movementsUSD);

//can also do using arrow func.
const eurToUsd = 1.1;
const movements1 = [200, 450, -400, 3000, -650, -130, 70, 1300];
const movementsUSD = movements1.map(move => move * eurToUsd);
console.log(movements1);
console.log(movementsUSD);

const movementsUSDFor = [];
for (const move2 of movements1) movementsUSDFor.push(move2 * eurToUsd);
console.log(movementsUSDFor);

//so also like forEach method, map also has 3 params feature
const movementDescription = movements1.map(
  (mov3, i3, arr3) =>
    `Movement ${i3 + 1} : You ${mov3 > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov3
    )}`

  // if(mov3 > 0){
  //   return `Movement ${i3 +1}: you deposited ${mov3}`
  // }
  // else {
  //   return `Movement ${i3 +1}: you withdrew ${Math.abs(mov3)}`
  // }
);
console.log(movementDescription);

//usinf all these array methods?
//as we can actually chain all of these methods together, basically use them all one after another to buils a big
//final result. And this chaining is umpossible using the forEach loop.

///////-----------Filter method--------------------------
//like map and forEach method it also passes the 3 arguments in callback function
const deposits = movements1.filter(mov4 => mov4 > 0);
console.log(deposits);
//console.log(movements1);

const withdraw = movements1.filter(mov5 => mov5 < 0);
console.log(withdraw);

//---Reduce method ----
//accumulator is like a snowball which gets increasing. in reduce method the first param of the callback func. is the
// accumulator and the 2nd param of the reduce method is the initial value of the accumulator. it return as a single
//value not the array form.

const balance = movements1.reduce(function (acc, currElement, iCurr) {
  console.log(`iteration ${iCurr}: ${acc}`);
  return acc + currElement;
}, 0);
console.log(balance);

//in for loop
let balance2 = 0;
for (const m of movements1) balance2 += m;
console.log(balance2);

//maximum value
const max = movements1.reduce((acc1, mov) => {
  console.log(acc1, mov, 'QWERTY');
  if (acc1 > mov) return acc1;
  else return mov;
}, movements1[0]);
console.log(max);

//acc1 will hold the current value of the mov

//-Coding challenge--
//--chaining method
const eurToUSD = 1.1;
const totalDepositUSD = movements1
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    //console.log(arr) just in case if any error occur from the previous method(here is filter)
    return mov * eurToUSD;
  })
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositUSD);

//--The find method
const firstWithdrawl = movements1.find(mov => mov < 0);
console.log(movements1);
console.log(firstWithdrawl);

//fundamental difference btwn filter and find method is:
//1.filter returns all the elements that match the condition and find returns the first one.
//2.filter method return new array while find method returns the element itself.

//working with array of objects
console.log(accounts);
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
  }
});
//findIndex return the index of the value or element

//Sorting Array (it actually mutate the original array)
//with String
const owners = ['Jonas', 'Kan', 'SethRollin', 'Amad'];
console.log(owners.sort());
console.log(owners);

//with Numbers
console.log(movements1.sort());
//to work with numbers we have to pass a compare callback function in sort method and in that callback function we pass 2 arguments for the current and next value
//return < 0, A,B
//return > 0. B,A

//const movements1 = [200, 450, -400, 3000, -650, -130, 70, 1300];
movements1.sort((a, b) => b - a);
console.log(movements1);

/* a=200
b=450
(450>200)=true200,400
a=450
b=-400
(-400>450)=false200,-400,450
new array=[200,-400,450,-650,-130,70,1300,3000]
new array2=[-400,-650,-130,70,200,1300,3000]
new array2=[-650,-400,-130,70,200,1300,3000] */

const x = new Array(7) 
console.log(x)
//console.log(new Array(2).fill(0));
//we can also define the start position and end position in the fill method too.
x.fill(1, 2, 5);
console.log(x);

//we can also use fill method with the filled array.
const arrr = [1,2,3,4,5,6,7];
arrr.fill(23,2,6);
console.log(arrr);

//Array.from //another method of creating array programatically
const y = Array.from({length:7}, ()=>1);
console.log(y);

const z = Array.from({length: 10}, (_, currentIndex) => currentIndex+1);
console.log(z);

//Array method Practice
//1.
const bankDepositsSum = accounts.flatMap(acc => acc.movements)
.filter(mov => mov > 0)
.reduce((sum, curr) => sum + curr, 0);
console.log(bankDepositsSum);

//2.
// const sumDeposits1000 = accounts.flatMap(acc => acc.movements)
// .filter(mov => mov >= 1000).length;
// console.log(sumDeposits1000);

//with reduce method
const sumDeposits1000 = accounts.flatMap(acc => acc.movements)
.reduce()
