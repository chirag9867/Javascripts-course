let person = {
    'first name': 'chirag',
    age: 25,
    hobbies: ['cooking', 'sports'],
    greet: () =>{
        //alert('Hi There!!');
        console.log('hi There!!');
    },
    1.6: 'My name is Chirag'
};

console.log(person);
person.greet();


person.age = 30; //changes the value of the property
person.isAdmin = true; //will create the property oif it is not true

delete person.age // will deltye the proprty "age"

//dont use  --> person.age = undefined; (as it sends the wrong message)

//dont use  --> person.age = null; (if you want to delete the property, if you want to modify it later then its ok)

console.log(person["first name"]); // when there is a abnormal key in an object we can wrap that around in square bracket and quotes
console.log(person["1.6"]);
console.log(person["hobbies"]);