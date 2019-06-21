const nothing = () => {}

// //setTimeout(func, ms)
// console.log('start sleeping')
// setTimeout(nothing, 3000)
// console.log('end of program')

function first() {
    console.log('first')
}

function second() {
    console.log('second')
}

function third() {
    console.log('third')
}

first()
setTimeout(second, 1000)
third()