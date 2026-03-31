const h1 = document.getElementById('main-title');

h1.textContent = 'Some new title!';
h1.style.color = 'white';
h1.style.backgroundColor = 'black';

const li = document.querySelector('li:last-of-type');
li.textContent = li.textContent + ' (Changed!)';

const body = document.body;

// const listItemElements = document.querySelectorAll('li');
const listItemElements = document.getElementsByTagName('li');

for (const listItemEl of listItemElements) {
  console.dir(listItemEl);
}


//<----------Creating an Array---------->
//First Method
const numbers = [1,2,3,4,5]; //normal way
console.log(numbers);

//Second Method
const moreNumbers = new Array(5, 'hi','world'); // empty array\
console.log(moreNumbers);


//third Method
const yetMoreNumbers = Array.of(1,4,5,7,9,4);
console.log(yetMoreNumbers);


//Fourth Method
const newNumbers = Array.from('hello world');//split the array like parameter into individual value
console.log(newNumbers);

const listItems = document.querySelectorAll('li');
console.log(listItems);
const listItemsArray = Array.from(listItems);
console.log(listItemsArray);




//<----------Stored in Array-------->
const arr = [1,2,3];
const strArr = ['hello', 'world'];
const mixArr = [1,7,'mix','strings','array'];
const anotherMixArr = [1,5,7,{person: []}];
const nesArr = [[23,45,6756], [34,56,67], [435,67,89,34]];



//<--------Add Data to Array -------->

const hobbies = ['cooking','sports','reading','driving'];

hobbies.push('coding');//add elements to the end of an array & returns the length of the array
hobbies.unshift('sleeping');// add elements to the front of the array & returns the length of the array

console.log(hobbies);

const removedElement = hobbies.pop();//removes the last element of the array & returns the removed element
const removeFirstElement = hobbies.shift();//removes the first element of the array & returns the removed element

console.log(hobbies);
console.log(removedElement);
console.log(removeFirstElement);

//<-----------find() & findIndex() --------->
personalDetails = [{name: 'Max'}, {name: 'Manuel'},{name: 'chirag'}, {name: 'vidur'}, {name: 'Naman'}];

const person = personalDetails.find((person, indx, persons) => {
  return person.name === 'Manuel' 
});

console.log(person);

person.name = 'Suhail';

console.log(personalDetails);

const searchIndex = personalDetails.findIndex((person, indx, persons) => {
  return person.name === 'vidur'

});

console.log(searchIndex);

//<----------forEach as the loop-------->

const prices = [10.5,34.89, 45.67, 32.7, 87.98];
const tax = 0.18;
const finalPrices = [];
const anotherFinalPrices = [];

//using the for loop
for(const price of prices){
  finalPrices.push(price * (1 + tax));
}

console.log(finalPrices);

//using the forEach
prices.forEach((price, indx, prices) => {
  const finalPriceObj = {indx: indx,
                         price: price * (tax + 1) 
                        }
  anotherFinalPrices.push(finalPriceObj);
  
});


console.log(anotherFinalPrices);


//<-----------Maps----------->
const pricesMap = prices.map((price, indx, prices) => {
  const pricesObj = {indx: indx,
                     finalPrice: price*(tax + 1)}
  return pricesObj;

});


console.log(pricesMap);


//<--------Sorting & Reversing Array-------->
const values = [10.33, 3.56, 4.78, 12.45, 23];

//const reverseValues = values.reverse();
//const sortedValues = values.sort();
console.log(values.reverse());
//console.log(reverseValues);

const againSoretedValues = values.sort((a, b) => {
  if(a<b){
    return 1;
  }else if(a === b){
    return 0;
  }else{
    return -1;
  }
});

console.log(againSoretedValues);
console.log(againSoretedValues.reverse());

const moreSetNumbers = [10.33, 3.56, 4.78, 12.45, 23];
console.log('asdhfasjkdhfjasdf');

console.log(moreSetNumbers.sort((a,b)=> a - b));

console.log(moreSetNumbers.filter((numb, indx, moreSetNumbers) => {
  return numb > 10;
})
);



//<-----------REDUCE METHOD----------->
const moreSetNumbersreduced = moreSetNumbers.reduce((prevValue, currValue, indx, moreSetNumbers)=>{
  return prevValue + currValue;
}, 0);

console.log(moreSetNumbersreduced);

//<----------join() & split()---------->
//Join Method is for string
const data = '10;hello;2000;world';
console.log(data.split(';'));


//Join Method
const arrdata = ['chirag', 'mnahajan', 'is', 'born', 'on', 'April 5'];
const dataJoined = arrdata.join(' ');
console.log(dataJoined);

//<---------More on Spread--------->
console.log(Math.min(...moreSetNumbers));//min takes numbers as parameters not iterables

//<-------Array Detruction------>

var createCounter = function(n) {
    
    return function() {
        return n++;
    };
};

const counter1 = createCounter(10);
counter1();
counter1();
counter1();