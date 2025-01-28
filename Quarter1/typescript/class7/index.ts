// Object literal
let obj : {name :string , age :number} = {
    name: 'John',
    age: 30
};
console.log(obj);
console.log(obj.age)

// Nested object
let obj2 : {name :string , age :number, address :{city :string, country :string}} = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA'
    }
};
console.log(obj2);
console.log(obj2.address.city)
    
// Class
class person{
    name: string;
    age: number;
    constructor(name: string, age:number){
        this.name = name
        this.age = age
    }
}