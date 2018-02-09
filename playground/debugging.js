const person = {
    name: 'James',
    sayHi: () => {
        console.log(this);
    },
    sayHiAlt() {
        console.log(this);
    }        
};

person.age = 30;

person.name = 'Agwa';

person.sayHiAlt();
person.sayHi();