// arrow function
// function을 생략해도 된다.
// 함수에 매개 변수가 하나 뿐이라면 소괄호도 생략가능함
// 함수 바디의 표현식이 한 줄이라면 중괄호와 return도 생략가능

const mulcam = function() {
    return 'hello!'
}

const mulcam = () => 'hello!'
const mulcam = _ => 'hello!'

const mulcam2 = name => `hello! ${name}`

const sayHello = (name='noName') => `hi ${name}`

//익명함수
//1회용으로 사용할 함수는 이름을 짓지 않을 수 있다.
function (num) { return num**3 }
num => num ** 3

// 익명함수 즉시 실행
(num => num ** 3)(4)

const cube = num => num ** 4
cube(4)