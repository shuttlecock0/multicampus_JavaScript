function func1(){
    console.log('func1')
    func2()
}

function func2(){
    setTimeout(() => console.log('func2'), 0)
    func3()
}

function func3(){
    console.log('func3')
}

func1()