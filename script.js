// document.write("외부스크립트방법");

console.log("콘솔창");

var num =10+20;

console.log(num);

let sum=80+1234;

console.log(sum);

let string1 = "hello world";
let string2 = 'dwa"hello world"dad';
console.log(string1, string2);

let dan =3;
let gugu=8;
let string=`${dan}곱${gugu}는${dan * gugu} 이다.`;
console.log(string);

let stdScore={
    n1:1,
    n2:2,
    n3:3,
    n4:4
};

console.log(stdScore);
console.log(stdScore.n1);

for(let dan=2; dan <=9; dan++){
    for(let i=1; i <=9; i++){
        console.log(`${dan} x ${i} = ${dan * i}`);

    }
    console.log(' ');
}