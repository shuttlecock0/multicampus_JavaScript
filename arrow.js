const person = {
    name: 'kim',
    sayHello: () => console.log(`Hi ${this.name}`)
}

const person = {
    name: 'kim',
    sayHello: function(){
        console.log(`Hi ${this.name}`)
    }
}

person.sayHello()