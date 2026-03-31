
// <---------Sets------------>
const ids = new Set([1,2,3,4]);
console.log(ids.has(2)); //checks if you have that element

for (const entry of ids.entries()){
    console.log(entry) //
}

for (const entry of ids.values()){
    console.log(entry)
}

//<----------Maps--------->

const person1 = {name: 'chirag'};
const person2 = {name: 'mahajan'};

const personData = new Map([[person1, [{date: 'yesterday', price: 400}]]]);

const personalData = new Map([person1, [{date: 'yesterday', price: 400}]]);
const maps = new Map([   [123  ,   {name: 'chirag'}, ['thats my name']]  ]);

const newPerson = new Map([[person1, 'asdjfasdfj']]);

console.log(personData);
console.log(maps);
console.log(newPerson);

