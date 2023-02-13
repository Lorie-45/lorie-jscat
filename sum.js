var express = require('express');
var app = express();

//Simple calculator
function calculator(num1,num2) {
    switch (num1,num2) {
        case '+':
            var sum = num1+num2
            console.log(sum);
            break;
        case '-':
            var  sub= num1-num2
            console.log(sub);
            break;
        case '*':
            var multiply=num1*num2
            console.log(multiply);
            break;
        case '/':
            var divide=num1/num2
            console.log(divide);
            break;

        default :
        console.log('Invalid operation');
        break;
    }
}

//Roman i)

const numbers = [1,2,3,4,5,6,7,8,9,0];
function addition(numbers){
    let sum = 0;

    for(let i=0;i<numbers.length;i++){
        sum += numbers[i];
    }
    return sum;
}


app.get('/',function(res,req){
    res.sendFile('./sum.html');
});
app.use('/',addition);

var server = app.listen(2400,function(){
    console.log(`Server is listening on port ${2400}`);
});


//Roman ii)

const num = [1,2,3,4,5,6,7,8,9,0];
function multiply(num){
    let product = 1;

    for(let i=0;i<num.length;i++){
        product *= numbers[i];
    }
    return product;
}

app.get('/',multiply);
app.use('/',multiply);

var server1 = app.listen(2700,function(){
    console.log(`Server is running on port ${2700}`);
});


module.exports = {
    calculator,addition,multiply
}



