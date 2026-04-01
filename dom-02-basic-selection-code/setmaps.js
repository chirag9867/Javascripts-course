
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

personData.set(person2, [{date: 'tomorrow', price: 500}]); //to set a new entry


console.log(personData);
console.log(maps);
console.log(newPerson);

for(const entry of personData.entries()){
    console.log(entry)
}

for(const [key , value] of personData){ //array destructor to pull out the keys & values seperately
    console.log(key);
    console.log(value)
}

for(const entry of personData.keys()){ //will access the keys only in the map
    console.log(entry)
}

for(const value of personData.values()){ //will access the value only in the map
    console.log(value)
}


