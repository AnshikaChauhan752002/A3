//Question 1

let n = 5;
for ( let i=1 ; i<=n ; i++){
    let pattern= '';
    for (let j=1 ; j<=i ; j++){
        pattern += "*" + '';
    }
    console.log(pattern);
}

//Question 2

for (let i=1 ; i<=45 ; i++){
    if(i%3 === 0 && i%5 === 0){
        console.log("FizzBizz");
    }
    else if(i%3 === 0){
        console.log("Fizz");
    }
    else if(i%5 === 0){
        console.log("Bizz");
    }else{
        console.log(i);
    }
}

//Question 3

let numbersArray = [1,13,22,123,149];
let sum = 0;
for (let i=0 ; i<numbersArray.length ; i++){
    sum += numbersArray[i];
}

console.log(sum);

//Question 4

let arr_1 = [3,5,22,5,7,2,45,75,89,21];
let arr_2 = [9,2,42,55,71,22,4,5,90,25,26];
let sum1 = 0;
let sum2 = 0;
for (let i=0 ; i=arr_1.length ; i++){
    sum1 += arr_1[i];
}
for (let j=0 ; j=arr_2.length ; j++){
    sum2 += arr_2[j];
}
let totalSum = sum1 + sum2;

console.log(totalSum);

//Question 5

let arr = [43 , "what", 9 , "true" ,"cannnot" , "false" , "be" , 3 , "true"];
for (let i=arr.length ; i>=0 ; i--){
    console.log(arr[i]);
    } 